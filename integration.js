"use strict";

const request = require("request");
const config = require("./config/config");
const async = require("async");
const fs = require("fs");
const iso6392 = require("iso-639-2");
let Logger;
let requestDefault;

/**
 *
 * @param entities
 * @param options
 * @param cb
 */
function doLookup(entities, options, cb) {
  let lookupResults = [];
  let tasks = [];

  Logger.trace({ entities }, "entities");

  entities.forEach(entity => {
    if (entity.value) {
      const requestOptions = {
        method: "POST",
        uri: "https://translation.googleapis.com/language/translate/v2",
        qs: {
          key: options.apiKey
        },
        body: {
          q: entity.value,
          target: options.outputLanguage.value
        },
        json: true
      };

      Logger.debug({requestOptions}, "Request");

      tasks.push(function (done) {
        requestDefault(requestOptions, function (error, res, body) {
          Logger.debug({ error, res, body }, 'Request Results');

          if (error) {
            done({
              error: error,
              entity: entity.value,
              detail: "Error in Request"
            });
            return;
          }
          
          let result = {};
          if (res.statusCode === 200) {
            result = {
              entity,
              body
            };
          } else if (res.statusCode === 429) {
            // reached rate limit
            error = "Reached API Lookup Limit";
          } else {
            // Non 200 status code
            done({
              error,
              httpStatus: res.statusCode,
              body,
              detail: "Unexpected Non 200 HTTP Status Code",
              entity: entity.value
            });
            return;
          }

          done(error, result);
        });
      });
    }
  });

  async.parallelLimit(tasks, 10, (err, results) => {
    if (err) {
      cb(err);
      return;
    }

    results.forEach(result => {
      Logger.debug({ result }, "Result");

      const { body: { data: { translations } } } = result;

      if (result.body === null || _isMiss(result.body)) {
        lookupResults.push({
          entity: result.entity,
          data: null
        });
      } else if (translations) {
        translations.forEach(({ translatedText, detectedSourceLanguage }) => {
          Logger.debug({ detectedSourceLanguage }, "Translation Data");
          const sourceLanguage = getSourceLanguage(detectedSourceLanguage);

          const details = {
            ...result.body,
            data: {
              ...result.body.data,
              translations: [{
                translatedText,
                detectedSourceLanguage: sourceLanguage
              }]
            }
          };

          lookupResults.push({
            entity: result.entity,
            displayValue: `${result.entity.value.slice(0, 120)}${
              result.entity.value.length > 120 ? '...' : ''
            }`,
            data: {
              summary: [],
              details
            }
          });
        })
      }
    });

    Logger.trace({ lookupResults }, "Lookup Results");

    cb(null, lookupResults);
  });
}

function getSourceLanguage(isoCode) {
  const ios6391Translation = iso6392.find(({ iso6391 }) => iso6391 === isoCode);
  if (ios6391Translation) return ios6391Translation.name.split(";")[0];

  const ios6392Translation = iso6392.find(({ iso6392B }) => iso6392B === isoCode);
  if (ios6392Translation) return ios6392Translation.name.split(";")[0];

  if ("zh-CN" || "zh-TW") return "Chinese";
}

function _isMiss(body) {
  return body &&
    Array.isArray(body) &&
    body.length === 0;
}

function startup(logger) {
  Logger = logger;

  let defaults = {};

  if (typeof config.request.cert === 'string' && config.request.cert.length > 0) {
    defaults.cert = fs.readFileSync(config.request.cert);
  }

  if (typeof config.request.key === 'string' && config.request.key.length > 0) {
    defaults.key = fs.readFileSync(config.request.key);
  }

  if (typeof config.request.passphrase === 'string' && config.request.passphrase.length > 0) {
    defaults.passphrase = config.request.passphrase;
  }

  if (typeof config.request.ca === 'string' && config.request.ca.length > 0) {
    defaults.ca = fs.readFileSync(config.request.ca);
  }

  if (typeof config.request.proxy === 'string' && config.request.proxy.length > 0) {
    defaults.proxy = config.request.proxy;
  }

  requestDefault = request.defaults(defaults);
}

function validateOptions(userOptions, cb) {
  let errors = [];
  if (
    typeof userOptions.apiKey.value !== "string" ||
    (typeof userOptions.apiKey.value === "string" &&
      userOptions.apiKey.value.length === 0)
  ) {
    errors.push({
      key: "apiKey",
      message: "You must provide a valid Google Translate API key"
    });
  }
  cb(null, errors);
}

module.exports = {
  doLookup: doLookup,
  validateOptions: validateOptions,
  startup: startup
};

module.exports = {
  /**
   * Name of the integration which is displayed in the Polarity integrations user interface
   *
   * @type String
   * @required
   */
  name: 'Google Translate',
  /**
   * The acronym GT appears in the notification window when information from this integration
   * is displayed.  Note GT the acronym is included as part of each "tag" in the summary information
   * for the integration.  As a result, it is best to keep it to 4 or less cGTracters.  The casing used
   * here will be carried forward into the notification window.
   *
   * @type String
   * @required
   */
  acronym: 'GT',
  onDemandOnly: true,
  defaultColor: 'light-gray',
  /**
   * Description for this integration which is displayed in the Polarity integrations user interface
   *
   * @type String
   * @optional
   */
  description: 'Google Translate is a free service that instantly translates words, phrases, and web pages between English and over 100 other languages.',
  customTypes: [
    {
      key: 'translate',
      regex: /[\s\S]*/
    }
  ],

  /**
   * An array of style files (css or less) GT will be included for your integration. Any styles specified in
   * the below files can be used in your custom template.
   *
   * @type Array
   * @optional
   */
  styles: ['./styles/gt.less'],
  /**
   * Provide custom component logic and template for rendering the integration details block.  If you do not
   * provide a custom template and/or component then the integration will display data as a table of key value
   * pairs.
   *
   * @type Object
   * @optional
   */
  block: {
    component: {
      file: './components/gt-block.js'
    },
    template: {
      file: './templates/gt-block.hbs'
    }
  },
  summary: {
    component: {
      file: './components/gt-summary.js'
    },
    template: {
      file: './templates/gt-summary.hbs'
    }
  },
  request: {
    cert: '',
    key: '',
    passphrase: '',
    ca: '',
    proxy: '',
    rejectUnauthorized: true
  },
  logging: {
    level: 'info'
  },
  /**
   * Options GT are displayed to the user/admin in the Polarity integration user-interface.  Should be structured
   * as an array of option objects.
   *
   * @type Array
   * @optional
   */
  options: [
    {
      key: 'apiKey',
      name: 'API Key',
      description: 'Google Translate API Key',
      default: '',
      type: 'password',
      userCanEdit: true,
      adminOnly: false
    },
    {
      key: 'outputLanguage',
      name: 'Output Language',
      description:
        'Output (Target) language identified using ISO-639-1 codes.',
      default: {
        value: 'en',
        display: 'English (en)'
      },
      type: 'select',
      options: [
        {
          value: 'en',
          display: 'English (en)'
        },
        {
          value: 'af',
          display: 'Afrikaans (af)'
        },
        {
          value: 'am',
          display: 'Amharic (am)'
        },
        {
          value: 'ar',
          display: 'Arabic (ar)'
        },
        {
          value: 'az',
          display: 'Azerbaijani (az)'
        },
        {
          value: 'be',
          display: 'Belarusian (be)'
        },
        {
          value: 'bg',
          display: 'Bulgarian (bg)'
        },
        {
          value: 'bn',
          display: 'Bengali (bn)'
        },
        {
          value: 'bs',
          display: 'Bosnian (bs)'
        },
        {
          value: 'ca',
          display: 'Catalan (ca)'
        },
        {
          value: 'ceb',
          display: 'Cebuano (ceb)'
        },
        {
          value: 'co',
          display: 'Cebuano (ceb)'
        },
        {
          value: 'cs',
          display: 'Czech (cs)'
        },
        {
          value: 'cy',
          display: 'Cymraeg (cy)'
        },
        {
          value: 'da',
          display: 'Danish (da)'
        },
        {
          value: 'de',
          display: 'German (de)'
        },
        {
          value: 'el',
          display: 'Greek (el)'
        },
        {
          value: 'eo',
          display: 'Esperanto (eo)'
        },
        {
          value: 'es',
          display: 'Spanish (es)'
        },
        {
          value: 'et',
          display: 'Estonian (et)'
        },
        {
          value: 'eu',
          display: 'Basque (eu)'
        },
        {
          value: 'fa',
          display: 'Persian (fa)'
        },
        {
          value: 'fi',
          display: 'Finnish (fi)'
        },
        {
          value: 'fr',
          display: 'French (fr)'
        },
        {
          value: 'fy',
          display: 'Western Frisian (fy)'
        },
        {
          value: 'ga',
          display: 'Irish (ga)'
        },
        {
          value: 'gd',
          display: 'Gaelic (gd)'
        },
        {
          value: 'gl',
          display: 'Galician (gl)'
        },
        {
          value: 'gu',
          display: 'Gujarati (gu)'
        },
        {
          value: 'ha',
          display: 'Hausa (ha)'
        },
        {
          value: 'haw',
          display: 'Hawaiian (haw)'
        },
        {
          value: 'he',
          display: 'Hebrew (he)'
        },
        {
          value: 'hi',
          display: 'Hindi (hi)'
        },
        {
          value: 'hmn',
          display: 'Hmong (hmn)'
        },
        {
          value: 'hr',
          display: 'Croatian (hr)'
        },
        {
          value: 'ht',
          display: 'Haitian (ht)'
        },
        {
          value: 'hu',
          display: 'Hungarian (hu)'
        },
        {
          value: 'hy',
          display: 'Armenian (hy)'
        },
        {
          value: 'id',
          display: 'Indonesian (id)'
        },
        {
          value: 'ig',
          display: 'Igbo (ig)'
        },
        {
          value: 'is',
          display: 'Icelandic (is)'
        },
        {
          value: 'it',
          display: 'Italian (it)'
        },
        {
          value: 'ja',
          display: 'Japanese (ja)'
        },
        {
          value: 'ka',
          display: 'Georgian (ka)'
        },
        {
          value: 'kk',
          display: 'Kazakh (kk)'
        },
        {
          value: 'km',
          display: 'Central Khmer (km)'
        },
        {
          value: 'kn',
          display: 'Kannada (kn)'
        },
        {
          value: 'ko',
          display: 'Korean (ko)'
        },
        {
          value: 'ku',
          display: 'Kurdish (ku)'
        },
        {
          value: 'ky',
          display: 'Kirghiz (ky)'
        },
        {
          value: 'la',
          display: 'Latin (la)'
        },
        {
          value: 'lb',
          display: 'Luxembourgish (lb)'
        },
        {
          value: 'lo',
          display: 'Lao (lo)'
        },
        {
          value: 'lt',
          display: 'Lithuanian (lt)'
        },
        {
          value: 'lv',
          display: 'Latvian (lv)'
        },
        {
          value: 'mg',
          display: 'Malagasy (mg)'
        },
        {
          value: 'mi',
          display: 'Maori (mi)'
        },
        {
          value: 'mk',
          display: 'Macedonian (mk)'
        },
        {
          value: 'ml',
          display: 'Malayalam (ml)'
        },
        {
          value: 'mn',
          display: 'Mongolian (mn)'
        },
        {
          value: 'mr',
          display: 'Marathi (mr)'
        },
        {
          value: 'ms',
          display: 'Malay (ms)'
        },
        {
          value: 'mt',
          display: 'Maltese (mt)'
        },
        {
          value: 'my',
          display: 'Burmese (my)'
        },
        {
          value: 'ne',
          display: 'Nepali (ne)'
        },
        {
          value: 'nl',
          display: 'Dutch (nl)'
        },
        {
          value: 'no',
          display: 'Norwegian (no)'
        },
        {
          value: 'ny',
          display: 'Chichewa (ny)'
        },
        {
          value: 'or',
          display: 'Oriya (or)'
        },
        {
          value: 'pa',
          display: 'Panjabi (pa)'
        },
        {
          value: 'pl',
          display: 'Polish (pl)'
        },
        {
          value: 'ps',
          display: 'Pushto (ps)'
        },
        {
          value: 'pt',
          display: 'Portuguese (pt)'
        },
        {
          value: 'ro',
          display: 'Romanian (ro)'
        },
        {
          value: 'ru',
          display: 'Russian (ru)'
        },
        {
          value: 'rw',
          display: 'Kinyarwanda (rw)'
        },
        {
          value: 'sd',
          display: 'Sindhi (sd)'
        },
        {
          value: 'si',
          display: 'Sinhala (si)'
        },
        {
          value: 'sk',
          display: 'Slovak (sk)'
        },
        {
          value: 'sl',
          display: 'Slovenian (sl)'
        },
        {
          value: 'sm',
          display: 'Samoan (sm)'
        },
        {
          value: 'sn',
          display: 'Shona (sn)'
        },
        {
          value: 'so',
          display: 'Somali (so)'
        },
        {
          value: 'sq',
          display: 'Albanian (sq)'
        },
        {
          value: 'sr',
          display: 'Serbian (sr)'
        },
        {
          value: 'st',
          display: 'Sotho (st)'
        },
        {
          value: 'su',
          display: 'Sundanese (su)'
        },
        {
          value: 'sv',
          display: 'Swedish (sv)'
        },
        {
          value: 'sw',
          display: 'Swahili (sw)'
        },
        {
          value: 'ta',
          display: 'Tamil (ta)'
        },
        {
          value: 'te',
          display: 'Telugu (te)'
        },
        {
          value: 'tg',
          display: 'Tajik (tg)'
        },
        {
          value: 'th',
          display: 'Thai (th)'
        },
        {
          value: 'tk',
          display: 'Turkmen (tk)'
        },
        {
          value: 'tl',
          display: 'Tagalog (tl)'
        },
        {
          value: 'tr',
          display: 'Turkish (tr)'
        },
        {
          value: 'tt',
          display: 'Tatar (tt)'
        },
        {
          value: 'ug',
          display: 'Uighur (ug)'
        },
        {
          value: 'uk',
          display: 'Ukrainian (uk)'
        },
        {
          value: 'ur',
          display: 'Urdu (ur)'
        },
        {
          value: 'uz',
          display: 'Uzbek (uz)'
        },
        {
          value: 'vi',
          display: 'Vietnamese (vi)'
        },
        {
          value: 'xh',
          display: 'Xhosa (xh)'
        },
        {
          value: 'yi',
          display: 'Yiddish (yi)'
        },
        {
          value: 'yo',
          display: 'Yoruba (yo)'
        },
        {
          value: 'zh',
          display: 'Chinese (zh)'
        },
        {
          value: 'zh-CN',
          display: 'Chinese-PRC (zh-cn)'
        },
        {
          value: 'zh-TW',
          display: 'Chinese-Taiwan (zh-tw)'
        },
        {
          value: 'zu',
          display: 'Zulu (zu)'
        }

      ],
      multiple: false,
      userCanEdit: true,
      adminOnly: false
    }
  ]
};

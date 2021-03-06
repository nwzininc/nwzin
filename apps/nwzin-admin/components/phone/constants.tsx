export enum Code {
  Afghanistan = 'AF',
  Argentina = 'AR',
  Australia = 'AU',
  Austria = 'AT',
  Bahrain = 'BH',
  Bangladesh = 'BD',
  Belarus = 'BY',
  Belgium = 'BE',
  Bhutan = 'BT',
  Brazil = 'BR',
  Bulgaria = 'BG',
  Canada = 'CA',
  Chile = 'CL',
  China = 'CN',
  Colombia = 'CO',
  CostaRica = 'CR',
  Croatia = 'HR',
  CzechRepublic = 'CZ',
  Denmark = 'DK',
  DominicanRepublic = 'DO',
  Egypt = 'EG',
  Fiji = 'FJ',
  Finland = 'FI',
  France = 'FR',
  Gabon = 'GA',
  Georgia = 'GE',
  Germany = 'DE',
  Greece = 'GR',
  HongKong = 'HK',
  Hungary = 'HU',
  India = 'IN',
  Indonesia = 'ID',
  Iran = 'IR',
  Iraq = 'IQ',
  Ireland = 'IE',
  Israel = 'IL',
  Italy = 'IT',
  Japan = 'JP',
  Kenya = 'KE',
  Korea = 'KR',
  KoreaDemocraticPeoplesRepublic = 'KP',
  Kuwait = 'KW',
  Latvia = 'LV',
  Lebanon = 'LB',
  Lithuania = 'LT',
  Luxembourg = 'LU',
  Malaysia = 'MY',
  Mexico = 'MX',
  Moldova = 'MD',
  Myanmar = 'MM',
  Nepal = 'NP',
  Netherlands = 'NL',
  NewZealand = 'NZ',
  Nigeria = 'NG',
  Norway = 'NO',
  Oman = 'OM',
  Pakistan = 'PK',
  Paraguay = 'PY',
  Peru = 'PE',
  Philippines = 'PH',
  Poland = 'PL',
  Portugal = 'PT',
  Qatar = 'QA',
  Romania = 'RO',
  RussianFederation = 'RU',

  SaudiArabia = 'SA',
  Singapore = 'SG',
  SouthAfrica = 'ZA',
  Spain = 'ES',
  SriLanka = 'LK',
  Suriname = 'SR',
  Sweden = 'SE',
  Switzerland = 'CH',
  Taiwan = 'TW',
  Thailand = 'TH',
  Turkey = 'TR',
  Uganda = 'UG',
  Ukraine = 'UA',
  UnitedArabEmirates = 'AE',
  UnitedKingdom = 'GB',
  UnitedStates = 'US',
  Uruguay = 'UY',
  Venezuela = 'VE',
  Vietnam = 'VN',
  Zimbabwe = 'ZW',
}

export type  CurrencyFormat = 'thousand' | 'lakh' | 'wan';
export type PhoneFormat = string;

export interface Country {
  ISD: string;
  name: string;
  unicodeCurrency?: string;
  phone?: PhoneFormat;
  currencyFormat?: CurrencyFormat;
  locale?: string;
}

export const CountryRecordByID: Record<Code, Country> = {
  [Code.Germany]: {
    name: 'germany',
    unicodeCurrency: '\u20ac',
    currencyFormat: 'thousand',
    ISD: '+49',
    locale: 'de_DE',
    phone: '99 999999',
  },
  [Code.UnitedKingdom]: {
    name: 'United Kingdom',
    unicodeCurrency: '\u00a3',
    currencyFormat: 'thousand',
    ISD: '+44',
    locale: 'en_GB',
    phone: '9999 999999'
  },
  [Code.France]: {
    name: 'France',
    unicodeCurrency: '\u20ac',
    currencyFormat: 'thousand',
    ISD: '+33',
    locale: 'fr_FR',
    phone: '999 999 999'
  },
  [Code.Italy]: {
    name: 'Italy',
    unicodeCurrency: '\u20ac',
    currencyFormat: 'thousand',
    ISD: '+39',
    locale: 'it_IT',
    phone: '999 999 9999',
  },
  [Code.Spain]: {
    name: 'Spain',
    unicodeCurrency: '\u20ac',
    currencyFormat: 'thousand',
    ISD: '+34',
    locale: 'es_ES',
    phone:  '999 999 999',
  },
  [Code.Ukraine]: {
    name: 'Ukraine',
    ISD: '+34',
    locale: 'uk_UA',
    phone: '999 999 999',
  },
  [Code.Poland]: {
    name: 'Poland',
    unicodeCurrency: 'z\u0142',
    ISD: '+48',
    locale: 'pl_PL',
    phone: '999 9999999',
  },
  [Code.Romania]: {
    name: 'Romania',
    unicodeCurrency: 'L',
    ISD: '+48',
    locale: 'ro_RO',
    phone: '999 9999 999',
  },
  [Code.Netherlands]: {
    name: 'Nederlands',
    unicodeCurrency: '\u20ac',
    currencyFormat: 'thousand',
    ISD: '+31',
    locale: 'nl_NL',
    phone:  '9 9999 9999',
  },
  [Code.Belgium]: {
    name: 'Belgium',
    unicodeCurrency: '\u20ac',
    currencyFormat: 'thousand',
    ISD: '+31',
    locale: 'nl_BE',
    phone: '9999 9999',
  },
  [Code.CzechRepublic]: {
    name: 'Czech Republic',
    unicodeCurrency: 'K\u010d',
    currencyFormat: 'thousand',
    ISD: '+31',
    locale: 'cs_CZ',
    phone:  '999 9999 99',
  },
  [Code.Greece]: {
    name: 'Greece',
    unicodeCurrency: '\u20ac',
    currencyFormat: 'thousand',
    ISD: '+31',
    locale: 'el_GR',
    phone: '99 9999 999',
  },
  [Code.Portugal]: {
    name: 'Portugal',
    unicodeCurrency: '\u20ac',
    currencyFormat: 'thousand',
    ISD: '+351',
    locale: 'pt_PT',
    phone:'999 999 999',
  },
  [Code.Sweden]: {
    name: 'Sweden',
    unicodeCurrency: 'kr',
    ISD: '+46',
    locale: 'sv_SE',
    phone: '999 9999 999',
  },
  [Code.Hungary]: {
    name: 'Hungary',
    unicodeCurrency: 'Ft',
    ISD: '+46',
    locale: 'hu_HU',
    phone:   '99 999 9999',
  },
  [Code.Belarus]: {
    name: 'Belarus',
    unicodeCurrency: 'Br',
    ISD: '+375',
    locale: 'be_BY',
    phone: '999 9999 999',
  },
  [Code.Austria]: {
    name: 'Austria',
    unicodeCurrency: '\u20ac',
    currencyFormat: 'thousand',
    ISD: '+43',
    locale: 'de_AT',
    phone: '999 999 9999',
  },
  [Code.Switzerland]: {
    name: 'Switzerland',
    unicodeCurrency: 'Fr.',
    ISD: '+41',
    locale: 'fr_CH',
    phone: '999 9999 99',
  },
  [Code.Bulgaria]: {
    name: 'Bulgaria',
    unicodeCurrency: 'BGN',
    ISD: '+359',
    locale: 'bg_BG',
  },
  [Code.Denmark]: {
    name: 'Denmark',
    unicodeCurrency: 'Kr',
    ISD: '+45',
    locale: 'da_DK',
  },
  [Code.Finland]: {
    name: 'Finland',
    unicodeCurrency: '\u20ac',
    currencyFormat: 'thousand',
    ISD: '+45',
    locale: 'fi_FI',
  },
  [Code.Norway]: {
    name: 'Norway',
    unicodeCurrency: 'kr',
    ISD: '+47',
    locale: 'nb_NO',
  },
  [Code.Ireland]: {
    name: 'Ireland',
    unicodeCurrency: '\u20ac',
    currencyFormat: 'thousand',
    ISD: '+353',
    locale: 'en_IE',
  },
  [Code.Croatia]: {
    name: 'Croatia',
    unicodeCurrency: 'kn',
    currencyFormat: 'thousand',
    ISD: '+385',
    locale: 'hr_HR',
  },
  [Code.Moldova]: {
    name: 'Moldova',
    unicodeCurrency: 'MDL',
    ISD: '+373',
    locale: 'ro_MD',
  },
  [Code.Lithuania]: {
    name: 'Lithuania',
    unicodeCurrency: '\u20ac',
    currencyFormat: 'thousand',
    ISD: '+370',
    locale: 'lt_LT',
  },
  [Code.Brazil]: {
    name: 'Brazil',
    unicodeCurrency: 'R$',
    ISD: '+55',
    locale: 'pt_BR',
  },
  [Code.Colombia]: {
    name: 'Colombia',
    unicodeCurrency: 'Col$',
    ISD: '+57',
    locale: 'es_CO',
  },
  [Code.Argentina]: {
    name: 'Argentina',
    unicodeCurrency: '$',
    ISD: '+54',
    locale: 'es_AR',
  },
  [Code.Peru]: {
    name: 'Peru',
    unicodeCurrency: 'S/.',
    currencyFormat: 'thousand',
    ISD: '+51',
    locale: 'es_PE',
  },
  [Code.Venezuela]: {
    name: 'Venezuela',
    ISD: '+58',
    locale: 'es_VE',
  },
  [Code.Chile]: {
    name: 'Chile',
    unicodeCurrency: '$',
    ISD: '+56',
    locale: 'es_CL',
  },

  [Code.Paraguay]: {
    name: 'Paraguay',
    unicodeCurrency: '\u20b2',
    ISD: '+595',
    locale: 'es_PY',
  },
  [Code.Uruguay]: {
    name: 'Uruguay',
    unicodeCurrency: '$U',
    ISD: '+598',
    locale: 'es_UY',
  },

  [Code.Suriname]: {
    name: 'Suriname',
    unicodeCurrency: '$',
    ISD: '+597',
    locale: 'nl',
  },

  [Code.UnitedStates]: {
    name: 'United States',
    unicodeCurrency: '$',
    currencyFormat: 'thousand',
    ISD: '+1',
    locale: 'en_US',
    phone: '(999) 999-9999',
  },
  [Code.Mexico]: {
    name: 'Mexico',
    unicodeCurrency: '$',
    currencyFormat: 'thousand',
    ISD: '+52',
    locale: 'es_MX',
  },
  [Code.Canada]: {
    name: 'Canada',
    unicodeCurrency: '$',
    currencyFormat: 'thousand',
    ISD: '+1',
    locale: 'en_CA',
  },
  [Code.DominicanRepublic]: {
    name: 'Dominican Republic',
    unicodeCurrency: 'RD$',
    currencyFormat: 'thousand',
    ISD: '+1809',
    locale: 'es_DO',
  },
  [Code.CostaRica]: {
    name: 'Costa Rica',
    unicodeCurrency: '\u20a1',
    ISD: '+506',
    locale: 'es_CR',
  },
  [Code.Australia]: {
    name: 'Australia',
    unicodeCurrency: '$',
    ISD: '+61',
    locale: 'en_AU',
  },
  [Code.NewZealand]: {
    name: 'New Zealand',
    unicodeCurrency: 'NZ$',
    currencyFormat: 'thousand',
    ISD: '+675',
    locale: 'en_NZ',
  },
  [Code.Fiji]: {
    name: 'Fiji',
    unicodeCurrency: 'NZ$',
    currencyFormat: 'thousand',
    ISD: '+679',
    locale: 'en',
  },
  [Code.Nigeria]: {
    name: 'Nigeria',
    unicodeCurrency: '\u20a6',
    currencyFormat: 'thousand',
    ISD: '+234',
    locale: 'ha_Latn_NG',
  },
  [Code.Egypt]: {
    name: 'Egypt',
    unicodeCurrency: '\u00a3',
    currencyFormat: 'thousand',
    ISD: '+20',
    locale: 'ar_EG',
  },
  [Code.SouthAfrica]: {
    name: 'South Africa',
    unicodeCurrency: 'TZS',
    ISD: '+27',
    locale: 'af_ZA',
  },
  [Code.Kenya]: {
    name: 'Kenya',
    unicodeCurrency: 'KSh',
    currencyFormat: 'thousand',
    ISD: '+254',
    locale: 'ebu_KE',
  },
  [Code.Uganda]: {
    name: 'Uganda',
    unicodeCurrency: 'USh',
    currencyFormat: 'thousand',
    ISD: '+256',
    locale: 'cgg_UG',
  },

  [Code.Zimbabwe]: {
    name: 'Zimbabwe',
    unicodeCurrency: '$',
    ISD: '+263',
    locale: 'en_ZW',
  },
  [Code.China]: {
    name: 'China',
    unicodeCurrency: '\u00a5',
    currencyFormat: 'thousand',
    ISD: '+86',
    locale: 'zh_CN',
  },
  [Code.India]: {
    name: 'India',
    unicodeCurrency: '\u20B9',
    currencyFormat: 'lakh',
    ISD: '+91',
    locale: 'hi_IN',
    phone:  '9999 999 999',
  },
  [Code.Indonesia]: {
    name: 'Indonesia',
    unicodeCurrency: 'Rp',
    ISD: '+62',
    locale: 'id_ID',
  },
  [Code.Pakistan]: {
    name: 'Pakistan',
    unicodeCurrency: 'Rs.',
    currencyFormat: 'thousand',
    ISD: '+92',
    locale: 'en_PK',
  },
  [Code.Bangladesh]: {
    name: 'Bangladesh',
    unicodeCurrency: '\u09f3',
    currencyFormat: 'thousand',
    ISD: '+880',
    locale: 'bn_BD',
  },
  [Code.Japan]: {
    name: 'Japan',
    unicodeCurrency: '\u00a5',
    ISD: '+81',
    locale: 'ja_JP',
  },
  [Code.Philippines]: {
    name: 'Philippines',
    unicodeCurrency: '\u20b1',
    currencyFormat: 'thousand',
    ISD: '+63',
    locale: 'en_PH',
  },
  [Code.Vietnam]: {
    name: 'Vietnam',
    unicodeCurrency: '\u20ab',
    ISD: '+84',
    locale: 'vi_VN',
  },
  [Code.Turkey]: {
    name: 'Turkey',
    unicodeCurrency: 'TRY',
    currencyFormat: 'thousand',
    ISD: '+90',
    locale: 'tr_TR',
  },
  [Code.Iran]: {
    name: 'Iran',
    unicodeCurrency: 'IRR',
    currencyFormat: 'thousand',
    ISD: '+98',
    locale: 'fa_IR',
  },
  [Code.Thailand]: {
    name: 'Thailand',
    unicodeCurrency: '\u0e3f',
    currencyFormat: 'thousand',
    ISD: '+98',
    locale: 'th_TH',
  },
  [Code.Myanmar]: {
    name: 'Myanmar',
    unicodeCurrency: 'K',
    currencyFormat: 'thousand',
    ISD: '+98',
    locale: 'my_MM',
  },
  [Code.Korea]: {
    name: 'South Korea',
    unicodeCurrency: 'W',
    ISD: '+82',
    locale: 'ko_KR',
  },
  [Code.Iraq]: {
    name: 'Iraq',
    unicodeCurrency: '\u062f.\u0639',
    ISD: '+964',
    locale: 'ar_IQ',
  },
  [Code.Afghanistan]: {
    name: 'Afghanistan',
    unicodeCurrency: 'Afs',
    ISD: '+93',
    locale: 'ps_AF',
  },
  [Code.SaudiArabia]: {
    name: '	Saudi Arabia',
    unicodeCurrency: 'SR',
    currencyFormat: 'thousand',
    ISD: '+966',
    locale: 'ar_SA',
  },

  [Code.Malaysia]: {
    name: 'Malaysia',
    unicodeCurrency: 'RM',
    currencyFormat: 'thousand',
    ISD: '+60',
    locale: 'ms_MY',
  },

  [Code.Nepal]: {
    name: 'Nepal',
    unicodeCurrency: 'NRs',
    currencyFormat: 'thousand',
    ISD: '+977',
    locale: 'ne_NP',
  },
  [Code.KoreaDemocraticPeoplesRepublic]: {
    name: 'North Korea',
    unicodeCurrency: 'W',
    ISD: '+850',
    locale: 'ko',
  },
  [Code.Taiwan]: {
    name: 'Taiwan',
    unicodeCurrency: 'NT$',
    ISD: '+886',
    locale: 'zh_Hant_TW',
  },
  [Code.SriLanka]: {
    name: 'Sri Lanka',
    unicodeCurrency: 'Rs',
    currencyFormat: 'thousand',
    ISD: '+94',
    locale: 'si_LK',
  },
  [Code.UnitedArabEmirates]: {
    name: 'United Arab Emirates',
    unicodeCurrency: '\u062f.\u0625',
    currencyFormat: 'thousand',
    ISD: '+971',
    locale: 'ar_AE',
  },
  [Code.Israel]: {
    name: 'Israel',
    unicodeCurrency: '\u20aa',
    currencyFormat: 'thousand',
    ISD: '+972',
    locale: 'he_IL',
  },
  [Code.HongKong]: {
    name: 'Hong Kong',
    unicodeCurrency: 'HK$',
    currencyFormat: 'thousand',
    ISD: '+852',
    locale: 'en_HK',
  },
  [Code.Lebanon]: {
    name: 'Lebanon',
    unicodeCurrency: '\u00a3',
    ISD: '+961',
    locale: 'ar_LB',
  },
  [Code.Singapore]: {
    name: 'Singapore',
    unicodeCurrency: 'S$',
    currencyFormat: 'thousand',
    ISD: '+65',
    locale: 'en_SG',
  },
  [Code.Oman]: {
    name: 'Oman',
    unicodeCurrency: 'OMR',
    ISD: '+968',
    locale: 'ar_OM',
  },
  [Code.Kuwait]: {
    name: 'Kuwait',
    unicodeCurrency: 'KWD',
    ISD: '+970',
    locale: 'ar_KW',
  },
  [Code.Georgia]: {
    name: 'Georgia',
    unicodeCurrency: 'GEL',
    ISD: '+995',
    locale: 'ka_GE',
  },
  [Code.Qatar]: {
    name: 'Qatar',
    unicodeCurrency: 'QR',
    ISD: '+974',
    locale: 'ar_QA',
  },
  [Code.Bahrain]: {
    name: 'Bahrain',
    unicodeCurrency: '.\u062f.\u0628',
    ISD: '+973',
    locale: 'ar_BH',
  },
  [Code.Bhutan]: {
    name: 'Bhutan',
    unicodeCurrency: 'Nu.',
    currencyFormat: 'thousand',
    ISD: '+975',
    locale: 'dz',
  },

  [Code.Latvia]: {
    name: 'Latvia',
    unicodeCurrency: '\u20ac',
    currencyFormat: 'thousand',
    ISD: '+371',
    locale: 'lv_LV',
  },

  [Code.Luxembourg]: {
    name: 'Luxembourg',
    unicodeCurrency: '\u20ac',
    currencyFormat: 'thousand',
    ISD: '+352',
    locale: 'fr_LU',
  },
  [Code.RussianFederation]: {
    name: 'Russia',
    unicodeCurrency: 'R',
    ISD: '+7',
    locale: 'ru_RU',
  },
  [Code.Gabon]: {
    name: 'Gabon',
    unicodeCurrency: 'CFA',
    ISD: '+267',
    locale: 'fr_GA',
  },
};

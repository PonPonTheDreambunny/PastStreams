function getDeviceLanguage() {
	try {
		const localeObj = new Intl.Locale(window.navigator.language).maximize();
		return localeObj.language;
	} catch (e) {
		return "en";
	}
}
function getDeviceRegion() {
	try {
		const localeObj = new Intl.Locale(window.navigator.language).maximize();
		return localeObj.region;
	} catch (e) {
		return "001";
	}
}
function getDeviceTimezone() {
	return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function getRegionDateFormat(language, region) {
	const regionLookup = {
		'001':'ymd-', 'AQ': 'ymd-', 'BT': 'ymd-', 'CA': 'ymd-', 'LT': 'ymd-', 'SE': 'ymd-',
		'AF': 'ymd/', 'CN': 'ymd/', 'IR': 'ymd/', 'JP': 'ymd/', 'NP': 'ymd/', 'TW': 'ymd/', 'ZA': 'ymd/',
		'HU': 'ymd.', 'KP': 'ymd.', 'KR': 'ymd.', 'MN': 'ymd.',
		
		'AC': 'dmy/', 'AD': 'dmy/', 'AE': 'dmy/', 'AG': 'dmy/', 'AI': 'dmy/', 'AO': 'dmy/', 'AR': 'dmy/', 'AU': 'dmy/', 'BB': 'dmy/', 'BD': 'dmy/',
		'BE': 'dmy/', 'BF': 'dmy/', 'BH': 'dmy/', 'BI': 'dmy/', 'BJ': 'dmy/', 'BL': 'dmy/', 'BM': 'dmy/', 'BN': 'dmy/', 'BO': 'dmy/', 'BR': 'dmy/',
		'BS': 'dmy/', 'BW': 'dmy/', 'BZ': 'dmy/', 'CC': 'dmy/', 'CD': 'dmy/', 'CF': 'dmy/', 'CG': 'dmy/', 'CI': 'dmy/', 'CK': 'dmy/', 'CM': 'dmy/',
		'CO': 'dmy/', 'CP': 'dmy/', 'CQ': 'dmy/', 'CR': 'dmy/', 'CU': 'dmy/', 'CV': 'dmy/', 'CX': 'dmy/', 'CY': 'dmy/', 'DG': 'dmy/', 'DJ': 'dmy/',
		'DM': 'dmy/', 'DO': 'dmy/', 'DZ': 'dmy/', 'EA': 'dmy/', 'EC': 'dmy/', 'EG': 'dmy/', 'EH': 'dmy/', 'ES': 'dmy/', 'ET': 'dmy/', 'FJ': 'dmy/',
		'FK': 'dmy/', 'FM': 'dmy/', 'FR': 'dmy/', 'GA': 'dmy/', 'GB': 'dmy/', 'GD': 'dmy/', 'GF': 'dmy/', 'GG': 'dmy/', 'GH': 'dmy/', 'GI': 'dmy/',
		'GM': 'dmy/', 'GN': 'dmy/', 'GP': 'dmy/', 'GQ': 'dmy/', 'GR': 'dmy/', 'GS': 'dmy/', 'GT': 'dmy/', 'GW': 'dmy/', 'GY': 'dmy/', 'HK': 'dmy/',
		'HM': 'dmy/', 'HN': 'dmy/', 'HT': 'dmy/', 'IC': 'dmy/', 'ID': 'dmy/', 'IE': 'dmy/', 'IM': 'dmy/', 'IN': 'dmy/', 'IO': 'dmy/', 'IQ': 'dmy/',
		'IT': 'dmy/', 'JE': 'dmy/', 'JM': 'dmy/', 'JO': 'dmy/', 'KE': 'dmy/', 'KG': 'dmy/', 'KH': 'dmy/', 'KI': 'dmy/', 'KM': 'dmy/', 'KN': 'dmy/',
		'KW': 'dmy/', 'KY': 'dmy/', 'LA': 'dmy/', 'LB': 'dmy/', 'LC': 'dmy/', 'LK': 'dmy/', 'LR': 'dmy/', 'LS': 'dmy/', 'LU': 'dmy/', 'LY': 'dmy/',
		'MA': 'dmy/', 'MC': 'dmy/', 'MF': 'dmy/', 'MG': 'dmy/', 'ML': 'dmy/', 'MM': 'dmy/', 'MO': 'dmy/', 'MQ': 'dmy/', 'MR': 'dmy/', 'MS': 'dmy/',
		'MT': 'dmy/', 'MU': 'dmy/', 'MW': 'dmy/', 'MX': 'dmy/', 'MY': 'dmy/', 'MZ': 'dmy/', 'NA': 'dmy/', 'NC': 'dmy/', 'NE': 'dmy/', 'NF': 'dmy/',
		'NG': 'dmy/', 'NI': 'dmy/', 'NR': 'dmy/', 'NU': 'dmy/', 'NZ': 'dmy/', 'OM': 'dmy/', 'PE': 'dmy/', 'PF': 'dmy/', 'PG': 'dmy/', 'PK': 'dmy/',
		'PM': 'dmy/', 'PN': 'dmy/', 'PS': 'dmy/', 'PT': 'dmy/', 'PW': 'dmy/', 'PY': 'dmy/', 'QA': 'dmy/', 'RE': 'dmy/', 'RW': 'dmy/', 'SA': 'dmy/',
		'SB': 'dmy/', 'SC': 'dmy/', 'SD': 'dmy/', 'SG': 'dmy/', 'SH': 'dmy/', 'SL': 'dmy/', 'SM': 'dmy/', 'SO': 'dmy/', 'SS': 'dmy/', 'ST': 'dmy/',
		'SV': 'dmy/', 'SX': 'dmy/', 'SY': 'dmy/', 'SZ': 'dmy/', 'TC': 'dmy/', 'TD': 'dmy/', 'TF': 'dmy/', 'TG': 'dmy/', 'TH': 'dmy/', 'TJ': 'dmy/',
		'TK': 'dmy/', 'TL': 'dmy/', 'TN': 'dmy/', 'TO': 'dmy/', 'TT': 'dmy/', 'TV': 'dmy/', 'TZ': 'dmy/', 'UG': 'dmy/', 'UY': 'dmy/', 'UZ': 'dmy/',
		'VA': 'dmy/', 'VC': 'dmy/', 'VE': 'dmy/', 'VG': 'dmy/', 'VN': 'dmy/', 'VU': 'dmy/', 'WF': 'dmy/', 'WS': 'dmy/', 'YE': 'dmy/', 'YT': 'dmy/',
		'ZM': 'dmy/', 'ZW': 'dmy/',
		'AL': 'dmy.', 'AM': 'dmy.', 'AT': 'dmy.', 'AX': 'dmy.', 'AZ': 'dmy.', 'BA': 'dmy.', 'BG': 'dmy.', 'BV': 'dmy.', 'BY': 'dmy.', 'CH': 'dmy.',
		'CZ': 'dmy.', 'DE': 'dmy.', 'DK': 'dmy.', 'EE': 'dmy.', 'FI': 'dmy.', 'FO': 'dmy.', 'GE': 'dmy.', 'GL': 'dmy.', 'HR': 'dmy.', 'IL': 'dmy.',
		'IS': 'dmy.', 'KZ': 'dmy.', 'LI': 'dmy.', 'LV': 'dmy.', 'MD': 'dmy.', 'ME': 'dmy.', 'MK': 'dmy.', 'NO': 'dmy.', 'PL': 'dmy.', 'RO': 'dmy.',
		'RS': 'dmy.', 'RU': 'dmy.', 'SI': 'dmy.', 'SJ': 'dmy.', 'SK': 'dmy.', 'TM': 'dmy.', 'TR': 'dmy.', 'UA': 'dmy.', 'XK': 'dmy.',
		'AW': 'dmy-', 'BQ': 'dmy-', 'CL': 'dmy-', 'CW': 'dmy-', 'MV': 'dmy-', 'NL': 'dmy-', 'SN': 'dmy-', 'SR': 'dmy-',

		'AS': 'mdy/', 'ER': 'mdy/', 'GU': 'mdy/', 'MH': 'mdy/', 'MP': 'mdy/', 'PA': 'mdy/', 'PH': 'mdy/', 'PR': 'mdy/', 'TA': 'mdy/', 'UM': 'mdy/', 'US': 'mdy/', 'VI': 'mdy/',
	};
	// Philippines, special case
	if (region === "PH" && language === "es") {
		return 'dmy/';
	}// United States, special case
	else if (region === "US" && language === "es") {
		return 'dmy/';
	} else if (regionLookup[region] !== undefined) {
		return regionLookup[region];
	} else {
		return 'ymd-';
	}
}
function getRegionTimeFormat(language, region) {
	const regionLookup = {
		'001':'24h', 'AD': '24h', 'AF': '24h', 'AI': '24h', 'AM': '24h', 'AO': '24h', 'AQ': '24h', 'AT': '24h', 'AW': '24h', 'AX': '24h',
		'AZ': '24h', 'BA': '24h', 'BE': '24h', 'BF': '24h', 'BG': '24h', 'BI': '24h', 'BJ': '24h', 'BL': '24h', 'BQ': '24h', 'BR': '24h',
		'BV': '24h', 'BW': '24h', 'BY': '24h', 'BZ': '24h', 'CC': '24h', 'CD': '24h', 'CF': '24h', 'CG': '24h', 'CH': '24h', 'CI': '24h',
		'CK': '24h', 'CM': '24h', 'CP': '24h', 'CV': '24h', 'CW': '24h', 'CX': '24h', 'CZ': '24h', 'DE': '24h', 'DG': '24h', 'DK': '24h',
		'EA': '24h', 'EE': '24h', 'ES': '24h', 'FI': '24h', 'FK': '24h', 'FO': '24h', 'FR': '24h', 'GA': '24h', 'GB': '24h', 'GE': '24h',
		'GF': '24h', 'GG': '24h', 'GI': '24h', 'GL': '24h', 'GN': '24h', 'GP': '24h', 'GQ': '24h', 'GS': '24h', 'GT': '24h', 'GW': '24h',
		'HM': '24h', 'HR': '24h', 'HT': '24h', 'HU': '24h', 'IC': '24h', 'ID': '24h', 'IE': '24h', 'IL': '24h', 'IM': '24h', 'IO': '24h',
		'IR': '24h', 'IS': '24h', 'IT': '24h', 'JE': '24h', 'KE': '24h', 'KG': '24h', 'KM': '24h', 'KZ': '24h', 'LA': '24h',
		'LI': '24h', 'LK': '24h', 'LT': '24h', 'LU': '24h', 'LV': '24h', 'MA': '24h', 'MC': '24h', 'MD': '24h', 'ME': '24h', 'MF': '24h',
		'MG': '24h', 'MK': '24h', 'ML': '24h', 'MM': '24h', 'MN': '24h', 'MQ': '24h', 'MS': '24h', 'MT': '24h', 'MU': '24h', 'MV': '24h',
		'MZ': '24h', 'NC': '24h', 'NE': '24h', 'NF': '24h', 'NG': '24h', 'NL': '24h', 'NO': '24h', 'NP': '24h', 'NR': '24h', 'NU': '24h',
		'PF': '24h', 'PK': '24h', 'PL': '24h', 'PM': '24h', 'PN': '24h', 'PT': '24h', 'PY': '24h', 'RE': '24h', 'RO': '24h', 'RS': '24h',
		'RU': '24h', 'RW': '24h', 'SC': '24h', 'SH': '24h', 'SI': '24h', 'SJ': '24h', 'SK': '24h', 'SM': '24h', 'SN': '24h',
		'SR': '24h', 'ST': '24h', 'SX': '24h', 'TF': '24h', 'TG': '24h', 'TH': '24h', 'TJ': '24h', 'TK': '24h', 'TL': '24h', 'TM': '24h',
		'TR': '24h', 'TV': '24h', 'TZ': '24h', 'UA': '24h', 'UG': '24h', 'UZ': '24h', 'VA': '24h', 'VN': '24h', 'WF': '24h', 'WS': '24h',
		'XK': '24h', 'YT': '24h', 'ZA': '24h', 'ZW': '24h',
		'CN': '30h', 'JP': '30h', 'SE': '30h',

		'AC': '12h', 'AE': '12h', 'AG': '12h', 'AL': '12h', 'AR': '12h', 'AS': '12h', 'AU': '12h', 'BB': '12h', 'BD': '12h', 'BH': '12h',
		'BM': '12h', 'BN': '12h', 'BO': '12h', 'BS': '12h', 'BT': '12h', 'CA': '12h', 'CL': '12h', 'CO': '12h', 'CQ': '12h', 'CR': '12h',
		'CU': '12h', 'CY': '12h', 'DJ': '12h', 'DM': '12h', 'DO': '12h', 'DZ': '12h', 'EC': '12h', 'EG': '12h', 'EH': '12h', 'ER': '12h',
		'ET': '12h', 'FJ': '12h', 'FM': '12h', 'GD': '12h', 'GH': '12h', 'GM': '12h', 'GR': '12h', 'GU': '12h', 'GY': '12h', 'HK': '12h',
		'HN': '12h', 'IN': '12h', 'IQ': '12h', 'JM': '12h', 'JO': '12h', 'KH': '12h', 'KI': '12h', 'KN': '12h', 'KP': '12h', 'KR': '12h',
		'KW': '12h', 'KY': '12h', 'LB': '12h', 'LC': '12h', 'LR': '12h', 'LS': '12h', 'LY': '12h', 'MH': '12h', 'MP': '12h',
		'MR': '12h', 'MW': '12h', 'MX': '12h', 'MY': '12h', 'NA': '12h', 'NI': '12h', 'NZ': '12h', 'OM': '12h', 'PA': '12h', 'PE': '12h',
		'PG': '12h', 'PH': '12h', 'PR': '12h', 'PS': '12h', 'PW': '12h', 'QA': '12h', 'SA': '12h', 'SB': '12h', 'SD': '12h', 'SG': '12h',
		'SL': '12h', 'SO': '12h', 'SS': '12h', 'SV': '12h', 'SY': '12h', 'SZ': '12h', 'TA': '12h', 'TC': '12h', 'TD': '12h', 'TN': '12h',
		'TO': '12h', 'TT': '12h', 'UM': '12h', 'US': '12h', 'UY': '12h', 'VC': '12h', 'VE': '12h', 'VG': '12h', 'VI': '12h',
		'VU': '12h', 'YE': '12h', 'ZM': '12h',
		'TW': '12hCN', 'MO': '12hCN',
	};
	// Canada, special case
	if (region === "CA" && language === "fr") {
		return '24h';
	} else if (regionLookup[region] !== undefined) {
		return regionLookup[region];
	} else {
		return '24h';
	}
}
function getRegionMarket(language, region) {
	const regionLookup = {
		'AD': 'EU', 'AE': 'EU', 'AF': 'EU', 'AL': 'EU', 'AM': 'EU', 'AO': 'EU', 'AQ': 'EU', 'AT': 'EU', 'AX': 'EU', 'AZ': 'EU',
		'BA': 'EU', 'BD': 'EU', 'BE': 'EU', 'BF': 'EU', 'BG': 'EU', 'BH': 'EU', 'BI': 'EU', 'BJ': 'EU', 'BN': 'EU', 'BT': 'EU',
		'BW': 'EU', 'BY': 'EU', 'CD': 'EU', 'CF': 'EU', 'CG': 'EU', 'CH': 'EU', 'CI': 'EU', 'CM': 'EU', 'CV': 'EU', 'CY': 'EU',
		'CZ': 'EU', 'DE': 'EU', 'DJ': 'EU', 'DK': 'EU', 'DZ': 'EU', 'EE': 'EU', 'EG': 'EU', 'EH': 'EU', 'ER': 'EU', 'ES': 'EU',
		'ET': 'EU', 'FI': 'EU', 'FO': 'EU', 'FR': 'EU', 'GA': 'EU', 'GB': 'EU', 'GE': 'EU', 'GG': 'EU', 'GH': 'EU', 'GI': 'EU',
		'GM': 'EU', 'GN': 'EU', 'GQ': 'EU', 'GR': 'EU', 'GW': 'EU', 'HR': 'EU', 'HU': 'EU', 'IE': 'EU', 'IL': 'EU', 'IM': 'EU',
		'IN': 'EU', 'IO': 'EU', 'IQ': 'EU', 'IR': 'EU', 'IS': 'EU', 'IT': 'EU', 'JE': 'EU', 'JO': 'EU', 'KE': 'EU', 'KG': 'EU',
		'KH': 'EU', 'KM': 'EU', 'KW': 'EU', 'KZ': 'EU', 'LA': 'EU', 'LB': 'EU', 'LI': 'EU', 'LK': 'EU', 'LR': 'EU', 'LS': 'EU',
		'LT': 'EU', 'LU': 'EU', 'LV': 'EU', 'LY': 'EU', 'MA': 'EU', 'MC': 'EU', 'MD': 'EU', 'ME': 'EU', 'MG': 'EU', 'MK': 'EU',
		'ML': 'EU', 'MM': 'EU', 'MN': 'EU', 'MR': 'EU', 'MT': 'EU', 'MU': 'EU', 'MV': 'EU', 'MW': 'EU', 'MZ': 'EU', 'NA': 'EU',
		'NE': 'EU', 'NG': 'EU', 'NL': 'EU', 'NO': 'EU', 'NP': 'EU', 'OM': 'EU', 'PK': 'EU', 'PL': 'EU', 'PS': 'EU', 'PT': 'EU',
		'QA': 'EU', 'RE': 'EU', 'RO': 'EU', 'RS': 'EU', 'RU': 'EU', 'RW': 'EU', 'SA': 'EU', 'SC': 'EU', 'SD': 'EU', 'SE': 'EU',
		'SH': 'EU', 'SI': 'EU', 'SJ': 'EU', 'SK': 'EU', 'SL': 'EU', 'SM': 'EU', 'SN': 'EU', 'SO': 'EU', 'SS': 'EU', 'ST': 'EU',
		'SY': 'EU', 'SZ': 'EU', 'TD': 'EU', 'TF': 'EU', 'TG': 'EU', 'TJ': 'EU', 'TL': 'EU', 'TM': 'EU', 'TN': 'EU', 'TR': 'EU',
		'TZ': 'EU', 'UA': 'EU', 'UG': 'EU', 'UZ': 'EU', 'VA': 'EU', 'XK': 'EU', 'YE': 'EU', 'YT': 'EU', 'ZA': 'EU', 'ZM': 'EU',
		'ZW': 'EU', '001': 'EU',
		
		'AG': 'US', 'AI': 'US', 'AR': 'US', 'AW': 'US', 'BB': 'US', 'BL': 'US', 'BO': 'US', 'BQ': 'US', 'BR': 'US', 'BS': 'US',
		'BV': 'US', 'BZ': 'US', 'CA': 'US', 'CL': 'US', 'CO': 'US', 'CR': 'US', 'CU': 'US', 'CW': 'US', 'DM': 'US', 'DO': 'US',
		'EC': 'US', 'FK': 'US', 'GD': 'US', 'GF': 'US', 'GL': 'US', 'GP': 'US', 'GS': 'US', 'GT': 'US', 'GY': 'US', 'HN': 'US',
		'HT': 'US', 'JM': 'US', 'KN': 'US', 'KY': 'US', 'LC': 'US', 'MF': 'US', 'MQ': 'US', 'MS': 'US', 'NI': 'US', 'PA': 'US',
		'PE': 'US', 'PH': 'US', 'PM': 'US', 'PR': 'US', 'PY': 'US', 'SR': 'US', 'SV': 'US', 'SX': 'US', 'TC': 'US', 'TT': 'US',
		'US': 'US', 'UY': 'US', 'VC': 'US', 'VE': 'US', 'VG': 'US', 'VI': 'US',
		
		'AS': 'AU', 'AU': 'AU', 'CC': 'AU', 'CK': 'AU', 'CX': 'AU', 'FJ': 'AU', 'FM': 'AU', 'GU': 'AU', 'HM': 'AU', 'KI': 'AU',
		'MH': 'AU', 'MP': 'AU', 'NC': 'AU', 'NF': 'AU', 'NR': 'AU', 'NU': 'AU', 'NZ': 'AU', 'PF': 'AU', 'PG': 'AU', 'PN': 'AU',
		'PW': 'AU', 'SB': 'AU', 'TK': 'AU', 'TO': 'AU', 'TV': 'AU', 'UM': 'AU', 'VU': 'AU', 'WF': 'AU', 'WS': 'AU',

		'CN': 'JP', 'HK': 'JP', 'ID': 'JP', 'JP': 'JP', 'KP': 'JP', 'KR': 'JP', 'MO': 'JP', 'MY': 'JP', 'SG': 'JP', 'TH': 'JP',
		'TW': 'JP', 'VN': 'JP'
	};
		
	if (regionLookup[region] !== undefined) {
		return regionLookup[region];
	} else {
		return 'EU';
	}
}
function getLocaleDate(date, format, zoneId) {
	const [dateLocale, dateOptions] = {
		'ymd-': ['en-SE',{ year: 'numeric', month: '2-digit', day: '2-digit' }], // y-MM-dd
		'ymd/': ['en-ZA',{ year: 'numeric', month: '2-digit', day: '2-digit' }], // y/MM/dd
		'ymd.': ['en-SE',{ year: 'numeric', month: '2-digit', day: '2-digit' }], // y.MM.dd
		'dmy/': ['en-GB',{ day: '2-digit', month: '2-digit', year: 'numeric' }], // dd/MM/y
		'dmy.': ['en-CH',{ day: '2-digit', month: '2-digit', year: 'numeric' }], // dd.MM.y
		'dmy-': ['nl-NL',{ day: '2-digit', month: '2-digit', year: 'numeric' }], // dd-MM-y
		'mdy/': ['en-US',{ month: 'numeric', day: 'numeric', year: 'numeric' }], // M/d/y
		'dmmy': ['en-GB',{ day: 'numeric', month: 'short', year: 'numeric' }],   // d MMM y
		'mmdy': ['en-US',{ day: 'numeric', month: 'short', year: 'numeric' }]    // MMM d, y
	}[format];
	if (format === 'ymd.') {
		return new Intl.DateTimeFormat(dateLocale, { ...dateOptions, timeZone: zoneId }).format(date).replace(/-/g, ".");
	}
	return new Intl.DateTimeFormat(dateLocale, { ...dateOptions, timeZone: zoneId }).format(date);
}
function getLocaleTime(date, referenceDate, format, zoneId) {
	const [timeLocale, timeOptions] = {
		'24h': ['en-SE',{ hour: '2-digit', minute: '2-digit', hour12: false }],                   // HH:mm
		'30h': ['en-SE',{ hour: '2-digit', minute: '2-digit', hour12: false }],                   // HH:mm
		'12h': ['en-GB',{ hour: 'numeric', minute: '2-digit', hour12: true }],                    // h:mm a
		'12hJP': ['en-JP',{ hour: 'numeric', minute: '2-digit', hourCycle: 'h11', hour12: true }],// K:mm a
		'12hCN': ['zh-TW',{ hour: 'numeric', minute: '2-digit', hour12: true, dayPeriod: 'long' }]// Bh:mm
	}[format];
	
	let output = new Intl.DateTimeFormat(timeLocale, { ...timeOptions, timeZone: zoneId }).format(date).toLowerCase();
	if (format === '12hCN') {
		output = output
			.replace("凌晨", "dwn")
			.replace(/清晨|早上/, "mrn")
			.replace("上午", "bf.n")
			.replace("中午", "noon")
			.replace("下午", "af.n")
			.replace("晚上", "evn")
			.replace(/([a-z.]+)([0-9:]+)/, "$2 $1");
	}
	if (isDifferentDay(date, referenceDate, zoneId)) {
		switch (format) {
			case '24h':
				output += "⁺¹";
				break;
			case '12h':
			case '12hJP':
			case '12hCN':
				output = output.replace(/^([0-9:]+)/, "$1⁺¹");
				break;
			case '30h':
				output = (parseInt(output.substr(0,2), 10) + 24) + output.substr(2,3);
				break;
		}
	}
	
	return output;
}
function getLocaleTimeRange(dateA, dateB, referenceDate, format, zoneId) {
	let timeA = getLocaleTime(dateA, referenceDate, format, zoneId);
	let timeB = getLocaleTime(dateB, referenceDate, format, zoneId);
	let abbrA = " "+getTimezoneAbbreviation(dateA, zoneId);
	let abbrB = " "+getTimezoneAbbreviation(dateB, zoneId);
	if (abbrA === abbrB) {
		abbrA = "";
	}
	
	switch (format) {
		case '24h':
			if (timeB === "00:00⁺¹") {timeB = "24:00";}
			break;
		case '12hJP':
			if (timeB === "0:00 pm") {timeB = "12:00 am";}
			else if (timeB === "0:00⁺¹ am") {timeB = "12:00 pm";}
			break;
	}
	switch (format) {
		case '24h':
		case '30h':
			return `${timeA}${abbrA}–${timeB}${abbrB}`;
		case '12h':
		case '12hJP':
			return `${timeA}${abbrA} – ${timeB}${abbrB}`
				.replace(/([0-9]+:[0-9]+) am( – [0-9]+:[0-9]+ am)/, "$1$2")
				.replace(/([0-9]+:[0-9]+) pm( – [0-9]+:[0-9]+ pm)/, "$1$2");
		case '12hCN':
			return `${timeA}${abbrA} – ${timeB}${abbrB}`;
	}
}
function isDifferentDay(dateA, dateB, zoneId) {
	const formatter = new Intl.DateTimeFormat('en-GB', { timeZone: zoneId, day: 'numeric' });
	return (formatter.format(dateA) !== formatter.format(dateB));
}
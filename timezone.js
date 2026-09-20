function getTimezoneName(date, zoneId) {
	const longName = new Intl.DateTimeFormat('en-US', {
		timeZone: zoneId, timeZoneName: 'long'
	}).formatToParts(date).find(p => p.type === 'timeZoneName')?.value;
	return longName;
}
function getTimezoneNormalSummerAbbreviation(zoneId) {
	const currentYear = new Date().getFullYear();
	const janDate = new Date(Date.UTC(currentYear, 0, 15));
	const julDate = new Date(Date.UTC(currentYear, 6, 15));
	const janOffset = getTimezoneOffset(janDate, zoneId);
	const julOffset = getTimezoneOffset(julDate, zoneId);
	if (janOffset === julOffset) {
		return [getTimezoneAbbreviation(janDate, zoneId)];
	} else if (janOffset < julOffset) {
		return [getTimezoneAbbreviation(janDate, zoneId), getTimezoneAbbreviation(julDate, zoneId)];
	} else {
		return [getTimezoneAbbreviation(julDate, zoneId), getTimezoneAbbreviation(janDate, zoneId)];
	}
}
function getTimezoneOffset(date, zoneId) {
  const shortOffset = new Intl.DateTimeFormat('en-US', {
    timeZone: zoneId, timeZoneName: 'shortOffset'
  }).formatToParts(date).find(p => p.type === 'timeZoneName')?.value;
	const match = shortOffset.match(/GMT([+-]?\d+)(?::(\d+))?/);
	if (!match) return 0;
	const hours = parseInt(match[1], 10);
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
	const sign = hours >= 0 ? 1 : -1;
  return hours + (sign * (minutes / 60));

  return shortOffset;// ? shortOffset.value : 'GMT+0';
}
function getTimezoneAbbreviation(date, zoneId) {
	zoneName = getTimezoneName(date, zoneId);

	const abbrOverrides = [
		{ prefix: /^GMT/, abbr: "case GMT" },
		{ prefix: /^Coordinated Universal Time$/, abbr: "UTC" }, // +0
		{ prefix: /^Western European Standard Time$/, abbr: "WET" }, // EU +0
		{ prefix: /^Central European Standard Time$/, abbr: "CET" }, // EU +1
		{ prefix: /^Eastern European Standard Time$/, abbr: "EET" }, // EU +2
		{ prefix: /^Azores Standard Time$/, abbr: "AZOT" }, // EU +0
		{ prefix: /^Azores Summer Time$/, abbr: "AZOST" }, // EU (+1)
		{ prefix: /^Hawaii-Aleutian Standard Time$/, abbr: "HST" }, // NAm -10
		{ prefix: /^Hawaii-Aleutian Daylight Time$/, abbr: "HDT" }, // NAm (-9)
		{ prefix: /^Alaska Standard Time$/, abbr: "AKST" }, // NAm -9
		{ prefix: /^Alaska Daylight Time$/, abbr: "AKDT" }, // NAm (-8)
		{ prefix: /^Yukon Time$/, abbr: "YST" }, // NAm -7
		{ prefix: /^Mexican Pacific Standard Time$/, abbr: "PST" }, // NAm -7
		{ prefix: /^Mexican Pacific Daylight Time$/, abbr: "PDT" }, // NAm (-6)
		{ prefix: /^West Greenland Standard Time$/, abbr: "WGT" }, // NAm -5
		{ prefix: /^East Greenland Standard Time$/, abbr: "EGT" }, // NAm -3
		{ prefix: /^St. Pierre & Miquelon Standard Time$/, abbr: "PMST" }, // NAm -3
		{ prefix: /^St. Pierre & Miquelon Daylight Time$/, abbr: "PMDT" }, // NAm (-2)
		{ prefix: /^Greenland Standard Time$/, abbr: "GT" }, // NAm -3
		{ prefix: /^Australian Western Standard Time$/, abbr: "WST" }, // AU +10
		{ prefix: /^Australian Western Daylight Time$/, abbr: "WDT" }, // AU (+11)
		{ prefix: /^Australian Central Western Standard Time$/, abbr: "CWST" }, // AU +10¾
		{ prefix: /^Australian Central Western Daylight Time$/, abbr: "CWDT" }, // AU (+11¾)
		{ prefix: /^Australian Central Standard Time$/, abbr: "CST" }, // AU +11½
		{ prefix: /^Australian Central Daylight Time$/, abbr: "CDT" }, // AU (+12½)
		{ prefix: /^Australian Eastern Standard Time$/, abbr: "EST" }, // AU +12
		{ prefix: /^Australian Eastern Daylight Time$/, abbr: "EDT" }, // AU (+13)
		{ prefix: /^Moscow Standard Time$/, abbr: "MSK" }, // RU +3
		{ prefix: /^Samara Standard Time$/, abbr: "SAMT" }, // RU +4
		{ prefix: /^Yekaterinburg Standard Time$/, abbr: "YEKT" }, // RU +5
		{ prefix: /^Omsk Standard Time$/, abbr: "OMST" }, // RU +6
		{ prefix: /^Krasnoyarsk Standard Time$/, abbr: "KRAT" }, // RU +7
		{ prefix: /^Irkutsk Standard Time$/, abbr: "IRKT" }, // RU +8
		{ prefix: /^Yakutsk Standard Time$/, abbr: "YAKT" }, // RU +9
		{ prefix: /^Vladivostok Standard Time$/, abbr: "VLAT" }, // RU +10
		{ prefix: /^Magadan Standard Time$/, abbr: "MAGT" }, // RU +11
		{ prefix: /^Easter Island Standard Time$/, abbr: "EAST" }, // SAm -6
		{ prefix: /^Galapagos Time$/, abbr: "GALT" }, // SAm -6
		{ prefix: /^Easter Island Summer Time$/, abbr: "EASST" }, // SAm (-5)
		{ prefix: /^Acre Standard Time$/, abbr: "ACT" }, // SAm -5
		{ prefix: /^Ecuador Time$/, abbr: "ECT" }, // SAm -5
		{ prefix: /^Peru Standard Time$/, abbr: "PET" }, // SAm -5
		{ prefix: /^Peru Summer Time$/, abbr: "PEST" }, // SAm (-4)
		{ prefix: /^Colombia Standard Time$/, abbr: "COT" }, // SAm -5
		{ prefix: /^Colombia Summer Time$/, abbr: "COST" }, // SAm (-4)
		{ prefix: /^Venezuela Time$/, abbr: "VET" }, // SAm -4
		{ prefix: /^Bolivia Time$/, abbr: "BOT" }, // SAm -4
		{ prefix: /^Amazon Standard Time$/, abbr: "AMT" }, // SAm -4
		{ prefix: /^Chile Standard Time$/, abbr: "CLT" }, // SAm -4
		{ prefix: /^Guyana Time$/, abbr: "GYT" }, // SAm -4
		{ prefix: /^Chile Summer Time$/, abbr: "CLST" }, // SAm (-3)
		{ prefix: /^Falkland Islands Standard Time$/, abbr: "FKT" }, // SAm -3
		{ prefix: /^Suriname Time$/, abbr: "SRT" }, // SAm -3
		{ prefix: /^Brasilia Standard Time$/, abbr: "BRT" }, // SAm -3
		{ prefix: /^Paraguay Standard Time$/, abbr: "PYT" }, // SAm -3
		{ prefix: /^Paraguay Summer Time$/, abbr: "PYST" }, // SAm (-2)
		{ prefix: /^Argentina Standard Time$/, abbr: "ART" }, // SAm -3
		{ prefix: /^French Guiana Time$/, abbr: "GFT" }, // SAm -3
		{ prefix: /^Uruguay Standard Time$/, abbr: "UYT" }, // SAm -3
		{ prefix: /^South Georgia Time$/, abbr: "GST" }, // SAm -2
		{ prefix: /^Samoa Standard Time$/, abbr: "SST" }, // -11
		{ prefix: /^Niue Time$/, abbr: "NUT" }, // -11
		{ prefix: /^American Samoa Standard Time$/, abbr: "SST" }, // -11
		{ prefix: /^Cook Islands Standard Time$/, abbr: "CKT" }, // -10
		{ prefix: /^Tahiti Time$/, abbr: "TAHT" }, // -10
		{ prefix: /^Marquesas Time$/, abbr: "MART" }, // -9½
		{ prefix: /^Gambier Time$/, abbr: "GAMT" }, // -9
		{ prefix: /^Pitcairn Time$/, abbr: "PST" }, // -8
		{ prefix: /^Fernando de Noronha Standard Time$/, abbr: "FNT" }, // -2
		{ prefix: /^Cape Verde Standard Time$/, abbr: "CVT" }, // -1
		{ prefix: /^Türkiye Standard Time$/, abbr: "TRT" }, // +3
		{ prefix: /^Iran Standard Time$/, abbr: "IRST" }, // +3½
		{ prefix: /^Azerbaijan Standard Time$/, abbr: "AZT" }, // +4
		{ prefix: /^Armenia Standard Time$/, abbr: "AMT" }, // +4
		{ prefix: /^Mauritius Standard Time$/, abbr: "MUT" }, // +4
		{ prefix: /^Georgia Standard Time$/, abbr: "GET" }, // +4
		{ prefix: /^Seychelles Time$/, abbr: "SCT" }, // +4
		{ prefix: /^Réunion Time$/, abbr: "RET" }, // +4
		{ prefix: /^Afghanistan Time$/, abbr: "AFT" }, // +4½
		{ prefix: /^Uzbekistan Standard Time$/, abbr: "UZT" }, // +5
		{ prefix: /^Kazakhstan Time$/, abbr: "KZT" }, // +5
		{ prefix: /^West Kazakhstan Time$/, abbr: "WKZT" }, // +5
		{ prefix: /^Pakistan Standard Time$/, abbr: "PKT" }, // +5
		{ prefix: /^Tajikistan Time$/, abbr: "TJT" }, // +5
		{ prefix: /^French Southern & Antarctic Time$/, abbr: "TFT" }, // +5
		{ prefix: /^Maldives Time$/, abbr: "MVT" }, // +5
		{ prefix: /^Nepal Time$/, abbr: "NPT" }, // +5¾
		{ prefix: /^East Kazakhstan Time$/, abbr: "EKZT" }, // +6
		{ prefix: /^Bhutan Time$/, abbr: "BTT" }, // +6
		{ prefix: /^Kyrgyzstan Time$/, abbr: "KGT" }, // +6
		{ prefix: /^Cocos Islands Time$/, abbr: "CCT" }, // +6½
		{ prefix: /^Myanmar Time$/, abbr: "MMT" }, // +6½
		{ prefix: /^Christmas Island Time$/, abbr: "CXT" }, // +7
		{ prefix: /^Indochina Time$/, abbr: "ICT" }, // +7
		{ prefix: /^Khovd Standard Time$/, abbr: "HOVT" }, // +7
		{ prefix: /^Western Indonesia Time$/, abbr: "WBT" }, // +7
		{ prefix: /^Singapore Standard Time$/, abbr: "SGT" }, // +8
		{ prefix: /^Malaysia Time$/, abbr: "MYT" }, // +8
		{ prefix: /^Philippine Standard Time$/, abbr: "PHT" }, // +8
		{ prefix: /^Taiwan Standard Time$/, abbr: "NST" }, // +8
		{ prefix: /^Ulaanbaatar Standard Time$/, abbr: "ULAT" }, // +8
		{ prefix: /^Macao Summer Time$/, abbr: "MDT" }, // (+9)
		{ prefix: /^Central Indonesia Time$/, abbr: "WITA" }, // +8
		{ prefix: /^Palau Time$/, abbr: "PWT" }, // +9
		{ prefix: /^Eastern Indonesia Time$/, abbr: "WIT" }, // +9
		{ prefix: /^Chamorro Standard Time$/, abbr: "ChST" }, // +10
		{ prefix: /^Papua New Guinea Time$/, abbr: "PGT" }, // +10
		{ prefix: /^Chuuk Time$/, abbr: "CHUT" }, // +10
		{ prefix: /^Vanuatu Standard Time$/, abbr: "VUT" }, // +11
		{ prefix: /^New Caledonia Standard Time$/, abbr: "NCT" }, // +11
		{ prefix: /^Pohnpei Time$/, abbr: "PONT" }, // +11
		{ prefix: /^Norfolk Island Standard Time$/, abbr: "NFT" }, // +11
		{ prefix: /^Norfolk Island Daylight Time$/, abbr: "NFDT" }, // (+12)
		{ prefix: /^Solomon Islands Time$/, abbr: "SBT" }, // +11
		{ prefix: /^Kosrae Time$/, abbr: "KOST" }, // +11
		{ prefix: /^Tuvalu Time$/, abbr: "TVT" }, // +12
		{ prefix: /^Marshall Islands Time$/, abbr: "MHT" }, // +12
		{ prefix: /^Nauru Time$/, abbr: "NRT" }, // +12
		{ prefix: /^Gilbert Islands Time$/, abbr: "GILT" }, // +12
		{ prefix: /^Kamchatka Standard Time$/, abbr: "PETT" }, // +12
		{ prefix: /^Wake Island Time$/, abbr: "WAKT" }, // +12
		{ prefix: /^Fiji Standard Time$/, abbr: "FJT" }, // +12
		{ prefix: /^Chatham Standard Time$/, abbr: "CHAST" }, // +12¾
		{ prefix: /^Chatham Daylight Time$/, abbr: "CHADT" }, // (+13¾)
		{ prefix: /^Tokelau Time$/, abbr: "TKT" }, // +13
		{ prefix: /^Tonga Standard Time$/, abbr: "TOT" }, // +13
		{ prefix: /^Phoenix Islands Time$/, abbr: "PHOT" }, // +13
		{ prefix: /^Line Islands Time$/, abbr: "LINT" }, // +14
		{ prefix: /^Casey Time$/, abbr: "CAST" }, // AQ +8
		{ prefix: /^Davis Time$/, abbr: "DAVT" }, // AQ +7
		{ prefix: /^Dumont d’Urville Time$/, abbr: "DDUT" }, // AQ +10
		{ prefix: /^Mawson Time$/, abbr: "MAWT" }, // AQ +5
		{ prefix: /^Rothera Time$/, abbr: "ROTT" }, // AQ -3
		{ prefix: /^Syowa Time$/, abbr: "SYOT" }, // AQ +3
		{ prefix: /^Vostok Time$/, abbr: "VOST" }, // AQ +5
	];
	const match = abbrOverrides.find(g => g.prefix.test(zoneName));
	if (match) {
		if (match.abbr === "case GMT") {
			let offsetLookup = {};
			if (zoneId === "Africa/Casablanca" || zoneId === "Africa/El_Aaiun") {
				offsetLookup = {"GMT+00:00": "WET", "GMT+01:00": "WEST"};
			}
			else if (zoneId === "America/Coyhaique" || zoneId === "America/Punta_Arenas") {
				offsetLookup = {"GMT-03:00": "CLST"};
			}
			else if (zoneId === "Pacific/Bougainville") {
				offsetLookup = {"GMT+11:00": "BST"};
			}
			else if (zoneId === "Europe/Guernsey" || zoneId === "Europe/Isle_of_Man" || zoneId === "Europe/Jersey") {
				offsetLookup = {"GMT+00:00": "GMT", "GMT+01:00": "BST"};
			}
			else if (zoneId === "Asia/Kashgar" || zoneId === "Asia/Urumqi") {
				offsetLookup = {"GMT+06:00": "XJT"};
			}
			else if (zoneId === "Asia/Amman" || zoneId === "Asia/Damascus") {
				offsetLookup = {"GMT+03:00": "AST"};
			}
			else if (zoneId === "Antarctica/Troll") {
				offsetLookup = {"GMT+02:00": "CEST"};
			}
			else if (zoneId === "Antarctica/Palmer") {
				offsetLookup = {"GMT-03:00": "CLST"};
			}
			if (offsetLookup[zoneName] !== undefined) {
				return offsetLookup[zoneName];
			} else {
				return `${zoneName.replace(/^GMT((\+|-)[0-9]+):00$/, "$1")}`;
			}
		} else {
			return match.abbr;
		}
	}
	
	return zoneName.replace(/[^A-Z]+/g, "");
}
const timezones = {
    "Etc/GMT+12": {
        "abbr": "DST-0",
        "timezone": "Dateline Standard Time",
        "offset": -12,
        "utc": "Etc/GMT+12"
    },
    "Etc/GMT+11": {
        "abbr": "U-0",
        "timezone": "UTC-11",
        "offset": -11,
        "utc": "Etc/GMT+11"
    },
    "Pacific/Midway": {
        "abbr": "U-1",
        "timezone": "UTC-11",
        "offset": -11,
        "utc": "Pacific/Midway"
    },
    "Pacific/Niue": {
        "abbr": "U-2",
        "timezone": "UTC-11",
        "offset": -11,
        "utc": "Pacific/Niue"
    },
    "Pacific/Pago_Pago": {
        "abbr": "U-3",
        "timezone": "UTC-11",
        "offset": -11,
        "utc": "Pacific/Pago_Pago"
    },
    "Etc/GMT+10": {
        "abbr": "HST-0",
        "timezone": "Hawaiian Standard Time",
        "offset": -10,
        "utc": "Etc/GMT+10"
    },
    "Pacific/Honolulu": {
        "abbr": "HST-1",
        "timezone": "Hawaiian Standard Time",
        "offset": -10,
        "utc": "Pacific/Honolulu"
    },
    "Pacific/Johnston": {
        "abbr": "HST-2",
        "timezone": "Hawaiian Standard Time",
        "offset": -10,
        "utc": "Pacific/Johnston"
    },
    "Pacific/Rarotonga": {
        "abbr": "HST-3",
        "timezone": "Hawaiian Standard Time",
        "offset": -10,
        "utc": "Pacific/Rarotonga"
    },
    "Pacific/Tahiti": {
        "abbr": "HST-4",
        "timezone": "Hawaiian Standard Time",
        "offset": -10,
        "utc": "Pacific/Tahiti"
    },
    "America/Anchorage": {
        "abbr": "AKDT-0",
        "timezone": "Alaskan Standard Time",
        "offset": -8,
        "utc": "America/Anchorage"
    },
    "America/Juneau": {
        "abbr": "AKDT-1",
        "timezone": "Alaskan Standard Time",
        "offset": -8,
        "utc": "America/Juneau"
    },
    "America/Nome": {
        "abbr": "AKDT-2",
        "timezone": "Alaskan Standard Time",
        "offset": -8,
        "utc": "America/Nome"
    },
    "America/Sitka": {
        "abbr": "AKDT-3",
        "timezone": "Alaskan Standard Time",
        "offset": -8,
        "utc": "America/Sitka"
    },
    "America/Yakutat": {
        "abbr": "AKDT-4",
        "timezone": "Alaskan Standard Time",
        "offset": -8,
        "utc": "America/Yakutat"
    },
    "America/Santa_Isabel": {
        "abbr": "PDT-0",
        "timezone": "Pacific Standard Time (Mexico)",
        "offset": -7,
        "utc": "America/Santa_Isabel"
    },
    "America/Dawson": {
        "abbr": "PDT-0",
        "timezone": "Pacific Standard Time",
        "offset": -7,
        "utc": "America/Dawson"
    },
    "America/Los_Angeles": {
        "abbr": "PDT-1",
        "timezone": "Pacific Standard Time",
        "offset": -7,
        "utc": "America/Los_Angeles"
    },
    "America/Tijuana": {
        "abbr": "PDT-2",
        "timezone": "Pacific Standard Time",
        "offset": -7,
        "utc": "America/Tijuana"
    },
    "America/Vancouver": {
        "abbr": "PDT-3",
        "timezone": "Pacific Standard Time",
        "offset": -7,
        "utc": "America/Vancouver"
    },
    "America/Whitehorse": {
        "abbr": "PDT-4",
        "timezone": "Pacific Standard Time",
        "offset": -7,
        "utc": "America/Whitehorse"
    },
    "PST8PDT": {
        "abbr": "PDT-5",
        "timezone": "Pacific Standard Time",
        "offset": -7,
        "utc": "PST8PDT"
    },
    "America/Creston": {
        "abbr": "UMST-0",
        "timezone": "US Mountain Standard Time",
        "offset": -7,
        "utc": "America/Creston"
    },
    "America/Dawson_Creek": {
        "abbr": "UMST-1",
        "timezone": "US Mountain Standard Time",
        "offset": -7,
        "utc": "America/Dawson_Creek"
    },
    "America/Hermosillo": {
        "abbr": "UMST-2",
        "timezone": "US Mountain Standard Time",
        "offset": -7,
        "utc": "America/Hermosillo"
    },
    "America/Phoenix": {
        "abbr": "UMST-3",
        "timezone": "US Mountain Standard Time",
        "offset": -7,
        "utc": "America/Phoenix"
    },
    "Etc/GMT+7": {
        "abbr": "UMST-4",
        "timezone": "US Mountain Standard Time",
        "offset": -7,
        "utc": "Etc/GMT+7"
    },
    "America/Chihuahua": {
        "abbr": "MDT-0",
        "timezone": "Mountain Standard Time (Mexico)",
        "offset": -6,
        "utc": "America/Chihuahua"
    },
    "America/Mazatlan": {
        "abbr": "MDT-1",
        "timezone": "Mountain Standard Time (Mexico)",
        "offset": -6,
        "utc": "America/Mazatlan"
    },
    "America/Boise": {
        "abbr": "MDT-0",
        "timezone": "Mountain Standard Time",
        "offset": -6,
        "utc": "America/Boise"
    },
    "America/Cambridge_Bay": {
        "abbr": "MDT-1",
        "timezone": "Mountain Standard Time",
        "offset": -6,
        "utc": "America/Cambridge_Bay"
    },
    "America/Denver": {
        "abbr": "MDT-2",
        "timezone": "Mountain Standard Time",
        "offset": -6,
        "utc": "America/Denver"
    },
    "America/Edmonton": {
        "abbr": "MDT-3",
        "timezone": "Mountain Standard Time",
        "offset": -6,
        "utc": "America/Edmonton"
    },
    "America/Inuvik": {
        "abbr": "MDT-4",
        "timezone": "Mountain Standard Time",
        "offset": -6,
        "utc": "America/Inuvik"
    },
    "America/Ojinaga": {
        "abbr": "MDT-5",
        "timezone": "Mountain Standard Time",
        "offset": -6,
        "utc": "America/Ojinaga"
    },
    "America/Yellowknife": {
        "abbr": "MDT-6",
        "timezone": "Mountain Standard Time",
        "offset": -6,
        "utc": "America/Yellowknife"
    },
    "MST7MDT": {
        "abbr": "MDT-7",
        "timezone": "Mountain Standard Time",
        "offset": -6,
        "utc": "MST7MDT"
    },
    "America/Belize": {
        "abbr": "CAST-0",
        "timezone": "Central America Standard Time",
        "offset": -6,
        "utc": "America/Belize"
    },
    "America/Costa_Rica": {
        "abbr": "CAST-1",
        "timezone": "Central America Standard Time",
        "offset": -6,
        "utc": "America/Costa_Rica"
    },
    "America/El_Salvador": {
        "abbr": "CAST-2",
        "timezone": "Central America Standard Time",
        "offset": -6,
        "utc": "America/El_Salvador"
    },
    "America/Guatemala": {
        "abbr": "CAST-3",
        "timezone": "Central America Standard Time",
        "offset": -6,
        "utc": "America/Guatemala"
    },
    "America/Managua": {
        "abbr": "CAST-4",
        "timezone": "Central America Standard Time",
        "offset": -6,
        "utc": "America/Managua"
    },
    "America/Tegucigalpa": {
        "abbr": "CAST-5",
        "timezone": "Central America Standard Time",
        "offset": -6,
        "utc": "America/Tegucigalpa"
    },
    "Etc/GMT+6": {
        "abbr": "CAST-6",
        "timezone": "Central America Standard Time",
        "offset": -6,
        "utc": "Etc/GMT+6"
    },
    "Pacific/Galapagos": {
        "abbr": "CAST-7",
        "timezone": "Central America Standard Time",
        "offset": -6,
        "utc": "Pacific/Galapagos"
    },
    "America/Chicago": {
        "abbr": "CDT-0",
        "timezone": "Central Standard Time",
        "offset": -5,
        "utc": "America/Chicago"
    },
    "America/Indiana/Knox": {
        "abbr": "CDT-1",
        "timezone": "Central Standard Time",
        "offset": -5,
        "utc": "America/Indiana/Knox"
    },
    "America/Indiana/Tell_City": {
        "abbr": "CDT-2",
        "timezone": "Central Standard Time",
        "offset": -5,
        "utc": "America/Indiana/Tell_City"
    },
    "America/Matamoros": {
        "abbr": "CDT-3",
        "timezone": "Central Standard Time",
        "offset": -5,
        "utc": "America/Matamoros"
    },
    "America/Menominee": {
        "abbr": "CDT-4",
        "timezone": "Central Standard Time",
        "offset": -5,
        "utc": "America/Menominee"
    },
    "America/North_Dakota/Beulah": {
        "abbr": "CDT-5",
        "timezone": "Central Standard Time",
        "offset": -5,
        "utc": "America/North_Dakota/Beulah"
    },
    "America/North_Dakota/Center": {
        "abbr": "CDT-6",
        "timezone": "Central Standard Time",
        "offset": -5,
        "utc": "America/North_Dakota/Center"
    },
    "America/North_Dakota/New_Salem": {
        "abbr": "CDT-7",
        "timezone": "Central Standard Time",
        "offset": -5,
        "utc": "America/North_Dakota/New_Salem"
    },
    "America/Rainy_River": {
        "abbr": "CDT-8",
        "timezone": "Central Standard Time",
        "offset": -5,
        "utc": "America/Rainy_River"
    },
    "America/Rankin_Inlet": {
        "abbr": "CDT-9",
        "timezone": "Central Standard Time",
        "offset": -5,
        "utc": "America/Rankin_Inlet"
    },
    "America/Resolute": {
        "abbr": "CDT-10",
        "timezone": "Central Standard Time",
        "offset": -5,
        "utc": "America/Resolute"
    },
    "America/Winnipeg": {
        "abbr": "CDT-11",
        "timezone": "Central Standard Time",
        "offset": -5,
        "utc": "America/Winnipeg"
    },
    "CST6CDT": {
        "abbr": "CDT-12",
        "timezone": "Central Standard Time",
        "offset": -5,
        "utc": "CST6CDT"
    },
    "America/Bahia_Banderas": {
        "abbr": "CDT-0",
        "timezone": "Central Standard Time (Mexico)",
        "offset": -5,
        "utc": "America/Bahia_Banderas"
    },
    "America/Cancun": {
        "abbr": "CDT-1",
        "timezone": "Central Standard Time (Mexico)",
        "offset": -5,
        "utc": "America/Cancun"
    },
    "America/Merida": {
        "abbr": "CDT-2",
        "timezone": "Central Standard Time (Mexico)",
        "offset": -5,
        "utc": "America/Merida"
    },
    "America/Mexico_City": {
        "abbr": "CDT-3",
        "timezone": "Central Standard Time (Mexico)",
        "offset": -5,
        "utc": "America/Mexico_City"
    },
    "America/Monterrey": {
        "abbr": "CDT-4",
        "timezone": "Central Standard Time (Mexico)",
        "offset": -5,
        "utc": "America/Monterrey"
    },
    "America/Regina": {
        "abbr": "CCST-0",
        "timezone": "Canada Central Standard Time",
        "offset": -6,
        "utc": "America/Regina"
    },
    "America/Swift_Current": {
        "abbr": "CCST-1",
        "timezone": "Canada Central Standard Time",
        "offset": -6,
        "utc": "America/Swift_Current"
    },
    "America/Bogota": {
        "abbr": "SPST-0",
        "timezone": "SA Pacific Standard Time",
        "offset": -5,
        "utc": "America/Bogota"
    },
    "America/Cayman": {
        "abbr": "SPST-1",
        "timezone": "SA Pacific Standard Time",
        "offset": -5,
        "utc": "America/Cayman"
    },
    "America/Coral_Harbour": {
        "abbr": "SPST-2",
        "timezone": "SA Pacific Standard Time",
        "offset": -5,
        "utc": "America/Coral_Harbour"
    },
    "America/Eirunepe": {
        "abbr": "SPST-3",
        "timezone": "SA Pacific Standard Time",
        "offset": -5,
        "utc": "America/Eirunepe"
    },
    "America/Guayaquil": {
        "abbr": "SPST-4",
        "timezone": "SA Pacific Standard Time",
        "offset": -5,
        "utc": "America/Guayaquil"
    },
    "America/Jamaica": {
        "abbr": "SPST-5",
        "timezone": "SA Pacific Standard Time",
        "offset": -5,
        "utc": "America/Jamaica"
    },
    "America/Lima": {
        "abbr": "SPST-6",
        "timezone": "SA Pacific Standard Time",
        "offset": -5,
        "utc": "America/Lima"
    },
    "America/Panama": {
        "abbr": "SPST-7",
        "timezone": "SA Pacific Standard Time",
        "offset": -5,
        "utc": "America/Panama"
    },
    "America/Rio_Branco": {
        "abbr": "SPST-8",
        "timezone": "SA Pacific Standard Time",
        "offset": -5,
        "utc": "America/Rio_Branco"
    },
    "Etc/GMT+5": {
        "abbr": "SPST-9",
        "timezone": "SA Pacific Standard Time",
        "offset": -5,
        "utc": "Etc/GMT+5"
    },
    "America/Detroit": {
        "abbr": "EDT-0",
        "timezone": "Eastern Standard Time",
        "offset": -4,
        "utc": "America/Detroit"
    },
    "America/Havana": {
        "abbr": "EDT-1",
        "timezone": "Eastern Standard Time",
        "offset": -4,
        "utc": "America/Havana"
    },
    "America/Indiana/Petersburg": {
        "abbr": "EDT-2",
        "timezone": "Eastern Standard Time",
        "offset": -4,
        "utc": "America/Indiana/Petersburg"
    },
    "America/Indiana/Vincennes": {
        "abbr": "EDT-3",
        "timezone": "Eastern Standard Time",
        "offset": -4,
        "utc": "America/Indiana/Vincennes"
    },
    "America/Indiana/Winamac": {
        "abbr": "EDT-4",
        "timezone": "Eastern Standard Time",
        "offset": -4,
        "utc": "America/Indiana/Winamac"
    },
    "America/Iqaluit": {
        "abbr": "EDT-5",
        "timezone": "Eastern Standard Time",
        "offset": -4,
        "utc": "America/Iqaluit"
    },
    "America/Kentucky/Monticello": {
        "abbr": "EDT-6",
        "timezone": "Eastern Standard Time",
        "offset": -4,
        "utc": "America/Kentucky/Monticello"
    },
    "America/Louisville": {
        "abbr": "EDT-7",
        "timezone": "Eastern Standard Time",
        "offset": -4,
        "utc": "America/Louisville"
    },
    "America/Montreal": {
        "abbr": "EDT-8",
        "timezone": "Eastern Standard Time",
        "offset": -4,
        "utc": "America/Montreal"
    },
    "America/Nassau": {
        "abbr": "EDT-9",
        "timezone": "Eastern Standard Time",
        "offset": -4,
        "utc": "America/Nassau"
    },
    "America/New_York": {
        "abbr": "EDT-10",
        "timezone": "Eastern Standard Time",
        "offset": -4,
        "utc": "America/New_York"
    },
    "America/Nipigon": {
        "abbr": "EDT-11",
        "timezone": "Eastern Standard Time",
        "offset": -4,
        "utc": "America/Nipigon"
    },
    "America/Pangnirtung": {
        "abbr": "EDT-12",
        "timezone": "Eastern Standard Time",
        "offset": -4,
        "utc": "America/Pangnirtung"
    },
    "America/Port-au-Prince": {
        "abbr": "EDT-13",
        "timezone": "Eastern Standard Time",
        "offset": -4,
        "utc": "America/Port-au-Prince"
    },
    "America/Thunder_Bay": {
        "abbr": "EDT-14",
        "timezone": "Eastern Standard Time",
        "offset": -4,
        "utc": "America/Thunder_Bay"
    },
    "America/Toronto": {
        "abbr": "EDT-15",
        "timezone": "Eastern Standard Time",
        "offset": -4,
        "utc": "America/Toronto"
    },
    "EST5EDT": {
        "abbr": "EDT-16",
        "timezone": "Eastern Standard Time",
        "offset": -4,
        "utc": "EST5EDT"
    },
    "America/Indiana/Marengo": {
        "abbr": "UEDT-0",
        "timezone": "US Eastern Standard Time",
        "offset": -4,
        "utc": "America/Indiana/Marengo"
    },
    "America/Indiana/Vevay": {
        "abbr": "UEDT-1",
        "timezone": "US Eastern Standard Time",
        "offset": -4,
        "utc": "America/Indiana/Vevay"
    },
    "America/Indianapolis": {
        "abbr": "UEDT-2",
        "timezone": "US Eastern Standard Time",
        "offset": -4,
        "utc": "America/Indianapolis"
    },
    "America/Caracas": {
        "abbr": "VST-0",
        "timezone": "Venezuela Standard Time",
        "offset": -4.5,
        "utc": "America/Caracas"
    },
    "America/Asuncion": {
        "abbr": "PYT-0",
        "timezone": "Paraguay Standard Time",
        "offset": -4,
        "utc": "America/Asuncion"
    },
    "America/Glace_Bay": {
        "abbr": "ADT-0",
        "timezone": "Atlantic Standard Time",
        "offset": -3,
        "utc": "America/Glace_Bay"
    },
    "America/Goose_Bay": {
        "abbr": "ADT-1",
        "timezone": "Atlantic Standard Time",
        "offset": -3,
        "utc": "America/Goose_Bay"
    },
    "America/Halifax": {
        "abbr": "ADT-2",
        "timezone": "Atlantic Standard Time",
        "offset": -3,
        "utc": "America/Halifax"
    },
    "America/Moncton": {
        "abbr": "ADT-3",
        "timezone": "Atlantic Standard Time",
        "offset": -3,
        "utc": "America/Moncton"
    },
    "America/Thule": {
        "abbr": "ADT-4",
        "timezone": "Atlantic Standard Time",
        "offset": -3,
        "utc": "America/Thule"
    },
    "Atlantic/Bermuda": {
        "abbr": "ADT-5",
        "timezone": "Atlantic Standard Time",
        "offset": -3,
        "utc": "Atlantic/Bermuda"
    },
    "America/Campo_Grande": {
        "abbr": "CBST-0",
        "timezone": "Central Brazilian Standard Time",
        "offset": -4,
        "utc": "America/Campo_Grande"
    },
    "America/Cuiaba": {
        "abbr": "CBST-1",
        "timezone": "Central Brazilian Standard Time",
        "offset": -4,
        "utc": "America/Cuiaba"
    },
    "America/Anguilla": {
        "abbr": "SWST-0",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Anguilla"
    },
    "America/Antigua": {
        "abbr": "SWST-1",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Antigua"
    },
    "America/Aruba": {
        "abbr": "SWST-2",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Aruba"
    },
    "America/Barbados": {
        "abbr": "SWST-3",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Barbados"
    },
    "America/Blanc-Sablon": {
        "abbr": "SWST-4",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Blanc-Sablon"
    },
    "America/Boa_Vista": {
        "abbr": "SWST-5",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Boa_Vista"
    },
    "America/Curacao": {
        "abbr": "SWST-6",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Curacao"
    },
    "America/Dominica": {
        "abbr": "SWST-7",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Dominica"
    },
    "America/Grand_Turk": {
        "abbr": "SWST-8",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Grand_Turk"
    },
    "America/Grenada": {
        "abbr": "SWST-9",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Grenada"
    },
    "America/Guadeloupe": {
        "abbr": "SWST-10",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Guadeloupe"
    },
    "America/Guyana": {
        "abbr": "SWST-11",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Guyana"
    },
    "America/Kralendijk": {
        "abbr": "SWST-12",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Kralendijk"
    },
    "America/La_Paz": {
        "abbr": "SWST-13",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/La_Paz"
    },
    "America/Lower_Princes": {
        "abbr": "SWST-14",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Lower_Princes"
    },
    "America/Manaus": {
        "abbr": "SWST-15",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Manaus"
    },
    "America/Marigot": {
        "abbr": "SWST-16",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Marigot"
    },
    "America/Martinique": {
        "abbr": "SWST-17",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Martinique"
    },
    "America/Montserrat": {
        "abbr": "SWST-18",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Montserrat"
    },
    "America/Port_of_Spain": {
        "abbr": "SWST-19",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Port_of_Spain"
    },
    "America/Porto_Velho": {
        "abbr": "SWST-20",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Porto_Velho"
    },
    "America/Puerto_Rico": {
        "abbr": "SWST-21",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Puerto_Rico"
    },
    "America/Santo_Domingo": {
        "abbr": "SWST-22",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Santo_Domingo"
    },
    "America/St_Barthelemy": {
        "abbr": "SWST-23",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/St_Barthelemy"
    },
    "America/St_Kitts": {
        "abbr": "SWST-24",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/St_Kitts"
    },
    "America/St_Lucia": {
        "abbr": "SWST-25",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/St_Lucia"
    },
    "America/St_Thomas": {
        "abbr": "SWST-26",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/St_Thomas"
    },
    "America/St_Vincent": {
        "abbr": "SWST-27",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/St_Vincent"
    },
    "America/Tortola": {
        "abbr": "SWST-28",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "America/Tortola"
    },
    "Etc/GMT+4": {
        "abbr": "SWST-29",
        "timezone": "SA Western Standard Time",
        "offset": -4,
        "utc": "Etc/GMT+4"
    },
    "America/Santiago": {
        "abbr": "PSST-0",
        "timezone": "Pacific SA Standard Time",
        "offset": -4,
        "utc": "America/Santiago"
    },
    "Antarctica/Palmer": {
        "abbr": "PSST-1",
        "timezone": "Pacific SA Standard Time",
        "offset": -4,
        "utc": "Antarctica/Palmer"
    },
    "America/St_Johns": {
        "abbr": "NDT-0",
        "timezone": "Newfoundland Standard Time",
        "offset": -2.5,
        "utc": "America/St_Johns"
    },
    "America/Sao_Paulo": {
        "abbr": "ESAST-0",
        "timezone": "E. South America Standard Time",
        "offset": -3,
        "utc": "America/Sao_Paulo"
    },
    "America/Argentina/La_Rioja": {
        "abbr": "AST-0",
        "timezone": "Argentina Standard Time",
        "offset": -3,
        "utc": "America/Argentina/La_Rioja"
    },
    "America/Argentina/Rio_Gallegos": {
        "abbr": "AST-1",
        "timezone": "Argentina Standard Time",
        "offset": -3,
        "utc": "America/Argentina/Rio_Gallegos"
    },
    "America/Argentina/Salta": {
        "abbr": "AST-2",
        "timezone": "Argentina Standard Time",
        "offset": -3,
        "utc": "America/Argentina/Salta"
    },
    "America/Argentina/San_Juan": {
        "abbr": "AST-3",
        "timezone": "Argentina Standard Time",
        "offset": -3,
        "utc": "America/Argentina/San_Juan"
    },
    "America/Argentina/San_Luis": {
        "abbr": "AST-4",
        "timezone": "Argentina Standard Time",
        "offset": -3,
        "utc": "America/Argentina/San_Luis"
    },
    "America/Argentina/Tucuman": {
        "abbr": "AST-5",
        "timezone": "Argentina Standard Time",
        "offset": -3,
        "utc": "America/Argentina/Tucuman"
    },
    "America/Argentina/Ushuaia": {
        "abbr": "AST-6",
        "timezone": "Argentina Standard Time",
        "offset": -3,
        "utc": "America/Argentina/Ushuaia"
    },
    "America/Buenos_Aires": {
        "abbr": "AST-7",
        "timezone": "Argentina Standard Time",
        "offset": -3,
        "utc": "America/Buenos_Aires"
    },
    "America/Catamarca": {
        "abbr": "AST-8",
        "timezone": "Argentina Standard Time",
        "offset": -3,
        "utc": "America/Catamarca"
    },
    "America/Cordoba": {
        "abbr": "AST-9",
        "timezone": "Argentina Standard Time",
        "offset": -3,
        "utc": "America/Cordoba"
    },
    "America/Jujuy": {
        "abbr": "AST-10",
        "timezone": "Argentina Standard Time",
        "offset": -3,
        "utc": "America/Jujuy"
    },
    "America/Mendoza": {
        "abbr": "AST-11",
        "timezone": "Argentina Standard Time",
        "offset": -3,
        "utc": "America/Mendoza"
    },
    "America/Araguaina": {
        "abbr": "SEST-0",
        "timezone": "SA Eastern Standard Time",
        "offset": -3,
        "utc": "America/Araguaina"
    },
    "America/Belem": {
        "abbr": "SEST-1",
        "timezone": "SA Eastern Standard Time",
        "offset": -3,
        "utc": "America/Belem"
    },
    "America/Cayenne": {
        "abbr": "SEST-2",
        "timezone": "SA Eastern Standard Time",
        "offset": -3,
        "utc": "America/Cayenne"
    },
    "America/Fortaleza": {
        "abbr": "SEST-3",
        "timezone": "SA Eastern Standard Time",
        "offset": -3,
        "utc": "America/Fortaleza"
    },
    "America/Maceio": {
        "abbr": "SEST-4",
        "timezone": "SA Eastern Standard Time",
        "offset": -3,
        "utc": "America/Maceio"
    },
    "America/Paramaribo": {
        "abbr": "SEST-5",
        "timezone": "SA Eastern Standard Time",
        "offset": -3,
        "utc": "America/Paramaribo"
    },
    "America/Recife": {
        "abbr": "SEST-6",
        "timezone": "SA Eastern Standard Time",
        "offset": -3,
        "utc": "America/Recife"
    },
    "America/Santarem": {
        "abbr": "SEST-7",
        "timezone": "SA Eastern Standard Time",
        "offset": -3,
        "utc": "America/Santarem"
    },
    "Antarctica/Rothera": {
        "abbr": "SEST-8",
        "timezone": "SA Eastern Standard Time",
        "offset": -3,
        "utc": "Antarctica/Rothera"
    },
    "Atlantic/Stanley": {
        "abbr": "SEST-9",
        "timezone": "SA Eastern Standard Time",
        "offset": -3,
        "utc": "Atlantic/Stanley"
    },
    "Etc/GMT+3": {
        "abbr": "SEST-10",
        "timezone": "SA Eastern Standard Time",
        "offset": -3,
        "utc": "Etc/GMT+3"
    },
    "America/Godthab": {
        "abbr": "GDT-0",
        "timezone": "Greenland Standard Time",
        "offset": -3,
        "utc": "America/Godthab"
    },
    "America/Montevideo": {
        "abbr": "MST-0",
        "timezone": "Montevideo Standard Time",
        "offset": -3,
        "utc": "America/Montevideo"
    },
    "America/Bahia": {
        "abbr": "BST-0",
        "timezone": "Bahia Standard Time",
        "offset": -3,
        "utc": "America/Bahia"
    },
    "America/Noronha": {
        "abbr": "U-0",
        "timezone": "UTC-02",
        "offset": -2,
        "utc": "America/Noronha"
    },
    "Atlantic/South_Georgia": {
        "abbr": "U-1",
        "timezone": "UTC-02",
        "offset": -2,
        "utc": "Atlantic/South_Georgia"
    },
    "Etc/GMT+2": {
        "abbr": "U-2",
        "timezone": "UTC-02",
        "offset": -2,
        "utc": "Etc/GMT+2"
    },
    "America/Scoresbysund": {
        "abbr": "ADT-0",
        "timezone": "Azores Standard Time",
        "offset": 0,
        "utc": "America/Scoresbysund"
    },
    "Atlantic/Azores": {
        "abbr": "ADT-1",
        "timezone": "Azores Standard Time",
        "offset": 0,
        "utc": "Atlantic/Azores"
    },
    "Atlantic/Cape_Verde": {
        "abbr": "CVST-0",
        "timezone": "Cape Verde Standard Time",
        "offset": -1,
        "utc": "Atlantic/Cape_Verde"
    },
    "Etc/GMT+1": {
        "abbr": "CVST-1",
        "timezone": "Cape Verde Standard Time",
        "offset": -1,
        "utc": "Etc/GMT+1"
    },
    "Africa/Casablanca": {
        "abbr": "MDT-0",
        "timezone": "Morocco Standard Time",
        "offset": 1,
        "utc": "Africa/Casablanca"
    },
    "Africa/El_Aaiun": {
        "abbr": "MDT-1",
        "timezone": "Morocco Standard Time",
        "offset": 1,
        "utc": "Africa/El_Aaiun"
    },
    "America/Danmarkshavn": {
        "abbr": "UTC-0",
        "timezone": "UTC",
        "offset": 0,
        "utc": "America/Danmarkshavn"
    },
    "Etc/GMT": {
        "abbr": "UTC-1",
        "timezone": "UTC",
        "offset": 0,
        "utc": "Etc/GMT"
    },
    "Atlantic/Canary": {
        "abbr": "GDT-0",
        "timezone": "GMT Standard Time",
        "offset": 1,
        "utc": "Atlantic/Canary"
    },
    "Atlantic/Faeroe": {
        "abbr": "GDT-1",
        "timezone": "GMT Standard Time",
        "offset": 1,
        "utc": "Atlantic/Faeroe"
    },
    "Atlantic/Madeira": {
        "abbr": "GDT-2",
        "timezone": "GMT Standard Time",
        "offset": 1,
        "utc": "Atlantic/Madeira"
    },
    "Europe/Dublin": {
        "abbr": "GDT-3",
        "timezone": "GMT Standard Time",
        "offset": 1,
        "utc": "Europe/Dublin"
    },
    "Europe/Guernsey": {
        "abbr": "GDT-4",
        "timezone": "GMT Standard Time",
        "offset": 1,
        "utc": "Europe/Guernsey"
    },
    "Europe/Isle_of_Man": {
        "abbr": "GDT-5",
        "timezone": "GMT Standard Time",
        "offset": 1,
        "utc": "Europe/Isle_of_Man"
    },
    "Europe/Jersey": {
        "abbr": "GDT-6",
        "timezone": "GMT Standard Time",
        "offset": 1,
        "utc": "Europe/Jersey"
    },
    "Europe/Lisbon": {
        "abbr": "GDT-7",
        "timezone": "GMT Standard Time",
        "offset": 1,
        "utc": "Europe/Lisbon"
    },
    "Europe/London": {
        "abbr": "GDT-8",
        "timezone": "GMT Standard Time",
        "offset": 1,
        "utc": "Europe/London"
    },
    "Africa/Abidjan": {
        "abbr": "GST-0",
        "timezone": "Greenwich Standard Time",
        "offset": 0,
        "utc": "Africa/Abidjan"
    },
    "Africa/Accra": {
        "abbr": "GST-1",
        "timezone": "Greenwich Standard Time",
        "offset": 0,
        "utc": "Africa/Accra"
    },
    "Africa/Bamako": {
        "abbr": "GST-2",
        "timezone": "Greenwich Standard Time",
        "offset": 0,
        "utc": "Africa/Bamako"
    },
    "Africa/Banjul": {
        "abbr": "GST-3",
        "timezone": "Greenwich Standard Time",
        "offset": 0,
        "utc": "Africa/Banjul"
    },
    "Africa/Bissau": {
        "abbr": "GST-4",
        "timezone": "Greenwich Standard Time",
        "offset": 0,
        "utc": "Africa/Bissau"
    },
    "Africa/Conakry": {
        "abbr": "GST-5",
        "timezone": "Greenwich Standard Time",
        "offset": 0,
        "utc": "Africa/Conakry"
    },
    "Africa/Dakar": {
        "abbr": "GST-6",
        "timezone": "Greenwich Standard Time",
        "offset": 0,
        "utc": "Africa/Dakar"
    },
    "Africa/Freetown": {
        "abbr": "GST-7",
        "timezone": "Greenwich Standard Time",
        "offset": 0,
        "utc": "Africa/Freetown"
    },
    "Africa/Lome": {
        "abbr": "GST-8",
        "timezone": "Greenwich Standard Time",
        "offset": 0,
        "utc": "Africa/Lome"
    },
    "Africa/Monrovia": {
        "abbr": "GST-9",
        "timezone": "Greenwich Standard Time",
        "offset": 0,
        "utc": "Africa/Monrovia"
    },
    "Africa/Nouakchott": {
        "abbr": "GST-10",
        "timezone": "Greenwich Standard Time",
        "offset": 0,
        "utc": "Africa/Nouakchott"
    },
    "Africa/Ouagadougou": {
        "abbr": "GST-11",
        "timezone": "Greenwich Standard Time",
        "offset": 0,
        "utc": "Africa/Ouagadougou"
    },
    "Africa/Sao_Tome": {
        "abbr": "GST-12",
        "timezone": "Greenwich Standard Time",
        "offset": 0,
        "utc": "Africa/Sao_Tome"
    },
    "Atlantic/Reykjavik": {
        "abbr": "GST-13",
        "timezone": "Greenwich Standard Time",
        "offset": 0,
        "utc": "Atlantic/Reykjavik"
    },
    "Atlantic/St_Helena": {
        "abbr": "GST-14",
        "timezone": "Greenwich Standard Time",
        "offset": 0,
        "utc": "Atlantic/St_Helena"
    },
    "Arctic/Longyearbyen": {
        "abbr": "WEDT-0",
        "timezone": "W. Europe Standard Time",
        "offset": 2,
        "utc": "Arctic/Longyearbyen"
    },
    "Europe/Amsterdam": {
        "abbr": "WEDT-1",
        "timezone": "W. Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Amsterdam"
    },
    "Europe/Andorra": {
        "abbr": "WEDT-2",
        "timezone": "W. Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Andorra"
    },
    "Europe/Berlin": {
        "abbr": "WEDT-3",
        "timezone": "W. Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Berlin"
    },
    "Europe/Busingen": {
        "abbr": "WEDT-4",
        "timezone": "W. Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Busingen"
    },
    "Europe/Gibraltar": {
        "abbr": "WEDT-5",
        "timezone": "W. Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Gibraltar"
    },
    "Europe/Luxembourg": {
        "abbr": "WEDT-6",
        "timezone": "W. Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Luxembourg"
    },
    "Europe/Malta": {
        "abbr": "WEDT-7",
        "timezone": "W. Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Malta"
    },
    "Europe/Monaco": {
        "abbr": "WEDT-8",
        "timezone": "W. Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Monaco"
    },
    "Europe/Oslo": {
        "abbr": "WEDT-9",
        "timezone": "W. Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Oslo"
    },
    "Europe/Rome": {
        "abbr": "WEDT-10",
        "timezone": "W. Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Rome"
    },
    "Europe/San_Marino": {
        "abbr": "WEDT-11",
        "timezone": "W. Europe Standard Time",
        "offset": 2,
        "utc": "Europe/San_Marino"
    },
    "Europe/Stockholm": {
        "abbr": "WEDT-12",
        "timezone": "W. Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Stockholm"
    },
    "Europe/Vaduz": {
        "abbr": "WEDT-13",
        "timezone": "W. Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Vaduz"
    },
    "Europe/Vatican": {
        "abbr": "WEDT-14",
        "timezone": "W. Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Vatican"
    },
    "Europe/Vienna": {
        "abbr": "WEDT-15",
        "timezone": "W. Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Vienna"
    },
    "Europe/Zurich": {
        "abbr": "WEDT-16",
        "timezone": "W. Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Zurich"
    },
    "Europe/Belgrade": {
        "abbr": "CEDT-0",
        "timezone": "Central Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Belgrade"
    },
    "Europe/Bratislava": {
        "abbr": "CEDT-1",
        "timezone": "Central Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Bratislava"
    },
    "Europe/Budapest": {
        "abbr": "CEDT-2",
        "timezone": "Central Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Budapest"
    },
    "Europe/Ljubljana": {
        "abbr": "CEDT-3",
        "timezone": "Central Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Ljubljana"
    },
    "Europe/Podgorica": {
        "abbr": "CEDT-4",
        "timezone": "Central Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Podgorica"
    },
    "Europe/Prague": {
        "abbr": "CEDT-5",
        "timezone": "Central Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Prague"
    },
    "Europe/Tirane": {
        "abbr": "CEDT-6",
        "timezone": "Central Europe Standard Time",
        "offset": 2,
        "utc": "Europe/Tirane"
    },
    "Africa/Ceuta": {
        "abbr": "RDT-0",
        "timezone": "Romance Standard Time",
        "offset": 2,
        "utc": "Africa/Ceuta"
    },
    "Europe/Brussels": {
        "abbr": "RDT-1",
        "timezone": "Romance Standard Time",
        "offset": 2,
        "utc": "Europe/Brussels"
    },
    "Europe/Copenhagen": {
        "abbr": "RDT-2",
        "timezone": "Romance Standard Time",
        "offset": 2,
        "utc": "Europe/Copenhagen"
    },
    "Europe/Madrid": {
        "abbr": "RDT-3",
        "timezone": "Romance Standard Time",
        "offset": 2,
        "utc": "Europe/Madrid"
    },
    "Europe/Paris": {
        "abbr": "RDT-4",
        "timezone": "Romance Standard Time",
        "offset": 2,
        "utc": "Europe/Paris"
    },
    "Europe/Sarajevo": {
        "abbr": "CEDT-0",
        "timezone": "Central European Standard Time",
        "offset": 2,
        "utc": "Europe/Sarajevo"
    },
    "Europe/Skopje": {
        "abbr": "CEDT-1",
        "timezone": "Central European Standard Time",
        "offset": 2,
        "utc": "Europe/Skopje"
    },
    "Europe/Warsaw": {
        "abbr": "CEDT-2",
        "timezone": "Central European Standard Time",
        "offset": 2,
        "utc": "Europe/Warsaw"
    },
    "Europe/Zagreb": {
        "abbr": "CEDT-3",
        "timezone": "Central European Standard Time",
        "offset": 2,
        "utc": "Europe/Zagreb"
    },
    "Africa/Algiers": {
        "abbr": "WCAST-0",
        "timezone": "W. Central Africa Standard Time",
        "offset": 1,
        "utc": "Africa/Algiers"
    },
    "Africa/Bangui": {
        "abbr": "WCAST-1",
        "timezone": "W. Central Africa Standard Time",
        "offset": 1,
        "utc": "Africa/Bangui"
    },
    "Africa/Brazzaville": {
        "abbr": "WCAST-2",
        "timezone": "W. Central Africa Standard Time",
        "offset": 1,
        "utc": "Africa/Brazzaville"
    },
    "Africa/Douala": {
        "abbr": "WCAST-3",
        "timezone": "W. Central Africa Standard Time",
        "offset": 1,
        "utc": "Africa/Douala"
    },
    "Africa/Kinshasa": {
        "abbr": "WCAST-4",
        "timezone": "W. Central Africa Standard Time",
        "offset": 1,
        "utc": "Africa/Kinshasa"
    },
    "Africa/Lagos": {
        "abbr": "WCAST-5",
        "timezone": "W. Central Africa Standard Time",
        "offset": 1,
        "utc": "Africa/Lagos"
    },
    "Africa/Libreville": {
        "abbr": "WCAST-6",
        "timezone": "W. Central Africa Standard Time",
        "offset": 1,
        "utc": "Africa/Libreville"
    },
    "Africa/Luanda": {
        "abbr": "WCAST-7",
        "timezone": "W. Central Africa Standard Time",
        "offset": 1,
        "utc": "Africa/Luanda"
    },
    "Africa/Malabo": {
        "abbr": "WCAST-8",
        "timezone": "W. Central Africa Standard Time",
        "offset": 1,
        "utc": "Africa/Malabo"
    },
    "Africa/Ndjamena": {
        "abbr": "WCAST-9",
        "timezone": "W. Central Africa Standard Time",
        "offset": 1,
        "utc": "Africa/Ndjamena"
    },
    "Africa/Niamey": {
        "abbr": "WCAST-10",
        "timezone": "W. Central Africa Standard Time",
        "offset": 1,
        "utc": "Africa/Niamey"
    },
    "Africa/Porto-Novo": {
        "abbr": "WCAST-11",
        "timezone": "W. Central Africa Standard Time",
        "offset": 1,
        "utc": "Africa/Porto-Novo"
    },
    "Africa/Tunis": {
        "abbr": "WCAST-12",
        "timezone": "W. Central Africa Standard Time",
        "offset": 1,
        "utc": "Africa/Tunis"
    },
    "Etc/GMT-1": {
        "abbr": "WCAST-13",
        "timezone": "W. Central Africa Standard Time",
        "offset": 1,
        "utc": "Etc/GMT-1"
    },
    "Africa/Windhoek": {
        "abbr": "NST-0",
        "timezone": "Namibia Standard Time",
        "offset": 1,
        "utc": "Africa/Windhoek"
    },
    "Asia/Nicosia": {
        "abbr": "EEDT-0",
        "timezone": "E. Europe Standard Time",
        "offset": 3,
        "utc": "Asia/Nicosia"
    },
    "Europe/Athens": {
        "abbr": "EEDT-1",
        "timezone": "E. Europe Standard Time",
        "offset": 3,
        "utc": "Europe/Athens"
    },
    "Europe/Bucharest": {
        "abbr": "EEDT-2",
        "timezone": "E. Europe Standard Time",
        "offset": 3,
        "utc": "Europe/Bucharest"
    },
    "Europe/Chisinau": {
        "abbr": "EEDT-3",
        "timezone": "E. Europe Standard Time",
        "offset": 3,
        "utc": "Europe/Chisinau"
    },
    "Asia/Beirut": {
        "abbr": "MEDT-0",
        "timezone": "Middle East Standard Time",
        "offset": 3,
        "utc": "Asia/Beirut"
    },
    "Africa/Cairo": {
        "abbr": "EST-0",
        "timezone": "Egypt Standard Time",
        "offset": 2,
        "utc": "Africa/Cairo"
    },
    "Asia/Damascus": {
        "abbr": "SDT-0",
        "timezone": "Syria Standard Time",
        "offset": 3,
        "utc": "Asia/Damascus"
    },
    "Europe/Helsinki": {
        "abbr": "FDT-0",
        "timezone": "FLE Standard Time",
        "offset": 3,
        "utc": "Europe/Helsinki"
    },
    "Europe/Kiev": {
        "abbr": "FDT-1",
        "timezone": "FLE Standard Time",
        "offset": 3,
        "utc": "Europe/Kiev"
    },
    "Europe/Mariehamn": {
        "abbr": "FDT-2",
        "timezone": "FLE Standard Time",
        "offset": 3,
        "utc": "Europe/Mariehamn"
    },
    "Europe/Nicosia": {
        "abbr": "EEDT-7",
        "timezone": "E. Europe Standard Time",
        "offset": 3,
        "utc": "Europe/Nicosia"
    },
    "Europe/Riga": {
        "abbr": "FDT-3",
        "timezone": "FLE Standard Time",
        "offset": 3,
        "utc": "Europe/Riga"
    },
    "Europe/Sofia": {
        "abbr": "FDT-4",
        "timezone": "FLE Standard Time",
        "offset": 3,
        "utc": "Europe/Sofia"
    },
    "Europe/Tallinn": {
        "abbr": "FDT-5",
        "timezone": "FLE Standard Time",
        "offset": 3,
        "utc": "Europe/Tallinn"
    },
    "Europe/Uzhgorod": {
        "abbr": "FDT-6",
        "timezone": "FLE Standard Time",
        "offset": 3,
        "utc": "Europe/Uzhgorod"
    },
    "Europe/Vilnius": {
        "abbr": "FDT-7",
        "timezone": "FLE Standard Time",
        "offset": 3,
        "utc": "Europe/Vilnius"
    },
    "Europe/Zaporozhye": {
        "abbr": "FDT-8",
        "timezone": "FLE Standard Time",
        "offset": 3,
        "utc": "Europe/Zaporozhye"
    },
    "Africa/Blantyre": {
        "abbr": "SAST-0",
        "timezone": "South Africa Standard Time",
        "offset": 2,
        "utc": "Africa/Blantyre"
    },
    "Africa/Bujumbura": {
        "abbr": "SAST-1",
        "timezone": "South Africa Standard Time",
        "offset": 2,
        "utc": "Africa/Bujumbura"
    },
    "Africa/Gaborone": {
        "abbr": "SAST-2",
        "timezone": "South Africa Standard Time",
        "offset": 2,
        "utc": "Africa/Gaborone"
    },
    "Africa/Harare": {
        "abbr": "SAST-3",
        "timezone": "South Africa Standard Time",
        "offset": 2,
        "utc": "Africa/Harare"
    },
    "Africa/Johannesburg": {
        "abbr": "SAST-4",
        "timezone": "South Africa Standard Time",
        "offset": 2,
        "utc": "Africa/Johannesburg"
    },
    "Africa/Kigali": {
        "abbr": "SAST-5",
        "timezone": "South Africa Standard Time",
        "offset": 2,
        "utc": "Africa/Kigali"
    },
    "Africa/Lubumbashi": {
        "abbr": "SAST-6",
        "timezone": "South Africa Standard Time",
        "offset": 2,
        "utc": "Africa/Lubumbashi"
    },
    "Africa/Lusaka": {
        "abbr": "SAST-7",
        "timezone": "South Africa Standard Time",
        "offset": 2,
        "utc": "Africa/Lusaka"
    },
    "Africa/Maputo": {
        "abbr": "SAST-8",
        "timezone": "South Africa Standard Time",
        "offset": 2,
        "utc": "Africa/Maputo"
    },
    "Africa/Maseru": {
        "abbr": "SAST-9",
        "timezone": "South Africa Standard Time",
        "offset": 2,
        "utc": "Africa/Maseru"
    },
    "Africa/Mbabane": {
        "abbr": "SAST-10",
        "timezone": "South Africa Standard Time",
        "offset": 2,
        "utc": "Africa/Mbabane"
    },
    "Etc/GMT-2": {
        "abbr": "SAST-11",
        "timezone": "South Africa Standard Time",
        "offset": 2,
        "utc": "Etc/GMT-2"
    },
    "Europe/Istanbul": {
        "abbr": "TDT-0",
        "timezone": "Turkey Standard Time",
        "offset": 3,
        "utc": "Europe/Istanbul"
    },
    "Asia/Jerusalem": {
        "abbr": "JDT-0",
        "timezone": "Israel Standard Time",
        "offset": 3,
        "utc": "Asia/Jerusalem"
    },
    "Africa/Tripoli": {
        "abbr": "LST-0",
        "timezone": "Libya Standard Time",
        "offset": 2,
        "utc": "Africa/Tripoli"
    },
    "Asia/Amman": {
        "abbr": "JST-0",
        "timezone": "Jordan Standard Time",
        "offset": 3,
        "utc": "Asia/Amman"
    },
    "Asia/Baghdad": {
        "abbr": "AST-0",
        "timezone": "Arabic Standard Time",
        "offset": 3,
        "utc": "Asia/Baghdad"
    },
    "Europe/Kaliningrad": {
        "abbr": "KST-0",
        "timezone": "Kaliningrad Standard Time",
        "offset": 3,
        "utc": "Europe/Kaliningrad"
    },
    "Europe/Minsk": {
        "abbr": "KST-1",
        "timezone": "Kaliningrad Standard Time",
        "offset": 3,
        "utc": "Europe/Minsk"
    },
    "Asia/Aden": {
        "abbr": "AST-0",
        "timezone": "Arab Standard Time",
        "offset": 3,
        "utc": "Asia/Aden"
    },
    "Asia/Bahrain": {
        "abbr": "AST-1",
        "timezone": "Arab Standard Time",
        "offset": 3,
        "utc": "Asia/Bahrain"
    },
    "Asia/Kuwait": {
        "abbr": "AST-2",
        "timezone": "Arab Standard Time",
        "offset": 3,
        "utc": "Asia/Kuwait"
    },
    "Asia/Qatar": {
        "abbr": "AST-3",
        "timezone": "Arab Standard Time",
        "offset": 3,
        "utc": "Asia/Qatar"
    },
    "Asia/Riyadh": {
        "abbr": "AST-4",
        "timezone": "Arab Standard Time",
        "offset": 3,
        "utc": "Asia/Riyadh"
    },
    "Africa/Addis_Ababa": {
        "abbr": "EAST-0",
        "timezone": "E. Africa Standard Time",
        "offset": 3,
        "utc": "Africa/Addis_Ababa"
    },
    "Africa/Asmera": {
        "abbr": "EAST-1",
        "timezone": "E. Africa Standard Time",
        "offset": 3,
        "utc": "Africa/Asmera"
    },
    "Africa/Dar_es_Salaam": {
        "abbr": "EAST-2",
        "timezone": "E. Africa Standard Time",
        "offset": 3,
        "utc": "Africa/Dar_es_Salaam"
    },
    "Africa/Djibouti": {
        "abbr": "EAST-3",
        "timezone": "E. Africa Standard Time",
        "offset": 3,
        "utc": "Africa/Djibouti"
    },
    "Africa/Juba": {
        "abbr": "EAST-4",
        "timezone": "E. Africa Standard Time",
        "offset": 3,
        "utc": "Africa/Juba"
    },
    "Africa/Kampala": {
        "abbr": "EAST-5",
        "timezone": "E. Africa Standard Time",
        "offset": 3,
        "utc": "Africa/Kampala"
    },
    "Africa/Khartoum": {
        "abbr": "EAST-6",
        "timezone": "E. Africa Standard Time",
        "offset": 3,
        "utc": "Africa/Khartoum"
    },
    "Africa/Mogadishu": {
        "abbr": "EAST-7",
        "timezone": "E. Africa Standard Time",
        "offset": 3,
        "utc": "Africa/Mogadishu"
    },
    "Africa/Nairobi": {
        "abbr": "EAST-8",
        "timezone": "E. Africa Standard Time",
        "offset": 3,
        "utc": "Africa/Nairobi"
    },
    "Antarctica/Syowa": {
        "abbr": "EAST-9",
        "timezone": "E. Africa Standard Time",
        "offset": 3,
        "utc": "Antarctica/Syowa"
    },
    "Etc/GMT-3": {
        "abbr": "EAST-10",
        "timezone": "E. Africa Standard Time",
        "offset": 3,
        "utc": "Etc/GMT-3"
    },
    "Indian/Antananarivo": {
        "abbr": "EAST-11",
        "timezone": "E. Africa Standard Time",
        "offset": 3,
        "utc": "Indian/Antananarivo"
    },
    "Indian/Comoro": {
        "abbr": "EAST-12",
        "timezone": "E. Africa Standard Time",
        "offset": 3,
        "utc": "Indian/Comoro"
    },
    "Indian/Mayotte": {
        "abbr": "EAST-13",
        "timezone": "E. Africa Standard Time",
        "offset": 3,
        "utc": "Indian/Mayotte"
    },
    "Europe/Kirov": {
        "abbr": "MSK-0",
        "timezone": "Moscow Standard Time",
        "offset": 3,
        "utc": "Europe/Kirov"
    },
    "Europe/Moscow": {
        "abbr": "MSK-1",
        "timezone": "Moscow Standard Time",
        "offset": 3,
        "utc": "Europe/Moscow"
    },
    "Europe/Simferopol": {
        "abbr": "MSK-2",
        "timezone": "Moscow Standard Time",
        "offset": 3,
        "utc": "Europe/Simferopol"
    },
    "Europe/Volgograd": {
        "abbr": "MSK-3",
        "timezone": "Moscow Standard Time",
        "offset": 3,
        "utc": "Europe/Volgograd"
    },
    "Europe/Astrakhan": {
        "abbr": "SAMT-0",
        "timezone": "Samara Time",
        "offset": 4,
        "utc": "Europe/Astrakhan"
    },
    "Europe/Samara": {
        "abbr": "SAMT-1",
        "timezone": "Samara Time",
        "offset": 4,
        "utc": "Europe/Samara"
    },
    "Europe/Ulyanovsk": {
        "abbr": "SAMT-2",
        "timezone": "Samara Time",
        "offset": 4,
        "utc": "Europe/Ulyanovsk"
    },
    "Asia/Tehran": {
        "abbr": "IDT-0",
        "timezone": "Iran Standard Time",
        "offset": 4.5,
        "utc": "Asia/Tehran"
    },
    "Asia/Dubai": {
        "abbr": "AST-0",
        "timezone": "Arabian Standard Time",
        "offset": 4,
        "utc": "Asia/Dubai"
    },
    "Asia/Muscat": {
        "abbr": "AST-1",
        "timezone": "Arabian Standard Time",
        "offset": 4,
        "utc": "Asia/Muscat"
    },
    "Etc/GMT-4": {
        "abbr": "AST-2",
        "timezone": "Arabian Standard Time",
        "offset": 4,
        "utc": "Etc/GMT-4"
    },
    "Asia/Baku": {
        "abbr": "ADT-0",
        "timezone": "Azerbaijan Standard Time",
        "offset": 5,
        "utc": "Asia/Baku"
    },
    "Indian/Mahe": {
        "abbr": "MST-0",
        "timezone": "Mauritius Standard Time",
        "offset": 4,
        "utc": "Indian/Mahe"
    },
    "Indian/Mauritius": {
        "abbr": "MST-1",
        "timezone": "Mauritius Standard Time",
        "offset": 4,
        "utc": "Indian/Mauritius"
    },
    "Indian/Reunion": {
        "abbr": "MST-2",
        "timezone": "Mauritius Standard Time",
        "offset": 4,
        "utc": "Indian/Reunion"
    },
    "Asia/Tbilisi": {
        "abbr": "GST-0",
        "timezone": "Georgian Standard Time",
        "offset": 4,
        "utc": "Asia/Tbilisi"
    },
    "Asia/Yerevan": {
        "abbr": "CST-0",
        "timezone": "Caucasus Standard Time",
        "offset": 4,
        "utc": "Asia/Yerevan"
    },
    "Asia/Kabul": {
        "abbr": "AST-0",
        "timezone": "Afghanistan Standard Time",
        "offset": 4.5,
        "utc": "Asia/Kabul"
    },
    "Antarctica/Mawson": {
        "abbr": "WAST-0",
        "timezone": "West Asia Standard Time",
        "offset": 5,
        "utc": "Antarctica/Mawson"
    },
    "Asia/Aqtau": {
        "abbr": "WAST-1",
        "timezone": "West Asia Standard Time",
        "offset": 5,
        "utc": "Asia/Aqtau"
    },
    "Asia/Aqtobe": {
        "abbr": "WAST-2",
        "timezone": "West Asia Standard Time",
        "offset": 5,
        "utc": "Asia/Aqtobe"
    },
    "Asia/Ashgabat": {
        "abbr": "WAST-3",
        "timezone": "West Asia Standard Time",
        "offset": 5,
        "utc": "Asia/Ashgabat"
    },
    "Asia/Dushanbe": {
        "abbr": "WAST-4",
        "timezone": "West Asia Standard Time",
        "offset": 5,
        "utc": "Asia/Dushanbe"
    },
    "Asia/Oral": {
        "abbr": "WAST-5",
        "timezone": "West Asia Standard Time",
        "offset": 5,
        "utc": "Asia/Oral"
    },
    "Asia/Samarkand": {
        "abbr": "WAST-6",
        "timezone": "West Asia Standard Time",
        "offset": 5,
        "utc": "Asia/Samarkand"
    },
    "Asia/Tashkent": {
        "abbr": "WAST-7",
        "timezone": "West Asia Standard Time",
        "offset": 5,
        "utc": "Asia/Tashkent"
    },
    "Etc/GMT-5": {
        "abbr": "WAST-8",
        "timezone": "West Asia Standard Time",
        "offset": 5,
        "utc": "Etc/GMT-5"
    },
    "Indian/Kerguelen": {
        "abbr": "WAST-9",
        "timezone": "West Asia Standard Time",
        "offset": 5,
        "utc": "Indian/Kerguelen"
    },
    "Indian/Maldives": {
        "abbr": "WAST-10",
        "timezone": "West Asia Standard Time",
        "offset": 5,
        "utc": "Indian/Maldives"
    },
    "Asia/Karachi": {
        "abbr": "PST-0",
        "timezone": "Pakistan Standard Time",
        "offset": 5,
        "utc": "Asia/Karachi"
    },
    "Asia/Kolkata": {
        "abbr": "IST-0",
        "timezone": "India Standard Time",
        "offset": 5.5,
        "utc": "Asia/Kolkata"
    },
    "Asia/Colombo": {
        "abbr": "SLST-0",
        "timezone": "Sri Lanka Standard Time",
        "offset": 5.5,
        "utc": "Asia/Colombo"
    },
    "Asia/Katmandu": {
        "abbr": "NST-0",
        "timezone": "Nepal Standard Time",
        "offset": 5.75,
        "utc": "Asia/Katmandu"
    },
    "Antarctica/Vostok": {
        "abbr": "CAST-0",
        "timezone": "Central Asia Standard Time",
        "offset": 6,
        "utc": "Antarctica/Vostok"
    },
    "Asia/Almaty": {
        "abbr": "CAST-1",
        "timezone": "Central Asia Standard Time",
        "offset": 6,
        "utc": "Asia/Almaty"
    },
    "Asia/Bishkek": {
        "abbr": "CAST-2",
        "timezone": "Central Asia Standard Time",
        "offset": 6,
        "utc": "Asia/Bishkek"
    },
    "Asia/Qyzylorda": {
        "abbr": "CAST-3",
        "timezone": "Central Asia Standard Time",
        "offset": 6,
        "utc": "Asia/Qyzylorda"
    },
    "Asia/Urumqi": {
        "abbr": "CAST-4",
        "timezone": "Central Asia Standard Time",
        "offset": 6,
        "utc": "Asia/Urumqi"
    },
    "Etc/GMT-6": {
        "abbr": "CAST-5",
        "timezone": "Central Asia Standard Time",
        "offset": 6,
        "utc": "Etc/GMT-6"
    },
    "Indian/Chagos": {
        "abbr": "CAST-6",
        "timezone": "Central Asia Standard Time",
        "offset": 6,
        "utc": "Indian/Chagos"
    },
    "Asia/Dhaka": {
        "abbr": "BST-0",
        "timezone": "Bangladesh Standard Time",
        "offset": 6,
        "utc": "Asia/Dhaka"
    },
    "Asia/Thimphu": {
        "abbr": "BST-1",
        "timezone": "Bangladesh Standard Time",
        "offset": 6,
        "utc": "Asia/Thimphu"
    },
    "Asia/Yekaterinburg": {
        "abbr": "EST-0",
        "timezone": "Ekaterinburg Standard Time",
        "offset": 6,
        "utc": "Asia/Yekaterinburg"
    },
    "Asia/Rangoon": {
        "abbr": "MST-0",
        "timezone": "Myanmar Standard Time",
        "offset": 6.5,
        "utc": "Asia/Rangoon"
    },
    "Indian/Cocos": {
        "abbr": "MST-1",
        "timezone": "Myanmar Standard Time",
        "offset": 6.5,
        "utc": "Indian/Cocos"
    },
    "Antarctica/Davis": {
        "abbr": "SAST-0",
        "timezone": "SE Asia Standard Time",
        "offset": 7,
        "utc": "Antarctica/Davis"
    },
    "Asia/Bangkok": {
        "abbr": "SAST-1",
        "timezone": "SE Asia Standard Time",
        "offset": 7,
        "utc": "Asia/Bangkok"
    },
    "Asia/Hovd": {
        "abbr": "SAST-2",
        "timezone": "SE Asia Standard Time",
        "offset": 7,
        "utc": "Asia/Hovd"
    },
    "Asia/Jakarta": {
        "abbr": "SAST-3",
        "timezone": "SE Asia Standard Time",
        "offset": 7,
        "utc": "Asia/Jakarta"
    },
    "Asia/Phnom_Penh": {
        "abbr": "SAST-4",
        "timezone": "SE Asia Standard Time",
        "offset": 7,
        "utc": "Asia/Phnom_Penh"
    },
    "Asia/Pontianak": {
        "abbr": "SAST-5",
        "timezone": "SE Asia Standard Time",
        "offset": 7,
        "utc": "Asia/Pontianak"
    },
    "Asia/Saigon": {
        "abbr": "SAST-6",
        "timezone": "SE Asia Standard Time",
        "offset": 7,
        "utc": "Asia/Saigon"
    },
    "Asia/Vientiane": {
        "abbr": "SAST-7",
        "timezone": "SE Asia Standard Time",
        "offset": 7,
        "utc": "Asia/Vientiane"
    },
    "Etc/GMT-7": {
        "abbr": "SAST-8",
        "timezone": "SE Asia Standard Time",
        "offset": 7,
        "utc": "Etc/GMT-7"
    },
    "Indian/Christmas": {
        "abbr": "SAST-9",
        "timezone": "SE Asia Standard Time",
        "offset": 7,
        "utc": "Indian/Christmas"
    },
    "Asia/Novokuznetsk": {
        "abbr": "NCAST-0",
        "timezone": "N. Central Asia Standard Time",
        "offset": 7,
        "utc": "Asia/Novokuznetsk"
    },
    "Asia/Novosibirsk": {
        "abbr": "NCAST-1",
        "timezone": "N. Central Asia Standard Time",
        "offset": 7,
        "utc": "Asia/Novosibirsk"
    },
    "Asia/Omsk": {
        "abbr": "NCAST-2",
        "timezone": "N. Central Asia Standard Time",
        "offset": 7,
        "utc": "Asia/Omsk"
    },
    "Asia/Hong_Kong": {
        "abbr": "CST-0",
        "timezone": "China Standard Time",
        "offset": 8,
        "utc": "Asia/Hong_Kong"
    },
    "Asia/Macau": {
        "abbr": "CST-1",
        "timezone": "China Standard Time",
        "offset": 8,
        "utc": "Asia/Macau"
    },
    "Asia/Shanghai": {
        "abbr": "CST-2",
        "timezone": "China Standard Time",
        "offset": 8,
        "utc": "Asia/Shanghai"
    },
    "Asia/Krasnoyarsk": {
        "abbr": "NAST-0",
        "timezone": "North Asia Standard Time",
        "offset": 8,
        "utc": "Asia/Krasnoyarsk"
    },
    "Asia/Brunei": {
        "abbr": "MPST-0",
        "timezone": "Singapore Standard Time",
        "offset": 8,
        "utc": "Asia/Brunei"
    },
    "Asia/Kuala_Lumpur": {
        "abbr": "MPST-1",
        "timezone": "Singapore Standard Time",
        "offset": 8,
        "utc": "Asia/Kuala_Lumpur"
    },
    "Asia/Kuching": {
        "abbr": "MPST-2",
        "timezone": "Singapore Standard Time",
        "offset": 8,
        "utc": "Asia/Kuching"
    },
    "Asia/Makassar": {
        "abbr": "MPST-3",
        "timezone": "Singapore Standard Time",
        "offset": 8,
        "utc": "Asia/Makassar"
    },
    "Asia/Manila": {
        "abbr": "MPST-4",
        "timezone": "Singapore Standard Time",
        "offset": 8,
        "utc": "Asia/Manila"
    },
    "Asia/Singapore": {
        "abbr": "MPST-5",
        "timezone": "Singapore Standard Time",
        "offset": 8,
        "utc": "Asia/Singapore"
    },
    "Etc/GMT-8": {
        "abbr": "MPST-6",
        "timezone": "Singapore Standard Time",
        "offset": 8,
        "utc": "Etc/GMT-8"
    },
    "Antarctica/Casey": {
        "abbr": "WAST-0",
        "timezone": "W. Australia Standard Time",
        "offset": 8,
        "utc": "Antarctica/Casey"
    },
    "Australia/Perth": {
        "abbr": "WAST-1",
        "timezone": "W. Australia Standard Time",
        "offset": 8,
        "utc": "Australia/Perth"
    },
    "Asia/Taipei": {
        "abbr": "TST-0",
        "timezone": "Taipei Standard Time",
        "offset": 8,
        "utc": "Asia/Taipei"
    },
    "Asia/Choibalsan": {
        "abbr": "UST-0",
        "timezone": "Ulaanbaatar Standard Time",
        "offset": 8,
        "utc": "Asia/Choibalsan"
    },
    "Asia/Ulaanbaatar": {
        "abbr": "UST-1",
        "timezone": "Ulaanbaatar Standard Time",
        "offset": 8,
        "utc": "Asia/Ulaanbaatar"
    },
    "Asia/Irkutsk": {
        "abbr": "NAEST-0",
        "timezone": "North Asia East Standard Time",
        "offset": 9,
        "utc": "Asia/Irkutsk"
    },
    "Asia/Dili": {
        "abbr": "TST-0",
        "timezone": "Tokyo Standard Time",
        "offset": 9,
        "utc": "Asia/Dili"
    },
    "Asia/Jayapura": {
        "abbr": "TST-1",
        "timezone": "Tokyo Standard Time",
        "offset": 9,
        "utc": "Asia/Jayapura"
    },
    "Asia/Tokyo": {
        "abbr": "TST-2",
        "timezone": "Tokyo Standard Time",
        "offset": 9,
        "utc": "Asia/Tokyo"
    },
    "Etc/GMT-9": {
        "abbr": "TST-3",
        "timezone": "Tokyo Standard Time",
        "offset": 9,
        "utc": "Etc/GMT-9"
    },
    "Pacific/Palau": {
        "abbr": "TST-4",
        "timezone": "Tokyo Standard Time",
        "offset": 9,
        "utc": "Pacific/Palau"
    },
    "Asia/Pyongyang": {
        "abbr": "KST-0",
        "timezone": "Korea Standard Time",
        "offset": 9,
        "utc": "Asia/Pyongyang"
    },
    "Asia/Seoul": {
        "abbr": "KST-1",
        "timezone": "Korea Standard Time",
        "offset": 9,
        "utc": "Asia/Seoul"
    },
    "Australia/Adelaide": {
        "abbr": "CAST-0",
        "timezone": "Cen. Australia Standard Time",
        "offset": 9.5,
        "utc": "Australia/Adelaide"
    },
    "Australia/Broken_Hill": {
        "abbr": "CAST-1",
        "timezone": "Cen. Australia Standard Time",
        "offset": 9.5,
        "utc": "Australia/Broken_Hill"
    },
    "Australia/Darwin": {
        "abbr": "ACST-0",
        "timezone": "AUS Central Standard Time",
        "offset": 9.5,
        "utc": "Australia/Darwin"
    },
    "Australia/Brisbane": {
        "abbr": "EAST-0",
        "timezone": "E. Australia Standard Time",
        "offset": 10,
        "utc": "Australia/Brisbane"
    },
    "Australia/Lindeman": {
        "abbr": "EAST-1",
        "timezone": "E. Australia Standard Time",
        "offset": 10,
        "utc": "Australia/Lindeman"
    },
    "Australia/Melbourne": {
        "abbr": "AEST-0",
        "timezone": "AUS Eastern Standard Time",
        "offset": 10,
        "utc": "Australia/Melbourne"
    },
    "Australia/Sydney": {
        "abbr": "AEST-1",
        "timezone": "AUS Eastern Standard Time",
        "offset": 10,
        "utc": "Australia/Sydney"
    },
    "Antarctica/DumontDUrville": {
        "abbr": "WPST-0",
        "timezone": "West Pacific Standard Time",
        "offset": 10,
        "utc": "Antarctica/DumontDUrville"
    },
    "Etc/GMT-10": {
        "abbr": "WPST-1",
        "timezone": "West Pacific Standard Time",
        "offset": 10,
        "utc": "Etc/GMT-10"
    },
    "Pacific/Guam": {
        "abbr": "WPST-2",
        "timezone": "West Pacific Standard Time",
        "offset": 10,
        "utc": "Pacific/Guam"
    },
    "Pacific/Port_Moresby": {
        "abbr": "WPST-3",
        "timezone": "West Pacific Standard Time",
        "offset": 10,
        "utc": "Pacific/Port_Moresby"
    },
    "Pacific/Saipan": {
        "abbr": "WPST-4",
        "timezone": "West Pacific Standard Time",
        "offset": 10,
        "utc": "Pacific/Saipan"
    },
    "Pacific/Truk": {
        "abbr": "WPST-5",
        "timezone": "West Pacific Standard Time",
        "offset": 10,
        "utc": "Pacific/Truk"
    },
    "Australia/Currie": {
        "abbr": "TST-0",
        "timezone": "Tasmania Standard Time",
        "offset": 10,
        "utc": "Australia/Currie"
    },
    "Australia/Hobart": {
        "abbr": "TST-1",
        "timezone": "Tasmania Standard Time",
        "offset": 10,
        "utc": "Australia/Hobart"
    },
    "Asia/Chita": {
        "abbr": "YST-0",
        "timezone": "Yakutsk Standard Time",
        "offset": 10,
        "utc": "Asia/Chita"
    },
    "Asia/Khandyga": {
        "abbr": "YST-1",
        "timezone": "Yakutsk Standard Time",
        "offset": 10,
        "utc": "Asia/Khandyga"
    },
    "Asia/Yakutsk": {
        "abbr": "YST-2",
        "timezone": "Yakutsk Standard Time",
        "offset": 10,
        "utc": "Asia/Yakutsk"
    },
    "Antarctica/Macquarie": {
        "abbr": "CPST-0",
        "timezone": "Central Pacific Standard Time",
        "offset": 11,
        "utc": "Antarctica/Macquarie"
    },
    "Etc/GMT-11": {
        "abbr": "CPST-1",
        "timezone": "Central Pacific Standard Time",
        "offset": 11,
        "utc": "Etc/GMT-11"
    },
    "Pacific/Efate": {
        "abbr": "CPST-2",
        "timezone": "Central Pacific Standard Time",
        "offset": 11,
        "utc": "Pacific/Efate"
    },
    "Pacific/Guadalcanal": {
        "abbr": "CPST-3",
        "timezone": "Central Pacific Standard Time",
        "offset": 11,
        "utc": "Pacific/Guadalcanal"
    },
    "Pacific/Kosrae": {
        "abbr": "CPST-4",
        "timezone": "Central Pacific Standard Time",
        "offset": 11,
        "utc": "Pacific/Kosrae"
    },
    "Pacific/Noumea": {
        "abbr": "CPST-5",
        "timezone": "Central Pacific Standard Time",
        "offset": 11,
        "utc": "Pacific/Noumea"
    },
    "Pacific/Ponape": {
        "abbr": "CPST-6",
        "timezone": "Central Pacific Standard Time",
        "offset": 11,
        "utc": "Pacific/Ponape"
    },
    "Asia/Sakhalin": {
        "abbr": "VST-0",
        "timezone": "Vladivostok Standard Time",
        "offset": 11,
        "utc": "Asia/Sakhalin"
    },
    "Asia/Ust-Nera": {
        "abbr": "VST-1",
        "timezone": "Vladivostok Standard Time",
        "offset": 11,
        "utc": "Asia/Ust-Nera"
    },
    "Asia/Vladivostok": {
        "abbr": "VST-2",
        "timezone": "Vladivostok Standard Time",
        "offset": 11,
        "utc": "Asia/Vladivostok"
    },
    "Antarctica/McMurdo": {
        "abbr": "NZST-0",
        "timezone": "New Zealand Standard Time",
        "offset": 12,
        "utc": "Antarctica/McMurdo"
    },
    "Pacific/Auckland": {
        "abbr": "NZST-1",
        "timezone": "New Zealand Standard Time",
        "offset": 12,
        "utc": "Pacific/Auckland"
    },
    "Etc/GMT-12": {
        "abbr": "U-0",
        "timezone": "UTC+12",
        "offset": 12,
        "utc": "Etc/GMT-12"
    },
    "Pacific/Funafuti": {
        "abbr": "U-1",
        "timezone": "UTC+12",
        "offset": 12,
        "utc": "Pacific/Funafuti"
    },
    "Pacific/Kwajalein": {
        "abbr": "U-2",
        "timezone": "UTC+12",
        "offset": 12,
        "utc": "Pacific/Kwajalein"
    },
    "Pacific/Majuro": {
        "abbr": "U-3",
        "timezone": "UTC+12",
        "offset": 12,
        "utc": "Pacific/Majuro"
    },
    "Pacific/Nauru": {
        "abbr": "U-4",
        "timezone": "UTC+12",
        "offset": 12,
        "utc": "Pacific/Nauru"
    },
    "Pacific/Tarawa": {
        "abbr": "U-5",
        "timezone": "UTC+12",
        "offset": 12,
        "utc": "Pacific/Tarawa"
    },
    "Pacific/Wake": {
        "abbr": "U-6",
        "timezone": "UTC+12",
        "offset": 12,
        "utc": "Pacific/Wake"
    },
    "Pacific/Wallis": {
        "abbr": "U-7",
        "timezone": "UTC+12",
        "offset": 12,
        "utc": "Pacific/Wallis"
    },
    "Pacific/Fiji": {
        "abbr": "FST-0",
        "timezone": "Fiji Standard Time",
        "offset": 12,
        "utc": "Pacific/Fiji"
    },
    "Asia/Anadyr": {
        "abbr": "MST-0",
        "timezone": "Magadan Standard Time",
        "offset": 12,
        "utc": "Asia/Anadyr"
    },
    "Asia/Kamchatka": {
        "abbr": "KDT-0",
        "timezone": "Kamchatka Standard Time",
        "offset": 13,
        "utc": "Asia/Kamchatka"
    },
    "Asia/Magadan": {
        "abbr": "MST-2",
        "timezone": "Magadan Standard Time",
        "offset": 12,
        "utc": "Asia/Magadan"
    },
    "Asia/Srednekolymsk": {
        "abbr": "MST-3",
        "timezone": "Magadan Standard Time",
        "offset": 12,
        "utc": "Asia/Srednekolymsk"
    },
    "Etc/GMT-13": {
        "abbr": "TST-0",
        "timezone": "Tonga Standard Time",
        "offset": 13,
        "utc": "Etc/GMT-13"
    },
    "Pacific/Enderbury": {
        "abbr": "TST-1",
        "timezone": "Tonga Standard Time",
        "offset": 13,
        "utc": "Pacific/Enderbury"
    },
    "Pacific/Fakaofo": {
        "abbr": "TST-2",
        "timezone": "Tonga Standard Time",
        "offset": 13,
        "utc": "Pacific/Fakaofo"
    },
    "Pacific/Tongatapu": {
        "abbr": "TST-3",
        "timezone": "Tonga Standard Time",
        "offset": 13,
        "utc": "Pacific/Tongatapu"
    },
    "Pacific/Apia": {
        "abbr": "SST-0",
        "timezone": "Samoa Standard Time",
        "offset": 13,
        "utc": "Pacific/Apia"
    }
};

export default timezones;
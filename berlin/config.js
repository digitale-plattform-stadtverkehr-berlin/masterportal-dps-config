/* eslint-disable no-unused-vars */

const Config = {
    addons: ["trafficCount"],
    wfsImgPath: "./resources/img/",
    namedProjections: [
        ["EPSG:25831", "+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"],
        ["EPSG:25832", "+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"],
        ["EPSG:25833", "+proj=utm +zone=33 +ellps=WGS84 +towgs84=0,0,0,0,0,0,1 +units=m +no_defs"],
        // WGS84
        ["EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs"]
    ],
    footer: {
        urls: [
            {
                "bezeichnung": "Kartographie und Gestaltung: ",
                "url": "https://www.berlin.de/sen/uvk/",
                "alias": "Senatsverwaltung für Umwelt, Verkehr und Klimaschutz Berlin",
                "alias_mobil": "SenUVK Berlin"
            }
        ],
        showVersion: true
    },
    quickHelp: {
        imgPath: "./resources/img/"
    },
    layerConf: "./resources/services-internet.json",
    restConf: "./resources//rest-services-internet.json",
    styleConf: "./resources/style_v3.json",
    scaleLine: true,
    mouseHover: {
        numFeaturesToShow: 2,
        infoText: "(weitere Objekte. Bitte zoomen.)"
    },
    useVectorStyleBeta: true,
    portalLanguage: {
        enabled: true,
        debug: false,
        languages: {
            de: "deutsch",
            en: "englisch"
        },
        fallbackLanguage: "de",
        changeLanguageOnStartWhen: ["querystring"],
    },
    remoteInterface: {
        // postMessageUrl: "http://localhost:8001"
        //postMessageUrl: "https://viz-berlin.wemove.com"
        postMessageUrl: "https://viz.berlin.de"
    },
    metadata: {
        useProxy: [
        ]
    }
};

/* eslint-enable no-unused-vars */

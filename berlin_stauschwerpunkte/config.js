/* eslint-disable no-unused-vars */

const Config = {
    addons: ["sensorChart", "verkehrsstaerken", "airpollution", "commuterFlows", "economicTransports"],
    ignoredKeys: ["BOUNDEDBY", "SHAPE", "SHAPE_LENGTH", "SHAPE_AREA", "OBJECTID", "GLOBALID", "GEOMETRY", "SHP", "SHP_AREA", "SHP_LENGTH", "GEOM"],
    wfsImgPath: "../resources/img/",
    namedProjections: [
        ["EPSG:25831", "+title=ETRS89/UTM 31N +proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"],
        ["EPSG:25832", "+title=ETRS89/UTM 32N +proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"],
        ["EPSG:25833", "+title=ETRS89/UTM 33N +proj=utm +zone=33 +ellps=WGS84 +towgs84=0,0,0,0,0,0,1 +units=m +no_defs"],
        // WGS84
        ["EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs"]
    ],
    footer: {
        urls: [
            {
                "bezeichnung": "Kartographie und Gestaltung: ",
                "url": "https://www.berlin.de/sen/uvk/",
                "alias": "Senatsverwaltung für Mobilität, Verkehr, Klimaschutz und Umwelt",
                "alias_mobil": "SenMVKU Berlin"
            }
        ],
        showVersion: true
    },
    quickHelp: {
        imgPath: "../resources/img/"
    },
    portalConf: "../berlin/config.json",
    layerConf: "../resources/services-internet.json",
    restConf: "../resources/rest-services-internet.json",
    styleConf: "../resources/style_v3.json",
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
      // postMessageUrl: "https://viz-dashboard.wemove.com"
        //postMessageUrl: "http://localhost"
        //postMessageUrl: "https://viz-relaunch.wemove.com"
        postMessageUrl: "https://viz.berlin.de"
    },
    alerting: {
        fetchBroadcastUrl: "../resources/newsFeedPortalAlerts.json"
    }
};

/* eslint-enable no-unused-vars */

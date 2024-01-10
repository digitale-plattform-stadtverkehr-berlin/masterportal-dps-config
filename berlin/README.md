# getCapabilities abfragen

Für die Einbundung der einzelnen Layer benötigt man Informationen aus dem getCapabilities-Dokument. Dort befinden sich z.B. Informationen zu den Layern, den unterstützten Projektion und Grafikformaten.

Für einen getCapabilities-request hänge: `?VERSION=1.3.0&REQUEST=GetCapabilities&SERVICE=WMS`an die URL.

https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild2019_rgb?VERSION=1.3.0&REQUEST=GetCapabilities&SERVICE=WMS

https://fbinter.stadt-berlin.de/fb/wms/senstadt/wmsk_aufgrabeverbote?VERSION=1.3.0&REQUEST=GetCapabilities&SERVICE=WMS

https://fbinter.stadt-berlin.de/fb/wms/senstadt/wmsk_alkis_sw?VERSION=1.3.0&REQUEST=GetCapabilities&SERVICE=WMS

https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_webatlasberlin?VERSION=1.3.0&REQUEST=GetCapabilities&SERVICE=WMS

https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_vms_detailnetz_wms_spatial?VERSION=1.3.0&REQUEST=GetCapabilities&SERVICE=WMS

https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_StraDa?VERSION=1.3.0&REQUEST=GetCapabilities&SERVICE=WMS

https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_vms_tempolimits_spatial?VERSION=1.3.0&REQUEST=GetCapabilities&SERVICE=WMS 

https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_umweltzone2007?VERSION=1.3.0&REQUEST=GetCapabilities&SERVICE=WMS 

https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_fussgaengernetz?VERSION=1.3.0&REQUEST=GetCapabilities&SERVICE=WMS 


## Dokumentation des masterportal service

https://bitbucket.org/geowerkstatt-hamburg/masterportal/src/dev/doc/services.json.de.md



## Verkehrslage

Viele Features, die im neuen Berliner Masterportal genutzt werden sollen, finden sich unter:

https://geoportal-hamburg.de/verkehrsportal/


Die zugehörige `config.json` ist hier zu finden:

https://geoportal-hamburg.de/verkehrsportal/config.json


Parameter zum periodischen Laden einse WMS-Dienstes:

```
"autoRefresh": 300000
```

in config.json:

```
{
  "Titel":"Verkehrslage",
  "Layer":[
    {
      "id":"947_groupLayer",
      "children":[
        {
          "id":"947"
        },
        {
          "id":"946"
        }
      ],
      "visibility": false,
      "name":"Verkehrslage auf Autobahnen",
      "layerAttribution":{
        "text":"",
        "channel":"Verkehrsfunctions",
        "eventname":"aktualisiereverkehrsnetz",
        "timeout":60000
      },
      "autoRefresh": 300000
    }
  ]
},
```


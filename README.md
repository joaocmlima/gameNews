# gameNews

When getting **cordova-plugin-geolocation** use:

```
ionic cordova plugin add cordova-plugin-geolocation --variable GPS_REQUIRED="true"
npm install @ionic-native/geolocation
```
When getting **leaflet** use:

```
npm install leaflet --save
npm install @types/leaflet
```
And don't forget do include:
```
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
  integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
  crossorigin=""/>
``` 
in the **index.html** file

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebaseConfig : {
    apiKey: "YOUR-FIREBASE-API-KEY",
    authDomain: "apsloutfi.firebaseapp.com",
    databaseURL: "https://apsloutfi.firebaseio.com",
    projectId: "apsloutfi",
    storageBucket: "apsloutfi.appspot.com",
    messagingSenderId: "622676011939",
    appId: "1:622676011939:web:3eb0c66fdb4bc1df428816",
    measurementId: "G-RY2ZNNQ6FB"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*export const environment = {
  production: false,
  hmr: false,
  apiUrl: 'http://localhost:4000'
};*/

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAj670wsQEwEVEqkDKyi5T1UmSCQTs8VaY',
    authDomain: 'projectos-666.firebaseapp.com',
    projectId: 'projectos-666',
    storageBucket: 'projectos-666.appspot.com',
    messagingSenderId: '527861549234',
    appId: '1:527861549234:web:46d1c5d82d9f04f54861ab',
    measurementId: 'G-1Q4S86QF2'
  }
};
//databaseURL: '<your-database-URL>',
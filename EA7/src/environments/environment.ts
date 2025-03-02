// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBoLbsHxRRf-mdYm4R0dIedpFN3XBqUtTM",
    authDomain: "app-generadora-ideas-84e4e.firebaseapp.com",
    projectId: "app-generadora-ideas-84e4e",
    storageBucket: "app-generadora-ideas-84e4e.firebasestorage.app",
    messagingSenderId: "806044245593",
    appId: "1:806044245593:web:24132946e7043f99679b48"
  }
};

const app = initializeApp(environment.firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

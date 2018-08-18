// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyB0El7R0rp6aVxzrUvROMb9pfbOg6E2TWg",
        authDomain: "bpsmartphone-1.firebaseapp.com",
        databaseURL: "https://bpsmartphone-1.firebaseio.com/",
        projectId: "bpsmartphone-1",
        storageBucket: "gs://bpsmartphone-1.appspot.com/",
        messagingSenderId: "443643382571",
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

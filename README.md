# BPS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Installing Dependencies

Install the npm dependencies.

```shell
npm install
```

## Building the Cordova-based app

Xcode and Android Studio are required to be installed to build the iOS and Android apps respectively.

Make sure Android Studio works and all license agreements are accepted. An easy way would be to create a barebones app from an Android Studio prject template and run it in the simulator. You might also need to install Android File Transfer.

### Installing Cordova

```shell
sudo npm install -g cordova
sudo npm install -g ios-deploy
```

### Configuring and building the Angular app for Cordova

Then build the app:

```shell
npm run build:cordova

cd cordova

# Might require sudo on first time
cordova prepare

# Optional. Check requirements
cordova requirements

# Build all platforms
cordova build
```

### Running the iOS app

```shell
cordova run ios
```

### Running the Android app

```shell
cordova run android
```

### Runing in the browser (Cordova)

```shell
cordova run browser
```

Note: If the emulator does not launch automatically, try running it before running the app.

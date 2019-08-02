# Quasar Cordova Permissions (quasar-cordova-permission)

This is an application developed with Quasar. It's an example of how to use android permissions on cordova

# Preparing environment

Before developing for Quasar with Cordova, you need to follow some instructions to prepare your environment.
These instructions you can follow at this link: [Quasar Mobile Apps Preparation](https://quasar.dev/quasar-cli/developing-cordova-apps/preparation)

In the project I added a cordova plugin that allows you to identify if permissions have been granted, if not you can request them: [Cordova diagnostic plugin](https://github.com/dpa99c/cordova-diagnostic-plugin)

## Downloading the project

Clone the project from this repository.

## Install the dependencies
```bash
npm install
```

### Start cordova development mode for android (with emulator or device connected to computer)

```bash
quasar dev -m cordova -T android
```

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

## Start cordova development mode for android (with emulator or device connected to computer)

```bash
quasar dev -m cordova -T android
```

## Permissions

With the **cordova.plugins.diagnostic** plugin installed on the cordova project, we can request the permissions we want.

* [Camera](#camera)

## Camera

In the project there is a boot called camera.js where it exists contains prototype ** $ cameraCapture **.
This prototype checks if camera permission is enabled, if not prompts the user for permission.

Once allowed, prototype requests camera use through **window.navigator.camera.getPicture()**.

To use the camera you need to have the plugin [cordova-plugin-camera](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/).

**camera.js:**

```javascript
export default async ({ Vue }) => {
  Vue.prototype.$cameraCapture = (text) => {
    return new Promise((resolve, reject) => {
      cordova.plugins.diagnostic.requestCameraAuthorization(function (status) {
        if (status === cordova.plugins.diagnostic.permissionStatus.GRANTED) {
          window.navigator.camera.getPicture(
            (imageData) => {
              resolve(imageData)
            },
            (message) => {
              reject(message)
            },
            { destinationType: 0,
              allowEdit: true,
              correctOrientation: true })
        }
      })
    })
  }
}
```

Add in **config.xml:**
```bash
xmlns:android="http://schemas.android.com/apk/res/android"
```

and
```bash
<platform name="android">
    <allow-intent href="market:*" />
    <config-file parent="/manifest" target="AndroidManifest.xml">
        <uses-permission android:name="android.permission.CAMERA" />
        <uses-permission android:name="android.permission.RECORD_AUDIO" />
        <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
        <uses-feature android:name="android.hardware.camera" android:required="true" />
    </config-file>
</platform>
```

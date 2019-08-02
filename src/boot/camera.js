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

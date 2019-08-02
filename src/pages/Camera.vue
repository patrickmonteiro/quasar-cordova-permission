<template>
  <q-page class="container">
    <div class="text-center row">
      <div class="col-12">
        <label class="text-center">
          <q-img
            :src="image ? image : 'assets/quasar-logo-full.svg'"
            spinner-color="white"
            style="height-max: 150px; max-width: 150px"
          />
        </label>
      </div>
      <div class="col-12 q-pt-lg">
        <q-btn label="Camera" size="lg" icon="camera_alt" color="primary" class="full-width"
         @click="capturaImagem()" />
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      image: null
    }
  },
  methods: {
    capturaImagem () {
      this.$cameraCapture()
        .then((imageData) => {
          this.image = `data:image/jpeg;base64,${imageData}`
        })
        .catch((err) => {
          alert(err)
        })
    }
  }
}
</script>

<template>
  <q-page class="container">
    <div class="row items-center justify-center" style="height: 80vh">
      <div class="col-12 q-pt-lg">
        <q-btn label="Geolocation" size="lg" icon="place" color="primary" class="full-width"
         @click="getLocation()" />
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
      location: null
    }
  },
  methods: {
    getLocation () {
      this.$q.loading.show()
      this.$getGeolocation()
        .then((suc) => {
          this.alert(suc.coords)
        })
        .catch((err) => {
          alert(err)
        })
        .finally(() => {
          this.$q.loading.hide()
        })
    },
    alert (position) {
      this.$q.dialog({
        title: 'Location',
        message: `latitude: ${position.latitude}, longitude: ${position.longitude}`
      }).onOk(() => {
        console.log('OK')
      })
    }
  }
}
</script>

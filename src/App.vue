<template>
  <div id="app">
    <Form />
  </div>
</template>

<script>
import Form from '@/views/Form.vue'

export default {
  name: 'App',
  components: {
    Form
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
</style>

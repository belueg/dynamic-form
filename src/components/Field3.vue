<template>
  <div class="Field3 card">
    <h3 class="Field3-title">{{ requiredPositions.title }}</h3>
    <h5 class="Field3-subtitle">{{ requiredPositions.subtitle }}</h5>
    <div>
      <VueNumericInput v-model="value" :min="1" :max="60" :step="1" />
    </div>
  </div>
</template>

<script>
import VueNumericInput from 'vue-numeric-input'
export default {
  name: 'Field3',
  data() {
    return {
      value: 1
    }
  },
  components: {
    VueNumericInput
  },
  updated() {
    this.$store.commit('setNumberOfWorkers', this.value)
  },
  computed: {
    requiredPositions() {
      return this.$store.state.fields.required_positions
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 660px) {
  .Field3 {
    &-title {
      font-size: 15px;
      margin-bottom: 10px;
    }
    &-subtitle {
      font-size: 12px;
      margin-bottom: 10px;
    }
  }
}
</style>

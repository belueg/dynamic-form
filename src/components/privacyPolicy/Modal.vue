<template>
  <Transition name="fade" mode="out-in">
    <div class="Modal" id="mainModal" @click="hideModal">
      <slot />
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    hideModal({ target }) {
      target.id === 'mainModal' && (this.$parent.show = false)
    }
  }
}
</script>

<style lang="scss" scoped>
.Modal {
  @include overlay();
  @include flex();
  height: 100%;
  z-index: 25;
}
</style>

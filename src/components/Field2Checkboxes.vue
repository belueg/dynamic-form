<template>
  <div class="checkboxes">
    <div class="options">
      <h5>Opciones adicionales</h5>
      <div v-for="(item, index) in checkboxData" :key="index">
        <input
          type="checkbox"
          :name="item.checkboxGroup"
          :value="item.name"
          :id="item.name"
          :disabled="item.fixed"
          v-model="item.checked"
          @change="setCheckboxvalue(optionsIndex, index, item.checked)"
        />
        <label :for="item.name">{{ item.name }}</label>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Field2checkboxes',
  props: ['checkboxData', 'optionsIndex'],
  methods: {
    setCheckboxvalue(optionsIndex, index, checked) {
      const obj = { optionsIndex, index, checked }
      this.$store.commit('setCheckboxvalue', obj)
    }
  }
}
</script>

<style lang="scss" scoped>
.checkboxes {
}

@media screen and(max-width: 880px) {
  .checkboxes {
    .options {
      h5 {
        margin-bottom: 8px;
      }

      label,
      input,
      p {
        font-size: 14px;
      }
    }
  }
}

@media screen and(max-width:660px) {
  .checkboxes {
    width: inherit;
    height: inherit;
    .options {
      label,
      input,
      p {
        font-size: 12px;
      }
    }
  }
}

@media screen and (max-width: 420px) {
  .checkboxes {
    .options {
      p {
        margin-bottom: 10px;
        font-size: 10px;
      }
    }
  }
}
</style>

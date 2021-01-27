<template>
  <div class="Field1 card">
    <h3 class="Field1-title">{{ fieldNow.title }}</h3>
    <h5 class="Field1-subtitle">{{ fieldNow.subtitle }}</h5>
    <div class="Field1-fields">
      <div
        class="Field1-fields-field"
        v-for="field in fieldNow.options"
        :key="field.id"
      >
        <input
          type="radio"
          :id="field.id"
          :name="field.radioGroup"
          :value="field.id"
          v-model="selected"
          @change="selectedNow"
        />
        <label :for="field.id">
          <img :src="field.image" :alt="field.name" />
          <span>{{ field.name }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Field1',
  data() {
    return {
      selected: 1
    }
  },
  methods: {
    selectedNow() {
      this.$store.commit('setSelecteddNow', this.selected)
    }
  },
  computed: {
    fieldNow() {
      return this.$store.state.fields.now
    }
  }
}
</script>

<style lang="scss" scoped>
.Field1 {
  height: 600px;
  text-align: left;
  &-fields {
    @include flex();
    border-width: 0;

    &-field {
      display: flex;
      flex-direction: column;
      margin: 20px;
      position: relative;
      border-radius: 10px;
      margin-bottom: 50px;
      input {
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
      }

      label {
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        span {
          position: absolute;
          bottom: 0;
          background: rgba(255, 255, 255, 0.664);
          width: 100%;
          padding: 8px;
          cursor: pointer;
          border-radius: 0px 0px 8px 8px;
        }
      }

      img {
        cursor: pointer;
        border-radius: 10px;
        @include size(200px, 200px);
      }
      input[type='radio']:checked + label {
        transition: all 0.2s;
        border-radius: 10px;
        box-shadow: 0 0 3px 3px #347effbb;
      }
    }
  }
}

@media screen and (max-width: 880px) {
  .Field1 {
    &-fields {
      &-field {
        label {
          @include size(150px, 150px);

          img {
            @include size(150px, 150px);
          }
        }
      }
    }
  }
}

@media screen and (max-width: 660px) {
  .Field1 {
    &-title {
      font-size: 15px;
      margin-bottom: 10px;
    }
    &-subtitle {
      font-size: 12px;
      margin-bottom: 10px;
    }
    &-fields {
      &-field {
        margin: 10px;
        label {
          @include size(100px, 100px);
          span {
            font-size: 11px;
          }

          img {
            @include size(100px, 100px);
          }
        }
      }
    }
  }
}

@media screen and (max-width: 420px) {
  .Field1 {
    &-fields {
      &-field {
        margin: 10px;
        label {
          @include size(90px, 90px);
          span {
            padding: 2px;
          }

          img {
            @include size(90px, 90px);
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="Field2 card">
    <div>
      <h3 class="Field2-title">{{ fieldInterested.title }}</h3>
      <h5 class="Field2-subtitle">
        {{ fieldInterested.subtitle }}
      </h5>
      <div class="Field2-fields">
        <div
          class="Field2-fields-field"
          v-for="(field, index) in fieldInterested.options"
          :key="index"
        >
          <input
            type="radio"
            :id="field.id"
            :name="field.radioGroup"
            :value="field.id"
            v-model="selected"
            @click="current_option = field.name"
            @change="selectedInterested"
          />
          <label :for="field.id">
            <img :src="field.image" :alt="field.name" />
            <span>{{ field.name }}</span>
          </label>
          <div class="description">{{ field.description }}</div>
          <div class="options-container">
            <div v-if="current_option === field.name">
              <Field2Checkboxes
                :checkboxData="field.checkboxes"
                :optionsIndex="index"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Field2Checkboxes from './Field2Checkboxes.vue'

export default {
  name: 'Field2',
  components: {
    Field2Checkboxes
  },
  data() {
    return {
      selected: 4,
      current_option: 'Despacho flexible'
    }
  },
  methods: {
    selectedInterested() {
      this.$store.commit('setSelectedInterested', this.selected)
    }
  },
  computed: {
    fieldInterested() {
      return this.$store.state.fields.interested
    }
  }
}
</script>

<style lang="scss" scoped>
.Field2 {
  text-align: left;
  &-fields {
    display: flex;
    justify-content: center;
    border-width: 0;
    height: 560px;
    &-field {
      width: 200px;
      display: flex;
      flex-direction: column;
      margin: 20px;
      border-radius: 10px;
      position: relative;
      input {
        position: absolute;
        top: 205px;
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
          border-radius: 0px 0px 8px 8px;
          width: 100%;
          padding: 8px;
          overflow: hidden;
          cursor: pointer;
        }
      }

      .description {
        margin-top: 30px;
        margin-bottom: 10px;
      }

      img {
        cursor: pointer;
        border-radius: 10px;
        width: 200px;
        height: 200px;
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
  .Field2 {
    height: 620px;
    &-fields {
      &-field {
        margin: 0;
        width: 100%;
        input {
          left: 34%;
          top: 155px;
        }
        label {
          width: 150px;
          height: 150px;
          img {
            width: inherit;
            height: inherit;
          }
        }
        .description-container {
          margin-top: 25px;
          font-size: 15px;
          padding: 3px;
          .description {
            margin-top: 5px;
            font-size: 14px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 660px) {
  .Field2 {
    width: 100%;

    &-title {
      font-size: 15px;
      margin-bottom: 10px;
    }
    &-subtitle {
      font-size: 12px;
      margin-bottom: 10px;
    }
    &-fields {
      flex-direction: column;
      justify-content: initial;
      &-field {
        @include flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: initial;
        margin: 15px 0px;
        height: 150px;
        input {
          left: 12%;
          top: 108px;
        }
        label {
          @include size(100px, 100px);
          span {
            font-size: 11px;
          }

          img {
            @include size(100px, 100px);
          }
        }
        .description {
          font-size: 12px;
          margin: 0px;
          position: absolute;
          top: 128px;
        }
        .options-container {
          @include flex();
          flex-direction: column;
          margin: 0;
          height: 100%;
          width: 250px;
        }
      }
    }
  }
}

@media screen and (max-width: 420px) {
  .Field2 {
    &-fields {
      &-field {
        @include flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: initial;
        margin: 15px 0px;
        height: 150px;
        input {
          left: 12%;
          top: 98px;
        }
        label {
          @include size(90px, 90px);

          span {
            padding: 2px;
            font-size: 11px;
          }

          img {
            @include size(90px, 90px);
          }
        }
        .description {
          top: 115px;
        }
        .options-container {
          @include size(233px, 100px);
        }
      }
    }
  }
}
</style>

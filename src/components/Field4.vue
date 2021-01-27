<template>
  <div class="Field4">
    <button
      class="Field4-showFormBtn btn"
      :class="{ displayNone: !displayNoneActive }"
      @click="showPersonalDataForm"
    >
      {{ fieldUserData.button }}
    </button>
    <div :class="{ displayNone: displayNoneActive }" class="Field4-form card">
      <h3 class="title">{{ fieldUserData.title }}</h3>
      <h5 class="subtitle">{{ fieldUserData.subtitle }}</h5>

      <div class="Field4-form-fields">
        <div class="inputContainer">
          <label class="formLabel" for="name">
            {{ fieldUserData.nameLabel }}
          </label>
          <input
            class="formInput"
            type="text"
            v-model="userData.name"
            id="name"
            name="name"
            required
          />
        </div>

        <div class="inputContainer">
          <label class="formLabel" for="email">
            {{ fieldUserData.emailLabel }}
          </label>
          <input
            class="formInput"
            type="email"
            v-model="userData.email"
            id="email"
            required
          />
        </div>

        <div class="inputContainer">
          <label class="formLabel" for="phone">
            {{ fieldUserData.phoneLabel }}
          </label>
          <input
            class="formInput"
            type="tel"
            v-model="userData.phone"
            id="phone"
            name="phone"
          />
        </div>

        <div class="inputContainer">
          <label class="formLabel" for="comments">
            {{ fieldUserData.commentsLabel }}
          </label>

          <textarea
            class="formInput comments"
            id="comments"
            name="comments"
            v-model="userData.comments"
            :placeholder="fieldUserData.commentsPlaceholder"
            rows="10"
            cols="33"
          />
        </div>
        <div class="inputContainer">
          <input
            type="checkbox"
            id="policy"
            name="policy"
            :checked="active"
            @change="toggleCheckbox"
          />

          <label for="policy">He leído y acepto</label>
          <span @click="showModal" class="policy">
            la política de privacidad
          </span>
        </div>

        <Modal v-if="show">
          <TextBox />
        </Modal>
        <button
          @click="sendUserDataToVuex"
          :disabled="!active"
          class="btn sendBtn "
          :class="{ disabled: !active }"
        >
          {{ fieldUserData.sendDataBtn }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/privacyPolicy/Modal.vue'
import TextBox from '@/components/privacyPolicy/TextBox.vue'
export default {
  name: 'Field4',

  data() {
    return {
      displayNoneActive: true,
      active: false,
      show: false,
      userData: {
        name: '',
        email: '',
        phone: '',
        comments: ''
      }
    }
  },
  components: {
    Modal,
    TextBox
  },
  methods: {
    showModal() {
      this.show = true
    },
    showPersonalDataForm() {
      this.displayNoneActive = false
    },
    sendUserDataToVuex() {
      this.$store.commit('setUserData', this.userData)
    },
    toggleCheckbox() {
      this.active = !this.active
    }
  },
  computed: {
    fieldUserData() {
      return this.$store.state.fields.user_data
    }
  }
}
</script>

<style lang="scss" scoped>
.Field4 {
  &-form {
    @include flex($direction: column);
    &-fields {
      width: 400px;
      .inputContainer {
        margin-top: 15px;
        .policy {
          font-weight: bolder;
          cursor: pointer;
        }
      }
      .formInput {
        background-color: rgb(232, 240, 254);
        height: 25px;
        border-radius: 5px;
        width: 100%;
        border: none;
        &:focus {
          outline: none;
        }
      }

      .formLabel {
        display: block;
        text-align: left;
        margin-bottom: 5px;
        margin-top: 5px;
      }

      .comments {
        height: 100px;
        resize: none;
      }

      .sendBtn {
        margin: 10px;
      }
    }
  }
  .displayNone {
    display: none;
  }
}

@media screen and (max-width: 660px) {
  .Field4 {
    &-form {
      .title {
        font-size: 15px;
        margin-bottom: 10px;
      }
      .subtitle {
        font-size: 12px;
        margin-bottom: 10px;
      }
      &-fields {
        width: 310px;
      }
    }
    .inputContainer {
      margin-top: 10px;
      font-size: 14px;
    }
    .formInput {
      height: 20px;
    }

    .formLabel {
      margin-bottom: 3px;
    }

    .sendBtn {
      margin: 10px;
    }
    .comments {
      height: 100px;
    }
  }
}

@media screen and (max-width: 420px) {
  .Field4 {
    &-form {
      &-fields {
        width: 280px;
      }
    }
    .inputContainer {
      font-size: 12px;
    }
  }
}
</style>

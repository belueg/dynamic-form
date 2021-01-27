<template>
  <div class="Form">
    <h1 class="Form-title">
      Formulario dinámico
    </h1>
    <Hero />

    <SaveMoney class="Form-saveMoney" />
    <Field1 class="Form-field field1" />
    <Field2 class="Form-field field2" />
    <Field3 class="Form-field" />
    <Field4 class="Form-field" />
  </div>
</template>

<script>
import Field1 from '@/components/Field1.vue'
import Field2 from '@/components/Field2.vue'
import Field3 from '@/components/Field3.vue'
import Field4 from '@/components/Field4.vue'
import SaveMoney from '@/components/SaveMoney'
import Hero from '@/components/Hero'
import { main_title } from '@/data/text_vars.js'

export default {
  name: 'Form',
  components: {
    Field1,
    Field2,
    Field3,
    Field4,
    SaveMoney,
    Hero
  },
  data() {
    return {
      title: main_title
    }
  }
}
</script>

<style lang="scss" scoped>
.Form {
  position: relative;
  margin: 0 auto;

  .field1 {
    margin-top: -90px;
  }

  .field2 {
    height: 610px;
  }
  &-title {
    color: white;
    background-color: $third;
    margin: 0;
    height: 100px;
    @include flex();
  }
  &-saveMoney {
    position: fixed;
    right: 40px;
    top: 20px;
    z-index: 10;
  }
  &-field {
    position: relative;

    width: 800px;
    height: auto;
    margin: 0 auto;
    margin-bottom: 40px;
  }
}

@media screen and(max-width: 880px) {
  .Form {
    &-field {
      width: 600px;
    }

    .field2 {
      height: 620px;
    }
  }
}

@media screen and(max-width: 660px) {
  .Form {
    &-title {
      font-size: 25px;
    }
    &-field {
      width: 400px;
    }

    .field2 {
      height: auto;
    }
  }
}

@media screen and (max-width: 420px) {
  .Form {
    &-title {
      font-size: 20px;
      @include flex();
      align-items: flex-end;
      padding-bottom: 10px;
    }
    &-field {
      width: 340px;
      padding: 20px 10px;
      margin-bottom: 20px;
    }
    &-saveMoney {
      right: 25px;
      top: 3px;
    }
  }
}
</style>

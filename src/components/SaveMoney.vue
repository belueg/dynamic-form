<template>
  <div class="container">
    <span class="fas fa-piggy-bank" @click="show = !show" />
    <Transition name="fade">
      <div class="SaveMoney" v-if="show">
        <span v-if="selectedOptionFromField1 === 2" class="SaveMoney-span">
          {{ title }}{{ price }}
        </span>
        <span v-else>Ahorra con nosotros ‎€{{ price }}</span>
      </div>
    </Transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'SaveMoney',
  data() {
    return {
      show: true
    }
  },
  computed: {
    ...mapState({
      selectedOptionFromField1: ({ fields }) => fields.now.selected,
      workers: ({ fields }) => fields.required_positions.workers,
      title: ({ fields }) => fields.save_money.title,
      alternativeTitle: ({ fields }) => fields.save_money.alternativeTitle
    }),
    ...mapGetters({
      now: 'calcVarsFieldNow',
      interested: 'calcVarsFieldInterested',
      impactPrice: 'getImpactPrice',
      impactPriceWorker: 'getImpactPriceWorker'
    }),
    price() {
      const { now, interested, workers, impactPrice, impactPriceWorker } = this
      /* eslint-disable */
      const price =
        now.basePrice -
        interested.basePrice +
        (now.workerPrice - interested.workerPrice) * workers +
        impactPrice +
        impactPriceWorker * workers

      return price > 0 ? price : price * -1
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  .fa-piggy-bank {
    cursor: pointer;
    position: absolute;
    right: -18px;
    top: 30px;
    color: $primary;
    font-size: 45px;
    z-index: 15;
  }
}
.SaveMoney {
  @extend .card;
  font-weight: bold;
  background-color: $secondary;
  color: $primary;
}

@media screen and (max-width: 1100px) {
  .container {
    .fa-piggy-bank {
      right: -30px;
    }
  }

  .SaveMoney {
    width: 180px;
  }
}

@media screen and (max-width: 880px) {
  .SaveMoney {
    width: 150px;
    &-span {
      font-size: 13px;
    }
  }
}

@media screen and (max-width: 660px) {
  .container {
    .fa-piggy-bank {
      right: -17px;
      font-size: 30px;
    }
  }

  .SaveMoney {
    @include size(110px, 70px);
    padding: 10px;
    span {
      font-size: 12px;
    }
  }
}

@media screen and (max-width: 420px) {
  .SaveMoney {
    padding: 5px;
    height: 46px;
  }
}
</style>

import Vue from 'vue'
import Vuex from 'vuex'
import fields from '../data/fields'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fields
  },
  mutations: {
    setSelecteddNow({ fields }, value) {
      fields.now.selected = value
    },
    setSelectedInterested({ fields }, value) {
      fields.interested.selected = value
    },
    setCheckboxvalue({ fields }, { optionsIndex, index, checked }) {
      fields.interested.options[optionsIndex].checkboxes[
        index
      ].checked = checked
    },
    setNumberOfWorkers({ fields }, value) {
      fields.required_positions.workers = value
    },
    setUserData({ fields }, userData) {
      fields.user_data.userData = userData
    }
  },
  actions: {},

  getters: {
    calcVarsFieldNow: ({ fields }) => {
      const selectedOptionFields = fields.now.options.filter(option => {
        if (option.id === fields.now.selected) return option
      })

      return selectedOptionFields[0].calculationVariables
    },

    calcVarsFieldInterested: ({ fields }) => {
      const selectedOptionFields = fields.interested.options.filter(option => {
        if (option.id === fields.interested.selected) return option
      })
      return selectedOptionFields[0].calculationVariables
    },

    getImpactPrice: ({ fields }) => {
      const options = fields.interested.options.filter(option => {
        if (option.id === fields.interested.selected) return option
      })

      const selectedCheckboxes = options[0].checkboxes.filter(checkbox => {
        return checkbox.checked === true
      })

      if (!selectedCheckboxes.length) return 0
      const impactPriceSum = selectedCheckboxes
        .map(checkbox => checkbox.impactPrice)
        .reduce((accumulator, impactPrice) => accumulator + impactPrice)
      return impactPriceSum
    },

    getImpactPriceWorker: ({ fields }) => {
      const options = fields.interested.options.filter(option => {
        if (option.id === fields.interested.selected) return option
      })

      const selectedCheckboxes = options[0].checkboxes.filter(checkbox => {
        return checkbox.checked === true
      })

      if (!selectedCheckboxes.length) return 0
      const impactPriceSum = selectedCheckboxes
        .map(checkbox => checkbox.impactPriceWorker)
        .reduce(
          (accumulator, impactPriceWorker) => accumulator + impactPriceWorker
        )

      return impactPriceSum
    }
  }
})

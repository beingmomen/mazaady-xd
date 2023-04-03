export const state = () => ({
  processType: null,
})

export const getters = {
  processType: (state) => state.processType,
}

export const actions = {
  async nuxtServerInit({ commit }) {},
  categoryChange({ state, commit }, payload) {

  },

}

export const mutations = {
  categories(state, val) {
    state.categories = val
  },
  subCategories(state, val) {
    state.subCategories = val
  },
  processTypeList(state, val) {
    state.processTypeList = val
  },
  setFieldValue(state, { key, value }) {
    state[key] = value
  },
}

import Vue from 'vue'
import Vuex from 'vuex'
import { getCompanyInfo } from '@/utils/apis'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    companyData: {} as ObjectType,
    currentRoute: null
  },
  actions: {
    async SET_COMPANY_INFO({ state, commit }) {
      if (!state.companyData.name) {
        commit('SET_COMPANY_INFO', await getCompanyInfo({}))
      }
    }
  },
  mutations: {
    SET_COMPANY_INFO(state, data) {
      state.companyData = data
    },
    SET_CURRENT_ROUTE(state, routeData) {
      state.currentRoute = routeData
    }
  },
})

export default store

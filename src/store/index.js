import Vue from 'vue'
import Vuex from 'vuex'
import ejercicioSimpson from '@/modulsstore/EjercicioSimpson' 
import ejercicioTrapecio from '@/modulsstore/EjercicioTrapecio' 
import ejercicioSimpson3_8 from '@/modulsstore/EjercicioSimpson3_8' 
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ejercicioSimpson,
    ejercicioTrapecio,
    ejercicioSimpson3_8
  }
})

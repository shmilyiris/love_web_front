import { createStore } from 'vuex'
import ModuleUser from './user'
import ModuleEvent from './event'
import ModulePhoto from './photo'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: ModuleUser,
    event: ModuleEvent,
    photo: ModulePhoto,
  }
})

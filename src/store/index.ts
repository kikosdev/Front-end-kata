import { createStore } from 'vuex'
import authStore from './modules/auth.store'

export default createStore({
  modules: {
    authStore
    // Add more modules as needed
  }
})

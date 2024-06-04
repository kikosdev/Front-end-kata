interface User {
  name: string
  email: string
}

const state: { user: User } = {
  user: {
    name: '',
    email: ''
  }
}

const mutations = {
  setCurrentUser(state: { user: User }, user: User) {
    state.user = user
  }
}

const actions = {
  setCurrentUser(context: any, user: User) {
    context.commit('setCurrentUser', user)
  },

  async loginAction(context: any, user: User): Promise<User> {
    context.commit('setCurrentUser', user)
    return user
  },

  async registerAction(context: any, user: User): Promise<User> {
    context.commit('setCurrentUser', user)
    return user
  }
}

const getters = {
  getCurrentUser(state: { user: User }): User {
    return state.user
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

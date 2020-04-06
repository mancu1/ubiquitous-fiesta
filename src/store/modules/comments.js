export default {
  state: {
    todos: ""
  },

  getters: {
    TODOS: state => {
      return state.todos;
    }
  },

  mutations: {
      ADD_COMMENT: (state, payload) => {
      state.todos.push(payload);
    }
  },

  actions: {

    CREATE_COMMENT:  (context, payload) => {
        context.commit("ADD_TODO", payload);
    }
  }
};

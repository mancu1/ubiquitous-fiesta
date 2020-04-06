export default {
  state: {
    commentsArr: [],
    currentComment: "",
    currentUser: ""
  },
  getters: {
    getComments: state => state.commentsArr,
    getCurrentComment: state => state.currentComment,
    getCurrentUser: state => state.currentUser
  },

  mutations: {
    ADD_COMMENT: (state, comment) => {
      let stateArr = state.commentsArr;
      stateArr.push(comment);
      state.commentsArr = stateArr;
    },
    SET_CURRENT_COMMENT: (state, comment) => {
      state.currentComment = comment;
    },
    SET_CURRENT_USER: (state, userName) => {
      state.currentUser = userName;
    }
  },

  actions: {
    CREATE_COMMENT: async (context, comment) => {
      context.commit("ADD_COMMENT", comment);
      context.commit("SET_CURRENT_COMMENT", ""),
        context.commit("SET_CURRENT_USER", "");
    }
  }
};

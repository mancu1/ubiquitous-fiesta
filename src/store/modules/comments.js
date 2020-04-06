export default {
  state: {
    commentsArr: [],
    currentComment: ""
  },

  getters: {
    getComments: state => state.commentsArr,
    getCurrentComment: state => state.currentComment
  },

  mutations: {
    ADD_COMMENT: (state, comment) => {
      let stateArr = state.commentsArr;
      stateArr.push(comment);
      state.commentsArr = stateArr;
    },
    SET_CURRENT_COMMENT: (state, comment) => {
      state.currentComment = comment;
    }
  },

  actions: {
    CREATE_COMMENT: async (context, comment) => {
      context.commit("ADD_COMMENT", comment);
      context.commit("SET_CURRENT_COMMENT", "");
    }
  }
};
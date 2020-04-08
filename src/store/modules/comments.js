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
    },
    UPDATE_COMMENT: (state, comment) => {
      state.commentsArr = comment;
    }
  },

  actions: {
    CREATE_COMMENT: async (context, comment) => {
      context.commit("ADD_COMMENT", comment);
      context.commit("SET_CURRENT_COMMENT", "");
      context.commit("SET_CURRENT_USER", "");
    },
    ALL_POSTS: async context => {
      let res = await fetch(
        "https://jsonplaceholder.typicode.com/comments?postId=10"
      );
      let comment = await res.json();
      context.commit("UPDATE_COMMENT", comment);
    }
  }
};

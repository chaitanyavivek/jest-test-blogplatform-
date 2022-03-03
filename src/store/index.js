import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
// import axios from 'axios'
Vue.use(Vuex);

const state = {
  blogs: [],
  count: 1,
  blog: {},
};
const plugins = [createPersistedState()];
const mutations = {
  PUBLISH_PAGE(state, blog) {
    state.blogs.push(blog);
    state.count += 1;
  },
  DELETE_BLOG(state, id) {
    console.log("Inside mutation");
    let blogs = state.blogs;
    console.log(id);
    blogs = blogs.filter((eachblog) => eachblog.id !== id);
    console.log("After deletion", blogs);
    state.blogs = blogs;
    console.log("Done");
  },
  EDIT_POST(state, blog) {
    state.blogs.forEach((b) => {
      if (b.id === blog.id) {
        b = blog;
      }
    });
  },
};
const actions = {
  publishPage({ commit }, blog) {
    commit("PUBLISH_PAGE", blog);
  },
  deleteBlog({ commit }, blog) {
    console.log("Inside action");
    commit("DELETE_BLOG", blog);
  },
  editPost({ commit }, blog) {
    commit("EDIT_POST", blog);
  },
};

const getters = {
  blogsLists(state) {
    return state.blogs;
  },
  blogToEdit(state) {
    return state.blog;
  },
};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins,
});

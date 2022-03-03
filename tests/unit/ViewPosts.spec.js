import { createLocalVue, shallowMount } from "@vue/test-utils";
import ViewPosts from "@/components/ViewPosts";
import EditPosts from "@/components/EditPosts";
import Vuex from "vuex";
import Router from "vue-router";
const localVue = createLocalVue();
localVue.use(Vuex);
let router = new Router({
  routes: [
    {
      path: "/EditPosts/:id",
      params: true,
      name: "EditPosts",
      component: EditPosts,
    },
  ],
});
function getStore() {
  const state = {
    blog: {},
    blogs: [
      {
        id: 1,
        title: "welcome",
        description: "welcome world",
      },
    ],
    count: 1,
  };
  const mutations = {};
  const actions = {
    deleteBlog: jest.fn(),
    editPost: jest.fn(),
  };
  const getters = {
    blogsLists: (state) => state.blogs,
  };
  const options = {
    state,
    mutations,
    actions,
    getters,
  };
  const store = new Vuex.Store(options);

  return {
    store,
    ...options,
  };
}

describe("ViewPosts.vue", () => {
  let wrapper, vm;
  const { store } = getStore();
  beforeEach(() => {
    wrapper = shallowMount(ViewPosts, {
      localVue,
      store,
      router,
      mocks: {
        $router: {
          push: jest.fn(),
        },
      },
    });
    vm = wrapper.vm;
  });

  test("Initialized well", () => {
    expect(vm).toBeTruthy();
  });
  it("should view all blogs", () => {
    vm.search = "";
    expect(vm.$store.getters.blogsLists).toHaveBeenCalled;
    expect(vm.blogList).toEqual(vm.$store.state.blogs);
  });
  it("delete method", () => {
    vm.search = "H";
    const spy = jest.spyOn(vm, "deleteBlog");
    vm.deletedBlog();
    expect(spy).toHaveBeenCalled();
  });
  it("delete method without search", () => {
    const spy = jest.spyOn(vm, "deleteBlog");
    vm.deletedBlog();
    expect(spy).toHaveBeenCalled();
  });
  it("editing method", () => {
    vm.search = "H";
  });
  it("editing method without search", () => {
    const res = {
      id: 1,
      title: "Hii",
      description: "Hello",
    };
    vm.editingBlog(res);
    expect(vm.$store.state.blog).toEqual(res);
  });
});

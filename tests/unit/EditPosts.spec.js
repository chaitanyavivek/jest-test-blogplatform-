import { createLocalVue, shallowMount } from "@vue/test-utils";
import EditPosts from "@/components/EditPosts";
import ViewPosts from "@/components/ViewPosts";
import Vuex from "vuex";
import Router from "vue-router";
const localVue = createLocalVue();
localVue.use(Vuex);
let router = new Router({
  routes: [
    {
      path: "/ViewPosts",
      name: "ViewPosts",
      component: ViewPosts,
    },
  ],
});
function getStore() {
  const state = {
    blog: {
      id: 1,
      title: "Helllooo",
      description: "welcomee",
    },
    blogs: [
      {
        id: 1,
        title: "Helllooo",
        description: "welcome",
      },
    ],
    count: 1,
  };
  const mutations = {};
  const actions = {
    editPost: jest.fn(),
  };
  const getters = {
    blogsLists: (state) => state.blogs,
    blogToEdit: (state) => state.blogs,
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

describe("EditPosts.vue", () => {
  let wrapper, vm;
  const { store } = getStore();
  beforeEach(() => {
    wrapper = shallowMount(EditPosts, {
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
  it("edit a blog", () => {
    vm.blog = vm.$store.state.blog;
    const spy = jest.spyOn(vm, "editPost");
    vm.editingPost();
    expect(spy).toBeCalled();
  });
  it("not edit a blog", () => {
    vm.blog = {
      id: 3,
      title: "",
      description: "",
    };
    const spy = jest.spyOn(vm, "editPost");
    vm.editingPost();
    expect(spy).not.toHaveBeenCalled();
  });
  it("not edit a blog", () => {
    vm.blog = {
      id: 3,
      title: "Hii vivek a a a a a a a a a a a a a",
      description: "vivek",
    };
    const spy = jest.spyOn(vm, "editPost");
    vm.editingPost();
    expect(spy).not.toHaveBeenCalled();
  });
});

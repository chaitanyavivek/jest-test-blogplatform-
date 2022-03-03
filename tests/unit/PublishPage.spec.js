import { createLocalVue, shallowMount } from "@vue/test-utils";
import PublishPage from "@/components/PublishPage";
import Vuex from "vuex";
const localVue = createLocalVue();
localVue.use(Vuex);

function getStore() {
  const actions = {
    addBlog: jest.fn(),
  };
  const getters = {};
  const options = {
    actions,
    getters,
  };
  const store = new Vuex.Store(options);

  return {
    store,
    ...options,
  };
}

describe("PublishPage.vue", () => {
  let wrapper, vm;
  const { store } = getStore();
  beforeEach(() => {
    wrapper = shallowMount(PublishPage, {
      localVue,
      store,
    });
    vm = wrapper.vm;
  });

  test("Initialized well", () => {
    expect(vm).toBeTruthy();
  });
  it("should add new blog", () => {
    vm.blog = {
      id: 1,
      title: "Hii vivek",
      description: "Hello",
    };
    vm.submitted = false;
    const spy = jest.spyOn(vm, "publishPage");
    vm.publishedpage();
    expect(spy).toBeCalled();
    expect(spy).toHaveBeenCalledWith(vm.blog);
    expect(vm.submitted).toEqual(true);
  });
  it("should add not add new blog", () => {
    vm.blog = {
      id: 2,
      title: "Hii chaitanya",
      description: "",
    };
    vm.submitted = false;
    const spy = jest.spyOn(vm, "publishPage");
    vm.publishedpage();
    expect(spy).not.toHaveBeenCalled();
    expect(vm.submitted).toEqual(false);
  });
  it("should not add new blog", () => {
    vm.blog = {
      id: 3,
      title: "Hii vivek a a a a a a a a a a a a a",
      description: "vivek",
    };
    vm.submitted = false;
    const spy = jest.spyOn(vm, "publishPage");
    vm.publishedpage();
    expect(spy).not.toHaveBeenCalled();
    expect(vm.submitted).toEqual(false);
  });
});

import store from "@/store/index";

describe("MUTATIONS store/index.js", () => {
  const blog = {
    id: 1,
    title: "welcome",
    description: "welcome to the world",
  };
  const blogs = [
    {
      id: 1,
      title: "welcome",
      description: "welcome to the world",
    },
  ];
  test("PUBLISH_PAGE", () => {
    store.commit("PUBLISH_PAGE", blog);
    expect(store.state.blogs).toStrictEqual(blogs);
  });
  test("DELETE_BLOG", () => {
    store.commit("PUBLISH_PAGE", blog);
    store.commit("DELETE_BLOG", 1);
    expect(store.state.blogs).toStrictEqual([]);
  });
});

describe("GETTERS store/index.js", () => {
  const blog1 = {
    id: 1,
    title: "Hii",
    description: "Hello",
  };
  test("blogsLists", () => {
    expect(store.getters.blogsLists).toEqual(store.state.blogs);
  });
  test("blogtoEdit", () => {
    store.state.blog = blog1;
    console.log(store.state.blog);
    expect(store.getters.blogToEdit).toEqual(blog1);
  });
});

import swal from "sweetalert";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapGetters(["blogsLists"]),
    blogList() {
      return this.blogsLists.filter((blog) => {
        // console.log('helllooo', this.blogsLists)
        // return this.blogsLists
        return blog.title.match(this.search);
      });
    },
  },
  methods: {
    ...mapActions(["deleteBlog"]),

    deletedBlog(id) {
      // this.$store.dispatch('deleteBlog', id)
      // this.deleteBlog(id)
      swal({
        text: "deleted successfully",
        icon: "succeess",
      });
      this.deleteBlog(id);
    },
    editingBlog(blog) {
      this.$store.state.blog = blog;
      console.log(this.$store.state.blog);
      this.$router.push({ name: "EditPosts", params: { id: blog.id } });
    },
  },
};

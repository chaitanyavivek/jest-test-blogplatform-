import swal from "sweetalert";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      blog: this.$store.getters.blogToEdit,
    };
  },
  computed: {
    ...mapGetters(["blogsLists"]),
  },
  //   mounted() {
  //     this.id = this.$route.params.id;
  //     this.blog = this.blogsLists.find((blog) => blog.id === this.id);
  //   },

  methods: {
    ...mapActions(["editPost"]),
    editingPost() {
      if (
        this.blog.title &&
        this.blog.description &&
        this.blog.title.split(" ").length < 10
      ) {
        const editedPost = {
          id: this.blog.id,
          title: this.blog.title,
          description: this.blog.description,
        };
        // this.$store.dispatch('editPost', editedPost)
        this.editPost(editedPost);
        swal({
          text: "edited successfully",
          icon: "success",
        });
        this.$router.push("/ViewPosts");
      } else if (this.blog.title.split(" ").length >= 10) {
        swal({
          text: "Title must not be greater than 10 words",
          icon: "warning",
        });
      }
    },
  },
};

import swal from "sweetalert";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      blog: {
        id: this.$store.state.count,
        title: "",
        description: "",
      },
      submitted: false,
    };
  },
  methods: {
    ...mapActions(["publishPage"]),
    publishedpage() {
      if (
        this.blog.title &&
        this.blog.description &&
        this.blog.title.split(" ").length < 10
      ) {
        // console.log(this.blog.title.split(' ').length)
        this.publishPage(this.blog);

        swal({
          text: "published sucessfully",
          icon: "success",
        });
        this.submitted = true;
      } else if (this.blog.title.split(" ").length >= 10) {
        swal({
          text: "must be less than 10 words",
          icon: "error",
        });
      }
    },
  },
};

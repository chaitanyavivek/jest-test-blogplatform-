<template>
  <div>
    <navBar></navBar>
    <router-view />
  </div>
</template>
<script>
import navBar from "@/components/navBar";
export default {
  name: "App",
  components: {
    navBar,
  },
};
</script>

<template>
  <div class="home">
    home
    <Menu />
    <ShowProject />
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import ShowProject from "../components/ShowProject.vue";
export default {
  name: "HomeView",
  components: {
    Menu,
    ShowProject,
  },
};
</script>

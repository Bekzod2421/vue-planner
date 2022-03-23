<template>
  <div class="home">
    home
    <Menu />
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <ShowProject :project="project" @delete="handleDelete" />
      </div>
    </div>
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
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id;
      });
    },
  },
};
</script>

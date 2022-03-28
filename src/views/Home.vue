<template>
  <div class="home">
    <Menu
      @filter="
        {
          filter = $event;
        }
      "
      :filter="filter"
    />
    <div v-if="projects.length">
      <div v-for="project in filterProjects" :key="project.id">
        <ShowProject
          :project="project"
          @delete="handleDelete"
          @done="handleDone"
        />
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
      filter: "all",
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
    handleDone(id) {
      let p = this.projects.find((done) => {
        return done.id === id;
      });
      p.done = !p.done;
    },
  },
  computed: {
    filterProjects() {
      if (this.filter === "com") {
        return this.projects.filter((item) => item.done);
      }
      if (this.filter === "uncom") {
        return this.projects.filter((item) => !item.done);
      }
      return this.projects;
    },
  },
};
</script>

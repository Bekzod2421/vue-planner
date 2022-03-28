<template>
  <form @submit.prevent="editProject" class="pform">
    <label for="title">Title</label>
    <input type="text" v-model="title" required id="title" />
    <label for="text">Details</label>
    <textarea id="text" v-model="text" required></textarea>
    <div>
      <button @click="cancel" class="cancel">Cancel</button>
      <button>Edit Project</button>
    </div>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      text: "",
      uri: "http://localhost:3000/projects/" + this.id,
    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        (this.title = data.name), (this.text = data.text);
      })
      .catch((err) => console.log(err.message));
  },
  methods: {
    editProject() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name: this.title,
          text: this.text,
        }),
      })
        .then(this.$router.push("/"))
		  .catch(err => console.log(err.message));
    },
    cancel() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>
<template>
  <div class="project">
    <div class="title">
      <h3 @click="showT = !showT" ref="title">{{ project.name }}</h3>
      <div class="icons">
        <span class="material-icons" @click="deleteProject">delete</span>
        <span class="material-icons">edit</span>
        <span class="material-icons">done</span>
      </div>
    </div>
    <div class="text" v-if="showT">
      <p>{{ project.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showT: false,
      uri: "http://localhost:3000/projects/" + this.project.id,
    };
  },
  methods: {
    deleteProject() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete", this.project.id))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style lang="scss">
.project {
  box-shadow: 0px 0px 10px grey;
  border-radius: 4px;
  border-left: 4px solid crimson;
  margin: 20px auto;
  padding: 20px;
  .title {
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    h3 {
      font-weight: bold;
      cursor: pointer;
    }
    .icons {
      span {
        cursor: pointer;
        opacity: 0.5;
        margin-left: 10px;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
  .text {
  }
}
</style>>

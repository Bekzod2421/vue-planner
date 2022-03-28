<template>
  <div class="project" :class="{ done: project.done }">
    <div class="title">
      <h3 @click="showT = !showT">{{ project.name }}</h3>
      <div class="icons">
        <span class="material-icons" @click="deleteProject">delete</span>
        <router-link :to="{ name: 'edit', params: { id: project.id } }">
          <span class="material-icons">edit</span>
        </router-link>
        <span
          class="material-icons"
          @click="doneProject"
          :class="{ done: project.done }"
          >done</span
        >
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
    doneProject() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ done: !this.project.done }),
      })
        .then(() => this.$emit("done", this.project.id))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style lang="scss">
.project {
  box-shadow: 4px 4px 5px rgba(grey, 0.2);
  border-radius: 4px;
  background-color: #fff;
  border-left: 4px solid crimson;
  margin: 20px auto;
  padding: 20px;
  &.done {
    border-left: 4px solid #00ce89;
  }
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
      flex-grow: 1;
    }
    .icons {
      a {
        &:visited {
          color: #999;
        }
      }
      span,
      a span {
        cursor: pointer;
        opacity: 0.5;
        margin-left: 10px;
        &.done {
          color: #00ce89;
          opacity: 1;
        }
        &:hover {
          opacity: 1;
        }
      }
    }
  }
  .text {
    font-size: 18px;
  }
}
</style>>

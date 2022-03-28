<template>
  <form @submit.prevent="addProject" class="pform">
    <label for="title">Title</label>
    <input type="text" v-model="title" required id="title" />
    <label for="text">Details</label>
    <textarea id="text" v-model="text" required></textarea>
    <div>
      <button @click="cancel" class="cancel">Cancel</button>
      <button>Add Project</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      text: "",
    };
  },
  methods: {
    addProject() {
      let project = {
        name: this.title,
        text: this.text,
        done: false,
      };
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(project),
      })
        .then(
          setTimeout(() => {
            alert("ok");
            this.$router.push("/");
          }, 300)
        )
        .catch((err) => console.log(err.message));
    },
    cancel() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
$clr: #bbb;
form.pform {
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 50px 30px 30px 30px;
  border-radius: 10px;
  margin-top: 40px;
  label {
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: $clr;
    letter-spacing: 1px;
    margin: 2px 0 10px 0;
  }
  input {
    padding: 10px;
    border-bottom: 1px solid $clr;
    margin-bottom: 40px;
    font-weight: bold;
    &:focus {
      border: 1px solid black;
    }
  }
  textarea {
    padding: 10px;
    min-height: 100px;
    border: 1px solid $clr;
    margin-bottom: 20px;
    margin-top: 10px;
    resize: vertical;
    &:focus {
      border: 1px solid black;
    }
  }
  button {
    font-size: 16px;
    background-color: #00ce89;
    border-radius: 6px;
    padding: 10px;
    color: #fff;
    align-self: center;
  }
  .cancel {
    margin-right: 15px;
    background-color: crimson;
  }
}
</style>>


<template>
  <nav class="top-menu">
    <router-link :to="{ name: 'home' }">Projects</router-link>
    <router-link :to="{ name: 'add' }">Add a New Project</router-link>
  </nav>
  <router-view />
</template>
<script>
export default {};
</script>
<style lang="scss">
body {
  background-color: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
  .top-menu {
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    a {
      font-size: 18px;
      font-weight: bold;
      color: #555;
      padding: 10px 0;
      &.router-link-exact-active {
        border-bottom: 1px solid lightseagreen;
      }
    }
  }
}
</style>

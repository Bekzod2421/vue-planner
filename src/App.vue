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
  color: #999;
  .top-menu {
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 20px;
    margin: 40px auto;
    a {
      font-size: 18px;
      font-weight: bold;
      color: #555;
      margin: 0 10px;
      &.router-link-exact-active {
        border-bottom: 2px solid #00ce89;
        padding-bottom: 4px;
      }
    }
  }
}
</style>

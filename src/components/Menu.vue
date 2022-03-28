<template>
  <div class="nav-menu">
    <button @click="filterProject('all')" :class="{ active: filter === 'all' }">
      View all
    </button>
    <button
      @click="filterProject('com')"
      class="com"
      :class="{ active: filter === 'com' }"
    >
      Completed
    </button>
    <button
      @click="filterProject('uncom')"
      class="uncom"
      :class="{ active: filter === 'uncom' }"
    >
      Uncompleted
    </button>
  </div>
</template>

<script>
export default {
  props: ["filter"],
  methods: {
    filterProject(param) {
      this.$emit("filter", param);
    },
  },
};
</script>

<style lang="scss">
.nav-menu {
  button {
    padding: 10px;
    margin-right: 15px;
    background-color: #fff;
    border-radius: 6px;
    font-size: 18px;
    &.active,
    &:hover {
      background-color: #00ce89;
      color: #fff;
    }
    &.com {
      color: #00ce89;
      &:hover,
      &.active {
        color: #fff;
      }
    }
    &.uncom {
      color: crimson;
      &:hover,
      &.active {
        background-color: crimson;
        color: #fff;
      }
    }
  }
}
</style>
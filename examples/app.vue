<template>
  <div class="yys-app">
    <h1>Welcome To Typescript {{ name }}.</h1>
    <div class="menus">
      <router-link to="/">Sidebar</router-link>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" src="./app.ts">
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}

.yys-app {
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  height: 100%;
  background: #f1f1f1;

  .menus {
    font-size: 24px;
    font-weight: bold;
    a:link,
    a:visited,
    a:hover,
    a:active {
      color: #999;
      text-decoration: none;
      &.router-link-exact-active {
        color: #191919;
        text-decoration: underline;
      }
    }
  }

  .container {
    flex: 1;
    margin-top: 10px;
  }
}
</style>
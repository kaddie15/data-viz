<template>
  <nav class="flex justify-center p-4">
    <router-link class="mx-1" to="/">Visualizations</router-link> |
    <router-link class="mx-1" to="/about">About</router-link> |
    <router-link class="mx-1" to="/about">Credits</router-link>
  </nav>
  <div class="p-6">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>

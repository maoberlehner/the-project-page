<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
@import '~@avalanche/generic-box-sizing-reset';
@import '~normalize-scss/sass/normalize/import-now';

html {
  line-height: 1.6;
  color: #444;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

h1,
h2,
h3,
h4 {
  line-height: 1.2;
}
</style>

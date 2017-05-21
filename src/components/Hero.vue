<template>
  <div class="c-hero">
    <img src="../assets/logo.svg" alt="the project page">
    <h1 class="c-hero__intro">Kickstart your project<br>with the-project-page</h1>
  </div>
</template>

<script>
export default {
  name: 'hero',
};
</script>

<style lang="scss" scoped>
@import '../styles/settings';

.c-hero {
  padding: setting-spacing(xxxl);
  text-align: center;
  color: setting-color(a, contrast);
  background: setting-color(a);
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 5vw),
    0 100%
  );
}

.c-hero__intro {
  font-size: 1.5em;
  font-weight: 400;

  &::before {
    display: block;
    margin: setting-spacing(l) auto;
    width: 3em;
    border-bottom: 0.125em solid;
    content: '';
  }
}
</style>

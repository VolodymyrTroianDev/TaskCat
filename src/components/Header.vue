<script setup>
import ChristmasLights from "./ChristmasLights.vue";
</script>
<template>
  <header>
    <christmas-lights />
    <nav class="nav">
      <div class="nav__container d-flex">
        <router-link to="/" active-class="nav__active-menu">Home</router-link>
        <router-link to="/cats/new" active-class="nav__active-menu"
          >Upload Photo</router-link
        >
        <router-link to="/cats/my" active-class="nav__active-menu"
          >My Cats</router-link
        >
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.nav {
  background-color: var(--background-header);
  height: 100px;
}
.nav__container {
  margin: 0 auto;
  padding-top: 40px;
  justify-content: space-evenly;
  max-width: 600px;
  & a {
    color: var(--color-btn);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    &:hover {
      color: var(--hover-color-btn);
      transition: 150ms all;
      scale: 1.2;
    }
  }
  & .nav__active-menu {
    color: var(--active-color);
    scale: 1.2;
  }
}
</style>

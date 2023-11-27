<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="logo"></div>
      <nav class="menu">
        <ul>
          <li>
            <RouterLink to="/" class="menu__link">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="menu__link">About us</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 10px 5px;
  &__container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 50px;
  }
}

.menu {
  ul > li {
    display: inline-block;

    &:not(:first-of-type) {
      margin-left: 10px;
    }
  }
}
</style>

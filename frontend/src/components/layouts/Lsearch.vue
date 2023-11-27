<script setup>
import Usearch from "@/components/UI/Usearch.vue";
</script>

<template>
  <section class="search">
    <div class="search__container">
      <Usearch class="search__input" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.search {
  &__container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
}
</style>

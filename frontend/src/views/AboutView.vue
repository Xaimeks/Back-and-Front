<script setup>
import { onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import { useSearchStore } from "@/stores/search.js";
const searchStore = useSearchStore();

onUnmounted(() => searchStore.nullSearch());
</script>

<template>
  <main class="about">
    <div>{{ searchStore.search }}</div>
  </main>
</template>

<style lang="scss" scoped></style>

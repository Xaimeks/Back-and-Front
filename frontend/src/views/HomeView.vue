<script setup>
import Lsearch from "@/components/layouts/Lsearch.vue";

import Tabs from "@/components/Home/Tabs.vue";
import Tasks from "@/components/Home/Tasks.vue";
import ToDo from "@/components/Home/ToDo.vue";

import { RouterLink } from "vue-router";
import { onUnmounted, ref } from "vue";

import { useTabsStore } from "@/stores/tabs.js";
const tabsStore = useTabsStore();
import { useSearchStore } from "@/stores/search.js";
const searchStore = useSearchStore();

onUnmounted(() => searchStore.nullSearch());

const tabs = {
  ToDo,
  Tasks,
};
</script>

<template>
  <main class="home">
    <Lsearch />
    <Tabs />
    <KeepAlive>
      <component :is="tabs[tabsStore.currentTab]" />
    </KeepAlive>
  </main>
</template>

<style lang="scss" scoped></style>

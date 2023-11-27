<script setup>
import Utab from "@/components/UI/Utab.vue";
import { ref } from "vue";

import { useTabsStore } from "@/stores/tabs.js";
const tabsStore = useTabsStore();
</script>

<template>
  <section class="tabs">
    <div class="tabs__container">
      <Utab
        v-model="tabsStore.currentTab"
        :checked="true"
        :id="'tasks'"
        :label="'Tasks'"
        :value="'Tasks'"
        :name="'todo-tabs'" />
      <Utab
        v-model="tabsStore.currentTab"
        :id="'todo'"
        :label="'To Do'"
        :value="'ToDo'"
        :name="'todo-tabs'" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.tabs {
  margin-top: 20px;
  &__container {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    gap: 10px;
  }
}
</style>

<script setup>
import Utask from "@/components/UI/Utask.vue";
import { ref } from "vue";

const tasks = ref([
  {
    id: Date.now(),
    label: "First task",
  },
]);
</script>

<template>
  <section class="todo">
    <div class="todo__container">
      <Utask
        v-for="task in tasks"
        @update:selected="setSelected"
        :id="task.id"
        :label="task.label"
        :value="task.label" />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>

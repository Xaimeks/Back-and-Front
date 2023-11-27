<script setup>
import Utask from "@/components/UI/Utask.vue";
import { useTasksStore } from "@/stores/tasks.js";
import { ref } from "vue";

const tasksStore = useTasksStore();

function setSelected(e) {
  console.log(e);
}
</script>

<template>
  <section class="todo">
    <div class="todo__container">
      <Utask
        v-for="task in tasksStore.tasks"
        @update:selected="setSelected"
        :id="`${task.id}`"
        :label="task.label"
        :value="task.label" />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>

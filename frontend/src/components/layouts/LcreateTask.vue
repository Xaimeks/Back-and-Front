<script setup>
import { reactive, ref } from "vue";
import { useTasksStore } from "@/stores/tasks.js";

const tasksStore = useTasksStore();

const needModal = ref(false);

const taskTitle = ref("");

const task = {
  title: "",
  id: "",
};

function handleClick() {
  task.id = Date.now();
  task.title = taskTitle.value;
  tasksStore.addTask(task);
  needModal.value = false;
  taskTitle.value = "";
}
</script>

<template>
  <section class="create-task">
    <div class="create-task__container">
      <article v-if="needModal" class="create-task__modal">
        <input v-model="taskTitle" type="text" />
        <button @click="handleClick" class="create-task__add">Add task</button>
      </article>
      <button @click="needModal = true" class="create-task__add">
        Add task
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.create-task {
  margin-top: 20px;
  &__container {
    display: flex;
    justify-content: center;
  }

  &__modal {
    position: absolute;
    display: block;
  }

  &__add {
    padding: 10px;
    text-align: center;
    max-width: 300px;
    width: 100%;
    min-width: 100px;
  }
}
</style>

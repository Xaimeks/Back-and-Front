import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref([]);

  /* 
  Отправляю 1 таск на сервер.
  Таск имеет стркутуру объекта {title: 'TaskTitle", id: TaskId}
  TaskId пока что - время создания таска, это число, время в миллисекундах
  */

  async function addTask(url="", task) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const responsedTask = await response.json()

    console.log(responsedTask);
  }

  async function removeTask(url="", task) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const responsedTask = await response.json()

    console.log(responsedTask);
  }

  return { tasks, addTask, removeTask };
})
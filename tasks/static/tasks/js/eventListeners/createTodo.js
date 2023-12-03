import { todoList } from '../components/todo.js';
import {todoCreateForm} from '../elements.js';

const todoCreateFormInput = todoCreateForm.querySelector('.create-form__title-input');
const createButton = todoCreateForm.querySelector('.create-todo-form__button');

createButton.addEventListener('click', () => {
  const todo = {
    id: Date.now(),
    title: todoCreateFormInput.value,
    deleted: false,
  }
  todoList.push(todo);
  createTodo(todoList);
  console.log(createTodo(todoList));
})

// тебе отправляется массив всех todo

async function createTodo(todoList) {
  const response = await fetch('http://127.0.0.1:8000/', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoList),
  });
  return await response.json();
}

export default {};
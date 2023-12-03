const main = document.getElementById('main');

export const tasks = main.querySelector('.tasks');
export const todo = main.querySelector('.todo');

export const searchElement = document.body.querySelector('.u-search');
export const tabsContainer = document.body.querySelector('.tabs__container');
export const tabs = tabsContainer.querySelectorAll('.u-tab');

export const todoContainer = todo.firstElementChild;
export const todoCreateForm = todoContainer.firstElementChild;
export const todoContent = todoContainer.querySelector('.todo__content');

export const getCheckboxes = () => {
  todoCheckboxes = todoContainer.querySelectorAll('.u-todo')
}
export let todoCheckboxes; 
getCheckboxes();
import {todoList} from './../components/todo.js'

const searchElement = document.body.querySelector('.u-search');

const todo = document.querySelector('.todo__container');

export let searchedList = todoList;

const renderSearchedList = () => {
  let html = '';
  for(let i = 0; i < searchedList.length; i++){
    const obj = searchedList[i];
    html += `<input type="checkbox" class="u-todo" id="${obj.id}"><label for="${obj.id}" class="u-todo-label">${obj.title}</label>`
  }
  todo.innerHTML = html;
}

searchElement.addEventListener('input', (e) => {
  let search = e.target.value.toLowerCase();
  searchedList = todoList.filter((task) => task.title.toLowerCase().includes(search));
  renderSearchedList();
})
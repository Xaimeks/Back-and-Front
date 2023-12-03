import {todoList} from './../components/todo.js'
import { searchElement, todoCheckboxes } from "../elements.js";
import { useCheckboxes } from '../use/useCheckboxes.js';
import { useSearchedList } from '../use/useSearchedList.js'

export let searchedList = todoList;

useCheckboxes(todoCheckboxes);
useSearchedList(searchedList);

searchElement.addEventListener('input', (e) => {
  let search = e.target.value.toLowerCase();
  searchedList = todoList.filter((task) => task.title.toLowerCase().includes(search));
  useSearchedList(searchedList);
})
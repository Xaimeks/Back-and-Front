import { todoContent, getCheckboxes, todoCheckboxes } from "../elements.js";
import { useCheckboxes } from '../use/useCheckboxes.js';

export const useSearchedList = (searchedList) => {
  let html = '';
  for(let i = 0; i < searchedList.length; i++){
    const obj = searchedList[i];
    html += `<input type="checkbox" class="u-todo" id="${obj.id}" ${obj.deleted ? 'checked': ''}><label for="${obj.id}" class="u-todo-label">${obj.title}</label>`
  }
  todoContent.innerHTML = html;
  getCheckboxes();
  useCheckboxes(todoCheckboxes);
}
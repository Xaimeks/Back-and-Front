import { todoList } from "../components/todo.js";

export const useCheckboxes = (checkboxList) => {
  for(const checkbox of checkboxList){
    checkbox.addEventListener('input', (e) => {
      
      const todo = todoList.find((obj) => {
        return obj.id === e.target.id;
      });
      
      todo.deleted = e.target.checked;
    })
  }  
}
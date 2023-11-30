const main = document.getElementById('main');

const tasks = main.querySelector('.tasks');
const todo = main.querySelector('.todo');

const tabs = document.body.querySelector('.tabs').querySelectorAll('.u-tab');

export function setActiveTab(element){
  if(element.checked && element.value === 'tasks'){
    tasks.classList.add('tasks__active');
    todo.classList.remove('todo__active');
  }else{
    todo.classList.add('todo__active');
    tasks.classList.remove('tasks__active');
  }
}

for(const el of tabs){
  setActiveTab(el);
  el.addEventListener('change', (e) => {    
    setActiveTab(e.target);
  })
}

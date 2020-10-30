'use strict';

let todoControl = document.querySelector('.todo-control'),
    headerInput  = document.querySelector('.header-input'),
    todoList  = document.querySelector('.todo-list'),
    todoCompleted  = document.querySelector('.todo-completed'),
// console.log(todoControl)
    todoData = [
      { value: 'Выгулять собаку',
        complited: false },
      { value: 'Закупить продукты',
        complited: true },
      { value: 'Багануш',
      complited: true }
    ];


let renderTodo = function(){
  todoList.textContent = '';
  todoCompleted.textContent = '';
  todoData.forEach(function(item){
    let todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
                          '<div class="todo-buttons">' +
                            '<button class="todo-remove"></button>' +
                            '<button class="todo-complete"></button>' +
                          '</div>';
    if(item.complited){
      todoCompleted.append(todoItem);
    } else {
      todoList.append(todoItem);
    }
    
  });
};



todoControl.addEventListener('submit', function(event){
  event.preventDefault();
  let newTodo = {value: headerInput.value, complited: false};
  todoData.push(newTodo);
  renderTodo();
});

// console.log(todoData[0].value)
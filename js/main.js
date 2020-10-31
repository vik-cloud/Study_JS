'use strict';

let todoControl = document.querySelector('.todo-control'),
    headerInput  = document.querySelector('.header-input'),
    todoList  = document.querySelector('.todo-list'),
    todoCompleted  = document.querySelector('.todo-completed');

let todoData = [];

let getDataStorage = function(){
  if(localStorage.todoDataStorage){
    todoData = JSON.parse(localStorage.getItem('todoDataStorage'));
  }
};
let downDataStorage = function(){
  localStorage.setItem('todoDataStorage', JSON.stringify(todoData));
};


let renderTodo = function(){
  todoList.textContent = '';
  todoCompleted.textContent = '';
  todoData.forEach(function(item, i, arr){
    let todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
                          '<div class="todo-buttons">' +
                            '<button class="todo-remove"></button>' +
                            '<button class="todo-complete"></button>' +
                          '</div>';
    if(item.complited){
      todoCompleted.prepend(todoItem);
    } else {
      todoList.prepend(todoItem);
    }
    let todoCompleteBtn = todoItem.querySelector('.todo-complete');
    todoCompleteBtn.addEventListener('click', function(){
      if(item.complited){
        item.complited = false;
      } else {
        item.complited = true;
      }
      downDataStorage();
      renderTodo();
    })

    let todoRemove = todoItem.querySelector('.todo-remove');
    todoRemove.addEventListener('click', function(){
      arr = arr.splice(i, 1);
      downDataStorage();
      renderTodo();
    })
  });
};

todoControl.addEventListener('submit', function(event){
  event.preventDefault();
  if(headerInput.value !== ''){
    let newTodo = {value: headerInput.value, complited: false};
    todoData.push(newTodo);
    downDataStorage();
    renderTodo();
    todoControl.reset();
  }
});
getDataStorage();
renderTodo();



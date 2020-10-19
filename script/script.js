'use strict';

let number = function(n) {
 return !isNaN(parseInt(n)) && isFinite(n);
};
  


let gameFunc = function() {
  let randomNum = Math.floor(Math.random() * 100 + 1); 
  let gameSearch = function() {
    let num = prompt('Угадай число от 1 до 100');
    // console.log(randomNum);
    if(num === null) {
      alert('Игра окончена');

    } else if(!number(num)) {
      let unswer = confirm('Введи число!')
      if(unswer === true) {
        gameSearch();
      } else {
        alert('Игра окончена');      
      }

    } else if(num < randomNum){
      alert('Загаданное число больше');      
      gameSearch();
      
    } else if(num > randomNum){
      alert('Загаданное число меньше');      
      gameSearch();
      
    } else if(+num === randomNum){
      alert('Поздравляю, Вы угадали!!!');
      gameFunc();
    }
  }
  return gameSearch();
};

gameFunc();


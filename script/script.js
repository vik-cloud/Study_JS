'use strict';

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}



let money; 
let income = 'фриланс';

start();

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 500000;
let period = 10;


function showTypeOf(data) {
  console.log('Тип данных значения "' + data + '":', typeof data);
} 


function start() {
  do {
    money = prompt('Ваш месячный доход?', 50000);
  }
  while(!isNumber(money));
  return money;
}


showTypeOf(money);
showTypeOf(income);
showTypeOf(addExpenses);

console.log(addExpenses.toLowerCase().split(', '));



function getExpensesMonth() {
  let expenses = [];
  let sum = 0;
  for (let i=0; i<2; i++){
    expenses[i] = prompt('Введите обязательную статью расходов?');
    sum += +prompt('Во сколько это обойдется?', 10000);
  }
  return sum;
}




let expensesMonth = getExpensesMonth();

function getAccumulatedMonth() {
 return money - expensesMonth;
}
let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
  return  Math.ceil(mission / accumulatedMonth);
}
let targetMonth = getTargetMonth();


if (accumulatedMonth < 0){
  console.log('Цель недостижима, Вы в убытке!');
} else {
  console.log('Цель будет достигнута за', targetMonth, 'месяцев');
}

let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день:', budgetDay, 'руб.');

function getStatusIncome() {
  switch (true){
    case (budgetDay >= 1200) :
      console.log('У вас высокий уровень дохода');
      break;
    case (600 <= budgetDay && budgetDay < 1200) :
      console.log('У вас средний уровень дохода');
      break;
    case (0 <= budgetDay && budgetDay < 600) :
      console.log('К сожалению у вас уровень дохода ниже среднего');
      break;
    case (budgetDay < 0) :
      console.log('Что то пошло не так');
      break;
  }
}

console.log('Расходы за месяц:', expensesMonth, 'руб.');

getStatusIncome();




'use strict';
let amount1 = +prompt('Во сколько это обойдется?');
let amount2 = +prompt('Во сколько это обойдется?');
let expensesMonth = getExpensesMonth();
let money = +prompt('Ваш месячный доход?', 50000);
let accumulatedMonth = getAccumulatedMonth();
let mission = 500000;
let targetMonth = getTargetMonth();
let income = 'фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
let deposit = confirm('Есть ли у вас депозит в банке?');
let period = 10;
let expenses1 = prompt('Введите обязательную статью расходов?');
let expenses2 = prompt('Введите обязательную статью расходов?');



showTypeOf(money);
showTypeOf(income);
showTypeOf(addExpenses);

console.log(addExpenses.toLowerCase().split(', '));

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

function getExpensesMonth() {
  return amount1 + amount2;
}; 

console.log('Расходы за месяц:', expensesMonth, 'руб.');

function getAccumulatedMonth() {
 return money - expensesMonth;
}; 

function getTargetMonth() {
  return  Math.ceil(mission / accumulatedMonth);
}; 

function showTypeOf(data) {
  console.log('Тип данных значения "' + data + '":', typeof data);
} 

getStatusIncome();




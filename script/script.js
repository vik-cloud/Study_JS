'use strict';

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
let money;



start();


let appData = {
      budget: money,
      mission: 500000,
      income: {},
      budgetDay: 0,
      budgetMonth: 0,
      targetMonth: 0,
      expensesMonth: 0,
      addExpenses: [],
      deposit: 0,
      expenses: {},
      period: 3,
      moneyDeposit: 0,
      percentDeposit: 0,
      getExpensesMonth: function() {
          for(let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
          }
          return appData.expensesMonth;
        },
      getBudget: function() {
          appData.budgetMonth = appData.budget - appData.expensesMonth;
          appData.budgetDay = Math.floor(appData.budgetMonth / 30);
        },
      getTargetMonth: function() {
          appData.targetMonth = Math.ceil(appData.mission / appData.budgetMonth);
          return appData.targetMonth;
        },
      getStatusIncome: function() {
          switch (true){
            case (appData.budgetDay >= 1200) :
              console.log('У вас высокий уровень дохода');
              break;
            case (600 <= appData.budgetDay && appData.budgetDay < 1200) :
              console.log('У вас средний уровень дохода');
              break;
            case (0 <= appData.budgetDay && appData.budgetDay < 600) :
              console.log('К сожалению у вас уровень дохода ниже среднего');
              break;
            case (appData.budgetDay < 0) :
              console.log('Что то пошло не так');
              break;
          }
        },
      asking: function() {

        if(confirm('Есть ли у Вас дополнитеьный зароботок?')) {
          let itemIncome = prompt('Вид дополнительного зароботка', 'Фриланс').trim();
          while(itemIncome.length < 2 || !isNaN(parseFloat(itemIncome))) {
            itemIncome = prompt('Вид дополнительного зароботка', 'Фриланс');
          }
          let cashIncome = prompt('Сумма дополнительного зароботок в меясц', '5000');
          while(!isNumber(cashIncome)) {
            cashIncome = prompt('Сумма дополнительного зароботок в меясц', '5000');
          }
          appData.income[itemIncome] = +cashIncome;
          // console.log(appData.income);
        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i=0; i<2; i++){

          let key = prompt('Введите обязательную статью расходов?');
          while(key.length < 2 || !isNaN(parseFloat(key))){
            key = prompt('Введите обязательную статью расходов?');
          }

          let value = prompt('Во сколько это обойдется?', 10000);
          while (!isNumber(value)){
            value = prompt('Повторите ввод. Во сколько это обойдется?', 10000);
          }

          appData.expenses[key] = +value;
        }
      },
      getInfoDeposit: function() {
        if(appData.deposit) {
          appData.moneyDeposit = prompt('Введите сумму депозита', 1000);
          while (!isNumber(appData.moneyDeposit)){
            appData.moneyDeposit = prompt('Введите сумму депозита', 1000);
          }
          appData.percentDeposit = prompt('Введите годовой процент депозита', 10);
          while (!isNumber(appData.percentDeposit)){
            appData.percentDeposit = prompt('Введите годовой процент депозита', 10);
          }
        }
        
      },
      calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
      }
    } // End appData{}

// appData.getInfoDeposit();
appData.asking();
appData.getExpensesMonth();
appData.getBudget(); 
appData.getTargetMonth();  


function start() {
  do {
    money = prompt('Ваш месячный доход?', 50000);
  }
  while(!isNumber(money));
  money = +money;
  return money;
}

if (appData.targetMonth < 0){
  console.log('Цель не будет достигнута');
} else {
  console.log('Цель будет достигнута за', appData.targetMonth, 'месяцев');
}

console.log('Расходы за месяц:', appData.expensesMonth, 'руб.');
appData.getStatusIncome(); 

// appData.getInfoDeposit();
// console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());

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
      deposit: false,
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

        if(true) {
          let itemIncome = prompt('Вид дополнительного зароботка', 'Фриланс').trim();
          // itemIncome = +itemIncome;
          // console.log(itemIncome.trim().length < 5);
          // console.log('itemIncome', typeof itemIncome, '>',itemIncome,'<');
          // console.log((5 * 'sds').length);
          // console.log(!isNaN(+itemIncome))


          while(itemIncome.length < 2 || !isNaN(+itemIncome)) { 
            itemIncome = prompt('Вид дополнительного зароботка_2', 'Фриланс');
            
          }

          let cashIncome = prompt('Сумма дополнительного зароботок', '5000');
          while(!isNumber(cashIncome)) {
            cashIncome = prompt('Сумма дополнительного зароботок', '5000');
          }
   
          // console.log(cashIncome);
        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i=0; i<2; i++){
          let key = prompt('Введите обязательную статью расходов?'),
              value = prompt('Во сколько это обойдется?', 10000);
          while (!isNumber(value)){
            value = prompt('Повторите ввод. Во сколько это обойдется?', 10000);
          }
          appData.expenses[key] = +value;
        }
      }
    } // End appData{}


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

// console.log('Наша программа включает в себя данные:')
// for(let key in appData){
//   console.log(key, ':', appData[key])
// }




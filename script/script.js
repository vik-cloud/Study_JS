'use strict';

function isNumber(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
}


let btnStart = document.getElementById('start'),
    btnCancel = document.getElementById('cancel'),
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomeAll = document.querySelectorAll('.additional_income-item'),
    additionalIncomeFirst = additionalIncomeAll[0],
    additionalIncomeSecons = additionalIncomeAll[1],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    btnIncomeAdd = document.querySelector('.income_add'),
    incomeItems = document.querySelectorAll('.income-items'),
    btnExpensesAdd = document.querySelector('.expenses_add'),
    periodAmountValue = document.querySelector('.period-amount'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    inputAll = document.querySelectorAll('input');
    



let appData = {
      budget: '',
      income: {},
      budgetDay: 0,
      budgetMonth: 0,
      targetMonth: 0,
      expensesMonth: 0,
      addExpenses: [],
      addIncome: [],
      deposit: 0,
      expenses: {},
      moneyDeposit: 0,
      percentDeposit: 0,
      checkSalaryAmount: function(){
        btnStart.style.pointerEvents = 'none';
        salaryAmount.addEventListener('input', function(){
          if(isNumber(salaryAmount.value)){
            btnStart.style.pointerEvents = '';
          } else {
            btnStart.style.pointerEvents = 'none';
          } 
        });
      },
      start: function(){
        this.budget = salaryAmount.value;
        this.getExpenses();
        this.getExpensesMonth();
        this.getBudget(); 
        this.getIncome();
        this.getAddExpenses();
        this.getAddIncome();
        this.showResult();
        appData.disableInput();
      },
      reset: function(){
        let dataInputTextAll = document.querySelectorAll('.data input[type=text]');
        dataInputTextAll.forEach(function(item){
          item.removeAttribute('disabled');
        });
        inputAll.forEach(function(item){
          item.value = '';
        });
        btnStart.style.display = 'inline-block';
        btnCancel.style.display = 'none';
        periodSelect.value = 1;
        appData.getPeriodValue();
        appData.budget = '';
        appData.income = {};
        appData.budgetDay = 0;
        appData.budgetMonth = 0;
        appData.targetMonth = 0;
        appData.expensesMonth = 0;
        appData.addExpenses = [];
        appData.addIncome = [];
        appData.deposit = 0;
        appData.expenses = {};
        appData.moneyDeposit = 0;
        appData.percentDeposit = 0;
        let deleteAddForm = function(arr){

          incomeItems = document.querySelectorAll('.income-items');
          console.log('beefore:',arr.length);
          for (let i = arr.length - 1; i > 0; i--){
            arr[i].remove();
          } 
        };
        deleteAddForm(incomeItems);
        deleteAddForm(expensesItems);
        appData.checkSalaryAmount();
      },
      addIncomeBlock: function(){
        let incomeItemsClone = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(incomeItemsClone, btnIncomeAdd);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
          btnIncomeAdd.style.display = 'none';
        }
      },
      addExpensesBlock: function(){
        let expensesItemsClone = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(expensesItemsClone, btnExpensesAdd);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
          btnExpensesAdd.style.display = 'none';
        }
      },
      getExpensesMonth: function(){
          for(let key in this.expenses){
            this.expensesMonth += this.expenses[key];
          }
          return this.expensesMonth;
        },
      getBudget: function(){ 
          this.budgetMonth = this.budget - this.expensesMonth;
          this.budgetDay = Math.floor(this.budgetMonth / 30);
        },
      getTargetMonth: function(){
        return Math.ceil(targetAmount.value / this.budgetMonth);
      },
      getAddIncome: function(){
        additionalIncomeAll.forEach(function(item){
          item = item.value.trim();
          if(item !== ''){
            appData.addIncome.push(item);
          }
        });
      },
      getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
          item = item.trim();
          if(item !== ''){
            appData.addExpenses.push(item);
          }
        });
      },
      getExpenses: function(){
        expensesItems.forEach(function(item){
          let expensesName = item.querySelector('.expenses-title').value,
              expensesCash = item.querySelector('.expenses-amount').value;
              if(expensesName !== '' && expensesCash !== ''){
                appData.expenses[expensesName] = +expensesCash; 
              }
        });
      },
      getIncome: function(){
        incomeItems.forEach(function(item){
          let incomeName = item.querySelector('.income-title').value,
              incomeCash = item.querySelector('.income-amount').value;
              if(incomeName !== '' && incomeCash !== ''){
                appData.income[incomeName] = +incomeCash; 
                appData.budgetMonth += +incomeCash; 
              }
            });
      },
      showResult: function(){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcSavedMoney();
        periodSelect.addEventListener('input', function(){
          incomePeriodValue.value = appData.calcSavedMoney();
        });
      },
      getPeriodValue: function(){
        periodAmountValue.textContent = periodSelect.value;
      },
      calcSavedMoney: function(){
        return this.budgetMonth * periodSelect.value;
      },
      disableInput: function(){
        let dataInputTextAll = document.querySelectorAll('.data input[type=text]');
        dataInputTextAll.forEach(function(item,i){
          item.setAttribute("disabled", "disabled");
        });
        btnStart.style.display = 'none';
        btnCancel.style.display = 'inline-block';
      }
    }; // End appData{}
              
    
appData.checkSalaryAmount();

let start = appData.start.bind(appData);
btnStart.addEventListener('click',start);
btnIncomeAdd.addEventListener('click', appData.addIncomeBlock);
btnExpensesAdd.addEventListener('click', appData.addExpensesBlock);
periodSelect.addEventListener('input', appData.getPeriodValue);
btnCancel.addEventListener('click', appData.reset);







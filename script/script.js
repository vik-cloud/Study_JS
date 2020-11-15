 
'use strict';

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


const 
  btnStart = document.getElementById('start'),
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
  btnExpensesAdd = document.querySelector('.expenses_add'),
  periodAmountValue = document.querySelector('.period-amount'),
  inputAll = document.querySelectorAll('input');
  
let
  incomeItems = document.querySelectorAll('.income-items'),
  expensesItems = document.querySelectorAll('.expenses-items');



class AppData {
  constructor() {
    this.budget = '';
    this.income = {};
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.targetMonth = 0;
    this.expensesMonth = 0;
    this.addExpenses = [];
    this.addIncome = [];
    this.deposit = 0;
    this.expenses = {};
    this.moneyDeposit = 0;
    this.percentDeposit = 0;
  }
  checkSalaryAmount() {
    btnStart.style.pointerEvents = 'none';
    salaryAmount.addEventListener('input', function() {
      if(isNumber(salaryAmount.value)) {
        btnStart.style.pointerEvents = '';
      } else {
        btnStart.style.pointerEvents = 'none';
      } 
    });
  }
  start() {
    this.budget = salaryAmount.value;
    this.getExpenses();
    this.getExpensesMonth();
    this.getBudget(); 
    this.getIncome();
    this.getAddExpenses();
    this.getAddIncome();
    this.showResult();
    this.disableInput();
  }
  reset() {
    const dataInputTextAll = document.querySelectorAll('.data input[type=text]');
    dataInputTextAll.forEach(item => item.removeAttribute('disabled'));
    inputAll.forEach(item => item.value = '');
    btnStart.style.display = 'inline-block';
    btnCancel.style.display = 'none';
    periodSelect.value = 1;
    this.getPeriodValue();
    this.budget = '';
    this.income = {};
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.targetMonth = 0;
    this.expensesMonth = 0;
    this.addExpenses = [];
    this.addIncome = [];
    this.deposit = 0;
    this.expenses = {};
    this.moneyDeposit = 0;
    this.percentDeposit = 0;
    const deleteAddForm = function(arr) {
      incomeItems = document.querySelectorAll('.income-items');
      for (let i = arr.length - 1; i > 0; i--) {
        arr[i].remove();
      } 
    };
    deleteAddForm(incomeItems);
    deleteAddForm(expensesItems);
    btnIncomeAdd.style.display = 'inline-block';
    btnExpensesAdd.style.display = 'inline-block';
    this.checkSalaryAmount();
  }
  addIncomeBlock() {
    const incomeItemsClone = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(incomeItemsClone, btnIncomeAdd);
    incomeItems = document.querySelectorAll('.income-items');
    if(incomeItems.length === 3) {
      btnIncomeAdd.style.display = 'none';
    }
  }
  addExpensesBlock() {
    const expensesItemsClone = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(expensesItemsClone, btnExpensesAdd);
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3) {
      btnExpensesAdd.style.display = 'none';
    }
  }
  getExpensesMonth() {
      for(let key in this.expenses) {
        this.expensesMonth += this.expenses[key];
      }
      return this.expensesMonth;
    }
  getBudget() {
      this.budgetMonth = this.budget - this.expensesMonth;
      this.budgetDay = Math.floor(this.budgetMonth / 30);
    }
  getTargetMonth() {
    return Math.ceil(targetAmount.value / this.budgetMonth);
  }
  getAddIncome() {
    additionalIncomeAll.forEach( item => {
      item = item.value.trim();
      if(item !== '') {
        this.addIncome.push(item);
      }
    });
  }
  getAddExpenses() {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach( item => {
      item = item.trim();
      if(item !== '') {
        this.addExpenses.push(item);
      }
    });
  }
  getExpenses() {
    expensesItems.forEach( item => {
      const expensesName = item.querySelector('.expenses-title').value,
            expensesCash = item.querySelector('.expenses-amount').value;
      if(expensesName !== '' && expensesCash !== '') {
        this.expenses[expensesName] = +expensesCash; 
      }
    });
  }
  getIncome() {
    incomeItems.forEach( item => {
      const incomeName = item.querySelector('.income-title').value,
            incomeCash = item.querySelector('.income-amount').value;
      if(incomeName !== '' && incomeCash !== '') {
        this.income[incomeName] = +incomeCash; 
        this.budgetMonth += +incomeCash; 
      }
    });
  }
  showResult() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = this.getTargetMonth();
    incomePeriodValue.value = this.calcSavedMoney();
    periodSelect.addEventListener('input', () => {
      incomePeriodValue.value = this.calcSavedMoney();
    });
  }
  getPeriodValue() {
    periodAmountValue.textContent = periodSelect.value;
  }
  calcSavedMoney() {
    return this.budgetMonth * periodSelect.value;
  }
  disableInput() {
    const dataInputTextAll = document.querySelectorAll('.data input[type=text]');
    dataInputTextAll.forEach( item => item.setAttribute("disabled", "disabled"));
    btnStart.style.display = 'none';
    btnCancel.style.display = 'inline-block';
  }
  eventsListeners() {
    const start = this.start.bind(this),
          _this = this;
    this.checkSalaryAmount(); 
    btnStart.addEventListener('click',start);
    btnIncomeAdd.addEventListener('click', _this.addIncomeBlock);
    btnExpensesAdd.addEventListener('click', _this.addExpensesBlock);
    periodSelect.addEventListener('input', _this.getPeriodValue);
    btnCancel.addEventListener('click', () => this.reset.call(this));

  }
} // End AppData{}
                

let appData = new AppData();
appData.eventsListeners();


      

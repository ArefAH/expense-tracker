let ballance = 0;
let incomeValue = 0;
let expensesValue = 0;
let income = JSON.parse(localStorage.getItem("income")) || [];
let incomeData = {
  name: "",
  amount: 0,
  category: "",
  date: "",
};
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let expenseData = {
  name: "",
  amount: 0,
  category: "",
  date: "",
};

const updateTotals = () => {
  let totalIncomeValue = 0;
  for (let item of income) {
    totalIncomeValue += +item.amount;
  }
  let totalExpenseValue = 0;
  for (let item of expenses) {
    totalExpenseValue += +item.amount;
  }
  totalIncome.textContent = totalIncomeValue;
  totalExpense.textContent = totalExpenseValue;
  ballanceAmount.textContent = totalIncomeValue - totalExpenseValue;
};

window.addEventListener("load", updateTotals);

const inputChange = (inputElement, storage, key) => {
  inputElement.addEventListener("change", (event) => {
    storage[key] = event.target.value;
  });
};

const toggleModal = (button, modal) => {
  button.addEventListener("click", () => {
    modal.classList.toggle("hidden");
  });
};

toggleModal(incomeToggle, incomeModal);
toggleModal(expenseToggle, expenseModal);
toggleModal(expenseCancel, expenseModal);
toggleModal(incomeCancel, incomeModal);
toggleModal(incomeButton, incomeModal);
toggleModal(expenseButton, expenseModal);

inputChange(incomeName, incomeData, "name");
inputChange(incomeAmount, incomeData, "amount");
inputChange(incomeCategory, incomeData, "category");
inputChange(incomeDate, incomeData, "date");
inputChange(expenseName, expenseData, "name");
inputChange(expenseAmount, expenseData, "amount");
inputChange(expenseCategory, expenseData, "category");
inputChange(expenseDate, expenseData, "date");

incomeButton.addEventListener("click", () => {
  addIncome();
  updateTotals();
});

expenseButton.addEventListener("click", () => {
  addExpense();
  updateTotals();
});

const addExpense = () => {
  expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  const newExpense = { ...expenseData };
  expenses.push(newExpense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  expenseData = {
    name: "",
    amount: 0,
    category: "",
    date: "",
  };
};
const addIncome = () => {
  income = JSON.parse(localStorage.getItem("income")) || [];
  const newIncome = { ...incomeData };
  income.push(newIncome);
  localStorage.setItem("income", JSON.stringify(income));
  incomeData = {
    name: "",
    amount: 0,
    category: "",
    date: "",
  };
};

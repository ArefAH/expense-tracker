let ballance = 0;
let incomeValue = 0;
let expensesValue = 0;
let income = [];
let incomeData = {
  name: "",
  amount: 0,
  category: "",
  date: "",
};
let expenses = [];
let expenseData = {
  name: "",
  amount: 0,
  category: "",
  date: "",
};


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
  localStorage.setItem("income", JSON.stringify(income));
});

expenseButton.addEventListener("click", () => {
  addExpense();
  localStorage.setItem("expenses", JSON.stringify(expenses));
});

const addExpense = () => {
  const newExpense = { ...expenseData };
  expenses.push(newExpense);
  expenseData = {
    name: "",
    amount: 0,
    category: "",
    date: "",
  };
};
const addIncome = () => {
  const newIncome = { ...incomeData };
  income.push(newIncome);
  incomeData = {
    name: "",
    amount: 0,
    category: "",
    date: "",
  };
};

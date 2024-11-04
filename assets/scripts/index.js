let ballance = 0;
let income = 0;
let expense = 0;
let incomeData = {
  name: "",
  amount: 0,
  category: "",
  date: "",
};
let expenseData = {
  name: "",
  amount: 0,
  category: "",
  date: "",
};

function inputChange(inputElement, storage, key) {
  inputElement.addEventListener("change", (event) => {
    storage[key] = event.target.value;
  });
}

function toggleModal(button, modal) {
  button.addEventListener("click", () => {
    modal.classList.toggle("hidden");
  });
}

toggleModal(addIncome, incomeModal);
toggleModal(addExpense, expenseModal);
toggleModal(expenseCancel, expenseModal);
toggleModal(incomeCancel, incomeModal);
toggleModal(incomeButton, incomeModal);


inputChange(incomeName, incomeData, "name");
inputChange(incomeAmount, incomeData, "amount");
inputChange(incomeCategory, incomeData, "category");
inputChange(incomeDate, incomeData, "date");
inputChange(expenseName, expenseData, "name");
inputChange(expenseAmount, expenseData, "amount");
inputChange(expenseCategory, expenseData, "category");
inputChange(expenseDate, expenseData, "date");

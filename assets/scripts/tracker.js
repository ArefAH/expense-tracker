let ballance = 0;
let incomeValue = 0;
let expensesValue = 0;
const user_id = localStorage.user_id;
let transactions = [];
let transactionData = {
  name: "",
  amount: 0,
  category: "",
  date: "",
  note: "",
};

// const updateTotals = () => {
//   let totalIncomeValue = 0;
//   for (let item of income) {
//     totalIncomeValue += +item.amount;
//   }
//   let totalExpenseValue = 0;
//   for (let item of expenses) {
//     totalExpenseValue += +item.amount;
//   }
//   totalIncome.textContent = totalIncomeValue;
//   totalExpense.textContent = totalExpenseValue;
//   ballanceAmount.textContent = totalIncomeValue - totalExpenseValue;
// };

// window.addEventListener("load", updateTotals);

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

toggleModal(transactionToggle, transactionModal);
toggleModal(transactionCancel, transactionModal);

inputChange(transactionName, transactionData, "name");
inputChange(transactionAmount, transactionData, "amount");
inputChange(transactionCategory, transactionData, "category");
inputChange(transactionNote, transactionData, "note");

transactionButton.addEventListener("click", () => {
  addTransaction();
  // addTableBody();
  // updateTotals();
});

const addTransaction = async () => {
  const data = new FormData();
  data.append("user_id", user_id);
  data.append("name", transactionData.name);
  data.append("amount", transactionData.amount);
  data.append("category", transactionData.category);
  data.append("note", transactionData.note);

  const response = await fetch(
    "http://localhost/expense-tracker/assets/server/addTransaction.php",
    {
      method: "POST",
      body: data,
    }
  );

  const result = await response.json();

  if (result.status === "Successful") {
    alert("success");
    transactionModal.classList.toggle("hidden");
  } else {
    inputError.classList.remove("hidden");
  }
};


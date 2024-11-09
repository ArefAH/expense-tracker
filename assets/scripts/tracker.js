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



// const addTableBody = () => {
//   list.innerHTML = "";

//   transactions.forEach((item) => {
//     const row = document.createElement("tr");
//     row.innerHTML = `
//         <td>${item.name}</td>
//         <td>${item.amount}</td>
//         <td>${item.category}</td>
//         <td>${item.date}</td>
//         <td>${item.note}</td>
//       `;
//     list.appendChild(row);
//   });
// };

// window.addEventListener("load", addTableBody);

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
  // updateTotals();
  // addTableBody();
});




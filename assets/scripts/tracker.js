const user_id = localStorage.user_id;
let income = [];
let expenses = [];
let transactions = [];
let transactionData = {
  name: "",
  amount: 0,
  category: "",
  date: "",
  note: "",
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

toggleModal(transactionToggle, transactionModal);
toggleModal(transactionCancel, transactionModal);

inputChange(transactionName, transactionData, "name");
inputChange(transactionAmount, transactionData, "amount");
inputChange(transactionCategory, transactionData, "category");
inputChange(transactionNote, transactionData, "note");

transactionButton.addEventListener("click", () => {
  addTransaction();
  updateTotals();
});

const updateTotals = () => {
  let totalIncomeValue = 0;
  for (let item of income) {
    totalIncomeValue += +item.amount;
  }
  let totalExpenseValue = 0;
  for (let item of expenses) {
    totalExpenseValue += +item.amount;
  }
  incomeAmount.textContent = totalIncomeValue;
  expenseAmount.textContent = totalExpenseValue;
  ballanceAmount.textContent = totalIncomeValue - totalExpenseValue;
};

window.addEventListener("load", updateTotals);

const separateTransactions = () => {
  income = transactions.filter(
    (transaction) => transaction.category === "Income"
  );
  expenses = transactions.filter(
    (transaction) => transaction.category === "Expense"
  );
  updateTotals();
};

const getTransaction = async (id) => {
  const response = await axios.get(
    `http://localhost/expense-tracker/assets/server/getTransaction.php`,
    {
      params: { id: id },
    }
  );
  transactions.length = 0;
  transactions.push(...response.data);
  separateTransactions();
};

window.addEventListener("load", getTransaction(user_id));

const deleteTransaction = async (transactionId) => {
  const response = await axios.get(
    "http://localhost/expense-tracker/assets/server/deleteTransaction.php",
    {
      params: { transaction_id: transactionId }
    }
  );
  const result = response.data;
  if (result.status === "Successful") {
    transactions = transactions.filter(transaction => transaction.id !== transactionId);
    addTableBody();
    updateTotals();
  }
}

const addTableBody = () => {
  list.innerHTML = "";

  transactions.forEach((item) => {
    const row = document.createElement("tr");
    row.classList.add("data");
    row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.amount} $</td>
        <td>${item.category}</td>
        <td>${item.note}</td>
        <td>${item.date}</td>
      `;
    list.appendChild(row);
    row.addEventListener("click", ()=>{
      deleteModal.classList.toggle("hidden")
      yes.addEventListener("click", ()=>{
        deleteTransaction(item.id);
        deleteModal.classList.toggle("hidden")
      })
      no.addEventListener("click",()=>{
        deleteModal.classList.toggle("hidden")
      })
    })
  });
};
window.addEventListener("load", addTableBody);
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
    transactionModal.classList.toggle("hidden");
  } else {
    inputError.classList.remove("hidden");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const forum = document.getElementById("forum");
  const inputExpenseName = document.getElementById("input-expense-name");
  const inputExpenseAmount = document.getElementById("input-expense-amount");
  const expenseList = document.getElementById("expense-list");
  const expenseListContainer = document.getElementById("expense-list-container");
  const totalExpense = document.getElementById("total-expense");
  const addButton = document.getElementById("add-button");

  forum.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const addExpense = () => {
    const expenseName = inputExpenseName.value.trim();
    const expenseAmount = inputExpenseAmount.value.trim();
    if (expenseAmount === "") return;
    if (expenseName === "") return;
    if (isNaN(expenseAmount)) return;
    inputExpenseName.value = "";
    inputExpenseAmount.value = "";
  };

  addButton.addEventListener("click", () => {
    addExpenseToList();
    addExpense();
    totalExpenses();
    removeExpense();

  });

  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      e.target.parentElement.remove();
      totalExpenses();
    }
  })
  function addExpenseToList() {

    const li = document.createElement("div");
    li.classList.add("div-add");
    li.innerHTML = `
    <span>${inputExpenseName.value}  </span> - 
    <span>$${inputExpenseAmount.value}</span>
    <button id="delete">delete</button>
    `;
    console.log(li);
    expenseList.appendChild(li);
  }

  function removeExpense() {
    document.getElementById("expense-list").addEventListener('click', (e) => {
      if (e.target.tagName === "BUTTON")
        e.target.parentElement.remove();
      totalExpense() -= e.target.parentElement;

    })
  }

  function totalExpenses() {
    let total = 0;
    const allExpense = document.querySelectorAll(".div-add span:nth-child(2)")
    allExpense.forEach(expense => {
      const amount = parseFloat(expense.textContent.replace("$", ""));
      if (isNaN(amount)) return;
      total += amount;


      
    })
    totalExpense.textContent = total.toFixed(2);
  }
});

// document.getElementById("cashout-btn").addEventListener("click", function () {
//   const agentNumber = document.getElementById("agent-number").value;
//   if (agentNumber.length != 11) {
//     alert("Invaild Number");
//     return;
//   }
//   const cashoutAmount = document.getElementById("cashout-amount").value;
//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;

//   const newBalance = Number(balance) - Number(cashoutAmount);
//   if (newBalance < 0) {
//     alert("Insufficient balance");
//     return;
//   }
//   const cashoutPass = document.getElementById("cashout-pass").value;
//   if (cashoutPass == "1234") {
//     balanceElement.innerText = newBalance;
//   } else {
//     alert("Wrong Password");
//   }
// });

// ***********************************

document.getElementById("cashout-btn").addEventListener("click", function () {
  const cashoutNumber = getValueFromInput("agent-number");
  if (cashoutNumber.length != 11) {
    alert("Invaild Number");
    return;
  }
  const cashoutAmount = getValueFromInput("cashout-amount");
  const currentBalance = getBalance();
  const newBalance = getBalance() - Number(cashoutAmount);
  if (newBalance < 0) {
    alert("Insufficient Balance");
    return;
  }
  const cashoutPass = getValueFromInput("cashout-pass");
  if (cashoutPass == "1234") {
    alert("Cash Out Successfully");
    setValue(newBalance);
    clearInput("cashout-amount");
    clearInput("cashout-pass");
    clearInput("agent-number");
  } else {
    alert("Wrong Password");
    return;
  }
});

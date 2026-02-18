document.getElementById("cashout-btn").addEventListener("click", function () {
  const cashoutNumber = getValueFromInput("agent-number");
  if (cashoutNumber.length != 11) {
    alert("Invaild Number");
    return;
  }
  const cashoutAmount = getValueFromInput("cashout-amount");
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  const newBalance = Number(balance) - Number(cashoutAmount);
  if (newBalance < 0) {
    alert("Insufficient Balance");
    return;
  }
  const cashoutPass = getValueFromInput("cashout-pass");
  if (cashoutPass == "1234") {
    alert("Cash Out Successfully");
    balanceElement.innerText = newBalance;
  } else {
    alert("Wrong Password");
    return;
  }
});

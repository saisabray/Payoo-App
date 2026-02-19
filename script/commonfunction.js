function getValueFromInput(id) {
  const inputValue = document.getElementById(id).value;
  return inputValue;
}

function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  return Number(balance);
}
// SetBalance
function setValue(value) {
  return (document.getElementById("balance").innerText = value);
}
function clearInput(id) {
  document.getElementById(id).value = "";
}
function showOnly(id) {
  const addMoney = document.getElementById("add-money");
  const cashOut = document.getElementById("cashout");
  const sendMoney = document.getElementById("send-money");
  const getBonus = document.getElementById("get-bonus");
  const payBill = document.getElementById("pay-bill");
  const translist = document.getElementById("history");
  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");
  translist.classList.add("hidden");
  sendMoney.classList.add("hidden");
  getBonus.classList.add("hidden");
  payBill.classList.add("hidden");

  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}

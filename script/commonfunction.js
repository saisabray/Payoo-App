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
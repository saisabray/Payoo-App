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
    const now = new Date().toLocaleString();
    const history = document.getElementById("history");
    const li = document.createElement("li");
    li.className = "list-row flex justify-between p-3 bg-slate-300 rounded-md";
    li.innerHTML = `
    <div class="flex justify-center items-center gap-2">
      <div class="rounded-full size-12 bg-base-300 flex justify-center items-center">
        <img src="assets/opt-2.png" alt="icon" />
      </div>
      <div>
        <h2 class="text-base text-neutral-700 font-semibold">Send Money</h2>
        <p class="text-[12px] uppercase opacity-60">${now} - ${cashoutAmount}</p>
      </div>
    </div>
    <button class="rotate-90 text-lg">
      <i class="fa-solid fa-ellipsis"></i>
    </button>
  `;
    history.appendChild(li);
    clearInput("account-number");
    clearInput("add-amount");
    clearInput("add-pass");
    clearInput("cashout-amount");
    clearInput("cashout-pass");
    clearInput("agent-number");
  } else {
    alert("Wrong Password");
    return;
  }
});

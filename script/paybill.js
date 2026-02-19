document.getElementById("paybill-btn").addEventListener("click", function () {
  const bank = getValueFromInput("paybill-bank");
  if (bank == "Select a bank") {
    alert("Please select a bank");
    return;
  }
  const paybillAccount = getValueFromInput("paybill-account-number");
  if (paybillAccount.length != 11) {
    alert("Invalid Account Number");
    return;
  }
  const payAmount = getValueFromInput("paybill-amount");
  const newBalance = getBalance() - Number(payAmount);
  if (newBalance < 0) {
    alert("Insufficient Balance");
    return;
  }
  const payPass = getValueFromInput("paybill-pass");
  if (payPass == "1234") {
    alert(`Successfull Paid the bill to ${bank}`);
    setValue(newBalance);
    const now = new Date().toLocaleString();
    const history = document.getElementById("history");
    const li = document.createElement("li");
    li.className = "list-row flex justify-between p-3 bg-slate-300 rounded-md";
    li.innerHTML = `
    <div class="flex justify-center items-center gap-2">
      <div class="rounded-full size-12 bg-base-300 flex justify-center items-center">
        <img src="assets/opt-5.png" alt="icon" />
      </div>
      <div>
        <h2 class="text-base text-neutral-700 font-semibold">Pay Bill</h2>
        <p class="text-[12px] uppercase opacity-60">${now} - ${payAmount}</p>
      </div>
    </div>
    <button class="rotate-90 text-lg">
      <i class="fa-solid fa-ellipsis"></i>
    </button>
  `;
    history.appendChild(li);
    clearInput("paybill-account-number");
    clearInput("paybill-amount");
    clearInput("paybill-pass");
  } else {
    alert("Wrong Password");
    return;
  }
});

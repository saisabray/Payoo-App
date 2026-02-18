document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function () {
    const bank = getValueFromInput("transfer-bank");
    if (bank == "Select a bank") {
      alert("Please select a bank");
      return;
    }
    const transferAccountNumber = getValueFromInput("transfer-account-number");
    if (transferAccountNumber.length != 11) {
      alert("Invalid Account Number");
      return;
    }
    const transferAmount = getValueFromInput("transfer-amount");
    newBalance = getBalance() - Number(transferAmount);
    if (newBalance < 0) {
      alert("Insufficient Balance");
      return;
    }
    const transferPass = getValueFromInput("transfer-pass");
    if (transferPass === "1234") {
      alert("Transfer Successfully");
      setValue(newBalance);

      const now = new Date().toLocaleString();
      const history = document.getElementById("history");
      const li = document.createElement("li");
      li.className =
        "list-row flex justify-between p-3 bg-slate-300 rounded-md";
      li.innerHTML = `
    <div class="flex justify-center items-center gap-2">
      <div class="rounded-full size-12 bg-base-300 flex justify-center items-center">
        <img src="assets/opt-1.png" alt="icon" />
      </div>
      <div>
        <h2 class="text-base text-neutral-700 font-semibold">Send Money</h2>
        <p class="text-[12px] uppercase opacity-60">${now} - ${transferAmount}</p>
      </div>
    </div>
    <button class="rotate-90 text-lg">
      <i class="fa-solid fa-ellipsis"></i>
    </button>
  `;
      history.appendChild(li);
      clearInput("transfer-account-number");
      clearInput("transfer-amount");
      clearInput("transfer-pass");
    } else {
      alert("Wrong Password");
    }
  });

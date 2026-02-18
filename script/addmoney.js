document.getElementById("add-money-btn").addEventListener("click", function () {
  const bank = getValueFromInput("bank");
  if (bank == "Select a bank") {
    alert("Please select a bank");
    return;
  }
  const accountNumber = getValueFromInput("account-number");
  if (accountNumber.length != 11) {
    alert("Invalid Account Number");
    return;
  }
  const amount = getValueFromInput("add-amount");
  const newBalance = getBalance() + Number(amount);
  console.log(newBalance);

  const pass = getValueFromInput("add-pass");
  if (pass == "1234") {
    alert(`Sucessfully Money Added from ${bank} Bank`);
    setValue(newBalance);
    const now = new Date().toLocaleString();
    const history = document.getElementById("history");
    const li = document.createElement("li");
    li.className = "list-row flex justify-between p-3 bg-slate-300 rounded-md";
    li.innerHTML = `
    <div class="flex justify-center items-center gap-2">
      <div class="rounded-full size-12 bg-base-300 flex justify-center items-center">
        <img src="assets/opt-1.png" alt="icon" />
      </div>
      <div>
        <h2 class="text-base text-neutral-700 font-semibold">Add Money</h2>
        <p class="text-[12px] uppercase opacity-60">${now} - ${amount}</p>
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
  } else {
    alert("Wrong Password");
    return;
  }
});

document.getElementById("get-bonus-btn").addEventListener("click", function () {
  console.log("Hello");
  const couponNumber = getValueFromInput("coupon-number");
  if (couponNumber != "Bonus100") {
    alert("Invalid Coupon");
    return;
  }
  const amount = couponNumber.slice(-3);
  if (isNaN(amount)) {
    alert("Invalid Coupon");
  }
  const newBalance = getBalance() + Number(amount);
  setValue(newBalance);
  const now = new Date().toLocaleString();
  const history = document.getElementById("history");
  const li = document.createElement("li");
  li.className = "list-row flex justify-between p-3 bg-slate-300 rounded-md";
  li.innerHTML = `
    <div class="flex justify-center items-center gap-2">
      <div class="rounded-full size-12 bg-base-300 flex justify-center items-center">
        <img src="assets/opt-4.png" alt="icon" />
      </div>
      <div>
        <h2 class="text-base text-neutral-700 font-semibold">Get Bonus</h2>
        <p class="text-[12px] uppercase opacity-60">${now} - ${amount}</p>
      </div>
    </div>
    <button class="rotate-90 text-lg">
      <i class="fa-solid fa-ellipsis"></i>
    </button>
  `;
  history.appendChild(li);
  clearInput("coupon-number");
});

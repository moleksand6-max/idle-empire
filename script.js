let coins = 0;
let income = 1; // доход в секунду

// загрузка сохранения
if (localStorage.getItem("coins")) {
  coins = Number(localStorage.getItem("coins"));
}

if (localStorage.getItem("income")) {
  income = Number(localStorage.getItem("income"));
}

function updateUI() {
  document.getElementById("coins").innerText = coins;
}

// кнопка получения монет
function addCoins() {
  coins += income;
  updateUI();
  save();
}

// пассивный доход (каждую секунду)
setInterval(() => {
  coins += income;
  updateUI();
  save();
}, 1000);

// сохранение
function save() {
  localStorage.setItem("coins", coins);
  localStorage.setItem("income", income);
}

let coins = 0;
let income = 1;

// загрузка
if (localStorage.getItem("coins")) {
  coins = Number(localStorage.getItem("coins"));
}

if (localStorage.getItem("income")) {
  income = Number(localStorage.getItem("income"));
}

// обновление UI
function updateUI() {
  document.getElementById("coins").innerText = coins;
}

// сохранение
function save() {
  localStorage.setItem("coins", coins);
  localStorage.setItem("income", income);
}

// кнопка получения
function addCoins() {
  coins += income;
  updateUI();
  save();
}

// улучшение
function upgrade() {
  if (coins >= 10) {
    coins -= 10;
    income += 1;
    updateUI();
    save();
  }
}

// авто доход
setInterval(() => {
  coins += income;
  updateUI();
  save();
}, 1000);

// старт
updateUI();

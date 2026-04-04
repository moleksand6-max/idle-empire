let coins = 0;
let income = 1;

// загрузка
function load() {
  if (localStorage.getItem("coins")) {
    coins = Number(localStorage.getItem("coins"));
  }

  if (localStorage.getItem("income")) {
    income = Number(localStorage.getItem("income"));
  }
}

// сохранение
function save() {
  localStorage.setItem("coins", coins);
  localStorage.setItem("income", income);
}

// уровень (всегда считается)
function getLevel() {
  return Math.floor(coins / 50) + 1;
}

// обновление UI
function updateUI() {
  document.getElementById("coins").innerText = coins;
  document.getElementById("level").innerText = getLevel();
  document.getElementById("income").innerText = income;
}

// получение монет
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

function buyHouse() {
  if (coins >= 50) {
    coins -= 50;
    income += 5;
    updateUI();
    save();
  }
}

function buyFactory() {
  if (coins >= 200) {
    coins -= 200;
    income += 20;
    updateUI();
    save();
  }
  }

// запуск
load();
updateUI();

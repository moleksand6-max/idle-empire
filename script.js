let coins = 0;
let income = 1;
let level = 1;

// загрузка
function load() {
  if (localStorage.getItem("coins")) {
    coins = Number(localStorage.getItem("coins"));
  }

  if (localStorage.getItem("income")) {
    income = Number(localStorage.getItem("income"));
  }

  if (localStorage.getItem("level")) {
    level = Number(localStorage.getItem("level"));
  }
}

// сохранение
function save() {
  localStorage.setItem("coins", coins);
  localStorage.setItem("income", income);
  localStorage.setItem("level", level);
}

// обновление UI
function updateUI() {
  document.getElementById("coins").innerText = coins;
  document.getElementById("level").innerText = level;
}

// получение монет
function addCoins() {
  coins += income;
  checkLevel();
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

// проверка уровня
function checkLevel() {
  let newLevel = Math.floor(coins / 50) + 1;

  if (newLevel > level) {
    level = newLevel;
    income += 1; // бонус за уровень
    alert("🎉 Новый уровень: " + level);
  }
}

// авто доход
setInterval(() => {
  coins += income;
  checkLevel();
  updateUI();
  save();
}, 1000);

// запуск
load();
updateUI();

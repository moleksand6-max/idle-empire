let coins = 0;
let income = 1;

// загрузка данных
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

// обновление экрана
function updateUI() {
  const coinsElement = document.getElementById("coins");
  if (coinsElement) {
    coinsElement.innerText = coins;
  }
}

// кнопка
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
load();
updateUI();

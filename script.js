let coins = 0;
let income = 1;

// загрузка
function load() {
  const savedCoins = localStorage.getItem("coins");
  const savedIncome = localStorage.getItem("income");

  if (savedCoins !== null) coins = Number(savedCoins);
  if (savedIncome !== null) income = Number(savedIncome);

  updateUI();
}

// сохранение
function save() {
  localStorage.setItem("coins", coins);
  localStorage.setItem("income", income);
}

// обновление интерфейса
function updateUI() {
  document.getElementById("coins").innerText = coins;
  document.getElementById("income").innerText = income;

  // уровень зависит от дохода
  let level = Math.floor(income / 5) + 1;
  document.getElementById("level").innerText = level;
}

// получение монет
function addCoins() {
  coins += income;
  updateUI();
  save();
}

// улучшение фермы
function upgrade() {
  if (coins >= 10) {
    coins -= 10;
    income += 1;
    updateUI();
    save();
  }
}

// магазин
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

// авто доход
setInterval(() => {
  coins += income;
  updateUI();
  save();
}, 1000);

// старт
load();

// чтобы кнопки точно работали
window.addCoins = addCoins;
window.upgrade = upgrade;
window.buyHouse = buyHouse;
window.buyFactory = buyFactory;

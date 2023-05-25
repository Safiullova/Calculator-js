// нахожу элементы, записываю в переменные
let elemOldСar = document.forms.car.elements.oldСar;  //элемент формы подержанного автомобиля
let button = document.querySelector(".button"); // переменная для кнопки
let carOwner = document.querySelector(".carOwner"); // это див с количеством владельцев


function onChangeFirst() {  // эта функция подгружает массив выбора моделей для разных марок
  const nameValue = document.getElementById('carName').value; //какую машина=у выбрали в выпадающем списке
  
  const reno = [{ model:'re', price: 100000 } , {model: 'ree', price: 150000 },{model:'reee', price: 200000 }];
  const opel = [{model:'op', price: 150000 }, {model:'opp', price: 170000 },{model:'oppp', price: 220000 }];
  const mazda = [{model:'ma', price: 110000 }, {model:'maa', price: 120000 },{model:'maaa', price: 130000 }];
  const jaguar = [{model:'ja', price: 140000 }, {model:'jaa', price: 160000 },{model:'jaaa', price: 180000 }];

  let values=[] // переменная для массива со списком моделей

  document.getElementById("carModel").innerHTML=''; // Для очистки списка моделей, при изменении выбора марки машины
  if(nameValue == 1){
  values = [...reno];    
  }
  else if(nameValue == 2){
    values = [...opel]
  }
  else if(nameValue == 3){
    values = [...mazda]
  }
  else if(nameValue == 4){
      values = [...jaguar]
    }

  const select = document.getElementById('carModel'); // завожу переменную для выпадающего списка моделей

  for (const val of values)
  {
      let option = document.createElement("option"); // добавляю опции для выпадающего списка моделей
      option.value = val.price;
      option.text = val.model;
      select.appendChild(option); // добавляю список моделей
  }};

function addcarOwner(){ // если авто подержанное, то появляются родиокнопки с количеством владельцев

if(elemOldСar.checked = true) 
{
  let oneCarOwner = `<div><p>1-2 владельца</p><input type="radio" name="owner" value="500" checked></div>`;
  let threeCarOwner = `<div><p>3 и более владельцев</p><input type="radio" name="owner" value="100"></div>`;
  carOwner.insertAdjacentHTML('beforeEnd', oneCarOwner);
  carOwner.insertAdjacentHTML('beforeEnd', threeCarOwner);
}}
elemOldСar.addEventListener('input', function (evt) {
  evt.preventDefault();
  addcarOwner();
});

button.addEventListener("click", function(event) { //основная функция для расчета
  event.preventDefault();

let model =document.querySelector("#carModel").value;
let newCar =document.querySelector("#newCar");
let oldСar =document.querySelector("#oldСar");
let newCarVal = newCar.value;
let oldСarVal = oldСar.value;

let result =0; // переменная для расчета стоимости авто
result =  result + +model; // стоимость в зависимости от модели.

const fuels = document.querySelectorAll('input[name="fuel"]'); // смотрим какое топливо выбрано
  let fuelCheck;
    for (const fuel of fuels) {
      if (fuel.checked) {
        fuelCheck = fuel.value;
          break;
      }
    }; 
result = result + +fuelCheck; // стоимость с учетом выбора топлива

const capacity = document.forms.capa.elements.capacity; // записываю инпут объема двигателя в переменную
result = result + +capacity.value; // Зависимость цены от объема двигателя. я не знаю какая реальная математическая зависимость))

if (newCar.checked) {  // стоимость с наценкой на новый авто.
result = result + +newCarVal;
}
else if (oldСar.checked) {// стоимость с наценкой на подержаный авто.
result = result + +oldСarVal;
};

const cash = document.querySelector('#cash'); // скидка за оплату наличкой
if (cash.checked) {
result = result - +result*0.1;
};

let resultSum = document.querySelector('.result'); // вывод результата 
resultSum.textContent = ' '; // обнуляю результат расчета при каждом клике по кнопке
resultSum.insertAdjacentHTML('beforeend', result); // итоговая стоимость
});

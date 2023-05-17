let myForms = document.forms.myForm;    //нашли форму
let elemCarBrend = myForms.elements.carBrend.value;     //нашла элемент бренда автомобиля,без значения
let elemCarModel = myForms.elements.carModel.value;   // элемент марки автомобиля
let elemPetrol = myForms.elements.fuel.value;   //элемент инпута со значением "Бензин"
let elemDiesel = myForms.elements.fuel.value;  //элемент инпута со значением "Дизель"
let elemGas = myForms.elements.fuel.value;        //элемент инпута со значением "Газ"
let elemElectric = myForms.elements.fuel.value;    //элемент инпута со значением "Электричество"
let elemEnСapacity = myForms.elements.enСapacity.value;    // элемент обьема двигателя
let elemNewCar = myForms.elements.newCar.checked;   // элемент нового автомобиля
let elemSuppСar = myForms.elements.suppСar;  //элемент поддержанного автомобиля
let elemBankСard = myForms.elements.bankСard.checked; // оплата картой
let elemСash = myForms.elements.cash.checked; // оплата картой

let button = document.querySelector(".button"); // нашла кнопку "расчитать стоимость"
let carOwner = document.querySelector(".carOwner"); // нашла див с количеством владельцев
let totalAm = document.querySelector(".sum");




myForms.addEventListener("submit", function(event) { //основная функция
   event.preventDefault();



   let brend =document.querySelector("#carBrend"); 
   let model =document.querySelector("#carModel").value;
   let petrol =document.querySelector("#petrol");
   let diesel =document.querySelector("#diesel");
   let gas =document.querySelector("#gas");
   let electric =document.querySelector("#electric");
   let enСapacity =document.querySelector("#enСapacity").value;
   let newCar =document.querySelector("#newCar");
   let suppСar =document.querySelector("#suppСar");

   let petrolVal = petrol.value;
   let dieselVal = diesel.value;
   let gasVal =gas.value;
   let electricVal = electric.value;

   let newCarVal = newCar.value;
   let suppСarVal = suppСar.value;



   let sum =0;

 sum =  sum + +model;
    console.log(sum);
    
    if (petrol.checked && petrolVal) {
      sum = sum + +petrolVal;
      console.log(sum);
    }
    
     if (diesel.checked && dieselVal) {
      sum = sum + +dieselVal;
      console.log(sum);
    } 
     if (gas.checked && gasVal) {
      sum = sum + +gasVal;
      console.log(sum);
    } 
    if(electric.checked && electricVal) {
      sum = sum + +electricVal;
      console.log(sum);
    }
  
    // console.log(sum = ${sum});

 
    if (newCar.checked && newCarVal) {
      sum = sum + +newCarVal;
      console.log(sum);
    }
    
     if (suppСar.checked && suppСarVal) {
      sum = sum + +suppСarVal;
      console.log(sum);
    } 

     totalAm.textContent = sum;


});




function onChangeFirst() {  //функция подгружает дополнительный массив
    const value = document.getElementById('carBrend').value;
    
    const jaguar = [{ model:'FX', price: 100000 } , {model: 'XJ', price: 150000 },{model:'XE', price: 300000 }];
    const hyundai = [{model:'Creta', price: 120000 }, {model:'Solaris', price: 170000 },{model:'Tucson', price: 320000 }];
    const reno = [{model:'Kaptur', price: 110000 }, {model:'Koleos', price: 160000 },{model:'Symbol', price: 310000 }];
    const mazda = [{model:'CX-3', price: 110000 }, {model:'CX-5', price: 160000 },{model:'MX-30', price: 310000 }];

    let values=[]

    document.getElementById("carModel").innerHTML=''
    if(value==0){
        document.getElementById('carModel').value=''
        document.getElementById("carModel").disabled = true;
        return
      }
      else if(value == 1){

    values = [...jaguar];    
    }
    else if(value == 2){
      values = [...hyundai]
    }
    else if(value == 3){
      values = [...reno]
    }
    else if(value == 4){
        values = [...mazda]
      }
     
    let select = document.getElementById('carModel');

    for (const val of values)
    {
        let option = document.createElement("option");
        option.value = val.price;
        option.text = val.model;

        select.appendChild(option);
    }
    document.getElementById('carModel').disabled=false
}


function addcarOwner(){ //проверяем условие если авто поддержанное то появляются родиокнопки с количеством владельцев

if(elemSuppСar.value !=="") 
{
    const newCarOwner = `<div><p>1-2 владельца</p><input  type="radio"></div>`;
    const toCarOwner = `<div><p>3 и более владельцев</p><input type="radio"></div>`;
    carOwner.insertAdjacentHTML('beforeEnd', newCarOwner);
    carOwner.insertAdjacentHTML('beforeEnd', toCarOwner);
}
}
elemSuppСar.addEventListener('input', function (evt) {
    evt.preventDefault();
    addcarOwner();
});














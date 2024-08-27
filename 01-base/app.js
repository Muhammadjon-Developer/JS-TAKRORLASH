"use strict";

// let number = 10;
// let firstName = "Muhammadjon";

// const isProgrammer = true;

// number = 7;
// firstName = "Oybek";

// alert(firstName);
// console.log("My name is:", firstName);

// ⁢isProgrammer = false; = const ni o'zgartirish mumkin emas shunga biz error olamiz

// ⁡Can do⁡

// let something = "Avaible variable name"; // String
// let $ = true; // Boolean
// let $number = 100; // Number
// let number$ = 99;
// let _ = false;
// let _city = "New York";
// let country_ = "United States";
// let myApartment27 = true;
// let my_car = "Mercedes cls63"; // ⁡⁢⁣⁣Javascript da pascal_case usulida o'zgaruvchiga nom berish mumkin lekin bu yaxshi emas
// let myLaptop = "HP 250 G8"; // Bu pascal_case dan ko'ra yaxshiroq chunki juda-juda ko'p hollarda camelCase ishlatiladi

// Restricted

// let 6cars = 'My Cars';
// let food-price = "10$";
// let let = 'let'
// let false = false;
// let const = 'const';

// OPERATORS IN JS

// let number = 100;

// console.log(number + 70);
// console.log(number - 70);
// console.log(number * 70);
// console.log(number / 70);
// console.log(number); //? Will this operations in the top will change the actual value of the variable ? Answer: NO

// let number2 = number + 10; //& Answer: 110
// console.log(number, number2); //& Answer: 100 110 = number = 100, number2 = 110

// number = number2 - number; //& Answer: 10
// number2 = number2 + 1; //& Answer: 111
// console.log(number, number2); //& Answer: 10 111

// let num = 50;

// let num2 = num + (10 * 2) / 5 - 1; //& Answer: how in math and same in js: 50 + (10 * 2) / 5 - 1 = 53
// console.log(num2); //& Answer: 53

// const firstName = "Muhammadjon"
// const secondName = "Olimov";

// const fullName = firstName + " " + secondName; //& Javob: Muhammadjon + Olimov = Muhammadjon Olimov | " " = bu probel

// console.log(fullName); // Javob: Muhammadjon Olimov

// CALCULATOR PROJECT

const resultElement = document.getElementById("result"); // html dan birinchi elementni olish id orqali
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

let action = "+";

/* console.log(resultElement);
resultElement.textContent = 50;
console.log(resultElement.textContent); */

// const sum = Number(input1.value) + Number(input2.value); // Number - bu js obyekti lyuboy boshqa type elementini number type ga o'tkazish metodi
// resultElement.textContent = sum;
// console.log(typeof sum); // typeof - biron-bir elemnt type ni tekshirish uchun

plusBtn.onclick = () => {
  action = "+";
};

minusBtn.onclick = () => {
  action = "-";
};

function printResult(result /* parametr */) {
  // funksiyalar bizga bir-xil kodni qayta-qayta yozmaslik uchun kerak masal ko'p if, else larni yozilishini oldini olish uchun
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}


function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  // if (actionSymbol == "+") {
  //   return num1 + num2;
  // }

  // if (actionSymbol = "-") {
  //   return num1 - num2;
  // }

  return actionSymbol == "+" ? num1 + num2 : num1 - num2;  //optimizatsiya
}

submitBtn.onclick = () => {
  const result = computeNumbersWithAction(input1, input2, action);
  printResult(result);
  // if (action == "+") {
  //   onlick function when we click to btn | () => - bu arrow funksiya oddiy funksiya o'rniga = function() biz arrow funksiya ishlatsak ham bo'ladi
  //   const sum = Number(input1.value) + Number(input2.value); 
  //   printResult(sum);
  // } else {
  //   onlick function when we click to btn | () => - bu arrow funksiya oddiy funksiya o'rniga = function() biz arrow funksiya ishlatsak ham bo'ladi
  //   const sum = Number(input1.value) - Number(input2.value);
  //   printResult(sum); 
  // }
};



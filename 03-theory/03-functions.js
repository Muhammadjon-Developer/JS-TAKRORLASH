"use strict";

// // Function Declaration - funksiya e'lon qilingan qatordan yuqorida ishlaydi
// function greet(name) {
//   console.log("Hello - ", name);
// }

// greet("Muhammadjon");

// Function Expression - funksiya e'lon qilingan qatordan yuqorida ishlamaydi
// const greet2 = function (name) {
//   console.log("Hello - ", name);
// };

// greet2("Oybek");

// Arrow Function - funksiya e'lon qilingan qatordan yuqorida ishlamaydi
// const greet3 = (name) => {
//   console.log("Hello - ", name);
// };

// const pow = (num, exp) => Math.pow(num, exp); // arrow funksiyani bir qatorga yozganimizda return avtomatik qo'yiladi biz o'zimiz return qo'ymasligimiz shart
// console.log(pow(4, 2));

// greet3("Abdulaziz");

// console.dir(greet);

// Default Parameters
// const sum = (a = 42, b = 8, /* a = 40, b = a / 2 */) => a + b;
// console.log(sum(42, 8));
// console.log(sum());

// function sumAll(...numbers) {
//   // ... - rest sintaksisi biz yozgan numbers esa argumentlarimiz joylashadigan massiv nomi
//   // let res = 0;
//   // for (let num of numbers) {
//   //   res += num;
//   // }
//   // return res;

//   return numbers.reduce((acc, cur) => (acc += cur), 0);
// }

// console.log(sumAll(1, 5, 6, 7, 8, 12, 30, 25));

// setTimeout() - setTimeout() Funksiyasi ma'lum bir kechikishdan so'ng bir marta bajarilishi kerak bo'lgan kodni (funksiyani) ishga tushirish uchun ishlatiladi
// clearTimeout() - clearTimeout() funksiyasi avval setTimeout() bilan o‘rnatilgan taymerni bekor qiladi. Ya'ni, taymerni to‘xtatib, belgilangan kodni bajarilishining oldini oladi
// setTimeout(() => {
//   // anonim funksiya
//   greet("Muhammadjon_2");
// }, 1500); 1500millisecond = 1.5 second

// let counter = 0;

// // setInterval() - setInterval() funksiyasi ma'lum vaqt oralig'ida takroran bajarilishi kerak bo'lgan kodni ishga tushirish uchun ishlatiladi.
// const interval = setInterval(() => {
//   if(counter === 5) {
//     clearInterval(interval); // clearInterval() - funksiyasi setInterval() orqali ishga tushirilgan intervalni to'xtatish uchun ishlatiladi. Bu orqali takrorlanuvchi vazifani bekor qilish mumkin
//   } else {
//     console.log(++counter);
//   }
// }, 1000);



// Yopilishlar

// function createPerson(name) {
//   return (lastName) => {
//     console.log(name + " " + lastName); 
//   }
// }

// const addLastName = createPerson('Abdulaziz');
// addLastName("Olimov");
// addLastName("Yoqumov");
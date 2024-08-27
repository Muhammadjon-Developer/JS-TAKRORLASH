"use strict";

// console.log(new Date()) // Vaqt va kunni olish

const now = new Date();

// const start = new Date(0);
// const start = new Date(1000 * 60 * 60 * 24 * 365) // Qanday qilib boshqa data olish mumkin masalan 1971 yilni
// console.log(start); // Sanoq shu kundan boshlanad
//                       yil  oy  kun soat min sek
// const date = new Date(2011, 5, 11, 10, 23, 55); // Oylar 0 dan boshlanadi
// console.log(date);

// Date larni olish
// console.log(now.getFullYear()); // Hozirgi yilni olish
// console.log(now.getMonth()); // Hozirgi oyni olish ! oylar 0 dan boshlanadi !
// console.log(now.getDate()); // Hozirgi kunni olish
// console.log(now.getHours()); // Hozirgi soatni olish 
// console.log(now.getMinutes()); // Hozirgi minutni olish
// console.log(now.getSeconds()); // Hozirgi sekundni olish
// console.log(now.getMilliseconds()); // Hozirgi millisekundlarni olish


// Date larni yuklash (berish) - biz barcha pastdagi ma'lumoatlarni console da millisekundlarda olamiz
// console.log(now.setFullYear(2365)); // Yilni yuklash (berish)
// console.log(now.setMonth(2)); // Oyni yuklash ! oylar 0 dan boshlanadi !
// console.log(now.setDate(24)); // Kunni berish
// console.log(now.setHours(15)); // Soatni berish 
// console.log(now.setMinutes(51)); // Minutni berish  
// console.log(now.setSeconds(34)); // Sekundni berish 
// console.log(now.setMilliseconds(27)); // Millisekundlarni berish

// Date larimizni formatlash usullari 
// console.log(now.toDateString()); // Misol uchun: Mon Aug 26 2024
// console.log(now.toTimeString()); // Faqat vaqtni ko'rsatadi, Misol uchun: 19:56:50 GMT+0300 (Moscow Standard Time)
// console.log(now.toLocaleDateString()); // Misol uchun: 8/26/2024, boshqa davlatlarda boshqacha bo'lishi mumkin misol uchun: O'zbekistonda: 8/26/2024, Rossiyada: 26.08.2024
// console.log(now.toLocaleTimeString()); // Faqat vaqtni ko'rsatadi, Misol uchun: 8:01:01 PM
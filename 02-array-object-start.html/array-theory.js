"use strict";

// const names = ["Muhammadjon", "Nurbek", "Muhammadali", "Mirzohid"];

// names.push("Abdulaziz"); // push metodi massivning ohiriga element qo'shadi
// names.unshift("Abdulaziz"); // unshift metodi massivning boshiga element qo'shadi
// unshift metodi push metodiga qaraganda sekinroq, chunki unshift metodi uchun massivimizdagi har bir massiv elementi indeksini oʻzgartirish uchun baʼzi algoritmlar kerak boʻladi, ammo bizning kichik massivimiz foydalanuvchi maʼlumotlarini yoki shunga oʻxshash narsalarni saqlaydigan haqiqiy loyiha gigant massivlari emas bu yerda uni ishlatsak bo'ladi.
// const firstName = names.shift(); // shift massivning boshidagi elementni o'chiradi lekin tak-tugu bilan o'chirib tashlamaydi (massivdan tashqariga chiqazib qo'yadi) biz uni bu o'zgaruvhicni massiv bilan birgalikda console ga chiqarsak ko'rishimiz mumkin u massiv mashqarisida turgan bo'ladi
// const lastName = names.pop(); // pop metodi ham huddi shitf bilan bir xil ammo u massivning ohiridagi elementni massivdan tashqariga chiqazib tashlaydi ammo uni tak-tugi bilan o'chirib tashlamaydi

// console.log("Names:", names);

// console.log(names.reverse()); // massiv elementlarini joylashuvini orqadan oldingda qilib chiqaradi masalan: const names = ["Muhammadjon", "Nurbek", "Muhammadali", "Mirzohid"], reverse: const names = ['Mirzohid', 'Muhammadali', 'Nurbek', 'Muhammadjon']; original massivni tak-tugi bilan o'zgartirib yuboradi yangi massiv yaratmaydi
// console.log(names); // 'Mirzohid', 'Muhammadali', 'Nurbek', 'Muhammadjon' massiv tak-tugi bilan o'zgartirib tashlangan

// const reversed = names.toReversed();
// console.log(reversed); // yangi massiv
// console.log(names); // original massiv o'zgarmagan
// console.log(names.toReversed()); // toReversed() - bu yangi massiv uchun js metodi reverse qilgan ishni bu ham qiladi faqat original massivni o'zgartirib tashlamaydi ya'ni yangi massiv yaratadi va bu nice

// const letters = ["d", "b", "e", "a", "f", "c"];

// console.log(letters.sort()); // sort metodi ingliz alfatitiga qarab sortirovka qilish lekin ko'p ishlatilmaydi ba'zi-ba'zi da ishlatib turiladi va u yangi massiv yaratmaydi original massivni o'zgartiradi
// console.log(letters.toSorted()); // toSorted() - bu yangi js metodi massivlar uchun u ham sort qilgan ishni qiladi faqat original massivni o'zgartirmaydi yangi massiv yaratadi  va bu albatta nice
// console.log(letters); // original massiv chunki biz toSorted() metodini ishlatabmiz

// console.log(names.splice(2, 2)); // splice - massivning o'chirish metodi, birinchi raqam qaysi indeksdan boshlab o'chirish kerak, ikkinchi raqam birinchi berilgan indeksdan boshlab qancha element o'chirish kerak va u o'chirilgan element massiv dan o'chirib tashlaydi yani original massivdan o'chiradi yangi massiv yaratmaydi = Muhammadali, Mirzohid
// console.log(names); // Muhammadjon, Nurbek

// console.log(names.toSpliced(2, 2)); // toSpliced() - yangi js metodi massivlar uchun splice qilgan ishni bu toSpliced() metodini ham qila oladi faqat original massivdan ochirib tashlamaydi yangigi massiv yaratadi va aytilgan elementlarni yangi o'zi yaratgan massivdan ochiradi

// const webDev = "Muhammadjon"; // agar biz bu o'zgaruvchiga massivimizda yo'q bo'lsa u bizga indeks -1 index qaytaradi agar index noto'g'ri bo'lsa undifined qaytaradi
// const index = names.indexOf(webDev); // indexOf() - massivdagi biror bir index ga ega elementni qidiradi
// console.log(index);

// const newNames = names.with(index, "Muhammadjon_Web"); // yangi massivlar uchun with metodi indexOf() bilan bir-xil ammo yangi massiv yaratadi va o'sha yangi massiv ichida operatsiyalarni olib boradi original massivni o'zgartirmaydi

// // names[index] = 'Muhammadjon_Web'; // o'zgartirish lekin original massivni ham o'zgartiramiz
// // console.log(names[index]);
// // console.log(names); // Muhammadjon elementi Muhammadjon_Web ga o'zgarib qolgan
// console.log(names); // original massivn o'zgartirilmagan chunki biz with() metodini ishlatyapmiz
// console.log(newNames); // bu with() metodi yaratgan yangi massiv va u massivda Muhammadjon elementi Muhammadjon_Web ga o'zgarib qolgan bu yaxshi degani

// const capitalNames = names.map((name, index) => {
//   // map() - map() metodi js ning backend va frontend qismlarida juda ko'p ishlatiladi u yangi massiv yaratadi va u bilan birga bosh amallarni bajarish imkonini beradi (original massivni o'zgartirmaydi) yoki har bir element bilan alohida amal
//   // const newName = name + "!"; // barcha elementlarni ohiriga ! belgi qo'shilib qoladi
//   // return newName; // o'zgartirilgan massiv elementlarini qaytarib beramiz agar bunday qilmasak undifined qiymatini olamiz

//   // return name.toUpperCase(); // toUpperCase() - string uchun metod barcha satr dagi belgilarni katta qiladi. Barcha yangi massiv elemtnlarini katta harfda qaytarib beramiz

//   if(index === 0) { // capitalNames funksiyasida yangi parametr bu index agar index 0 ga teng bo'lsa yani bizning names original massivimizning 0 chi index da Muhammadjon turibdi va biz uni o'zgartiramiz
//     return 'Muhammadjon_Web' // keyin esa yangi o'zgartirilgan elmantni qaytarib beramiz
//   }
//   return name // boshqa elementlarni o'zgartirmadik shunga biz ular shunchaki qaytarib beramiz o'zgarishlar bo'lsa ham agrada bunday qilmasak undifined olamiz 0 index dagi elementdan tashqaqi chunki biz uni if ichida allaqachon qaytarib berganmiz
// });  // lekin shunga o'xshash amal bajarishda with() metodidan foydalanganimiz yaxshiroq lekin ko'p hollarda map() metodi juda-jda ko'p iahlatiladi bu shunchaki misol holos

// console.log(capitalNames);

// console.log(names.includes('Nurbek')) // bu yerda biz true qiymatini olamiz - includes() - metodi bu metod bizga massivimizda biron bir element bor yoki yo'q ligini boolean qiymat bilan aytadi yani bor bo'lsa true qiymatini qaytaradi, agar yo'q bo'lsa false qaytaradi
// console.log(names.includes('nurbek')) // bu yerda biz false qiymatini olamiz chunki nurbek elementimiz yo'q massivimizda

// Biz includes() metodi da bajargan ishimizni indexOf() metodida ham bajarishimiz mumkin lekin bu unchalik yaxshi emas bu shunchaki PRAKTIKA UCHUN HOLOS
// console.log(names.indexOf("Nurbek") !== -1); // mana includes() metodining indexOf() metodini bilan ishlatish logikasi (metodikasi)

// OBJECT LAR BILAN ISHLASH

const people = [
  { name: "Muhammadjon", apartmentNumber: 27 },
  { name: "Nurbek", apartmentNumber: 4 },
  { name: "Muhammadali", apartmentNumber: 35 },
  { name: "Mirzohid", apartmentNumber: 11 },
];

// let findedPerson

// for (let person of people) {
//   if (person.apartmentNumber === 11) {
//     findedPerson = person;
//   }
// }
// console.log(findedPerson);

// const findedPerson = people.find((person) => {  // yuqoridagi kod qilgan ishni find metodi ham qila oladi va yuqoridagi koddan yaxshiroq
//   return person.apartmentNumber === 11; // pastdagi if dan ko'ra qisqaroq va tushinarliroq sintaksis ammo ikkalasi ham 1 ta ishni bajaradi
//   // if (person.apartmentNumber === 11) {
//   //   return true; // agar apartmentNumber ga to'g'ri keladigan user ni topsak biz true qaytaramiz yani natijani agar nimadir noto'g'ri ketsa masalan apartmentNumber noto'g'ri yozilgan bo'lsa undifined qayataradi
//   // }
// });
// console.log(findedPerson);

// const finded = people.find((p) => p.apartmentNumber === 11); // yuqoridagi 2 ta kod qilgan ishni qila oladigan funksiya
// console.log(finded);

// const finded = people.findIndex((person) => { //findIndex() - bu metod bizga index ni qaytaradi massiv ichidagi obyekt index sini olyapmiz hozir
//   return person.apartmentNumber === 11; // 3 qaytaradi yani index ni agar bunday index ni topa olmasa -1 qaytaradi
// });
// // console.log(finded); // 3
// console.log(people[finded]); // index ga qarab butun obyektni olish

// let sumApartmentNumber = 0;

// const filtered = people.filter((p) => { // filter() - bu metod biz aytgan amallarini bajarib massivimmizni filter lab beradi
//   return p.apartmentNumber > 25; // kvartirasini raqami 25 ko'p bo'lgan obyektlarni qaytar deyabmiz
// });

// console.log(filtered);

// filtered.forEach((p) => { // forEach metodi shunchaki massiv bilan itaratsiya olib boradi holos hech narsa qaytarmaydi, original massivni ham o'zgartirmaydi yangi massiv ham yaratmaydi
//   // sumApartmentNumber = sumApartmentNumber + p.apartmentNumber;
//   sumApartmentNumber += p.apartmentNumber; //
// })

// console.log(sumApartmentNumber);

// const sumApartmentNumber = people
//   .filter((p) => p.apartmentNumber > 25)
//   .map((p) => p.apartmentNumber)
//   .reduce((acc, p) => acc + p, 0);
// console.log(sumApartmentNumber);  // pastdagi kodda bu funksiyani yozishno 2-chi usuli

const byAparmentNumber = (p) => p.apartmentNumber > 25;
const pickApartmentNumber = (p) => p.apartmentNumber;

const sumApartmentNumber = people
  .filter(byAparmentNumber)
  .map(pickApartmentNumber)
  .reduce((acc, p) => acc + p, 0);

console.log(sumApartmentNumber);

// Masala: foydalanuvchi tomonidan satr berilgan ma'lumotni teskari qilib console ga chiqarish 

const string = prompt("Lyuboy so'z kiriting uni teskari qilib chiqarib beramiz");
const reversed = string.split("").toReversed().join(''); // biz bu string o'zgaruvchisi ichidagi ma'lumotni massivga aylantiramiz split() metodini ishlatib hech qanday parametrlarsiz parametlar bilan esa qaysi elmentdan boshlab alohida element ga ajratilishini qila olamiz agar parametrga quruq bo'sh string beradigan bo'lsak barcha harf, belgilar alohidadan ajralib qoladi, toReversed() metodi bilan teskari qilib qo'yamiz va join() metodi bilan massivimizni satr ga aylantiramiz

console.log(reversed);

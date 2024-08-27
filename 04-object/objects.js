"use strict";

const person = {
  name: "Oybek",
  age: 14,
  isYoutuber: true,
  languages: ["uz", "ru", "en"],
  address: {
    city: "Namangan",
    area: "Lola",
    street: "Janubiy Aylanma Ko'cha",
    houseNumber: 10,
  },
  "complex key": "complex value", // Agar kalit so'z da 2-ta so'z alohida yozilishi kerak bo'lsa qo'shtirnoq lar ichiga yoziladi
  [1 + 2]: "complex value", // [] - bu qavslar ichiga biz biron bir ifoda yozishimiz mumkin - kalit so'z = 3
  greet() {
    console.log("Greet  from person", this); // person obyektini o'zini olish
  },
  arrow: () => {
    console.log("Arrow function from person", this); // Global Windows obyekti chunki arrow funcsiya o'zining context tini yaratmaydi
  },
  /* info() {
    console.log('Person name is:', this.name); // this agar obyekt ichida nimadirni olish kerak bo'lsa this ishlatsak bo'ladi
  } Eng yomon kod yozishga kiradi bunday kod yozmaslik kerak ya'ni obyektning ichida */
};

// console.log(typeof person); // object
// console.log(person);
// person.greet(); // Object ichidagi funksiyani ishlatish
// person.arrow(); // Object ichidagi funksiyani ishlatish
// person.info();

console.log(person.address); // person obyektindan biron-bir key+value ni olish
console.log(person["address"]); // person obyektindan biron-bir key+value ni olish 2-chi metod

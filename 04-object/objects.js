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

// console.log(person.address); // person obyektindan biron-bir key+value ni olish
// console.log(person["address"]); // person obyektindan biron-bir key+value ni olish 2-chi metod

// Obyektning ichidagi qiymatlarini o'zgartirish mumkin
// person.age++; // + 1
// console.log(person.age); // 15

// person.languages.push("de");
// console.log(person.languages);

// Kalitlarni o'chirish
// person.address = undefined; // biz shunchaki kalitni qiymatini o'zgartirdik bunday qilish mumkin lekin bu HATO
// console.log(person); // undefined

// delete person.address; // tak-tugi bilan o'chirish
// console.log(person); // address o'chib ketgan

// Destuctoring
// const age = person.age;
// const name = person.name;
// const languages = person.languages;
// console.log(age, name, languages);

// const name = "John";

// const { age, name: firstName = "TEST", languages } = person;
// console.log(age, firstName, languages);

// Obyektlar itaratsiyasi

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     // prototipga kir masiligi uchun
//     console.log(person[key]);
//   }
// }

// console.dir(Object); // Object - базовый obyekt, obyektlar bilan ishlash uchun kerakli metodlar bor Object global obyektida

// Object.keys(person).forEach((key) => {
//   console.log(person[key]);
// });

// const logger = {
//   keys(withText = true) {
//     if (withText) {
//       console.log("Object keys:", Object.keys(this));
//     } else {
//       console.log(Object.keys(this));
//     }
//   },

//   keysAndValues() {
//     Object.keys(this).forEach((key) => {
//       console.log("Key:", key);
//       console.log("Value:", this[key]);
//     });
//   },
// };

// logger.keys();
// logger.keysAndValues();
// const bound = logger.keys.bind({ a: 1, b: 2 });
// const bound = logger.keys.bind(person);
// bound(false);
// logger.keys.call(person, false);
// logger.keys.apply(person, [false]);

// Sinflar va meros
class Human {
  static isHuman = true;
  humanGreet() {
    console.log('Greet from human')
  }
}

class Person extends Human {
  // Humandan meros bo'lsa
  constructor(name, age) {
    super(); // Ota constructor ni chaqirish funksiyasi
    this.name = name ?? "Undefined name"; // ?? agar name berilmagan bo'lsa
    this.age = age ?? "Undefined age";
  }

  sayHello() {
    console.log("Hello from", this.name);
  }
}

const person1 = new Person("Oybek", 14);
const person2 = new Person("Muhammadjon", 14);
// console.log(person1);
// console.log(person2);
// person1.sayHello();
// person2.sayHello();
// console.log(person1.isHuman);
// console.log(person.humanGreet());

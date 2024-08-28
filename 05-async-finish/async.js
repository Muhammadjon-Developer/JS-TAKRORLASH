// Event Loop

// Asinhron - biror bir vazifa bajarilayotganda boshqa vazifalar to‘xtab qolmasligini ta'minlashni anglatadi

// const timeout = setTimeout(() => {
//   console.log("After 2 seconds");
// }, 2000);

// clearTimeout(timeout);

// setTimeout(() => {
//   console.log("After 3 seconds");
// }, 3000);

// let count = 0;

// setInterval(() => {
//   console.log("tick", ++count);
// }, 1000);

// function delay(callback, time = 1000) {
//   setTimeout(callback, time);
// }

// delay(() => {
//   console.log("timeout");
// }, 2000)

// Promise -  bu asinxron operatsiyalarni boshqarish uchun ishlatiladigan obyekt, callback funksiyalarni ko'payishini oldini oladi ya'ni (callback hell)
const delay = (time = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3]);
      // reject("Error in delay");
    }, time);
  });
  return promise;
};

// delay(2500)
//   .then((data) => {
//     console.log("Timeout", data);
//     return data.map((x) => x ** 2);
//   })
//   .then((data) => { // then() - keyin nima bajarilishi
//     console.log(data);
//   })
//   .catch((err) => { // catch() - xatolarni tutish uchun va ularni chiroyli ko'rsatish
//     console.log(err);
//   })
//   .finally(() => console.log("Finally it's done!")); // finally() - xato bo'lsa bo'lmasa ham nimadir chiqarish uchun

const getData = () => new Promise((resolve) => resolve([1, 2, 3, 4, 5]));
getData().then((array) => console.log(array));

async function asyncExample() {
  try {
    await delay(3000);
    const data = await getData();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finilly it's done");
  }
}

asyncExample();

const num = 10; // Integer - butun son
const float = 7.5; // Float - o'nlik kasr son
const pow = 10e3; // Bu lyuboy sonini nechanchidir darajasini yozish = 10000
const big = 1_000_000; // Biz katta sonlarni ajratib ham yozishimiz mumkin bu funktsionalga hech qanday tasir qildaydi o'qilishi oson qilish uchun
const negative = -50; // Negative - negativ minusli sonlar

// console.log(Number("64"));
// console.dir(Number); // Biz bu funksiya yordamida Number obyektini ichini to'liq ko'ra olamiz
// console.log(Number.MAX_SAFE_INTEGER); // eng katta havfsiz raqam js da ishlatish uchun
// console.log(Number.MIN_SAFE_INTEGER); // eng kichik havfsiz raqam js da ishlatish uchun
// console.log(Number.MAX_VALUE); // Bu JavaScriptda raqam sifatida ifodalanishi mumkin bo'lgan eng katta musbat qiymatni bildiradi
// console.log(Number.MIN_VALUE); // Bu JavaScriptda ifodalanishi mumkin bo'lgan musbat sonning eng kichik qiymatini bildiradi
// console.log(Number.POSITIVE_INFINITY); // Bu JavaScriptda musbat cheksizlikni ifodalaydi
// console.log(Number.NEGATIVE_INFINITY); // Bu manfiy cheksizlikni ifodalaydi
// console.log(1 / 0); // Masalan biz bu yerda Infinity olamiz
// console.log(Number.isFinite(1 / 0)); // Bu Number obyekti metodi bizga sonni yoki biron bir misol ni Infinity yoki Infinity emas ligi aniqlab beradi agar Infinity bo'lsa false qaytaradi yo'qsa true
// // console.log(27 / undefined); // NaN = Not a Number // NaN qiymatni olish uchun lyuboy sonni undefined ga bo'lamiz
// const weird = 27 / undefined; 
// console.log(Number.isNaN(weird)); // NaN yoki NaN emasligini tekshirish = true
// console.log(Number.isNaN(27)); // bu yerda false chiqadi chunki bu oddiy butun son = false
// // console.log(Math); // Math global obyekt o'z ichida matematik metod va funksiyalarni olgan
// console.log(Math.pow(2, 53) - 1); // MAX_SAFE_INTEGER raqamini hosil qilish // pow() - bu metod sonni darajaga ko'tarish uchun ishlatiladi


const strInt = '16';
const strFloat = '16.44';

// console.log(Number(strInt)); // String Number type ga o'tkazish
// console.log(Number(strFloat)); // String Number type ga o'tkazish
// console.log(Number.parseInt(strInt)); // Bu usul parseInt() Number bilan yozish String Number type ga o'tkazish
// console.log(parseInt(strInt)); // Bu usul parseInt() String Number type ga o'tkazish Number deb yozmasak ham ishlayveradi parseInt
// console.log(parseInt(strFloat)); // Bu usul parseInt() String Number type ga o'tkazish ammo u o'nlik kasr ni faqat butun sonini ko'rsatadi
// console.log(parseFloat(strFloat)); // Bu usul parseFloat() String Number type ga o'tkazish ammo endi biz o'nlik kasr ni to'liq olamiz
// console.log(+strInt, +strFloat); // String ni number ga o'tkazish yanabir turi yoniga + yozib qo'yish kerak

// console.log(0.1 + 0.2); // = 0.30000000000000004 biz buni yaxlidlashimiz kerak 
const fixed = (0.1 + 0.2).toFixed(1)
console.log(+fixed); // toFixed() - bu metod bizga nuqtadan keyin qancha raqam qolishini yozamiz lekin toFixed() bizga doim string ma'lumot qaytaradi shuninng uchun misol oldiga + yozib qo'ysak u songa aylanadi






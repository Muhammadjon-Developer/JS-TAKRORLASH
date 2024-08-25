// Function Declaration - funksiya e'lon qilingan qatordan yuqorida ishlaydi 
function greet(name) {
  console.log("Hello - ", name);
}

greet("Muhammadjon");


// Function Expression - funksiya e'lon qilingan qatordan yuqorida ishlamaydi 
const greet2 = function(name) {
  console.log("Hello - ", name);
}

greet2("Oybek"); 

// Arrow Function - funksiya e'lon qilingan qatordan yuqorida ishlamaydi 
const greet3 = (name) => {
  console.log("Hello - ", name)
}

greet3("Abdulaziz");
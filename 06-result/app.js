// const car = {
//   model: "Mercedes",
//   year: 2004,
// };

// const json = JSON.stringify(car); // stringify() - json ga aylantirish uchun
// const parsed = JSON.parse(json); // parse() - json dan original holga o'tish (js ga)

// console.log(json); // Json format
// console.log(parsed); // Javascript format

const list = document.querySelector("#list");

async function start() {
  list.innerHTML = "Loading...";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setTimeout(() => {
      render(data);
    }, 2000)
  } catch (err) {
    list.style.color = "red";
    list.innerHTML = 'Error: ' + err.message;
  }
}

function render(users = []) {
  const html = users.map(toHTML).join("");
  list.innerHTML = html;
}

function toHTML(user) {
  return `<li class="list-group-item">${user.name}</li>`
}

start();

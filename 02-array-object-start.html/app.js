/* Theory

massida index lar 0 dan boshlab sanaladi
    INDEX:     0  1  2  2  4  5  6  7  8   9
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; masssiv yaratishning birinchi usuli
const arrayStrings = ["a", "b", "c", "d", "e", "f", "g"];
const arrayAnyTypes = ["a", "b", "c", 1, 2, 3, 4, null, true, NaN, false];
const newArray = new Array("Apple", "Mercedes cls63", 68, false);  massiv yaratishning ikkinchi usuli lekin ko'pincha massivlar birinchi metoddam foydalangan holda yaratiladi
console.log(array);
console.log(arrayStrings);
console.log(array.length); massivning length ni olish

console.log(array[5]); = 6
console.log(array[10]);  chunki 10-chi index li element bizning massivimizda yo'q
console.log(array[array.length - 1]); // massivning ohirgi elementini olish = array[11 - 1]
array[0] = "Hello!"; // massivning boshidagi elementni o'zgartirish
array[array.length] = "World!"; // Massiv ohiriga element qo'shish ammo bundan foydalanmang
console.log(array); 
 */

const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

// console.log(inputElement.value);

// const notes = ["Сделать д.з", "Создать проект", "Погулять"];

// function render() {
//   // for (let i = 0; i < notes.length; i++) {
//   //   listElement.insertAdjacentHTML(
//   //     "beforeend",
//   //     getNoteTemplate(notes[i])
//   //   );
//   // }
//   for (let note of notes) {
//     listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
//   }
// }

// render();

// createBtn.onclick = () => {
//   if (inputElement.value.length === 0) {
//     return;
//   }
//   // listElement.innerHTML =
//   listElement.insertAdjacentHTML(
//     "beforeend",
//     getNoteTemplate(inputElement.value)
//   );
//   inputElement.value = "";
// };

// function getNoteTemplate(title) {
//   return `<li class="list-group-item d-flex justify-content-between align-items-center">
//       <span>${title}</span>
//       <span>
//         <span class="btn btn-small btn-success">&check;</span>
//         <span class="btn btn-small btn-danger">&times;</span>
//       </span>
//     </li>`;
// }

/* Object Theory

const myBro = {
  firstName: "Abdulaziz",
  lastName: "Olimov",
  year: 2013,
  hasFriend: false,
  languages: ["uz", "ru"],
  getFullName: () => {
    console.log(myBro.firstName + " " + myBro.lastName);
  },
};

console.log(myBro) // butun obyektni olish
console.log(myBro.year) // obyekt elementini olish
console.log(myBro['year']) // obyekt elementini olish 2-chi metod

const key = 'hasFriend';
console.log(myBro[key]); // obyekt elementini olish boshqa metod
myBro.hasFriend = true;
console.log(myBro[key]);
myBro.getFullName();

// console.log(typeof myBro); object */

const notes = [
  {
    title: "Сделать д.з",
    completed: true,
  },
  {
    title: "Создать проект",
    completed: false,
  },
  {
    title: "Погулять",
    completed: false,
  },
];

function render() {
  listElement.innerHTML = "";
  if (notes.length === 0) {
    listElement.innerHTML = '<p>Нет элементов<p/>'
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i));
  }
}

render();

createBtn.onclick = () => {
  if (inputElement.value.length === 0) {
    return;
  }
  const newNote = {
    title: inputElement.value,
    completed: false,
  };
  notes.push(newNote); // push metodi massivning ohiriga yangi element qo'shadi
  render();
  inputElement.value = "";
};

listElement.onclick = (event) => {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index); // parseInt Number obyekti bilan bir-xil lyuboy type ni number type piga otkazadi
    const type = event.target.dataset.type;

    if (type === "toggle") {
      notes[index].completed = !notes[index].completed;
    } else if (type === "remove") {
      notes.splice(index, 1);
    }

    render();
  }
};

function getNoteTemplate(note, index) {
  return `<li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="${note.completed ? "text-decoration-line-through" : ""}">${
    note.title
  }</span>
      <span>
        <span class="btn btn-small btn-${
          note.completed ? "warning" : "success"
        }" data-index="${index}" data-type="toggle">&check;</span>
        <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
      </span>
    </li>`;
}

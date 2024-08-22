/* Theory

index in arrays starts count from 0
    INDEX:     0  1  2  2  4  5  6  7  8   9
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; first method to create an array
const arrayStrings = ["a", "b", "c", "d", "e", "f", "g"];
const arrayAnyTypes = ["a", "b", "c", 1, 2, 3, 4, null, true, NaN, false];
const newArray = new Array("Apple", "Mercedes cls63", 68, false);  how to create an array with a second way but usually arrays are created by the first method
console.log(array);
console.log(arrayStrings);
console.log(array.length); how to get a length of an array

console.log(array[5]); = 6
console.log(array[10]);  because the element with index 10 is not in our array
console.log(array[array.length - 1]); // how to get the last element of array = array[11 - 1]
array[0] = "Hello!"; // How to change the first element in array
array[array.length] = "World!"; // How to add a new element to end of an array BUT DON'T USE THIS 
console.log(array); 
 */

const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

// console.log(inputElement.value);

const notes = ["Do Homework", "Create a project", "Go to walk"];

function render() {
  // for (let i = 0; i < notes.length; i++) {
  //   listElement.insertAdjacentHTML(
  //     "beforeend",
  //     getNoteTemplate(notes[i])
  //   );
  // }
  for (let note of notes) {
    listElement.insertAdjacentHTML(
      "beforeend",
      getNoteTemplate(note)
    );
  }
}

render();

createBtn.onclick = () => {
  if (inputElement.value.length === 0) {
    return;
  }
  // listElement.innerHTML =
  listElement.insertAdjacentHTML(
    "beforeend",
    getNoteTemplate(inputElement.value)
  );
  inputElement.value = "";
};

function getNoteTemplate(title) {
  return `<li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${title}</span>
      <span>
        <span class="btn btn-small btn-success">&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
      </span>
    </li>`;
}

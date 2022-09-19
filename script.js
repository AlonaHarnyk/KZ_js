// const input = document.querySelector('.lodash')

// // input.addEventListener('input', _.throttle(inputHandler, 500))

// // function inputHandler(event) {
// // console.log(event.target.value)
// // }

// input.addEventListener('input', _.debounce(inputHandler, 500,     {
//       leading: true,
//       trailing: true,
//     }))

// function inputHandler(event) {
// console.log(event.target.value)
// }

const input = document.querySelector("input");
const boxesWrapper = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

destroyBtn.addEventListener("click", destroyBoxes);
createBtn.addEventListener("click", () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

function destroyBoxes() {
  boxesWrapper.innerHTML = "";
  input.value = "";
}

function createBoxes(amount) {
  const div = "<div></div>";
  const boxes = Array(amount).fill(div).join("");
  boxesWrapper.insertAdjacentHTML("afterbegin", boxes);
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const divs = [...boxesWrapper.children];
  let initialSize = 30;
  const step = 10;
  divs.forEach((div) => {
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = initialSize + "px";
    div.style.height = initialSize + "px";
    initialSize += step;
  });
}

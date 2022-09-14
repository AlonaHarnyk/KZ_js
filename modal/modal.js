const list = document.querySelector("ul");
const modalText = document.querySelector(".modal-text");
const backdrop = document.querySelector(".backdrop");
const button = document.querySelector("button");

list.addEventListener("click", openModal);

function openModal(event) {
  let content;
  if (event.target.nodeName === "P") {
    content = event.target.textContent;
  } else if (event.target.nodeName === "LI") {
    content = event.target.firstElementChild.textContent;
  } else {
    return;
  }

  modalText.textContent = content;
  backdrop.classList.add("open");

  window.addEventListener("keydown", closeModalByEsc);
}

button.addEventListener("click", closeModal);
backdrop.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    return;
  }
  closeModal();
});

function closeModal() {
  modalText.textContent = "";
  backdrop.classList.remove("open");
  window.removeEventListener("keydown", closeModalByEsc);
}

function closeModalByEsc(event) {
  if (event.code === "Escape") {
    closeModal();
  }
}

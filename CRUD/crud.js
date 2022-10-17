const fetchButton = document.querySelector(".fetch");
const list = document.querySelector(".list");
const addBtn = document.querySelector(".add");
const formWapper = document.querySelector(".form-wrapper");

const BASE_URL = "http://localhost:8080";

fetchButton.addEventListener("click", getUsers);

function getUsers() {
  fetch(`${BASE_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
      const markup = users
        .map(
          ({ name, email, id }) => `
        <li id=${id}>
        <p class='name'>User name: <span>${name}</span></p>
        <p class='email'>User email: <span>${email}</span></p>
        <button class='delete'>Delete</button>
         <button class='edit'>Edit</button>
        </li>
    `
        )
        .join("");
      list.innerHTML = markup;
      const deleteBtns = document.querySelectorAll(".delete");
      deleteBtns.forEach((btn) => btn.addEventListener("click", deleteUser));
      const editBtns = document.querySelectorAll(".edit");
      editBtns.forEach((btn) => btn.addEventListener("click", editUser));
    });
}

addBtn.addEventListener("click", addUser);

function addUser() {
  formWapper.innerHTML = createForm();
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
    fetch(`${BASE_URL}/users`, options).then(() => {
      getUsers();
      formWapper.innerHTML = "";
    });
  });
}

function createForm(name = "", email = "") {
  return `<form>
        <label>
        Name:
            <input type='text' name='name' value='${name}'/>
        </label>
        <label>
        Email:
            <input type='email' name='email' value='${email}'
            />
        </label>
        <button>Save</button>
    </form >`;
}

function deleteUser(event) {
  const id = event.target.parentNode.id;
  const options = {
    method: "DELETE",
    headers: {
      authorization: "admin",
    },
  };
  fetch(`${BASE_URL}/users/${id}`, options).then(() => getUsers());
}

function editUser(event) {
  const id = event.target.parentNode.id;
  const name = event.target.parentNode.querySelector(".name span").textContent;
  const email =
    event.target.parentNode.querySelector(".email span").textContent;
  console.log(name, email);
  formWapper.innerHTML = createForm(name, email);
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
    };

    const options = {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
    fetch(`${BASE_URL}/users/${id}`, options).then(() => {
      getUsers();
      formWapper.innerHTML = "";
    });
  });
}

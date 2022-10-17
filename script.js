const form = document.querySelector("form");
const list = document.querySelector(".list");
const button = document.querySelector(".more");

const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
const API = "9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK";

let pageToFetch = 0;
let keyword = "";

function fetchEvents(page, keyword) {
  const params = new URLSearchParams({
    apikey: API,
    page,
    keyword,
    size: 50,
  });

  return fetch(`${BASE_URL}?${params}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
}

function getEvents(page, keyword) {
  fetchEvents(page, keyword).then((data) => {
    if (data.page.totalElements === 0) {
      button.classList.add("unvisible");ß
      alert("There are no events by this keyword!");
      return;
    }

    if (pageToFetch === data.page.totalPages) {
      button.classList.add("unvisible");
      alert("Finish!");
      return;
    }

    const events = data._embedded.events;
    renderEvents(events);
    pageToFetch += 1;
    if (data.page.totalPages > 1) {
      button.classList.remove("unvisible");
    }
  });
}

function renderEvents(events) {
  const markup = events
    .map(({ name, images }) => {
      return `<li>
        <img src='${images[0].url}' alt='${name}' width='200'>
        <h2>${name}</h2>
        </li>`;
    })
    .join("");
  list.insertAdjacentHTML("beforeend", markup);
}

button.addEventListener("click", () => {
  getEvents(pageToFetch, keyword);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = event.target.elements.query.value;
  if (!query) {
    return;
  }
  pageToFetch = 0;
  keyword = event.target.elements.query.value;
  list.innerHTML = "";
  button.classList.add("unvisible");
  getEvents(pageToFetch, keyword);
  form.reset();
}); 

const list = document.querySelector(".list");

const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
const API = "9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK";

function fetchEvents() {
  const params = new URLSearchParams({
    apikey: API,
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

function getEvents() {
    fetchEvents().then((data) => {
       renderEvents(data._embedded.events)
   }) 
}

getEvents()

function renderEvents(events) {
    const markup = events.map(({ name, images }) => {
        return `<li>
        <img src='${images[0].url}' alt='${name}' width='200'>
        <h2>${name}</h2>
        </li>`
    }).join('')
    list.innerHTML = markup
}
// const div1 = document.querySelector('div')
// console.log(div1)

// const div2 = document.querySelector('.root')
// console.log(div2)

// // const div3 = document.querySelector('#root')
// // console.log(div3)
// // const div3 = document.getElementById('root')
// // console.log(div3)

// const divs = document.querySelectorAll('div')
// console.log(divs)
// divs.forEach(div => console.log(div))

// const p = document.querySelector('.text')
// console.log(p.parentNode)

// const list = document.querySelector('.list1')
// // console.log(list.firstElementChild)

// const items = list.querySelectorAll('li')
// console.log(items)

// const input = document.querySelector('input')
// console.log(input['name'])
// input.value = '150'

// console.log(p.textContent)
// p.textContent = 'Hello!'

// p.classList.add('color')
// p.classList.remove('color')
// console.log(p.classList.contains('color'))

// const button = document.querySelector(".btn");

// p.style.backgroundColor = "teal";
// p.style.fontSize = "24px";
// p.style.color = '#fff'

// const img = document.querySelector('img')

// console.log(img.hasAttribute('alt'))
// // img.setAttribute('alt', 'photo') 
// img.alt = 'photo'
// // console.log(img.getAttribute('alt'))
// console.log(img.alt)

// console.log(img.attributes)

// const saveBtn = document.querySelector('[data-action="save"]');
// const closeBtn = document.querySelector('[data-id="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.id); //close

// const wrapper = document.querySelector('.wrapper')

// const span1 = document.createElement('span')
// span1.textContent = 'Text'
// span1.classList.add('color')
// const span2 = document.createElement('span')

// wrapper.append(span1, span2)

// span2.remove()

// console.log(wrapper.innerHTML)
// wrapper.innerHTML = '<span>000</span>'

// const inner = document.querySelector('.inner')
// inner.innerHTML = '<p>333</p>'
// inner.innerHTML = ''

// const ul = document.createElement('ul')
// wrapper.append(ul)
// console.log(ul)

// const array = [
//     {a: 1, b: 2},
//     {a: 3, b: 4},
//     {a: 5, b: 6}
// ]

// const markup = array.map(({ a, b }) => `<li><p>${a}</p><p>${b}</p></li>`).join('')

// console.log(markup)

// ul.insertAdjacentHTML('afterbegin', markup)

// ТАК НЕ НАДО
// array.forEach(({a, b}) => ul.insertAdjacentHTML('afterbegin', `<li><p>${a}</p><p>${b}</p></li>`))



// const text = document.querySelector('.text')


// text.addEventListener('click', clickHandler)

// function clickHandler(event) {
//     console.log(event)
//     console.log(event.target.textContent)
// }

// document.addEventListener("keydown", event => {
// //     console.log(event)
// //   console.log("key: ", event.key);
// //     console.log("code: ", event.code);
//     console.log(event.code)

//     if (event.key === 's') { 
//         console.log('s')
//         return
//     }
    
//     console.log('not s')

// });

const inputEl = document.querySelector('.input')

// inputEl.addEventListener('input', inputHandler)

// function inputHandler(event) {
//     console.log(event.target.value)
// }

// inputEl.addEventListener('focus', focusHandler)

// function focusHandler() {
//     inputEl.style.backgroundColor = 'red'
// }

// // inputEl.addEventListener('blur', blurHandler)

// // function blurHandler() {
// //     inputEl.style.backgroundColor = 'grey'
// // }

// inputEl.addEventListener('change', changeHandler)


//     inputEl.style.backgroundColor = 'green'
// }

const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target.elements.login.value.length)

  const {
    elements: { login: {value}}
  } = event.target;
    
  console.log(value.length)
  event.target.reset();
}
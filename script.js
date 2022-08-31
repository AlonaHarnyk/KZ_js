// // Операторы сравнения (<, >, <=, >=, ==, ===, !=, !==)

// //Общие правила сравнения
//// Результатом сравнения будет булевое значение.
// // При сравнении разных типов с помощью операторов == и =! операнды приводятся в число
// // null не равно ничему кроме себя и undefined.
// // undefined не равно ничему кроме себя и null.
// // NaN не равняется ничему, даже самому себе
//// Строки между собой сравниваются по unicode (посимвольно).

// // Правила приведения разных типов к числу:
// // true --> 1
// // false --> 0
// //'', а также строка с пробелами --> 0
// // null --> 0
// // undefined --> NaN
// // не пустая строка --> если строка состоит только из цифр, происходит приведение в число. В противном случае – NaN.

// Оператор ==
// console.log(null == 0); // false
// console.log(undefined == 0); // false
// console.log(undefined == null); // true
// console.log("123" == 123); // true
// console.log(true == "1"); true
// console.log(4 == 5); // false

// Оператор ===
// console.log("123" === 123); // false
// console.log(null === null); // true
// console.log(2 + 2 === 4); // true
// console.log(NaN === NaN); // false
// console.log(undefined === null); // false

// Оператор !=
// console.log("4" != 4); // false

// Оператор !==
// console.log("4" !== 4); // true

// const a = 123;
// const b = "qwerty";

// // console.log(Number.isNaN(a)); // false
// // console.log(Number.isNaN(b)); // false

// // const toNumberA = Number(a);
// // console.log(toNumberA);
// // console.log(Number.isNaN(toNumberA)); // false

// const toNumberB = Number(b);
// console.log(toNumberB);
// console.log(Number.isNaN(toNumberB)); // true
// console.log(toNumberB == NaN) // false

// Операции с приведением типов

// console.log(2 + 5 + "" + 1 + 0 - 10); // 700
// console.log("" + 1 - 0); // 1
// console.log(true + false); // 1
// console.log(true + ""); // 'true'
// console.log(true + "false"); // 'truefalse'
// console.log(true - "false"); // NaN
// console.log(6/"3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); // '9px'
// console.log("$" + 4 + 5); // '$45'
// console.log("4" - 2); // 2
// console.log("4" + 2); // '45'
// console.log("4"/2); // 2
// console.log("4px" - 2); // NaN
// console.log(7/0); // Infinity
// console.log("-9" + 5); // '-95'
// console.log(!null + 1); // 2

// // Логические операторы (&&, ||, !)

// // В логических операциях происходит приведение типов операндов к true или false.

// // (falsy) значения, приводимые к false в логическом преобразовании:
// // 0
// // NaN
// // null
// // undefined
// // пустая строка
// // false.
//// Абсолютно все остальное приводится к true.

// // && – останавливается на false
// // Если все операнды были приведены к true, возвращается последняя.
// // Если результат приведения операнды к булю false, проверка останавливается и возвращается исходное значение этого операнда.

// // || - останавливается на true
// // Возвращает первое истинное (приведенное к true) значение или последнее, если такое truthy значение не найдено.

// // ! - инвертирует true в false, или false в true

// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(false && false); // false
// console.log(true && 4 && "kiwi"); // 'kiwi'
// console.log(true && "" && "kiwi"); // ''
// console.log(true && " " && "kiwi");  // kiwi
// console.log(true && 0 && "kiwi"); // 0
// console.log(true || 3); // true
// console.log(true || 3 || 4); // true
// console.log(true ||false || 7); // true
// console.log(false || true || 7); // true
// console.log(null || 2 || undefined); // 2
// console.log((1 && null && 2) > 0); // false
// console.log(null || (2 && 3) || 4); // 3
// console.log(null || (null && 3) || 4); // 4
// console.log(false || 0 || '') // ''

// let string = '';

// for (let i = 0; i < 5; i += 1) {
//   console.log("Iteration #", i + 1);
//   console.log(i);
//   console.log("before", string);
//   string += i;
//   console.log("after", string);
// }

// console.log("result", string);

// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log("нашли число 3");
//       break;
//     }
//   }

//   for (let i = 0; i < 15; i += 1) {
//     console.log( 'before', i);
//     if (i / 3 === 4 || i / 2 === 5) {
//       continue;
//     }
//     console.log('after', i);
//   }

// const array1 = [1, 2, 3];
// const array2 = array1;

// // console.log(array1)
// // console.log(array2)

// array1[0] = 10

// // console.log(array1)
// // console.log(array2)

// array2[2] = 5

// // console.log(array1)

// const array3 = array2

// // console.log(array3)

// array3[0] = 100;

// // console.log(array1)

// array2.length = 0;

// console.log(array3)

// let array1 = [1, 2, 3]
// let array2 = array1;

// array1 = [100, 200, 300]

// array2 = array1

// console.log(array2)

// add(1, 2, 3)

// function add(a, b, c) {
//     console.log(a + b + c)
// }

// add(1, 2, 3)

// const add1 = function (a, b, c) {
//     console.log('here')
//     // return
// //     const sum = a + b + c
//     // return sum
// }

// // const invoke = add1(1, 2, 3)

// // console.log(invoke)
// console.log(add1(1, 2, 3))

// let a = 5;

// if (10 > 0) {
// //   const a = 10;
//   // console.log(a)

//   if (100 > 10) {
//     a = 100;
//     // console.log(a);
//   }
// }

// console.log(a);

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// }

// const key = 'b'

// // console.log(obj.b)
// // console.log(obj['b'])

// console.log(obj['b'])

// const student = {
//     name: 'Anna',
//     homeworkResults: [{topic: 'html', result: true}, {topic: 'css', result: true}],
//     addResults(topic, result) {
//         this.homeworkResults.push({topic, result})
//     }
// }

// // console.log(student.homeworkResults)
// student.addResults('js', false)
// console.log(student.homeworkResults)

// const a = {}

// const b = 'key2'

// a.key = 5;
// a['key1'] = 10
// a[b] = 100

// console.log(a)

// const items = [
//   {
//     letter: "a",
//     number: 10,
//     bool: true,
//   },
//   {
//     letter: "r",
//     number: 13,
//     bool: true,
//   },
//   {
//     letter: "h",
//     number: 16,
//     bool: false,
//   },
//   {
//     letter: "c",
//     number: 60,
//     bool: true,
//   },
//   {
//     letter: "p",
//     number: 100,
//     bool: false,
//   },
// ];

// const dataObject = {}

// const keys = Object.keys(items[0])
// // console.log(keys)

// for (let key of keys) {
//     // console.log(key)
//     dataObject[key] = [];
//     // console.log(object)
// }

// console.log(dataObject)

// for (const objKey in dataObject) {
//   for (const item of items) {
//     dataObject[objKey].push(item[objKey])
//   }
// }

// // console.log(dataObject)

// const car1 = {
//   brand: "Toyota",
//   model: 700,
//   color: "blue",
//   max: 240,
//   isNew: true,
//   dimensions: {
//     weight: 2000,
//     height: 150,
//     length: 4.2,
//   },
// };

// const car2 = {
//   brand: "Nissan",
//   model: 700,
//   color: "red",
//   max: 240,
//   isNew: true,
//   dimensions: {
//     height: 150,
//     length: 4.2,
//   },
// };

// function createMessage({
//   color = "No info",
//   max: maxSpeed = "No info",
//   isNew = "No info",
//   dimensions: { weight = "No info" },
// }) {
//   const message = `
//   Color: ${color}
//   Max speed: ${maxSpeed}
//   Is new: ${isNew}
//   Weight: ${weight}
//   `;
//   console.log(message);
// }

// createMessage(car2);

// const add = (a, b) => {
//   console.log(a + b);
// };

// const multiply = (a, b) => {
//   console.log(a * b);
// };

// function mathOperations(num1, num2, callback1, callback2) {
//   if (num1 > num2) {
//     callback1(num1, num2);
//   } else {
//     callback2(num1, num2);
//   }
// }

// // mathOperations(10, 20, add, multiply)

// // mathOperations(5, 3, add, multiply)

// // mathOperations(
// //   5,
// //   3,
// //   (a, b) => {
// //     console.log(a + b);
// //   },
// //   (a, b) => {
// //     console.log(a * b);
// //   }
// // );

const planets = ["Земля", "Марс", "Венера", "Юпитер"];

// planets.forEach((elem, index, array) => {
//   console.log(elem);
//   console.log(index);
//   console.log(array);
// });

// const array = [];
// planets.forEach((elem) => {
//   array.push(elem + '!')
// });

// const array = planets.map((elem) => elem + '!')


// const resultArray = planets.map((elem) => {
//   if (elem.length > 5) {
//     return elem.toUpperCase();
//   }
//   return elem;
// });

// console.log(resultArray)

// const filtered = planets.filter((elem) => elem.length > 5 || elem.length < 5)

// console.log(filtered)

// const finded = planets.find((elem) => elem.length > 10)

// console.log(finded)


// const result = planets.reduce((acc, item, idx) => {
//   console.log(`iteartion # ${idx + 1}`)
//   console.log('acc', acc)
//   console.log(item)
//   acc += item.length
//   return acc
// }, 0)

// console.log(result)

// const result = planets.reduce((acc, item, idx) => {
//   console.log(`iteartion # ${idx + 1}`)
//   console.log('acc', acc)
//   console.log(item)
//   acc += item.length
//   return acc
// })

// console.log(result)
// Write a function which returns a day number that was some amount of days ago from the passed date.

// const getPastDay = (date, days) => {
//   const MS_PER_DAY = 1000 * 60 * 60 * 24;
//   const msPerDays = MS_PER_DAY * days;
//   const delta = date - msPerDays;
//   return new Date(delta).getDate();
// };

// const date = new Date(2022, 0, 2);
// console.log(getPastDay(date, 1)); // 1, (1 Jan 2022)
// console.log(getPastDay(date, 2)); // 31, (31 Dec 2021)
// console.log(getPastDay(date, 365)); // 2, (2 Jan 2021)

// // Write a function that formats a date in such format "YYYY/MM/DD HH:mm".

// const formatDate = (date) => {
//   const formatNumber = (number) => {
//     if (number < 10) {
//       return `0${number}`;
//     }
//     return number;
//   };

//   const year = date.getFullYear();
//   const month = formatNumber(date.getMonth() + 1);
//   const days = formatNumber(date.getDate());
//   const hours = formatNumber(date.getHours());
//   const minutes = formatNumber(date.getMinutes());

//   return `${year}/${month}/${days} ${hours}:${minutes}`;
// };

// console.log(formatDate(new Date("6/15/2019 09:15:00"))); // "2019/06/15 09:15"
// console.log(formatDate(new Date())); // gets current local time

// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.targetDate = targetDate;
//     this.daysSpan = document.querySelector(`${selector} [data-value="days"]`);
//     this.hoursSpan = document.querySelector(`${selector}  [data-value="hours"]`);
//     this.minsSpan = document.querySelector(`${selector} [data-value="mins"]`);
//     this.secsSpan = document.querySelector(` ${selector} [data-value="secs"]`);
//     this.updateTimer()
//   }

//   updateTimer() {
//     setInterval(() => {
//       const curretTime = Date.now();
//       const delta = this.targetDate - curretTime;
//       const { days, hours, minutes, seconds } = this.converTime(delta);
//       this.daysSpan.textContent = days;
//       this.hoursSpan.textContent = hours;
//       this.minsSpan.textContent = minutes;
//       this.secsSpan.textContent = seconds;
//     }, 1000);
//   }

//   converTime(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
//     const days = Math.floor(ms / day);
//     const hours = Math.floor((ms % day) / hour);
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);
//     return { days, hours, minutes, seconds };
//   }
// }

// const timer1 = new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jan 1, 2023"),
// });

// const timer2 = new CountdownTimer({
//   selector: "#timer-2",
//   targetDate: new Date("May 9, 2023"),
// });

// const timer3 = new CountdownTimer({
//   selector: "#timer-3",
//   targetDate: new Date("Nov 1, 2022"),
// });

// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд. Значением исполнившегося промиса должно быть то кол-во миллисекунд которое передали во время вызова функции delay.

// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(ms);
//     }, ms);
//   });
// };

// const logger = (time) => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// // delay(2000).then((data) => logger(data)); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, а принимала всего два параметра allUsers и userName и возвращала промис.

// const users = [
//   { name: "Mango", active: true },
//   { name: "Poly", active: false },
//   { name: "Ajax", active: true },
//   { name: "Lux", active: false },
// ];

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };

// const logger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

// const toggleUserState = (allUsers, userName) => {
//   return new Promise((resolve) => {
//     const updatedUsers = allUsers.map((user) =>
//       user.name === userName ? { ...user, active: !user.active } : user
//     );

//     resolve(updatedUsers);
//   });
// };


// const toggleUserState = (allUsers, userName) => {
//     const updatedUsers = allUsers.map((user) =>
//       user.name === userName ? { ...user, active: !user.active } : user
//     );
  
//   return Promise.resolve(updatedUsers)

// };

// const logger = (updatedUsers) => console.table(updatedUsers);

// /*
//  * Должно работать так
//  */
// toggleUserState(users, "Mango").then(logger);
// toggleUserState(users, "Lux").then(logger);




// Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError, а принимала всего один параметр transaction и возвращала промис.

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = (transaction, onSuccess, onError) => {
//   const delay = randomIntegerFromInterval(200, 500);

//   setTimeout(() => {
//     const canProcess = Math.random() > 0.3;

//     if (canProcess) {
//       onSuccess(transaction.id, delay);
//     } else {
//       onError(transaction.id);
//     }
//   }, delay);
// };

// const logSuccess = (id, time) => {
//   console.log(`Transaction ${id} processed in ${time}ms`);
// };

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

/*
 * Работает так
 */
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);


// const makeTransaction = (transaction) => {
//   const delay = randomIntegerFromInterval(200, 500);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//     const canProcess = Math.random() > 0.3;

//     if (canProcess) {
//       resolve({ id: transaction.id, time: delay })
//     } else {
//      reject(transaction.id)
//     }
//   }, delay);
//   })



// };

// const logSuccess = ({ id, time}) => {
//   console.log(`Transaction ${id} processed in ${time}ms`);
// };

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// /*
//  * Должно работать так
//  */
// makeTransaction({ id: 70, amount: 150 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 71, amount: 230 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 72, amount: 75 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 73, amount: 100 })
//   .then(logSuccess)
//   .catch(logError);
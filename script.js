// Write a function which returns a day number that was some amount of days ago from the passed date.

const getPastDay = (date, days) => {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const msPerDays = MS_PER_DAY * days;
  const delta = date - msPerDays;
  return new Date(delta).getDate();
};

const date = new Date(2022, 0, 2);
console.log(getPastDay(date, 1)); // 1, (1 Jan 2022)
console.log(getPastDay(date, 2)); // 31, (31 Dec 2021)
console.log(getPastDay(date, 365)); // 2, (2 Jan 2021)

// Write a function that formats a date in such format "YYYY/MM/DD HH:mm".

const formatDate = (date) => {
  const formatNumber = (number) => {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  };

  const year = date.getFullYear();
  const month = formatNumber(date.getMonth() + 1);
  const days = formatNumber(date.getDate());
  const hours = formatNumber(date.getHours());
  const minutes = formatNumber(date.getMinutes());

  return `${year}/${month}/${days} ${hours}:${minutes}`;
};

console.log(formatDate(new Date("6/15/2019 09:15:00"))); // "2019/06/15 09:15"
console.log(formatDate(new Date())); // gets current local time

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

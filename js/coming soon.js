const countDate = new Date('Dec 31, 2023 23:59:59').getTime();

// console.log(countDate);

let counter = setInterval(() => {
  // get date now
  let dateNow = new Date().getTime();

  // measure the differnace between now and countDwon date
  let dateDiff = countDate - dateNow;

  // console.log(dateDiff);

  // get time units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector('.coming .unit .days').innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector('.coming .unit .hours').innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector('.coming .unit .minutes').innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector('.coming .unit .seconds').innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff === 0) {
    clearInterval(counter);
  }
}, 1000);

const btn = document.querySelector('#btn');
const date = document.querySelector('#date');
date.max = new Date().toISOString().split("T")[0];
const display = document.querySelector('#display');

const calculateAge = () => {
  const birthDate = new Date(date.value);
  if(birthDate == "Invalid Date") {
    display.innerHTML = 'Enter valid date :(';
    return;
  }
  const birthDay = birthDate.getDate();
  const birthMonth = birthDate.getMonth() + 1;
  const birthYear = birthDate.getFullYear();

  const currentDate = new Date();

  const todayDay = currentDate.getDate();
  const todayMonth = currentDate.getMonth() + 1;
  const todayYear = currentDate.getFullYear();

  let days, months, years;

  years = todayYear - birthYear;

  if (todayMonth >= birthMonth) months = todayMonth - birthMonth;
  else {
    years--;
    months = 12 + todayMonth - birthMonth;
  }

  if (todayDay >= birthDay) days = todayDay - birthDay;
  else {
    months--;
    days = getDaysInMonth(birthYear, birthMonth) + todayDay - birthDay
  }

  if(months < 0) {
    months = 11;
    years--;
  }

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  display.innerHTML = `You are ${years} year, ${months} month and ${days} day old`;
}
var totalCount = 4;

function onLoad() {
  generateBackground();
  getDate();
  getWeek();
}

function generateBackground() {
  var num = Math.ceil(Math.random() * totalCount);
  var content = document.getElementById("content");
  content.style.backgroundImage = "url('images/backgrounds/" + num + ".jpg')";
}

function getDate() {
  const d = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  document.getElementById("date").innerHTML =
    d.getDate() + " " + months[d.getMonth()] + ", " + days[d.getDay()];
}

function getWeek() {
  //*Get current date
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  //*Find difference of dates
  var diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  //*ms in day
  var oneDay = 1000 * 60 * 60 * 24;
  //*Get day of year
  var day = Math.floor(diff / oneDay);

  //*Get week of year
  var week = Math.ceil(day / 7);

  var Week;

  //*Check if week odd to find week letter
  if (week % 2 == 0) {
    Week = "B";
  } else {
    Week = "A";
  }

  document.getElementById("week").innerHTML = "Week " + Week;
}
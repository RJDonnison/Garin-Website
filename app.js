//*Total background images
var totalCount = 4;

//*Call functions on load
function onLoad() {
  generateBackground();
  getDate();
  getWeek();
}

//*Select background for main content
function generateBackground() {
  //*Select random number in range 0 to totalCount
  var num = Math.ceil(Math.random() * totalCount);
  //*Get content
  var content = document.querySelector("main");
  //*Set background
  content.style.backgroundImage = "url('images/backgrounds/" + num + ".jpg')";
}

//*Nav dates
//#region
//*Get current date in long form
function getDate() {
  //*Get date
  const d = new Date();

  //*Data setup
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

  //*Set date in long form in html
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

  //*Set week in html
  document.getElementById("week").innerHTML = "Week " + Week;
}
//#endregion

//*Dropdowns
//#region
//*Get dropdowns
const dropdowns = Array.from(document.querySelectorAll(".dropdown .header"));
//*Add click event listener
dropdowns.forEach((element) => {
  element.addEventListener("click", () => {
    //*Set all dropdowns to be inactive
    dropdowns.forEach((e) => {
      if (element != e) e.parentElement.dataset.status = "inactive";
    });
    //*Set clicked dropdown to be active if not active
    if (element.parentElement.dataset.status != "active") {
      element.parentElement.dataset.status = "active";
    } else {
      element.parentElement.dataset.status = "inactive";
    }
  });
});
//#endregion

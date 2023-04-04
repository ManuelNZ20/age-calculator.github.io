// inputs
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");
// results
const resultYear = document.querySelector(".result-info-year");
const resultMonth = document.querySelector(".result-info-months");
const resultDay = document.querySelector(".result-info-days");
// buttons
const button = document.querySelector(".button");
// button.addEventListener("click", determineInputs);
const maxDay = determineDayMonth(month);

button.addEventListener("click", result);
window.addEventListener("load", function () {
  month.addEventListener("change", () => determine(month, errorMonth, 1, 12));
  year.addEventListener("change", () =>
    determine(year, errorYear, 1910, new Date().getFullYear())
  );
});
function determineInputs() {
  // month
  determine(month, errorMonth, 1, 12);
  // year
  determine(year, errorYear, 1, new Date().getFullYear());
}
function determine(element, error, min, max) {
  const value = element.value;
  if (value < min || value > max) {
    error.classList.remove("inactive");
  } else if (value) {
    error.classList.add("inactive");
  }
}

const determineAge = () => {
  const yearCurrent = parseInt(new Date().getFullYear());
  const monthCurrent = parseInt(new Date().getMonth() + 1);
  const dayMonth = parseInt(determineDayMonth(monthCurrent));
  let ageResult = yearCurrent - year.value;
  let monthResult = month.value - monthCurrent;
  let dayResult = dayMonth - day.value;
  console.log(dayMonth);
  if (monthCurrent < month.value) {
    --ageResult;
  }
  resultYear.innerText = `${ageResult}`;
  resultMonth.innerText = `${monthResult}`;
  resultDay.innerText = `${dayResult}`;
};

function result() {
  determine(day, errorDay, 1, maxDay);
  const bool = errorDay.classList.contains("inactive");
  if (bool) {
    determineAge();
  }
}

function determineDayMonth(month) {
  switch (month) {
    case 2:
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
  }
}

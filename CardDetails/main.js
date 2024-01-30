const btn = document.querySelector("#submit");
const clear = document.querySelector("#clear");
let firstName;
let lastName;
let country;
let number;
let state;
let city;
let village;

let userInformation;
userInformation = JSON.parse(localStorage.getItem("userInformation"));

if (!userInformation) {
  btn.addEventListener("click", () => {
    firstName = document.querySelector("#firstname").value;
    lastName = document.querySelector("#lastname").value;
    country = document.querySelector("#country").value;
    number = document.querySelector("#number").value;
    state = document.querySelector("#state").value;
    city = document.querySelector("#city").value;
    village = document.querySelector("#village").value;
    console.log(firstName, lastName, village, city, number, state, country);

    userInformation = {
      FirstName: firstName,
      LastName: lastName,
      Country: country,
      Number: number,
      State: state,
      City: city,
      Village: village,
    };

    // console.log(userInformation);
    localStorage.setItem("userInformation", JSON.stringify(userInformation));
  });
} else {
  document.querySelector("#firstname").value = userInformation.FirstName;
  document.querySelector("#lastname").value = userInformation.LastName;
  document.querySelector("#country").value = userInformation.Country;
  document.querySelector("#number").value = userInformation.Number;
  document.querySelector("#state").value = userInformation.State;
  document.querySelector("#city").value = userInformation.City;
  document.querySelector("#village").value = userInformation.Village;
}

clear.addEventListener('click', () => {
  localStorage.clear();
  window.location.assign(
    "https://pransh013.github.io/JS_Assignments/CardDetails/?authuser=0"
  );
});
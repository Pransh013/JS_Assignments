const div = document.querySelector("#parent");
const h1 = document.querySelector("#h1");
const child = document.querySelector("#child");
const history = [];

let key = "";

document.body.addEventListener("keyup", (e) => {
  if (e.key == " ") h1.innerText = `You pressed Space`;
  else h1.innerText = `You pressed ${e.key}`;
  child.innerText = `${e.keyCode}`;
});

const div = document.querySelector("#parent");
const h1 = document.querySelector("#h1");
const child = document.querySelector("#child");
const history = [];

let key = "";

document.body.addEventListener("keydown", (e) => {
  if(key.length == 0) key += e.key;
  document.addEventListener('keyup', (e) => {
    if(e.key == key) print();
  })
  addHistory(e.key, e.keyCode);
});

function addHistory(key, keyCode) {
  history.push(key, keyCode);
  console.log(history);
}

function print() {
  for (let i = 0; i < history.length; ) {
    h1.innerText = `You pressed ${history[i++]}`;
    child.innerText = `${history[i++]}`;
    key = "";
  }
}

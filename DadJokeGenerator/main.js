let content = document.querySelector('#content')
let btn = document.querySelector('#btn')

const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

btn.addEventListener('click', () => {
  content.innerHTML = "Loading...";
  getData();
})

async function getData () {
  const data = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1", options);
  const json = await data.json();
  content.innerHTML = json[0].joke
}

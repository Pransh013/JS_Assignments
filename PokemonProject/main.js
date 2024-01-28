let input = document.querySelector("#input");
let submit = document.querySelector("#submit");
let container = document.querySelector("#container");
let type = document.querySelector("#type");
let typesOf = document.querySelector("#typesOf");
const allPokemons = [];

const TYPE_FETCH_URL = "https://pokeapi.co/api/v2/type/";
const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/?limit=100";

const colors = {
  grass: "#9BC956",
  fire: "#FD842F",
  water: "#4E98C7",
  bug: "#79A449",
  normal: "#A9B0B3",
  poison: "#A9B0B3",
  electric: "#EFD73F",
  fairy: "#FFFFFF",
  ground: "#F7E049",
  fighting: "#D76F2E",
  psychic: "#F46EBD",
  rock: "#A8922C",
  ghost: "#826AA8",
  onix: "#A8922C",
  ice: "#5AC7E8",
};

submit.addEventListener("click", () => {
  let inputText = input.value;
  console.log(inputText);
});

let flag = false;
type.addEventListener("click", () => {
  if (flag) {
    typesOf.classList.add("hidden");
    typesOf.classList.remove("flex");
  } else {
    typesOf.classList.add("flex");
    typesOf.classList.remove("hidden");
  }
  flag = !flag;
});

window.addEventListener("load", () => {
  getTypeData();
  getAllPokemons();
});

async function getTypeData() {
  const data = await fetch(TYPE_FETCH_URL);
  const json = await data.json();

  for (let i = 0; i < json.results.length - 7; i++) {
    let p = document.createElement("p");
    p.innerHTML = json.results[i].name;
    p.setAttribute(
      "class",
      "h-7 min-w-20 tracking-tighter cursor-pointer text-center capitalize rounded-md border-2 border-black"
    );
    typesOf.append(p);
  }
}
 
async function getAllPokemons() {
  const data = await fetch(POKEMON_URL);
  const json = await data.json();
  console.log(json);

  json.results.forEach((val) => {
    let card = document.createElement("div");
    let cardColor;
    let pokeData;
    let img = document.createElement("img");
    let poketype = document.createElement("p");
    let imgcontainer = document.createElement("div");
    let attributes =
      "flex flex-col items-center w-60 lg:w-64 h-72 md:h-80 border-2 border-white rounded-lg shadow-lg pb-2";
    const getPokemonData = async () => {
      const data = await fetch(val.url);
      pokeData = await data.json();
      img.setAttribute("src", pokeData.sprites.other.dream_world.front_default);
      poketype.innerHTML = pokeData.types[0].type.name;
      cardColor = colors[poketype.innerHTML];
      attributes += ` bg-[${cardColor}]`;
      card.setAttribute("class", attributes);
    };
    getPokemonData();

    img.setAttribute(
      "class",
      " object-cover bg-cover  rounded-md"
    );
    imgcontainer.setAttribute(
      "class",
      "w-48 mb-2 p-1 h-36 md:h-48 object-cover rounded-md"
    );

    imgcontainer.appendChild(img);

    let name = document.createElement("p");
    name.innerHTML = val.name;
    poketype.setAttribute(
      "class",
      "font-medium text-black m-3 capitalize text-[24px]"
    );
    name.setAttribute(
      "class",
      "font-semibold tracking-wide text-black m-3 uppercase text-xl"
    );
    card.append(name, imgcontainer, poketype);
    allPokemons.push(card);
    container.appendChild(card);
  });
}

// if(card) {
//   card.addEventListener("click", showInfo);

//   let backstroke = document.querySelector("#backstroke");
//   function showInfo() {
//     backstroke.classList.remove("hidden");
//     backstroke.classList.add(" flex");
//   }
// }
const input = document.querySelector("input");
const writeHere = document.getElementById("write-here");

const selectBoxClass = document.getElementById("class");
const selectBoxRace = document.querySelector("#race");
const selectedRaceDiv = document.getElementById("selected-race");
const selectedClassDiv = document.getElementById("selected-class");

input.addEventListener("input", displayName);

function displayName(event) {
  writeHere.textContent = event.target.value;
}

const optionsMaleOrFemale = document.getElementsByName("gender");
const selectMaleOrFemale = document.getElementById("gender");

selectMaleOrFemale.addEventListener("input", putGenderIcon);

function putGenderIcon(event) {
  const selectedGenderDiv = document.getElementById("selected-gender");

  for (opt of optionsMaleOrFemale)
    if (event.target.value === "female") {
      selectedGenderDiv.innerHTML = `
        <span class="material-symbols-outlined">
        female
        </span> 
        `;
    }

  if (event.target.value === "male") {
    selectedGenderDiv.innerHTML = `
        <span class="material-symbols-outlined">
        male
        </span>
        `;
  }
}

const images = [
  { id: "bugbear", url: "images/races/bugbear.webp" },
  {
    id: "dragonblood",
    url: "images/races/dragonblood.webp",
  },
  {
    id: "seaelf",
    url: "images/races/seaElf.webp",
  },
  {
    id: "shifter",
    url: "images/races/shifter.png",
  },
  {
    id: "tiefling",
    url: "images/races/tiefling.webp",
  },
  {
    id: "druid",
    url: "images/class/druid-class-icon.png",
  },
  {
    id: "paladin",
    url: "images/class/paladin-class-icon.png",
  },
  {
    id: "shaman",
    url: "images/class/shaman-class-icon.png",
  },
];

selectBoxRace.addEventListener("input", insertSelected);
selectBoxClass.addEventListener("input", insertSelected);

function insertSelected(event) {
  const insertHere =
    event.target.id === "race" ? selectedRaceDiv : selectedClassDiv;

  insertHere.innerHTML = "";

  const img = document.createElement("img");
  img.src = images.find((obj) => obj.id === event.target.value).url;

  insertHere.appendChild(img);
}



var input = document.querySelector('input')
var writeHere = document.getElementById('write-here')

input.addEventListener('input', updateValue)

function updateValue(event) {
    writeHere.textContent = event.target.value
}

var optionsMaleOrFemale = document.getElementsByName('gender');
var selectMaleOrFemale = document.getElementById('gender');



selectMaleOrFemale.addEventListener('input', putGenderIcon);


function putGenderIcon(event) {

    var selectedGenderDiv = document.getElementById('selected-gender');

    for (opt of optionsMaleOrFemale)

        if (event.target.value === "female") {

            selectedGenderDiv.innerHTML = `
        <span class="material-symbols-outlined">
        female
        </span> 
        `
        }

    if (event.target.value === "male") {

        selectedGenderDiv.innerHTML = `
        <span class="material-symbols-outlined">
        male
        </span>
        `;
    }
}



var selectBoxRace = document.querySelector('#race');
var selectBoxRaceArray = Array.from(selectBoxRace);
var imageList = document.getElementsByTagName('img')
var imageListArray = Array.from(imageList)

selectBoxRace.addEventListener('input', makePicVisibleOnCharSheet)

function makePicVisibleOnCharSheet(event) {


    console.log("selectboxrace.classname: ", selectBoxRace.className)
    console.log("eventarget.classname: ", event.target.className)


    for (img of imageListArray) {

        if (event.target.value === img.id) {

            img.style.visibility = "visible"

        } else {

            img.style.visibility = "hidden"
        }

    }
}



var selectBoxClass = document.getElementById('class')

selectBoxClass.addEventListener("input",putClassImage)


function putClassImage(event) {

    var placeOfClasspic = document.getElementById("class-div")

    var classImages = ["druid-class-icon", "paladin-class-icon", "shaman-class-icon"]

    for (var image of classImages) {
        if (event.target.value + "-class-icon" === image) {
console.log("image",image)
            placeOfClasspic.innerHTML = `

            <img src='images/class/${image}.png' width='200px'>

            `

        }
    }
}



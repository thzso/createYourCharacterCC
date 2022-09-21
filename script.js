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


var selectBoxClass = document.getElementById('class')
var selectBoxClassOptions = document.getElementsByClassName('class-images')

var selectBoxClassArray = Array.from(selectBoxClassOptions)



selectBoxRace.addEventListener('input', makePicVisibleOnCharSheet)
selectBoxClass.addEventListener('input', makePicVisibleOnCharSheet)

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


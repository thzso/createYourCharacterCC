var input = document.querySelector('input')
var writeHere = document.getElementById('write-here')

input.addEventListener('input', updateValue)

function updateValue(event) {
    writeHere.textContent = event.target.value
}

var optionsMaleOrFemale = document.getElementsByName('gender');
var selectMaleOrFemale = document.getElementById('gender');



selectMaleOrFemale.addEventListener('input', putGenderIcon); 


function putGenderIcon(event){

    var selectedGenderDiv = document.getElementById('selected-gender');

    for( opt of optionsMaleOrFemale) 
    if (event.target.value === "female") {

            selectedGenderDiv.innerHTML = `
        <span class="material-symbols-outlined">
        female
        </span> 
        `
        } 
        
        if(event.target.value==="male"){

            selectedGenderDiv.innerHTML = `
        <span class="material-symbols-outlined">
        male
        </span>
        `;
        }
}

var selectBox = document.querySelector('#race');

var insertSelectedRacePicHereDiv= document.querySelector('#selected-race')
var imageList = document.getElementsByTagName('img')

// console.log(imageList)
var imageListArray= Array.from(imageList)

console.log(imageListArray)

var testingImagesClass= document.getElementsByClassName('.images')
console.log(testingImagesClass)

selectBox.addEventListener('input',makePicVisibleOnCharSheet)








var testPara= document.getElementById("test")
testPara.style.color ="red"












function makePicVisibleOnCharSheet(event){

    console.log(event.target.value)
    for (img of imageListArray)
    if(event.target.value === img.id){
  
        img.style.visibility ="visible"
        console.log("bejött ebbe az elágazásba")

    }else{

        img.style.visibility ="hidden"
    }
   

}

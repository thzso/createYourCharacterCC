var input = document.querySelector('input')
var writeHere = document.getElementById('write-here')

input.addEventListener('input', updateValue)

function updateValue(b) {

    writeHere.textContent = b.target.value
}


var optionsMaleOrFemale = document.getElementsByName('gender');
var insertIconOfGenderHere = document.getElementById('selected-gender');
var selectMaleOrFemale = document.getElementById('gender');





selectMaleOrFemale.addEventListener('input', putGenderIcon); 



function putGenderIcon(event){
    var female = document.getElementById("female");
    var male = document.getElementById("male");
    console.log("event.target.value")

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



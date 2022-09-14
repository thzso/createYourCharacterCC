var input = document.querySelector('input')
var writeHere = document.getElementById('write-here')

input.addEventListener('input', updateValue)

function updateValue(b) {

    writeHere.textContent = b.target.value
}


var optionsMaleOrFemale = document.getElementsByName('gender');
var insertIconOfGenderHere = document.getElementById('selected-gender');
var selectMaleOrFemale = document.getElementById('gender');


// female.addEventListener('click', function(){


//     var selectedGenderDiv = document.getElementById('selected-gender');
//     selectedGenderDiv.innerHTML = `

//     <span class="material-symbols-outlined">
//     female
//     </span>

//     `



// })


// EVENT.TARGET.VALUE!!!



selectMaleOrFemale.addEventListener('input', function () {
    var female = document.getElementById("female");
    var male = document.getElementById("male");

    var selectedGenderDiv = document.getElementById('selected-gender');

    for( opt of optionsMaleOrFemale) 
    if (female) {

     
            selectedGenderDiv.innerHTML = `
        
        <span class="material-symbols-outlined">
        female
        </span>
        
        `

        } 
        
        if(male){

            // var selectedGenderDiv = document.getElementById('selected-gender');
            selectedGenderDiv.innerHTML = `
        
        <span class="material-symbols-outlined">
        male
        </span>
        
        `;

        }

})



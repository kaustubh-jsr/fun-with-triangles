let hypoOutput = document.querySelector('#hypotenuse');
let sideOne = document.querySelector('#side-1');
let sideTwo = document.querySelector('#side-2');
hypoOutput.disabled = true;
hypoOutput.value = 0;


let displayHypotenuse = () => {
    let anyNegative = (sideOne.value < 0 || sideTwo.value < 0)
    if(anyNegative){
        hypoOutput.value = 0;
    }else if((sideOne.value == '' || sideOne.value == 0) && (sideTwo.value == '' || sideTwo.value == 0)){
        hypoOutput.value = 0;
    }else if(sideOne.value == '' || sideOne.value == 0){
        hypoOutput.value = sideTwo.value;
    }else if(sideTwo.value == '' || sideTwo.value == 0){
        hypoOutput.value = sideOne.value;
    }else{
        let side1 = Number(sideOne.value);
        let side2 = Number(sideTwo.value);
        hypoOutput.value = Math.sqrt(Math.pow(side1,2) + Math.pow(side2,2));
    }
}

sideOne.addEventListener('input',displayHypotenuse);
sideTwo.addEventListener('input',displayHypotenuse);


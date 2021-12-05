let areaOutput = document.querySelector('#area');
let base = document.querySelector('#base');
let height = document.querySelector('#height');
area.disabled = true;
area.value = 0;


let displayArea = () => {
    let anyNegative = (base.value < 0 || height.value < 0)
    // Checking any case of zero
    if(anyNegative){
        areaOutput.value = 0;
    }else if((base.value == '' || base.value == 0) && (height.value == '' || height.value == 0)){
        areaOutput.value = 0;
    }else if(base.value == '' || base.value == 0){
        areaOutput.value = 0;
    }else if(height.value == '' || height.value == 0){
        areaOutput.value = 0;
    }else{
        let side1 = Number(base.value);
        let side2 = Number(height.value);
        areaOutput.value =0.5*side1*side2;
    }
}

base.addEventListener('input',displayArea);
height.addEventListener('input',displayArea);


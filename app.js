let angleOne = document.querySelector('#angle-1');
let angleTwo = document.querySelector('#angle-2');
let angleThree = document.querySelector('#angle-3');
let btnCheck = document.querySelector('#btn-check');
let validTriangleMsg = document.querySelector('#valid-triangle-msg');
let invalidTriangleMsg = document.querySelector('#invalid-triangle-msg');
btnCheck.disabled = true;
const triangleSum = 180;

let inputArr = [angleOne,angleTwo,angleThree];

let checkAllInputsFilled = () => {
    if(angleOne.value !== '' && angleTwo.value !== '' && angleThree.value !== ''){
        btnCheck.disabled = false;
    }else{
        btnCheck.disabled = true;
    }
}


inputArr.forEach(angleInput => {
    angleInput.addEventListener('input',checkAllInputsFilled);
})

let validateTriangle = () => {
    let currSum = 0
    inputArr.forEach(angle => {
        currSum += Number(angle.value)
    })
    if(currSum===triangleSum && !(angleOne.value<0 || angleOne.value == 0 || angleOne.value>=180) && !(angleTwo.value<0 || angleTwo.value == 0 || angleTwo.value>=180) && !(angleThree.value<0 || angleThree.value == 0 || angleThree.value>=180)){
        invalidTriangleMsg.style.display = 'none';
        validTriangleMsg.style.display = 'block';
    }else{
        validTriangleMsg.style.display = 'none';
        invalidTriangleMsg.style.display = 'block';
    }
}
btnCheck.addEventListener('click',validateTriangle);

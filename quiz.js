let quizForm = document.querySelector('#quiz-form');
let btnSubmit = document.querySelector('#btn-quiz-submit');
let scoreDisplay = document.querySelector('#score-display');

const correctAns = ["90","right-angle","one-right-angle","12-16-20","85","30","a+b+c","no"];

let calculateScore = () => {
    let formData = new FormData(quizForm);
    let score = 0;
    let index;
    for(let entry of formData.entries()){
        index = Number(entry[0].slice(1,2))-1;
        if(correctAns[index] == entry[1]){
            score += 1;
        }
    }
    scoreDisplay.innerText = `Your Score : ${score}`;
}

btnSubmit.addEventListener('click',calculateScore);
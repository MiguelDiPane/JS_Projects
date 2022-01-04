const colors = ["green","red","black","white","cyan","yellow","purple","grey"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    //Get random number between 0 - array length-1
    const randomNumber = getRandomNumber();

    document.body.style.background = colors[randomNumber];
    color.textContent = colors[randomNumber];


})

function getRandomNumber(){
    number = Math.floor(Math.random() * colors.length);
    return number;
}
const hex = [0,1,2,3,4,5,6,7,9,'A','B','C','D','E','F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    hex_code = "#";
    for(let i=0; i < 6;i++){
        hex_code += hex[getRandomNumber()];
    }
    document.body.style.background = hex_code;
    color.textContent = hex_code;
});

function getRandomNumber(){
    number = Math.floor(Math.random() * hex.length);
    return number;
}


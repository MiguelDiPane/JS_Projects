//Set initial count
let count = 0;

//Select value and buttons
const value = document.querySelector('#value');
const emoji = document.querySelector('#emoji');
const btns = document.querySelectorAll('.btn');

//It calls a function on every button on the list
btns.forEach(function(btn) {
    //e is the event object
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('btn-decrease')){
            count--;
        }
        else if(styles.contains('btn-increase')){
            count++;
        }
        else if (styles.contains('btn-reset')){
            count = 0;
        }
        //Change the counter color
        if (count > 0){
            value.style.color = 'green';
            emoji.textContent = ':D';
            emoji.style.color = 'green';
        }
        else if(count < 0){
            value.style.color = 'red';
            emoji.textContent = ':(';
            emoji.style.color = 'red';
        }
        else{
            value.style.color = 'black';
            emoji.textContent = ':|';
            emoji.style.color = 'black';
        }
        value.textContent = count;
    })
})
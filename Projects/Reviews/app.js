//Local reviews data

const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Developer",
        img: "https://loremflickr.com/g/320/240/man",
        //Se debe sacar de ajax el text
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nobis dolores natus tenetur temporibus animi laudantium nostrum totam in, officiis obcaecati."
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "Web Designer",
        img: "https://loremflickr.com/g/320/240/girl",
        text: "Voluptatum nobis dolores natus tenetur temporibus animi laudantium nostrum totam in, officiis obcaecati."
    },
    {
        id: 3,
        name: "Bill Anderson",
        job: "The Boss",
        img: "https://loremflickr.com/g/320/240/boy",
        text: "Voluptatum nobis dolores natus tenetur temporibus animi laudantium nostrum totam in, officiis obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    }
]

//Select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

//Buttons
const prev_btn = document.querySelector('.prev-btn');
const next_btn = document.querySelector('.next-btn');
const random_btn = document.querySelector('.random-btn');

//Set starting item
let currentItem = 0;

//Load initial item
window.addEventListener('DOMContentLoaded',function(){
    changeReview(currentItem);
})

prev_btn.addEventListener('click',function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    changeReview(currentItem);
})

next_btn.addEventListener('click',function(){
    currentItem++;
    if (currentItem == reviews.length){
        currentItem = 0;
    }
    changeReview(currentItem);
})

random_btn.addEventListener('click',function(){
    //Random number
    currentItem = Math.floor(Math.random()*reviews.length)
    changeReview(currentItem);
})

function changeReview(person){
    const item = reviews[person];
    img.src = item.img;
    job.textContent = item.job.toUpperCase();
    author.textContent = item.name;
    info.textContent = item.text;
}
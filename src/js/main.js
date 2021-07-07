
// Search page 

const searchView = document.querySelector('.search-view');
const searchInput = document.querySelector("#search-input");
const searchResult = document.querySelector("#search-result");
const searchResultUl = document.querySelector("#search-result ul");
const searchBtn = document.querySelector('#search-btn');
const locationBtn = document.querySelector('#location-btn');


let data = [
    {id: 1, description: "Fish"},
    {id: 2, description: "Meat"},
    {id: 3, description: "Fruits"},
    {id: 4, description: "Vegetable"},
    {id: 5, description: "Yood"},
    {id: 6, description: "Uileh"},
    {id: 7, description: "Good"},
    {id: 8, description: "Kood"},
    {id: 9, description: "Lood"},
    {id: 10, description: "Mood"},
    {id: 11, description: "Oood"},
    {id: 12, description: "Pood"},
    {id: 13, description: "Qood"},
    {id: 14, description: "Rood"},
    {id: 15, description: "sood"},
    {id: 16, description: "Hood"},
    {id: 16, description: "Aood"},
    {id: 16, description: "Bood"},
    {id: 16, description: "Cood"},
];

let result = [];

// Search function
searchInput.addEventListener('keyup', search);
function search(e){
    result = [];
    searchResultUl.innerHTML = '';
    for(let i = 0; i < data.length; i++){
        if(data[i].description[0].toLocaleLowerCase() == e.target.value.toLocaleLowerCase()){
            result.push(data[i]);
        }
    }
    result.forEach(element => {
        searchResultUl.innerHTML += `
        <li><span class="dot"></span> <span>${element.description}</span></li>
       `
    });
    // if(result.length == 0){
    //     searchResult.classList.add('d-none');
    // }else{
    //     searchResult.classList.remove('d-none');
    // }
    if(result.length == 0){
        searchResult.classList.remove('d-show-fast');
    }else{
        searchResult.classList.add('d-show-fast');
    }
  }

// End search function

// Search btn

searchBtn.addEventListener('click', function(){
    searchView.classList.add('d-show');
});

// End search btn

/* searchView.addEventListener('click', function(){
    searchView.classList.remove('d-show');
 }) */

// Location btn

 locationBtn.addEventListener('click', function(){
     console.log('location');
 });

// End location btn



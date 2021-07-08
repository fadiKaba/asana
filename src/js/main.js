
// Search page 

const searchContainer = document.querySelector('.search-container');
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

let images = [
    {id: 1, src: "https://source.unsplash.com/random/400x500"},
    {id: 2, src: "https://source.unsplash.com/random/400x600"},
    {id: 3, src: "https://source.unsplash.com/random/400x700"},
    {id: 4, src: "https://source.unsplash.com/random/400x800"},
    {id: 5, src: "https://source.unsplash.com/random/500x600"},
    {id: 6, src: "https://source.unsplash.com/random/500x700"},
    {id: 7, src: "https://source.unsplash.com/random/500x800"},
    {id: 8, src: "https://source.unsplash.com/random/500x900"},
    {id: 9, src: "https://source.unsplash.com/random/300x400"},
    {id: 10, src: "https://source.unsplash.com/random/300x400"},
    {id: 11, src: "https://source.unsplash.com/random/300x500"},
    {id: 12, src: "https://source.unsplash.com/random/300x600"},
    {id: 13, src: "https://source.unsplash.com/random/300x700"},
    {id: 14, src: "https://source.unsplash.com/random/600x700"},
    {id: 15, src: "https://source.unsplash.com/random/600x800"},
    {id: 16, src: "https://source.unsplash.com/random/600x900"},
    {id: 17, src: "https://source.unsplash.com/random/700x800"},
]
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
        searchResult.classList.remove('display-show-fast');
    }else{
        searchResult.classList.add('display-show-fast');
    }
  }

// End search function

// Search btn

searchBtn.addEventListener('click', function(){
    console.log("hello")
    searchView.classList.add('display-show');
    searchInput.focus();
});

// End search btn

// Search Module

searchView.addEventListener('click', function(e){
    e.target.classList.remove('display-show');
    if(e.target == this){
        searchContainer.classList.remove('ddisplay-show');
    }
})

// End Search Module


 

// Location btn

 locationBtn.addEventListener('click', function(){
     console.log('location');
 });

// End location btn

// Search container
function fillSearchContainer(arr){
    let searchCounter = 1;
    let column = '';
    let mainCounter = 0;
    document.querySelector('#search-column-2').innerHTML+= `<div class="search-page-title">find your taste</div>`;
    arr.forEach(item => {
        if(searchCounter < 3){
            column = document.querySelector('#search-column-' + searchCounter);
            column.innerHTML += 
            `
            <div>
                <a href="#"><img src="${item.src}" alt="${item.id}"></a>
            </div>
            `;
            searchCounter++;
            mainCounter++;
        }else{
            column = document.querySelector('#search-column-' + searchCounter);
            column.innerHTML += 
            `
            <div>
                <a href="#"><img src="${item.src}" alt="${item.id}"></a>
            </div>
            `;
            searchCounter = 1;
            mainCounter++;
        }
        
    });
}

fillSearchContainer(images);

// End search container

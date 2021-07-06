
// Search page 

let container =  document.querySelector('#search-page-container');
let innContainer = document.querySelector('#search-page-inner-container');

let data = [
    {id: 1, url: '/src/imgs/food.jpg'},
    {id: 2, url: '/src/imgs/food.jpg'},
    {id: 3, url: '/src/imgs/food.jpg'},
    {id: 4, url: '/src/imgs/food.jpg'},
    {id: 5, url: '/src/imgs/food.jpg'},
    {id: 6, url: '/src/imgs/food.jpg'},
    {id: 7, url: '/src/imgs/food.jpg'}
];

let nums = [1, 2, 3];

let randomNumber = function (arr){
   if(Math.floor(Math.random() * nums.length) == 2){
       return 'ran';
   } 
   return '';
}

data.forEach(element => {
    innContainer.innerHTML += 
    `
    <div calss="${randomNumber(nums)}">
       <img class="search-img"  src="${element.url}">
    </div>
    `
});

const searchValue = document.querySelector('.searchTerm');
const searchButton = document.querySelector('.searchButton');
const fieldContainer = document.querySelector('.container');
// const heroImages = document.querySelector('.hero-images')

//// api url for fetch data
var apiurl = "https://www.superheroapi.com/api.php/2443779819087299/search/"
    //// reqquest
const xhrRequest = new XMLHttpRequest();
/// eventlistener to search button
searchButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("button click");
    console.log(searchValue.value);
    if (searchValue.value == "") {
        alert("please type the hero name");
        return;
    }

    var apinew = apiurl + searchValue.value;
    xhrRequest.open('get', apinew);
    xhrRequest.send();
    searchValue.value = "";
    fieldContainer.innerHTML = "";
    xhrRequest.onload = showimage;


})

function showimage() {

    var result = JSON.parse(xhrRequest.response);
    for (result of result.results) {

        // console.log(result.image.url)
        var list = document.createElement('li');

        list.innerHTML = (`
        
        <div id="search-results">
        <div id="image"><img src="${result.image.url}"></div>
       <div id="name"> <a href="details.html?id=${result.id}">
         ${result.name}
         </a>
         <br>
        ${
          result.biography['full-name']
        }</div>
        <button id="add-to-fav" onclick="updateStorage(${result.id})">add to favourites</button>
   
     
      </a></div>
     
      </div>
  <br>
     
`);
        fieldContainer.appendChild(list);
    }


}

/////////


function updateStorage(value) {
    let heros;
    if (localStorage.getItem("heros") === null) {
        heros = [];
    } else {
        heros = JSON.parse(localStorage.getItem("heros"));
    }
    for (hero of heros) {
        if (hero == value) {
            return;
        }
    }
    heros.push(value);
    localStorage.setItem("heros", JSON.stringify(heros));


}
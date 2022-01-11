const container = document.querySelector('.my-container');
const heroId = getId('id');
var apiurl = "https://www.superheroapi.com/api.php/2443779819087299/"
var xhrRequest = new XMLHttpRequest();
getDetailes(heroId);















/// functions

function getId(id) {
    const url = new URLSearchParams(window.location.search);
    return url.get(id);
}

function getDetailes(id) {
    const newUrl = apiurl + id;
    console.log(newUrl);
    xhrRequest.open('get', newUrl);
    xhrRequest.send();
    xhrRequest.onload = printdata;
}

function printdata() {
    var data = JSON.parse(xhrRequest.response);

    /// 
    const element = document.createElement('div');
    element.innerHTML = (`
   
    <h1 id="more-details">More about the superhero</h1>
    <img src="${data.image.url}">
    
    <h1>${data.name}</h1>
    <h2>${data.biography['full-name']}</h2>
    <h2> Intelligence : ${data.powerstats.intelligence}</span>
    <h2> Strength : ${data.powerstats.strength}</h2>
    <h2>Speed : </span> <span> ${data.powerstats.speed}</h2>
    <h2> Durability: </span> <span> ${data.powerstats.durability}</h2>
    <h2>Power :</span> <span>${data.powerstats.power}</h2>
     <h2> Combat :</span> <span>${data.powerstats.combat}</h2>
   `

    );

    container.appendChild(element);
    // ///
}
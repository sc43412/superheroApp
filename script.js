const searchValue = document.querySelector('.searchTerm');
const searchButton = document.querySelector('.searchButton');
const fieldContainer = document.querySelector('.container');
// const heroImages = document.querySelector('.hero-images')
var str = "https://www.superheroapi.com/api.php/2443779819087299/search/"

const xhrRequest = new XMLHttpRequest();

searchButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("button click");
    console.log(searchValue.value);
    fieldContainer.classList.remove(...fieldContainer.classList);
    if (searchValue.value == "") {
        alert("please type the hjero name");
        return;
    }

    var strnew = str + searchValue.value;
    xhrRequest.open('get', strnew);
    xhrRequest.send();
    xhrRequest.onload = showimage;


})

function showimage() {

    var result = JSON.parse(xhrRequest.response);
    for (result of result.results) {
        const newDiv = document.createElement('div');
        newDiv.classList.add("herodiv");
        const heroImages = document.createElement("img");
        heroImages.src = result.image.url;
        heroImages.classList.add("image-view");
        console.log(result.image.url)
        newDiv.appendChild(heroImages);
        fieldContainer.appendChild(newDiv);
    }

}
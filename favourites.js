const conatiner = document.querySelector('.container');
const searchList = document.getElementById('search-results-list');


var apiurl = "https://www.superheroapi.com/api.php/2443779819087299/"

getFavhero();








/// function 

function getFavhero() {
    let heros = localStorage.getItem('heros');
    console.log(heros);
    if (!heros || heros.length === 0) {
        var elem = document.createElement('p')
        elem.innerText = "no result found";
        searchList.appendChild(elem);
    } else {
        heros = JSON.parse(localStorage.getItem('heros'))
        searchList.innerHTML = "";
        conatiner.innerHTML = "";
        heros.forEach(element => {
            favdetailes(element);
        });

    }


}

/////
function favdetailes(id) {
    var newurl = apiurl + id;
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open('get', newurl);
    xhrRequest.send();
    xhrRequest.onload = function() {
        var data = JSON.parse(xhrRequest.response);
        var element = document.createElement('div');
        element.innerHTML = (`
        <div id="image"><img src="${data.image.url}"></div>
        <div id="name"><a href="details.html?id=${data.id}">
        ${data.name}
        </a></div>
        <div id="remove-from-favourite" ><button  id="remove-from-fav" onclick="editStorage('${data.id}') ">Remove</button></div>
       <br>`)
        conatiner.appendChild(element);
    };
}

// this function removes movies from local storage
function editStorage(id) {
    let alarms_list = JSON.parse(localStorage.getItem('heros')); //get deleted movies from local storage
    let index = alarms_list.indexOf(id);
    alarms_list.splice(index, 1);
    localStorage.removeItem('heros');

    localStorage.setItem('heros', JSON.stringify(alarms_list)); // it will restore remaining items in local storage
    getFavhero();
}



// function getDetailes(id) {
//     const newUrl = apiurl + id;
//     console.log(newUrl);
//     let xhrRequest = new XMLHttpRequest();
//     xhrRequest.open('get', newUrl);
//     xhrRequest.send();
//     xhrRequest.onload = printdata;
// }

// function printdata() {
//     console.log(++count);
//     var data = JSON.parse(xhrRequest.response);
//     console.log(data);
//     const element = document.createElement('div');
//     element.innerHTML = (`
//     <div id="image"><img src="${data.image.url}"></div>
//     <div id="name"><a href="details.html?id=${data.id}">
//     ${data.name}
//     </a></div>
//     <div id="remove-from-favourite" ><button
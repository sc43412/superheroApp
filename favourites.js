// FETCH DOM ELEMENT
const conatiner = document.querySelector('.container');
const searchList = document.querySelector('.search-results-list');

///API URL WITH REGISTERED TOKEN
var apiurl = "https://www.superheroapi.com/api.php/2443779819087299/"
    /// CALL THE FAV FUNCTION FOR FURTHER OPERATION
getFavhero();








/// function 
/// GETIING THE ELEMENT WITH THE HELP OF LOCALSTORAGE(THIS STORAGE SAVE IN SCRIPT.JS)
function getFavhero() {

    const heros1 = (localStorage.getItem('heros'));
    console.log(heros1);
    if (!heros1 || heros1.length == 0) {
        return;
    } else {
        let heros = JSON.parse(localStorage.getItem('heros'))
        searchList.innerHTML = "";
        conatiner.innerHTML = "";
        heros.forEach(element => {
            favdetailes(element);
        });

    }


}

/////  CREATE NEW HTML CONTENT WITH THE HELP OF API DATA
function favdetailes(id) {
    var newurl = apiurl + id;
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open('get', newurl);
    xhrRequest.send();
    xhrRequest.onload = function() {
        var data = JSON.parse(xhrRequest.response);
        var element = document.createElement('div');
        element.id = "my-contain";
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

// REMOVE HERO FROM LOCALSTORAGE
function editStorage(id) {
    let alarms_list = JSON.parse(localStorage.getItem('heros'));
    let index = alarms_list.indexOf(id);
    alarms_list.splice(index, 1);
    localStorage.removeItem('heros');

    localStorage.setItem('heros', JSON.stringify(alarms_list)); // IT WILL RESTORE REMAINING ITEM IN LOCAL STORAGE
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
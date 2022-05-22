var c = document.querySelector(".coordinate");
var id = document.querySelector(".id");

getLocation();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        id.innerHTML = "Geolocation is not supported by this browser.";
    }
};

function showPosition(position) {
    c.innerHTML = position.coords.latitude + ", " + position.coords.longitude;
    id.innerHTML = "Id : ask12n2r3coj23eewoj12f";
};

setTimeout(function () {
    id.innerHTML = "Id : lkrf11nke3oejfojrr35weo";
}, 10000);
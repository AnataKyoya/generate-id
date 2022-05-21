var x = document.getElementById("demo");
var a = document.querySelector(".alert");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    a.style = "display: block";
    x.innerHTML = "Your Id: " + position.coords.latitude + " (" + position.coords.longitude + ")";
}
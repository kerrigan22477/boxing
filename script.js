
// start time is 5 seconds from now (technically 7 for lag)
var startTime = new Date().getTime() + 7000;
const dynamicElement = document.createElement('h1');

// count down
var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = startTime - now;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // time is in milliseconds so 20,000 = 20 seconds
    if (distance < 0) {
        clearInterval(x);
        dynamicElement.textContent = "Start!";
    } else {
        dynamicElement.textContent = seconds;
    }

    const container = document.getElementById("countdown");
    container.appendChild(dynamicElement);

    // run every 1000 ms = 1 sec
}, 1000);


// display square after count down
const myTimeout = setTimeout(displaySquare, 8000);

function displaySquare() {
    document.getElementById("square").style.backgroundColor = "blue";
    document.getElementById("square").innerHTML = "Blue";
    document.getElementById("square").classList.add("square");
}
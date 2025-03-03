
// start time is 5 seconds from now (technically 7 for lag)
var startTime = new Date().getTime() + 6500;
const dynamicElement = document.createElement('h1');

// count down
var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = startTime - now;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // time is in milliseconds so 20,000 = 20 seconds
    if (distance < 0) {
        dynamicElement.remove();
        clearInterval(x);
    } 
    else if (distance >= 0 && distance <= 1000){
        dynamicElement.textContent = "Start!";
        const container = document.getElementById("countdown");
        container.appendChild(dynamicElement);
    } 
    else {
        dynamicElement.textContent = seconds;
        const container = document.getElementById("countdown");
        container.appendChild(dynamicElement);
    }

    // run every 1000 ms = 1 sec
}, 500);


// display square after count down
const myTimeout = setTimeout(displaySquare, 6500);

function displaySquare() {
    document.getElementById("square").style.backgroundColor = "blue";
    document.getElementById("square").innerHTML = "Blue";
    document.getElementById("square").classList.add("square");
}
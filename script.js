
// start time is 20 seconds from now
var startTime = new Date().getTime() + 22000;
const dynamicElement = document.createElement('p');

var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = startTime - now;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // time is in miliseconds so 20,000 = 20 seconds
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

// start time is 5 seconds from now (technically 6.5 for lag)
var timerLength = 6500;
var startTime = new Date().getTime() + timerLength;
const dynamicElement = document.createElement('h1');

// count down
var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = startTime - now;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // time is in milliseconds so 10,000 = 10 seconds
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

    // run every 500 ms = 1/2 a sec
}, 500);


var colorDictionary = {
    0:"red",  1:"orange", 2:"yellow", 3:"green", 4:"blue", 5:"purple"
};
var speed = 1000;

function getRandomColor(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


// display square after count down
const myTimeout = setTimeout(function() {

    var displaySquare = setInterval(function() {
        var randomColorNum = getRandomColor(0, 6);
        document.getElementById("square").style.backgroundColor = colorDictionary[randomColorNum];
        document.getElementById("square").innerHTML = colorDictionary[randomColorNum];
        document.getElementById("square").classList.add("square");
    }, speed); // set frequency of color change
}, timerLength); // set how many miliseconds to delay the start

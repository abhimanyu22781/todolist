// Variables to store stopwatch time
var hour = 0;
var min = 0;
var sec = 0;
var miliSec = 0;

// Variable to store the interval timer
var timer;

window.onload = function() {
    updateTimerDisplay(); // Call the function to set the initial display
};

// Function to update the stopwatch time display
function updateTimerDisplay() {
    // Set the initial display
    document.getElementById("timer").innerHTML = (hour < 10 ? "0" : "") + hour + ":" + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec + ":" + (miliSec < 10 ? "0" : "") + miliSec;
}

// Function to update the stopwatch time
function callTimer() {
    miliSec++;
    if (miliSec < 100) {
        if (miliSec === 99) {
            miliSec = 0;
            sec++;
            if (sec === 60) {
                sec = 0;
                min++;
                if (min === 60) {
                    min = 0;
                    hour++;
                }
            }
        }
    } else {
        miliSec = 0;
    }
    // Display the updated time
    updateTimerDisplay();
}

// Function to start the stopwatch
function start() {
    document.getElementById("start").disabled = true;
    timer = setInterval(callTimer, 10);
}

// Function to reset the stopwatch
function stop() {
    document.getElementById("start").disabled = false;
    clearInterval(timer);
}
// Function to reset the stopwatch
function reset() {
    stop();
    hour = 0;
    min = 0;
    sec = 0;
    miliSec = 0;
    // Reset the displayed time
    updateTimerDisplay();
}

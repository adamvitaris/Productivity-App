let btnStart = document.querySelector("#start-btn");

let hourDisplay = document.querySelector("#hourDisplay");
let minuteDisplay = document.querySelector("#minuteDisplay");
let textDisplay = document.querySelector(".current-task");

let menuCont = document.querySelector(".menu-container");
menuCont.style.display = "none";

document.addEventListener("keydown", function (e){
    let hourInp = parseInt(document.querySelector("#hours").value);
    let minuteInp = parseInt(document.querySelector("#minutes").value);
    let textInp = document.querySelector("#text").value;
    if (e.key === "Enter") {
        if (!isNaN(hourInp) && !isNaN(minuteInp)) {
            toggleMenu(hourInp, minuteInp, textInp);
            timeCounter();
        }
    }
});


btnStart.addEventListener("click", function() {
    let hourInp = parseInt(document.querySelector("#hours").value);
    let minuteInp = parseInt(document.querySelector("#minutes").value);
    let textInp = document.querySelector("#text").value;
    if (!isNaN(hourInp) && !isNaN(minuteInp)) {
        toggleMenu(hourInp, minuteInp, textInp);
        timeCounter();
    }
});

function toggleMenu(hour, minute, text) {
    let hourValue = hour.toString().padStart(2, '0');
    let minuteValue = minute.toString().padStart(2, '0');
    menuCont.style.display = "block";
    hourDisplay.innerHTML = hourValue;
    minuteDisplay.innerHTML = minuteValue;
    textDisplay.innerHTML = text;
}

function timeCounter() {
    let hourInp = parseInt(document.querySelector("#hours").value);
    let minuteInp = parseInt(document.querySelector("#minutes").value);
    let totalSeconds = (hourInp * 3600) + (minuteInp * 60);
    console.log(totalSeconds);
    }
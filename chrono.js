let hourInp = document.querySelector("#hours");
let minuteInp = document.querySelector("#minutes");
let textInp = document.querySelector("#text");
let btnStart = document.querySelector("#start-btn");

let hourDisplay = document.querySelector("#hourDisplay");
let minuteDisplay = document.querySelector("#minuteDisplay");
let textDisplay = document.querySelector(".current-task");

let menuCont = document.querySelector(".menu-container");
menuCont.style.display = "none";

document.addEventListener("keydown", function (e){
    if (e.key === "Enter") {
        if (hourInp.value !== ""
        || minuteInp.value !== "") {
            toggleMenu();
            timeCounter();
        }
    }
});


btnStart.addEventListener("click", function() {
    if (hourInp.value !== ""
    && minuteInp.value !== "") {
        toggleMenu();
    }
});

function toggleMenu() {
    let hourValue = (0 + hourInp.value).slice(-2);
    let minuteValue = (0 + minuteInp.value).slice(-2);
    let textValue = textInp.value;
    menuCont.style.display = "block";
    hourDisplay.innerHTML = hourValue;
    minuteDisplay.innerHTML = minuteValue;
    textDisplay.innerHTML = textValue;
}

function timeCounter() {
    let totalSeconds = (hourValue * 3600) + (minuteValue * 60);
    return totalSeconds;
    }
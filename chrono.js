let btnEnter = document.querySelector("#enter-btn");

let hour = document.querySelector("#hours");
let minute = document.querySelector("#minutes");
let text = document.querySelector("#text");

let hourDisplay = document.querySelector("#hourDisplay");
let minuteDisplay = document.querySelector("#minuteDisplay");
let textDisplay = document.querySelector(".current-task");

let menuCont = document.querySelector(".menu-container");
menuCont.style.display = "none";

let totalSeconds = 0;

document.addEventListener("keydown", function (e){
    let hourInp = parseInt(hour.value);
    let minuteInp = parseInt(minute.value);
    let textInp = text.value;
    if (e.key === "Enter") {
            totalSeconds = (hourInp * 3600) + (minuteInp * 60);
            console.log(totalSeconds);
            toggleMenu(hourInp, minuteInp, textInp);
            start(totalSeconds);
        }
    }
);


btnEnter.addEventListener("click", function() {
    let hourInp = parseInt(hour.value);
    let minuteInp = parseInt(minute.value);
    let textInp = text.value;
    if (hourInp != 0 && minuteInp != 0) {
        totalSeconds = (hourInp * 3600) + (minuteInp * 60);
        toggleMenu(hourInp, minuteInp, textInp);
        start();
    }
});

//---------------------------------------------
function toggleMenu(hour, minute, text) {
    let hourValue = hour.toString().padStart(2, '0');
    let minuteValue = minute.toString().padStart(2, '0');

    menuCont.style.display = "block";
    hourDisplay.innerHTML = hourValue;
    minuteDisplay.innerHTML = minuteValue;
    textDisplay.innerHTML = text;
}

//----------------------------------------------
let interval = null;

function updateInputs() {
    console.log(totalSeconds);
    let hourUpdate = Math.floor(totalSeconds / 3600);
    let minuteUpdate = Math.floor((totalSeconds % 3600) / 60);
    totalSeconds--;

    hourUpdate = hour.toString().padStart(2, '0');
    minuteUpdate = minute.toString().padStart(2, '0');

    hourDisplay.innerHTML = hourUpdate;
    minuteDisplay.innerHTML = minuteUpdate;

    console.log(minuteUpdate);
    console.log(hourUpdate);

}

function start() {
    let hour = document.querySelector("#hours");
    let minute = document.querySelector("#minutes");
    interval = setInterval(() => {
        updateInputs();

        if (totalSeconds <= 0) {
            interval = clearInterval(interval);
        }
    }, 1000)
}
let btnEnter = document.querySelector("#enter-btn");

let hour = document.querySelector("#hours");
let minute = document.querySelector("#minutes");
let text = document.querySelector("#text");

let hourDisplay = document.querySelector("#hourDisplay");
let minuteDisplay = document.querySelector("#minuteDisplay");
let textDisplay = document.querySelector(".current-task");

let menuCont = document.querySelector(".menu-container");
menuCont.style.display = "none";

document.addEventListener("keydown", function (e){
    let hourInp = parseInt(hour.value);
    let minuteInp = parseInt(minute.value);
    let textInp = text.value;
    if (e.key === "Enter") {
        let totalSeconds = (hourInp * 3600) + (minuteInp * 60);
        if (!isNaN(hourInp) && !isNaN(minuteInp)) {
            toggleMenu(hourInp, minuteInp, textInp);
            start(totalSeconds);
        }
    }
});


btnEnter.addEventListener("click", function() {
    let hourInp = parseInt(hour.value);
    let minuteInp = parseInt(minute.value);
    let textInp = text.value;
    if (hourInp != 0 && minuteInp != 0) {
        let totalSeconds = (hourInp * 3600) + (minuteInp * 60);
        toggleMenu(hourInp, minuteInp, textInp);
        start(totalSeconds);
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

//----------------------------------------------
let interval = null;
    

function start(totalSeconds) {
    interval = setInterval(() => {
        totalSeconds--;
        updateInputs(totalSeconds);

        if (totalSeconds <= 0) {
            interval = clearInterval(interval);
        }
    }, 1000)
}

function updateInputs(totalSeconds) {
    const minuteUpdate = Math.floor(totalSeconds / 60);
    const hourUpdate = Math.floor(totalSeconds / 60 / 60);

    minute.value = minuteUpdate;
    hour.value = hourUpdate;
}
    

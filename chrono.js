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
            timeCounter();
        }
    }
});


btnStart.addEventListener("click", function() {
    let hourInp = parseInt(document.querySelector("#hours").value);
    let minuteInp = parseInt(document.querySelector("#minutes").value);
    let textInp = document.querySelector("#text").value;
    if (!isNaN(hourInp) && !isNaN(minuteInp)) {
        timeCounter();
    }
});

let currentInterval = null;

function timeCounter() {
    let hourInp = parseInt(document.querySelector("#hours").value);
    let minuteInp = parseInt(document.querySelector("#minutes").value);
    let textInp = document.querySelector("#text").value;

    toggleMenu(hourInp, minuteInp, textInp);

    let totalSeconds = (hourInp * 3600) + (minuteInp * 60);

    // Ha már fut egy visszaszámláló, állítsuk le azt először
    if (currentInterval) {
        clearInterval(currentInterval);
    }

    currentInterval = setInterval(function() {
        let hour = Math.floor(totalSeconds / 3600);
        let minute = Math.floor((totalSeconds % 3600) / 60);

        hourDisplay.textContent = String(hour).padStart(2, '0');
        minuteDisplay.textContent = String(minute).padStart(2, '0');

        if (totalSeconds <= 0) {
            clearInterval(currentInterval);
            hourDisplay.textContent = "00";
            minuteDisplay.textContent = "00";
            // Itt további logikát adhatsz hozzá, ha az idő lejárta után valamit tenni szeretnél
        }

        totalSeconds--;
    }, 1000);
}

    function toggleMenu(hour, minute, text) {
        let hourValue = hour.toString().padStart(2, '0');
        let minuteValue = minute.toString().padStart(2, '0');

        menuCont.style.display = "block";
        hourDisplay.innerHTML = hourValue;
        minuteDisplay.innerHTML = minuteValue;
        textDisplay.innerHTML = text;
    }
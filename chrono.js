hourInp = document.querySelector("#hours");
minuteInp = document.querySelector("#minutes");
textInp = document.querySelector("#text");
btnStart = document.querySelector("#start-btn");

hourDisplay = document.querySelector("#hourDisplay");
minuteDisplay = document.querySelector("#minuteDisplay");
textDisplay = document.querySelector(".current-task");

menuCont = document.querySelector(".menu-container");
menuCont.style.display = "none";

document.addEventListener("keydown", function (e){
    if (e.key === "Enter") {
        if (hourInp.value !== ""
        || minuteInp.value !== "") {
            toggleMenu();
        }
    }
});


btnStart.addEventListener("click", function() {
    if (hourInp.value !== ""
    && minuteInp.value !== "") {
        toggleMenu();
    }
});

countHour = 0;
countMinute = 0;
counterFlag = true;

function toggleMenu() {
    hourValue = (0 + hourInp.value).slice(-2);
    minuteValue = (0 + minuteInp.value).slice(-2);
    textValue = textInp.value;
    menuCont.style.display = "block";
    hourDisplay.innerHTML = hourValue;
    minuteDisplay.innerHTML = minuteValue;
    textDisplay.innerHTML = textValue;

    countHour = Number(hourInp.value) * 60;
    countMinute = Number(minuteInp.value);
    alles = countHour + countMinute;
    for (countHour % 60 < 1) {
        countHour--;
        if (countHour % 60 === 0) {

        }
    }
}
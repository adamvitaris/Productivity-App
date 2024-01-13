hourInp = document.getElementById("hours");
minuteInp = document.getElementById("minutes");
textInp = document.getElementById("text");
btnStart = document.getElementById("start-btn");

hourDisplay = document.querySelector("#hourDisplay");
minuteDisplay = document.querySelector("#minuteDisplay");
textDisplay = document.querySelector(".current-task");

menuCont = document.querySelector(".menu-container");
menuCont.style.display = "none";

btnStart.addEventListener("click", () => {
    hourValue = hourInp.value;
    minuteValue = minuteInp.value;
    textValue = textInp.value;

    // Put some zeros before the time setting.
    // Make the countdown.
    menuCont.style.display = "block";
    hourDisplay.innerHTML = hourValue;
    minuteDisplay.innerHTML = minuteValue;
    textDisplay.innerHTML = textValue;
});




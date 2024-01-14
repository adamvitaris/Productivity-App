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
        if (hourInp.value !== 0
        && minuteInp.value !== 0
        && textInp.value.length !== 0)
         toggleMenu();
        }
    });

btnStart.addEventListener("click", toggleMenu);

function toggleMenu() {
    hourValue = (0 + hourInp.value).slice(-2);
    minuteValue = (0 + minuteInp.value).slice(-2);
    textValue = textInp.value;

    // Make the countdown.
    // BUG - Limit the characters of the Task input!
    menuCont.style.display = "block";
    hourDisplay.innerHTML = hourValue;
    minuteDisplay.innerHTML = minuteValue;
    textDisplay.innerHTML = textValue;
}
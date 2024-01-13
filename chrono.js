hourInp = document.getElementById("hours");
minuteInp = document.getElementById("minutes");
textInp = document.getElementById("text");
btnStart = document.getElementById("start-btn");
menuCont = document.getElementsByClassName("menu-container");
menuCont.style.display = "none";

btnStart.addEventListener("click", () => {
    hourValue = hourInp.value;
    minuteValue = minuteInp.value;
    textValue = textInp.value;

    /*menuCont = document.createElement("div");
    counterCont = document.createElement("div");
    hourFinal = document.createElement("h2");
    hourFinal.innerHTML = hourValue;
    hourFinal = document.createElement("h2");

    btnCont = document.createElement("div");
    btnStart = document.createElement("button");
    btnPause = document.createElement("button");
    btnStop = document.createElement("button");
    btnReset = document.createElement("button");

    menuCont.classList.add("menu-container");
    counterCont.classList.add("counter-container");
    btnCont.classList.add("btn-control");
    btnStart.classList.add("btn");
    btnPause.classList.add("btn");
    btnStop.classList.add("btn");
    btnReset.classList.add("btn");*/
});




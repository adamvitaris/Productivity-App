let num = 0;
function countUp() {
let myInterval = setInterval(()=> {
    num ++;
    console.log(num);
    if (num >= 4) {
        console.log("X");
        clearInterval(myInterval);
    }
}, 1000);
}

countUp();
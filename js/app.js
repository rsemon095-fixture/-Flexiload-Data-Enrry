const fill = document.getElementById("loadingFill");
const percent = document.getElementById("percent");
const text = document.getElementById("loadingText");

const msg = [
"Initializing System...",
"Loading Database...",
"Connecting Firebase...",
"Loading User Data...",
"Preparing Dashboard...",
"Almost Ready..."
];

let p = 0;

const timer = setInterval(() => {

    p++;

    fill.style.width = p + "%";
    percent.innerHTML = p + "%";

    if (p == 15) text.innerHTML = msg[1];
    if (p == 35) text.innerHTML = msg[2];
    if (p == 55) text.innerHTML = msg[3];
    if (p == 75) text.innerHTML = msg[4];
    if (p == 95) text.innerHTML = msg[5];

    if (p >= 100) {

        clearInterval(timer);

        setTimeout(() => {

            window.location.href = "pin.html";

        }, 500);

    }

}, 30);

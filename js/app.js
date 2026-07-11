const fill = document.getElementById("loadingFill");
const percent = document.getElementById("percent");
const text = document.getElementById("loadingText");

const messages = [
    "Initializing System...",
    "Loading Database...",
    "Connecting Firebase...",
    "Loading Dashboard...",
    "Almost Ready..."
];

let p = 0;

const timer = setInterval(() => {

    p++;

    fill.style.width = p + "%";
    percent.innerHTML = p + "%";

    if (p == 20) text.innerHTML = messages[1];
    if (p == 40) text.innerHTML = messages[2];
    if (p == 60) text.innerHTML = messages[3];
    if (p == 80) text.innerHTML = messages[4];

    if (p >= 100) {
        clearInterval(timer);

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 500);
    }

}, 30);

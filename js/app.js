let percent = 0;

const percentText = document.getElementById("percent");
const fill = document.getElementById("loadingFill");
const loadingText = document.querySelector(".loading-text");

const textList = [
    "Initializing System...",
    "Loading Database...",
    "Connecting Firebase...",
    "Loading Dashboard...",
    "Almost Ready..."
];

const timer = setInterval(() => {

    percent++;

    fill.style.width = percent + "%";
    percentText.innerHTML = percent + "%";

    if (percent == 20) loadingText.innerHTML = textList[1];
    if (percent == 40) loadingText.innerHTML = textList[2];
    if (percent == 60) loadingText.innerHTML = textList[3];
    if (percent == 80) loadingText.innerHTML = textList[4];

    if (percent >= 100) {

        clearInterval(timer);

        window.location.href = "dashboard.html";
    }

}, 30);

const fill = document.getElementById("loadingFill");
const percent = document.getElementById("percent");
const text = document.getElementById("loadingText");

let p = 0;

const msg = [
"Initializing System...",
"Loading Database...",
"Connecting Firebase...",
"Loading Dashboard...",
"Almost Ready..."
];

const timer = setInterval(() => {

    p++;

    fill.style.width = p + "%";
    percent.innerHTML = p + "%";

    if(p==20) text.innerHTML = msg[1];
    if(p==40) text.innerHTML = msg[2];
    if(p==60) text.innerHTML = msg[3];
    if(p==80) text.innerHTML = msg[4];

    if(p>=100){

        clearInterval(timer);

        window.location.href="dashboard.html";

    }

},30);

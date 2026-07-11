let percent = 0;

const text = document.getElementById("percent");

const timer = setInterval(() => {

    percent++;

    text.innerHTML = percent + "%";

    if (percent >= 100) {

        clearInterval(timer);

        setTimeout(() => {

            window.location.href = "dashboard.html";

        }, 400);

    }

}, 30);

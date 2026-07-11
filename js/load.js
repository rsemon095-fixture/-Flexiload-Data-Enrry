import { saveBalance } from "./firebase-balance.js";

const params = new URLSearchParams(window.location.search);
const op = params.get("op");

if (op) {
    document.getElementById("selectedOperator").innerHTML =
        "Operator : " + op;
}

function saveBalanceData() {

    let gp = parseFloat(document.getElementById("gp").value) || 0;
    let robi = parseFloat(document.getElementById("robi").value) || 0;
    let bl = parseFloat(document.getElementById("bl").value) || 0;
    let airtel = parseFloat(document.getElementById("airtel").value) || 0;

    let data = {
        gp: gp,
        robi: robi,
        banglalink: bl,
        airtel: airtel
    };

    saveBalance(data);

    alert("✅ Balance Save হয়েছে");

    window.location.href = "../dashboard.html";
}

window.saveBalance = saveBalanceData;

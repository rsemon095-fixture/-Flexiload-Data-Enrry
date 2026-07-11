// ====== Flexiload Dashboard ======

let balance = {
    gp: 0,
    robi: 0,
    banglalink: 0,
    airtel: 0
};

// Save
function saveData() {
    localStorage.setItem("flexiloadBalance", JSON.stringify(balance));
}

// Load
function loadData() {
import { loadBalance } from "./firebase-balance.js";

loadBalance();
    const data = localStorage.getItem("flexiloadBalance");

    if (data) {
        balance = JSON.parse(data);
    }

    updateUI();
}

// UI Update
function updateUI() {

    document.getElementById("gpBalance").innerText =
        "৳" + balance.gp;

    document.getElementById("robiBalance").innerText =
        "৳" + balance.robi;

    document.getElementById("blBalance").innerText =
        "৳" + balance.banglalink;

    document.getElementById("airtelBalance").innerText =
        "৳" + balance.airtel;

    let total =
        balance.gp +
        balance.robi +
        balance.banglalink +
        balance.airtel;

    document.getElementById("totalBalance").innerText =
        "৳" + total;
}

loadData();

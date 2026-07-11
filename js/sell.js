// Balance Load
let balance = JSON.parse(localStorage.getItem("flexiloadBalance")) || {
    gp: 0,
    robi: 0,
    banglalink: 0,
    airtel: 0
};

// Transaction Load
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function saveSell() {

    const operator = document.getElementById("operator").value;
    const number = document.getElementById("number").value.trim();
    const amount = Number(document.getElementById("amount").value);
    const cash = Number(document.getElementById("cash").value);

    if (number.length != 11) {
        alert("সঠিক মোবাইল নাম্বার লিখুন");
        return;
    }

    if (amount <= 0 || cash <= 0) {
        alert("টাকার পরিমাণ লিখুন");
        return;
    }

    if (balance[operator] < amount) {
        alert("❌ পর্যাপ্ত ব্যালেন্স নেই");
        return;
    }

    // Balance কমানো
    balance[operator] -= amount;

    // Profit হিসাব
    let profit = cash - amount;

    let message = "";

    if (profit > 0) {
        message = "🟢 আলহামদুলিল্লাহ! লাভ হয়েছে।";
    } else if (profit == 0) {
        message = "🟡 হিসাব বরাবর।";
    } else {
        message = "🔴 লাভ হয়নি, লোকসান হয়েছে।";
    }

    // Date & Time
    const now = new Date();

    const date =
        now.toLocaleDateString("en-GB");

    const time =
        now.toLocaleTimeString();

    // Transaction Save
    transactions.push({

        operator,

        number,

        amount,

        cash,

        profit,

        date,

        time

    });

    localStorage.setItem(
        "flexiloadBalance",
        JSON.stringify(balance)
    );

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

    alert(
        message +
        "\n\nProfit/Loss : ৳" + profit
    );

    location.href = "dashboard.html";

}

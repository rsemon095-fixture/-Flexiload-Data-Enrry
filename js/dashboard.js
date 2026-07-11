import { rtdb } from "./firebase.js";

import {
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const balanceRef = ref(rtdb, "balance");

onValue(balanceRef, (snapshot) => {

    const data = snapshot.val();

    if (!data) return;

    document.getElementById("gpBalance").innerHTML = "৳" + (data.gp || 0);
    document.getElementById("robiBalance").innerHTML = "৳" + (data.robi || 0);
    document.getElementById("blBalance").innerHTML = "৳" + (data.banglalink || 0);
    document.getElementById("airtelBalance").innerHTML = "৳" + (data.airtel || 0);

    let total =
        (data.gp || 0) +
        (data.robi || 0) +
        (data.banglalink || 0) +
        (data.airtel || 0);

    document.getElementById("totalBalance").innerHTML = "৳" + total;

    // Low Balance Alert
    if ((data.gp || 0) < 500) {
        alert("🔴 GP ব্যালেন্স ৫০০ টাকার নিচে");
    }

    if ((data.robi || 0) < 500) {
        alert("🔴 Robi ব্যালেন্স ৫০০ টাকার নিচে");
    }

    if ((data.banglalink || 0) < 500) {
        alert("🔴 Banglalink ব্যালেন্স ৫০০ টাকার নিচে");
    }

    if ((data.airtel || 0) < 500) {
        alert("🔴 Airtel ব্যালেন্স ৫০০ টাকার নিচে");
    }

});
import {
ref,
onValue
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

onValue(ref(rtdb,"sellHistory"),(snapshot)=>{

let profit=0;

snapshot.forEach((item)=>{

profit+=Number(item.val().profit||0);

});

document.getElementById("todayProfit").innerHTML="৳"+profit;

});

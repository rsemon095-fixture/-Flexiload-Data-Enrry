import { rtdb } from "../js/firebase.js";
import {
ref,
get,
set,
push
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const params = new URLSearchParams(window.location.search);
const op = params.get("op");

const logo = document.getElementById("logo");
const operatorName = document.getElementById("operatorName");

const logos = {
gp:"../assets/logo/gp-png.png",
robi:"../assets/logo/robi-png.png",
banglalink:"../assets/logo/banglalink-png.png",
airtel:"../assets/logo/airtel-png.png"
};

logo.src = logos[op];
operatorName.innerHTML = op.toUpperCase();

window.saveBalance = async function(){

const amount = Number(document.getElementById("amount").value);

if(amount<=0){
alert("টাকার পরিমাণ লিখুন");
return;
}

const balanceRef = ref(rtdb,"balance/"+op);

const snap = await get(balanceRef);

let old = 0;

if(snap.exists()){
old = Number(snap.val());
}

const total = old + amount;

await set(balanceRef,total);
console.log("Saved:", op, total);
await push(ref(rtdb,"history/load"),{

operator:op,

amount:amount,

balance:total,

date:new Date().toLocaleString()

});

alert("✅ Balance Added Successfully");

location.href="../dashboard.html";

}

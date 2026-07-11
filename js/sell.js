import { rtdb } from "./firebase.js";

import {
ref,
get,
update,
push
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

document.getElementById("sellBtn").onclick = async ()=>{

const op=document.getElementById("operator").value;

const sell=Number(document.getElementById("sellAmount").value);

const profit=Number(document.getElementById("profit").value);

if(sell<=0){

alert("Sell Amount লিখুন");

return;

}

const snap=await get(ref(rtdb,"balance"));

const data=snap.val()||{};

data.gp=Number(data.gp||0);
data.robi=Number(data.robi||0);
data.banglalink=Number(data.banglalink||0);
data.airtel=Number(data.airtel||0);

if(data[op]<sell){

alert("❌ পর্যাপ্ত ব্যালেন্স নেই");

return;

}

data[op]-=sell;

await update(ref(rtdb,"balance"),data);

await push(ref(rtdb,"sellHistory"),{

operator:op,

amount:sell,

profit:profit,

date:new Date().toLocaleString()

});

alert("✅ Sell Saved");

location.href="../dashboard.html";

}

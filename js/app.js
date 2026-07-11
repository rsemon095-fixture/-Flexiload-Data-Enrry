import { rtdb } from "./firebase.js";

import {
ref,
get,
update,
push
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const op = new URLSearchParams(location.search).get("op");

const title = document.getElementById("title");
const logo = document.getElementById("logo");

const images = {
gp:"../assets/logo/gp-png.png",
robi:"../assets/logo/robi-png.png",
banglalink:"../assets/logo/banglalink-png.png",
airtel:"../assets/logo/airtel-png.png"
};

title.innerHTML = op.toUpperCase()+" Balance Add";
logo.src = images[op];

document.getElementById("saveBtn").onclick = async ()=>{

const amount = Number(document.getElementById("amount").value);

if(amount<=0){
alert("Amount লিখুন");
return;
}

const snap = await get(ref(rtdb,"balance"));

let data = snap.exists() ? snap.val() : {};

data.gp = Number(data.gp||0);
data.robi = Number(data.robi||0);
data.banglalink = Number(data.banglalink||0);
data.airtel = Number(data.airtel||0);

data[op]+=amount;

await update(ref(rtdb,"balance"),data);

await push(ref(rtdb,"loadHistory"),{

operator:op,

amount:amount,

date:new Date().toLocaleString()

});

alert("✅ Balance Added");

location.href="../dashboard.html";

}

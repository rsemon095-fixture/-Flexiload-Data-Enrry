import { rtdb } from "./firebase.js";

import {
ref,
onValue
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

onValue(ref(rtdb,"balance"),(snap)=>{

const d=snap.val()||{};

const total=
Number(d.gp||0)+
Number(d.robi||0)+
Number(d.banglalink||0)+
Number(d.airtel||0);

document.getElementById("totalBalance").innerHTML="৳"+total;

});

onValue(ref(rtdb,"sellHistory"),(snap)=>{

let profit=0;

let sell=0;

snap.forEach(item=>{

profit+=Number(item.val().profit||0);

sell+=Number(item.val().amount||0);

});

document.getElementById("totalProfit").innerHTML="৳"+profit;

document.getElementById("totalSell").innerHTML="৳"+sell;

});

onValue(ref(rtdb,"loadHistory"),(snap)=>{

let load=0;

snap.forEach(item=>{

load+=Number(item.val().amount||0);

});

document.getElementById("totalLoad").innerHTML="৳"+load;

});

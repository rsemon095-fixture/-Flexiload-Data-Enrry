import { rtdb } from "./firebase.js";

import {
ref,
onValue
}
from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

let total=0;

onValue(ref(rtdb,"productHistory"),(snapshot)=>{

let data=snapshot.val();

let box=document.getElementById("history");

box.innerHTML="";

total=0;

if(!data)return;

Object.values(data).reverse().forEach(item=>{

total+=item.profit;

box.innerHTML+=`

<div class="history-card">

<h3>${item.name}</h3>

<p>পরিমাণ : ${item.qty}</p>

<p>লাভ : ৳${item.profit}</p>

<p>${item.date}</p>

</div>

`;

});

document.getElementById("todayProfit").innerHTML="৳"+total;

document.getElementById("monthProfit").innerHTML="৳"+total;

document.getElementById("totalProfit").innerHTML="৳"+total;

});

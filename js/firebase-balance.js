import { ref, set, onValue } from
"https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

import { rtdb } from "./firebase.js";

// Balance Save
export function saveBalance(data){

set(

ref(rtdb,"balance"),

data

);

}

// Live Balance Read

export function loadBalance(){

onValue(

ref(rtdb,"balance"),

(snapshot)=>{

const data=snapshot.val();

if(!data)return;

document.getElementById("gpBalance").innerHTML="৳"+(data.gp||0);

document.getElementById("robiBalance").innerHTML="৳"+(data.robi||0);

document.getElementById("blBalance").innerHTML="৳"+(data.banglalink||0);

document.getElementById("airtelBalance").innerHTML="৳"+(data.airtel||0);

let total=

(data.gp||0)+

(data.robi||0)+

(data.banglalink||0)+

(data.airtel||0);

document.getElementById("totalBalance").innerHTML="৳"+total;

}

);

 }

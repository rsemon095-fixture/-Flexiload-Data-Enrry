import { rtdb } from "./firebase.js";

import {
ref,
onValue,
remove
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const list = document.getElementById("historyList");

onValue(ref(rtdb, "sellHistory"), (snapshot) => {

list.innerHTML = "";

if (!snapshot.exists()) {

list.innerHTML = "<h3>No History Found</h3>";

return;

}

snapshot.forEach((item) => {

const data = item.val();

list.innerHTML += `

<div class="card">

<h3>${data.operator.toUpperCase()}</h3>

<p>Sell : ৳${data.amount}</p>

<p>Profit : ৳${data.profit}</p>

<p>${data.date}</p>

<button onclick="deleteHistory('${item.key}')">

Delete

</button>

</div>

`;

});

});

window.deleteHistory = async function(id){

if(confirm("Delete করবেন?")){

await remove(ref(rtdb,"sellHistory/"+id));

}

}

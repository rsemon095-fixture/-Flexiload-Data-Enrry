import { rtdb } from "./firebase.js";

import {
ref,
onValue,
push,
set,
update
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const productRef = ref(rtdb, "products");

const select = document.getElementById("productSelect");

let products = {};

onValue(productRef, (snapshot) => {

products = snapshot.val() || {};

select.innerHTML = "";

Object.keys(products).forEach(key => {

let op = document.createElement("option");

op.value = key;

op.textContent = products[key].name;

select.appendChild(op);

});

});

document.getElementById("sellBtn").onclick = async () => {

let id = select.value;

let qty = Number(document.getElementById("qty").value);

let sell = Number(document.getElementById("sellPrice").value);

if (!id || qty <= 0) {
alert("তথ্য পূরণ করুন");
return;
}

let p = products[id];

if (qty > p.stock) {
alert("স্টক পর্যাপ্ত নেই");
return;
}

let profit = (sell - p.buyPrice) * qty;

await update(ref(rtdb, "products/" + id), {

stock: p.stock - qty

});

await set(push(ref(rtdb, "productHistory")), {

name: p.name,

qty,

buyPrice: p.buyPrice,

sellPrice: sell,

profit,

date: new Date().toLocaleString()

});

if (profit > 0) {

alert("🟢 আলহামদুলিল্লাহ! লাভ হয়েছে");

} else if (profit === 0) {

alert("🟡 হিসাব বরাবর");

} else {

alert("🔴 লাভ হয়নি, লোকসান হয়েছে");

}

};

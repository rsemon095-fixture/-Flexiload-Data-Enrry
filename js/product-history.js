let history =
JSON.parse(localStorage.getItem("productHistory")) || [];

function show(data){

let html="";

if(data.length==0){

html="<h3>কোনো হিসাব পাওয়া যায়নি</h3>";

}

data.forEach((h,index)=>{

let color =
h.profit>=0
? "profit"
: "loss";

html+=`

<div class="item">

<h3>${h.name}</h3>

<p>📦 Quantity : ${h.qty}</p>

<p>💵 Cash : ৳${h.cash}</p>

<p class="${color}">

Profit : ৳${h.profit}

</p>

<p>📅 ${h.date}</p>

<p>🕒 ${h.time}</p>

<button onclick="deleteHistory(${index})">

Delete

</button>

</div>

`;

});

document.getElementById("historyList").innerHTML=html;

}

function deleteHistory(i){

if(confirm("Delete করবেন?")){

history.splice(i,1);

localStorage.setItem(

"productHistory",

JSON.stringify(history)

);

show(history);

}

}

function searchHistory(){

let key=

document
.getElementById("search")
.value
.toLowerCase();

let result=

history.filter(h=>

h.name
.toLowerCase()
.includes(key)

);

show(result);

}

show(history);

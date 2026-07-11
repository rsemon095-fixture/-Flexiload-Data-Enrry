let products =
JSON.parse(localStorage.getItem("products")) || [];

let history =
JSON.parse(localStorage.getItem("productHistory")) || [];

let select =
document.getElementById("product");

// Product Load
products.forEach((p,i)=>{

select.innerHTML+=`
<option value="${i}">
${p.name}
</option>
`;

});

function sellProduct(){

let id =
document.getElementById("product").value;

let qty =
parseInt(document.getElementById("qty").value);

let cash =
parseFloat(document.getElementById("cash").value);

let p = products[id];

if(qty<=0){

alert("Quantity লিখুন");

return;

}

if(p.stock<qty){

alert("❌ Stock নেই");

return;

}

let totalBuy =
p.buy*qty;

let profit =
cash-totalBuy;

p.stock-=qty;

history.push({

name:p.name,

qty:qty,

cash:cash,

profit:profit,

date:new Date().toLocaleDateString(),

time:new Date().toLocaleTimeString()

});

localStorage.setItem(
"products",
JSON.stringify(products)
);

localStorage.setItem(
"productHistory",
JSON.stringify(history)
);

if(profit>0){

alert("🟢 আলহামদুলিল্লাহ!\nলাভ হয়েছে\n৳"+profit);

}else if(profit==0){

alert("🟡 হিসাব বরাবর");

}else{

alert("🔴 লাভ হয়নি\nলোকসান ৳"+Math.abs(profit));

}

location.reload();

}

let products =
JSON.parse(localStorage.getItem("products")) || [];

function saveProduct(){

let name=document.getElementById("productName").value;

let stock=parseInt(document.getElementById("stock").value);

let buy=parseFloat(document.getElementById("buyPrice").value);

let sell=parseFloat(document.getElementById("sellPrice").value);

if(name==""){
alert("Product Name লিখুন");
return;
}

products.push({

name:name,

stock:stock,

buy:buy,

sell:sell,

profit:sell-buy

});

localStorage.setItem(
"products",
JSON.stringify(products)
);

alert("✅ Product Save হয়েছে");

showProducts();

document.getElementById("productName").value="";
document.getElementById("stock").value="";
document.getElementById("buyPrice").value="";
document.getElementById("sellPrice").value="";

}

function showProducts(){

let html="";

products.forEach((p,index)=>{

html+=`

<div class="product-item">

<h3>${p.name}</h3>

<p>📦 Stock : ${p.stock}</p>

<p>💵 Buy : ৳${p.buy}</p>

<p>💰 Sell : ৳${p.sell}</p>

<p>📈 Profit : ৳${p.profit}</p>

</div>

`;

});

document.getElementById("productList").innerHTML=html;

}

showProducts();

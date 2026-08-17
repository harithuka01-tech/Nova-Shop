const cart=[], drawer=document.getElementById("drawer"), overlay=document.getElementById("overlay"), items=document.getElementById("items"), count=document.getElementById("count"), total=document.getElementById("total");
function render(){if(!cart.length){items.innerHTML='<p class="empty">Your cart is empty.</p>'}else{items.innerHTML=cart.map((x,i)=>`<div class="item"><span>${x.name}</span><strong>$${x.price} <button onclick="removeItem(${i})">×</button></strong></div>`).join("")}count.textContent=cart.length;total.textContent="$"+cart.reduce((s,x)=>s+x.price,0)}
function removeItem(i){cart.splice(i,1);render()}
document.querySelectorAll(".add").forEach(b=>b.onclick=()=>{const p=b.closest(".product");cart.push({name:p.dataset.name,price:+p.dataset.price});render();drawer.classList.add("open");overlay.classList.add("show")});
document.getElementById("cartBtn").onclick=()=>{drawer.classList.add("open");overlay.classList.add("show")};
document.getElementById("close").onclick=close;overlay.onclick=close;
function close(){drawer.classList.remove("open");overlay.classList.remove("show")}
document.querySelector(".checkout").onclick=()=>alert("Demo checkout — connect Stripe/Shopify for real payments.");render();
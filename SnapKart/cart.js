const cartItems = document.querySelector(".cart-items");
const totalPriceElement = document.getElementById("total-price");
const checkoutBtn = document.querySelector("#checkout-btn");
const checkoutMsg = document.getElementById("checkout-msg");

// get the cart items that has been added to cart items
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    cartItems.innerHTML = "";
    let total = 0.00;
    cart.forEach(item => {
        const price = parseFloat(item.price.replace("$", ""));
        total += price;

        const div = document.createElement("div");
        div.className = "cart-item";  
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width:80px;height:80px;object-fit:cover;border-radius:8px;margin-right:1rem;margin-left:3rem">
            <span style="font-weight:bold;">${item.name}</span> - <span>${item.price}</span>
            `;
            cartItems.appendChild(div);
    });
    totalPriceElement.textContent =  "$" + total.toFixed(2);
}

renderCart();

checkoutBtn.addEventListener("click", () => {
    checkoutMsg.style.display = "block";
    checkoutMsg.style.justifyContent = "center";
    checkoutMsg.style.alignItems = "center";
    checkoutMsg.style.marginBottom = "2rem";
});

checkoutBtn.style.marginBottom = "2rem";
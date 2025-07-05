const products = [
    {
        id: 1,
        image: "https://thecentrecircle.in/cdn/shop/files/liverpooldoodlewebp.webp?v=1703103285",
        name: "Denim T-Shirt",
        company: "SnapCart",
        price: "$10.00",
        description: "A stylish and comfortable denim t-shirt perfect for casual outings.",
    },

    {
        id: 2,
        image: "https://fox3.in/wp-content/uploads/2021/10/Frogmen-Morale-TShirt-Front.jpg",
        name: "Graphic Tee",
        company: "SnapCart",
        price: "$12.50",
        description: "A trendy graphic tee that adds a pop of color to your wardrobe.",
    },

    {
        id: 3,
        image: "https://down-my.img.susercontent.com/file/44f2d5956cc4e4de18776600dd69b425",
        name: "Chainsmokers Tee",
        company: "SnapCart",
        price: "$11.50",
        description: "A trendy graphic chainsmokers tee that adds a pop of color to your attitude.",
    },

    {
        id: 4,
        image: "https://images.meesho.com/images/products/519987746/slz8y_512.jpg",
        name: "Classic Tee",
        company: "SnapCart",
        price: "$14.50",
        description: "A classic bhidu tee that brings back the retro vibes.",
    },

    {
        id: 5,
        image: "https://i.ebayimg.com/images/g/4Q4AAOSwmQ9ilCZv/s-l1200.jpg",
        name: "Lamada Tee",
        company: "SnapCart",
        price: "$15.50",
        description: "A stylish lamada tee that combines comfort and fashion.",
    },

    {
        id: 6,
        image: "https://down-my.img.susercontent.com/file/sg-11134201-23020-16qb6pk4jgnv6e",
        name: "Gundapa Tee",
        company: "SnapCart",
        price: "$12.50",
        description: "A unique gundapa tee that showcases your individuality.",
    },

    {
        id: 7,
        image: "https://wearoldmoney.com/cdn/shop/files/main-image-4_a777cc44-b866-4303-9735-99571337d2a6.jpg?v=1705940471",
        name: "Old-money Pant",
        company: "SnapCart",
        price: "$20.99",
        description: "A sophisticated old-money pant that exudes elegance and class.",
    },

    {
        id: 8,
        image: "https://minimalvintage.com/cdn/shop/files/5_e9245d52-ca18-4176-9afb-7fd95bb0e20a.jpg?v=1746344321&width=1090",
        name: "Old-money Trouser",
        company: "SnapCart",
        price: "$25.50",
        description: "A refined old-money trouser that complements any formal outfit.",
    }
]


const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

const product = products.find(p => p.id === productId);

if(product) {
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-company').textContent = product.company;
    document.getElementById('product-price').textContent = product.price;
    document.getElementById('product-description').textContent = product.description;
}

const addCart = document.querySelector("#add-to-cart");
if(addCart) {
    addCart.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added to cart!");
        window.location.href = "cart.html";
});
}

const removeCart = document.querySelector("#remove-to-cart");
if(removeCart) {
    removeCart.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart = cart.filter(item => item.id !== productId);

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product removed from cart!");
        window.location.href = "cart.html";
    })
}

const buyNow = document.querySelector("#buy-now");
if(buyNow) {
buyNow.addEventListener("click", () => {
    alert("Sorry Payment gateway is not available at the moment. Till then you can add the product to cart and explore more");
    window.location.href = "index.html";
});
}
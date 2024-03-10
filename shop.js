const products = [
    { id: 1, name: "Stuffed Animal", price: 10.99 },
    { id: 2, name: "Handmade Bracelet", price: 5.99 },
    { id: 3, name: "Artwork Print", price: 8.99 },
];
let cart = [];

function displayProducts() {
    const productsSection = document.getElementById("products");
    productsSection.innerHTML = "";

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "product";
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(productElement);
    });
}

function displayCart() {
    const cartSection = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");
    cartSection.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement("li");
        cartItemElement.className = "cart-item";
        cartItemElement.innerHTML = `
            <span>${products.find(product => product.id === item.id).name}</span>
            <span>$${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartSection.appendChild(cartItemElement);

        total += item.price;
    });

    totalElement.textContent = total.toFixed(2);
}

function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    cart.push({ id: product.id, price: product.price });
    displayCart();
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        displayCart();
    }
}

function checkout() {
    // Implement checkout logic (e.g., send order to server, clear cart, etc.)
    alert("Thank you for your purchase!");
    cart = [];
    displayCart();
}

// Initial setup
displayProducts();
displayCart();
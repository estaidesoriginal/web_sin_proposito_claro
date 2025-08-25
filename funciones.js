document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product');
    const cartItems = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    const clearCartBtn = document.getElementById('clear-cart');
    const checkoutBtn = document.getElementById('checkout');

    let cart = {};

    // Add to Cart
    products.forEach(product => {
        product.querySelector('.add-to-cart').addEventListener('click', function () {
            const id = product.getAttribute('data-id');
            const name = product.querySelector('h3').textContent;
            const price = parseFloat(product.querySelector('p').textContent.replace('Price: $', ''));
            if (!cart[id]) {
                cart[id] = { name, price, quantity: 1 };
            } else {
                cart[id].quantity += 1;
            }
            renderCart();
        });
    });

    // Render Cart
    function renderCart() {
        cartItems.innerHTML = '';
        let total = 0;
        Object.keys(cart).forEach(id => {
            const item = cart[id];
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
                <td><button class="remove-item" data-id="${id}">Remove</button></td>
            `;
            cartItems.appendChild(row);
            total += item.price * item.quantity;
        });
        totalPriceEl.textContent = total.toFixed(2);

        // Remove item
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', function () {
                const id = btn.getAttribute('data-id');
                delete cart[id];
                renderCart();
            });
        });
    }

    // Clear Cart
    clearCartBtn.addEventListener('click', function () {
        cart = {};
        renderCart();
    });

    // Checkout
    checkoutBtn.addEventListener('click', function () {
        if (Object.keys(cart).length === 0) {
            alert('Your cart is empty!');
        } else {
            alert('Thank you for your purchase!');
            cart = {};
            renderCart();
        }
    });
});
// ...existing code...
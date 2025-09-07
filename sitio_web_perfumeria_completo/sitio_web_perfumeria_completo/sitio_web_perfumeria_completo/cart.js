
/*const imageUrl = "https://mundoaromas.cl/cdn/shop/products/HUGO.jpg?v=1646238744";*/
const products = Array.from({length: 40}, (_, i) => ({
    name: `Perfume ${i+1}`,
    brand: "Marca Ejemplo",
    price: 50 + i
}));

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
    const container = document.getElementById('cartItems');
    container.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const product = products[item.index];
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            
            <div>
                <strong>${product.name}</strong><br>
                ${product.brand}<br>
                $${product.price}
            </div>
            <div>
                <button onclick="updateQuantity(${item.index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.index}, 1)">+</button>
            </div>
            <button onclick="removeItem(${item.index})">Eliminar</button>
        `;
        container.appendChild(div);
        total += product.price * item.quantity;
    });
    document.getElementById('totalAmount').textContent = `$${total}`;
}

function updateQuantity(index, change) {
    const item = cart.find(i => i.index === index);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.index !== index);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }
}

function removeItem(index) {
    cart = cart.filter(i => i.index !== index);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

renderCart();

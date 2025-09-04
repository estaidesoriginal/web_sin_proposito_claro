
const imageUrl = "UploadedImage0.jpg";
const products = Array.from({length: 40}, (_, i) => ({
    name: `Perfume ${i+1}`,
    brand: "Marca Ejemplo",
    price: 50 + i,
    discount: `${10 + (i % 5) * 5}%`
}));

function displayProducts() {
    const grid = document.getElementById('productGrid');
    products.forEach((p, index) => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
            <img src="${imageUrl}" alt="${p.name}">
            <div>${p.name}</div>
            <div>${p.brand}</div>
            <div>$${p.price}</div>
            <div class='discount'>Descuento: ${p.discount}</div>
            <button onclick="addToCart(${index})">Agregar al carrito</button>
        `;
        grid.appendChild(div);
    });
}

function addToCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(i => i.index === index);
    if (item) item.quantity += 1;
    else cart.push({ index, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Producto agregado al carrito');
}

displayProducts();

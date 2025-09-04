// productos.js
const productos = [
  {
    id: 1,
    nombre: "Versace Eros Flame",
    precio: 1000000,
    descripcion: "Perfume versace Eros Flame 100ml.",
    imagen: "https://dbs.cl/media/catalog/product/v/e/versace-vr-84535-1_1.jpg?optimize=low&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"
  },
  {
    id: 2,
    nombre: "Auriculares Pro",
    precio: 50000,
    descripcion: "Auriculares con cancelación de ruido y sonido envolvente.",
    imagen: "https://via.placeholder.com/250"
  },
  {
    id: 3,
    nombre: "Mouse Inalámbrico",
    precio: 25000,
    descripcion: "Mouse ergonómico con batería de larga duración.",
    imagen: "https://via.placeholder.com/250"
  }
];
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
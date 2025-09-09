// productos.js
const productos = [
  {
    id: 1,
    nombre: "Versace Eros Flame",
    precio: 60000,
    descripcion: "Perfume Versace Eros Flame 100ml.",
    imagen: "https://dbs.cl/media/catalog/product/v/e/versace-vr-84535-1_1.jpg?optimize=low&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"
  },
  {
    id: 2,
    nombre: "Parfums de Marly Althair",
    precio: 370000,
    descripcion: "Althaïr Parfums de Marly 125ml.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_622182-MLU75982574040_052024-O.webp"
  },
  {
    id: 3,
    nombre: "Le Male Elixir Jean Paul Gaultier",
    precio: 125000,
    descripcion: "Perfume Le Male Elixir 125ml.",
    imagen: "https://multimarcasperfumes.cl/cdn/shop/files/lemaleelixirparfum125ml_600x.png?v=1735849368"
  },
  {
    id: 4,
    nombre: "Acqua di Giò Parfum Giorgio Armani",
    precio: 94000,
    descripcion: "Acqua di Giò Parfum 100ml.",
    imagen: "https://www.eliteperfumes.cl/cdn/shop/files/giorgio-armani-53121000014194.jpg?v=1733437866&width=1080"
  },
  {
    id: 5,
    nombre: "MYSLF Eau de Parfum Yves Saint Laurent",
    precio: 150000,
    descripcion: "Perfume Yves Saint Laurent MYSLF 100ml.",
    imagen: "https://www.eliteperfumes.cl/cdn/shop/files/yves-saint-laurent-yves-saint-laurent-myslf-edp-100-ml-h-33062093291556.jpg?v=1721080146&width=1080"
  },
  {
    id: 6,
    nombre: "Bottled Absolu Hugo Boss",
    precio: 100000,
    descripcion: "Perfume Hugo Boss Bottled Absolu 100ml.",
    imagen: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxdvwevOSpoC-XhYHbl-sLHR4Cusy1q0bjIIF9yEK3WD0BpwXVd0KfaOuGBFJtL_WZX8jZ7OFSZa3dtN_qrIB6_EdhAD1-pUk4KI2HkULa6WVp6zacA0WKSca3jgKv1AB01Wk6toGh&usqp=CAc"
  },
  {
    id: 7,
    nombre: "Armani Code Eau de Parfum (2024)",
    precio: 79000,
    descripcion: "Perfume Giorgio Armani Code Edp 75ml.",
    imagen: "https://perfumeschile.cl/cdn/shop/files/Giorgio-Armani-Armani-Code-2024-EDP-50ML-Recargable-Hombre.png?v=1726194896&width=1024"
  },
  {
    id: 8,
    nombre: "Dark Temptation AXE",
    precio: 4000,
    descripcion: "Dark Temptation AXE Colonia 150ml.",
    imagen: "https://fimgs.net/mdimg/perfume-thumbs/375x500.29897.jpg"
  },
  {
    id: 9,
    nombre: "Absolu Aventus Creed",
    precio: 88000,
    descripcion: "Creed Absolu Aventus 75ml.",
    imagen: "https://www.wolff-fragancias.cl/webPanel/assets/images/productos/prod_113_1727731895.png"
  },
  {
    id: 10,
    nombre: "Invictus Parfum Rabanne",
    precio: 143000,
    descripcion: "Perfume Rabanne INVICTUS 100ml.",
    imagen: "https://home.ripley.cl/store/Attachment/WOP/D327/2000399900729/2000399900729-1.jpg"
  },
  {
    id: 11,
    nombre: "Eau d'Ombré Leather Tom Ford",
    precio: 150000,
    descripcion: "TOM FORD Eau D'Ombre Leather 100m.",
    imagen: "https://www.lmching.com/cdn/shop/files/NewProject-352_b76fe0b4-2fe1-4a21-bb93-ed04b5d63398_800x.jpg?v=1749115432"
  },
  {
    id: 12,
    nombre: "Spicebomb Dark Leather Viktor&Rolf",
    precio: 90000,
    descripcion: "Spicebomb Black Dark Leather EDP 90 ml.",
    imagen: "https://cosmeticwholesale.cl/cdn/shop/files/png_3367a339-aa74-4074-be94-50c15ce4a79d.png?v=1734607575"
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
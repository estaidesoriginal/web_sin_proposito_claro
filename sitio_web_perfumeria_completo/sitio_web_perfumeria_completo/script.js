const boton = document.getElementById('miBotonAccion');
const usuarioLogueado = localStorage.getItem('usuarioLogueado');
if (!usuarioLogeado) {
            boton.style.display = 'none'; // Oculta el botón
        } else {
            boton.style.display = 'block'; // Muestra el botón (o el valor que necesite)
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


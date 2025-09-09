
const carritoCount = document.querySelector('.carrito-count');
const carritoIcon = document.querySelector('.carrito');
const modal = document.getElementById('modal-carrito');
const closeModal = document.querySelector('.close');
const carritoLista = document.getElementById('carrito-lista');
const carritoTotal = document.getElementById('carrito-total');

let carrito = [];

// Restaurar carrito desde localStorage
const guardado = JSON.parse(localStorage.getItem('carrito'));
if (guardado) {
  carrito = guardado;
  carritoCount.textContent = carrito.length;
}

// Agregar productos al carrito
function agregarListenerCarrito(productos) {
  const botonesComprar = document.querySelectorAll('.product button');
  botonesComprar.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const producto = productos[index];
      carrito.push(producto);
      carritoCount.textContent = carrito.length;
      alert(`${producto.nombre} agregado al carrito`);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    });
  });
}

// Mostrar modal
carritoIcon.addEventListener('click', () => {
  actualizarModal();
  modal.style.display = 'block';
});

// Cerrar modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

// Actualizar contenido del modal
function actualizarModal() {
  carritoLista.innerHTML = '';
  let total = 0;

  carrito.forEach((prod, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${prod.nombre} - $${prod.precio}
      <button data-index="${index}">X</button>
    `;
    carritoLista.appendChild(li);
    total += prod.precio;
  });

  carritoTotal.textContent = `Total: $${total}`;

  // Crear o seleccionar botón de pagar
  let botonPagar = document.getElementById('boton-pagar');
  if (!botonPagar) {
    botonPagar = document.createElement('button');
    botonPagar.id = 'boton-pagar';
    botonPagar.textContent = 'Pagar';
    botonPagar.style.backgroundColor = '#009688';
    botonPagar.style.color = 'white';
    botonPagar.style.padding = '8px 16px';
    botonPagar.style.border = 'none';
    botonPagar.style.borderRadius = '6px';
    botonPagar.style.cursor = 'pointer';
    botonPagar.style.marginTop = '10px';
    carritoLista.parentElement.appendChild(botonPagar);
  }

  // Evento único del botón Pagar
  botonPagar.onclick = () => {
    if (carrito.length === 0) {
      alert('El carrito está vacío. Agrega productos antes de pagar.');
      return;
    }

    const confirmar = confirm(`¿Seguro que deseas pagar $${total}?`);
    if (confirmar) {
      alert('Compra exitosa');
      carrito = [];
      carritoCount.textContent = carrito.length;
      localStorage.setItem('carrito', JSON.stringify(carrito));
      actualizarModal();
      modal.style.display = 'none';
    }
  };

  // Evento para eliminar productos
  const botonesEliminar = carritoLista.querySelectorAll('button[data-index]');
  botonesEliminar.forEach(btn => {
    btn.onclick = () => {
      const index = parseInt(btn.getAttribute('data-index'), 10);
      carrito.splice(index, 1);
      carritoCount.textContent = carrito.length;
      localStorage.setItem('carrito', JSON.stringify(carrito));
      actualizarModal();
    };
  });
}



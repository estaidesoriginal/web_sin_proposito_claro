
function loadCommunes() {
    const city = document.getElementById('city').value;
    const commune = document.getElementById('commune');
    commune.innerHTML = '';
    let options = [];
    if (city === 'Santiago') {
        options = ['Las Condes', 'Providencia', 'Ñuñoa'];
    } else if (city === 'Valparaíso') {
        options = ['Viña del Mar', 'Quilpué', 'Villa Alemana'];
    }
    options.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        commune.appendChild(opt);
    });
}

function submitOrder(event) {
    event.preventDefault();
    document.getElementById('popup').style.display = 'flex';
}

function goHome() {
    window.location.href = 'index.html';
}

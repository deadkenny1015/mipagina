function validarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const condiciones = document.getElementById('condiciones').checked;

    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const soloNumeros = /^[0-9]+$/;
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!soloLetras.test(nombre)) {
        alert('El nombre solo debe contener letras.');
        return false;
    }

    if (!soloLetras.test(apellidos)) {
        alert('Los apellidos solo deben contener letras.');
        return false;
    }

    if (!soloNumeros.test(telefono) || telefono.length !== 9) {
        alert('El teléfono debe contener solo números y tener 9 dígitos.');
        return false;
    }

    if (!correoValido.test(correo)) {
        alert('El correo electrónico no es válido.');
        return false;
    }

    if (!condiciones) {
        alert('Debes aceptar las condiciones de privacidad.');
        return false;
    }

    alert('Formulario enviado correctamente.');
    return true;
}

const producto = document.getElementById('producto');
const plazo = document.getElementById('plazo');
const extras = document.querySelectorAll('input[type="checkbox"][value]');
const presupuestoFinal = document.getElementById('presupuestoFinal');

function calcularPresupuesto() {
    let total = 0;

    const precioProducto = parseFloat(producto.value) || 0;
    total += precioProducto;

    extras.forEach(extra => {
        if (extra.checked) {
            total += parseFloat(extra.value);
        }
    });

    const dias = parseInt(plazo.value) || 0;
    if (dias > 0 && dias <= 10) {
        total *= 1.2; // Aumenta 20% si lo quiere muy rápido
    } else if (dias > 30) {
        total *= 0.9; // Descuento 10% si se toma más tiempo
    }

    presupuestoFinal.value = `$${total.toFixed(2)}`;
}

producto.addEventListener('change', calcularPresupuesto);
plazo.addEventListener('input', calcularPresupuesto);
extras.forEach(extra => {
    extra.addEventListener('change', calcularPresupuesto);
});

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

  presupuestoFinal.value = `$${total.toFixed(2)}`;
}

producto.addEventListener('change', calcularPresupuesto);
plazo.addEventListener('input', calcularPresupuesto);
extras.forEach(extra => extra.addEventListener('change', calcularPresupuesto));

window.addEventListener('DOMContentLoaded', calcularPresupuesto);

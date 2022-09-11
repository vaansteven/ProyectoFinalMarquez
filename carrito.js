// CARGAR LAS ENTRADAS DESDE EL LOCALSTORAGE
//mapa con precio entrada basado en la key
// CREAR UNA LINEA POR ENTRADA
// calcular precio total
// ir agregando a una variable total

const precioEntradas = new Map();
precioEntradas.set("afrojack", 200);
precioEntradas.set("claptone", 400);
precioEntradas.set("shm", 600);
let total = 0;
const container = document.getElementById("entradas");

Object.keys(localStorage).forEach((key) => {
  const subtotal = localStorage[key] * precioEntradas.get(key);

  total += subtotal;

  container.innerHTML += `
<div class="flex-container">
<h2>${key} - ${localStorage[key]} entrada${localStorage[key] > 1 ? "s" : ""}
  </h2>
<h4>subtotal: $${localStorage[key] * precioEntradas.get(key)}</h4>
</div>
`;
});

document.getElementById("total").innerHTML += `${total}`;

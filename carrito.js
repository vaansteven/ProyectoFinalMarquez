// CARGAR LAS ENTRADAS DESDE EL LOCALSTORAGE
//mapa con precio entrada basado en la key
// CREAR UNA LINEA POR ENTRADA
// calcular precio total
// ir agregando a una variable total


const mostrarCompras = () => {
  let total = 0;
  const container = document.getElementById("entradas");

  Object.keys(localStorage).forEach((key, i) => {
    fetch('https://6311528d826b98071a556980.mockapi.io/conciertos/' + key) //obtener elemento desde la api por ID
      .then((response) => response.json())
      .then((data) => {
        const cantidadEntradas = localStorage[key]
        const subtotal = cantidadEntradas * data.precio;
        total += subtotal;

        container.innerHTML += mostrarDetalle(data.id, data.nombre, cantidadEntradas, data.precio)

        //mostrar el total cuando es el ultimo elemento de la lista
        if (i === localStorage.length - 1) {
          document.getElementById("total").innerHTML = `Total:  $ ${total}`;
        }

      });
  });
}

const mostrarDetalle = (id, nombre, cantidad, precioEntrada) => {
  return `
<div class="flex-container">
  <div class="cantidad">
  <h2>${nombre} </h2>
  <div class="quantity buttons_added">
    <input type="button" value="-" onclick="restarEntradas('${id}',${precioEntrada})" class="minus">
    <input type="number" step="1" min="1" max="" name="quantity" value="${cantidad}" class="input-text qty text" size="4" pattern="" inputmode="" id="cantidadEntradas${id}">
    <input type="button" value="+" onclick="sumarEntradas('${id}',${precioEntrada})"class="plus">
  </div>
  <h2> entrada${cantidad > 1 ? "s" : ""} </h2>
  </div>

<span class="precio" id="precio${id}">$ ${cantidad * precioEntrada}</span>
</div>
 `;
}

const restarEntradas = (id, precioEntrada) => {
  const input = document.getElementById("cantidadEntradas" + id)
  if (input.value > 0) {
    const cantidad = --input.value
    input.value = cantidad

    const subtotal = document.getElementById(`precio${id}`)
   
    subtotal.innerHTML = `$ ${cantidad * precioEntrada}`

    localStorage.setItem(id, cantidad)
    calcularTotal()

  }
}

const sumarEntradas = (id, precioEntrada) => {
  const input = document.getElementById("cantidadEntradas" + id)

  const cantidad = ++input.value
  input.value = cantidad

  const subtotal = document.getElementById(`precio${id}`)
  subtotal.innerHTML = `$ ${cantidad * precioEntrada}`
  
  localStorage.setItem(id, cantidad)
  calcularTotal()
}



const calcularTotal = () => {
  let total = 0;
  document.querySelectorAll(".precio").forEach(precio => {
    total += parseInt(precio.innerHTML.split("$")[1])
  })
  document.getElementById("total").innerHTML = `Total:  $ ${total}`;
}

mostrarCompras()
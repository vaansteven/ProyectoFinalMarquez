

let selectedEvent;
let cantidad = document.getElementById("afrojack","claptone","shm");


const precioEntradas = new Map();
precioEntradas.set('afrojack', 200);
precioEntradas.set('claptone', 400);
precioEntradas.set('shm', 600);




cantidad.addEventListener("click", (event) => {
    if (event.key == "click") {
      let total = 0;
      
  
      total = precioEntradas.get(selectedEvent) == undefined? 0: precioEntradas.get(selectedEvent)  * parseInt(cantidad.value);
  
      let resultado = document.getElementById("resultado");
  
      resultado.innerHTML = `$ ${total}`;
    }
})

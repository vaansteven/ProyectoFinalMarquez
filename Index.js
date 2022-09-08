
document.querySelectorAll('.reservados').forEach((evento)=>{
    evento.addEventListener('click', e =>{
      console.log(e.target.id);
   });
});
const descripcionesEventos = new Map();
descripcionesEventos.set('afrojack', "Afrojack en OVO Punta del Este");
descripcionesEventos.set('shm', "Swedish House Mafia Estadio Centenario");
descripcionesEventos.set('claptone', "Claptone en Corona Sunsets de Punta del Este");




document.querySelectorAll('.reservados').forEach(item => {
    item.addEventListener('click', event => {
    const idEvento = event.target.id;
    const descripcionEvento = descripcionesEventos.get(idEvento)


    let yaReservadas = localStorage.getItem(idEvento)? localStorage.getItem(idEvento) : 0;
    localStorage.setItem(idEvento, ++yaReservadas);


    Swal.fire(
      'Felicitaciones!',
      `Reservaste entradas para ${descripcionEvento}`,
      'success'
    )
    
  })
})
document.querySelectorAll('.ampliar').forEach((eventoPasado)=>{
  idEventoPasado.addEventListener('click', e =>{
    console.log(e.target.id);
 });
});
const descripcionesEventosPasados = new Map();
descripcionesEventosPasados.set('resistance', "Afrojack en OVO Punta del Este");
descripcionesEventosPasados.set('galantis', "Swedish House Mafia Estadio Centenario");
descripcionesEventosPasados.set('carlcox', "Claptone en Corona Sunsets de Punta del Este");

document.querySelectorAll('.ampliar').forEach(item => {
  item.addEventListener('click', event => {
  const idEventoPasado = event.target.id;
  const descripcionesEventosPasados = descripcionesEventosPasados.get(idEvento)


  let ampliadas = localStorage.getItem(idEvento)? localStorage.getItem(idEvento) : 0;
  localStorage.setItem(idEvento, ++ampliadas);

  Swal.fire({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })


/*
1- Agregargarle una clase a todos los anchor (a elements) que dicen reservar
2- Query selector all para esa clase
3- console log el event.target.id y ver que concuerde con lo que vos queres
4- Recorrer la lista que te retorno el query selector all con un foreach
5- A cada uno agregarle un evento con addEventListener, agregale el click

const descripcionesEventos = new Map();
descripcionesEventos.set('afrojack', "Afrojack en OVO Punta del Este");
descripcionesEventos.set('shm', "Swedish House Mafia Estadio Centenario");
descripcionesEventos.set('claptone', "Claptone en Corona Sunsets de Punta del Este");



document.querySelectorAll('.reservar').forEach(item => {

  item.addEventListener('click', event => {
    const idEvento = event.target.id;
    const descripcionEvento = descripcionesEventos.get(idEvento)


    let yaReservadas = localStorage.getItem(idEvento)? localStorage.getItem(idEvento) : 0;
    localStorage.setItem(idEvento, ++yaReservadas);


    Swal.fire(
      'Felicitaciones!',
      `Reservaste entradas para ${descripcionEvento}`,
      'success'
    )
    
  })
})
 carrito js


Object.keys(localStorage).forEach(key=>{

document.getElementById("entradas").innerHTML += `<p> ${descripcionesEventos.get(key)} - $ ${localStorage.getItem(key) * precioEntradas.get(key)} </p>`

})
[20:27, 4/9/2022] Gabriel Marquez: Para carrito tenes que hacer los dos mapas uno con descripciones y otro con precios
mi intenciòn es que  cuando el usuario de click en la palabra reservar la consola muestre una intracción
se abra un modal para que indique cantidad de entradas que desea comprar
una vez que realice la compra le indique el total.





let selectedEvent;
let cantidad = document.getElementById("evento1","evento2","evento3");


const precioEntradas = new Map();
precioEntradas.set('evento1', 200);
precioEntradas.set('evento2', 400);
precioEntradas.set('evento3', 600);
precioEntradas.set('evento4', 800);


cantidad.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    let total = 0;
    

    total = precioEntradas.get(selectedEvent) == undefined? 0: precioEntradas.get(selectedEvent)  * parseInt(cantidad.value);

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `$ ${total}`;
  }

*/
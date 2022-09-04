const eventos= document.querySelectorall(".cards");
cards.forEach(element => {
    element.addEventListner('click', (e)=>{
      console.log('cards');
    });
 });

const evento1 = document.querySelector("#evento1");
const evento2 = document.querySelector("#evento2");
const evento3 = document.querySelector("#evento3");

[evento1, evento2, evento3].forEach((element)=>{
    element.addEventListner('click', (e)=>{
      console.log('click');
   });
});s


function reservar(e) {
    let reservado=e.target
    console.log(e)

}

/*
mi intenciòn es que  cuando el usuario de click en la palabra reservar la consola muestre una intracción
se abra un modal para que indique cantidad de entradas que desea comprar
una vez que realice la compra le indique el total.*/




/*
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


});
*/
document.querySelectorAll(".reservados").forEach((evento) => {
  evento.addEventListener("click", (e) => {
    console.log(e.target.id);
  });
});
const descripcionesEventos = new Map();
descripcionesEventos.set("afrojack", "Afrojack en OVO Punta del Este");
descripcionesEventos.set("shm", "Swedish House Mafia Estadio Centenario");
descripcionesEventos.set(
  "claptone",
  "Claptone en Corona Sunsets de Punta del Este"
);

document.querySelectorAll(".reservados").forEach((item) => {
  item.addEventListener("click", (event) => {
    const idEvento = event.target.id;
    const descripcionEvento = descripcionesEventos.get(idEvento);

    let yaReservadas = localStorage.getItem(idEvento)
      ? localStorage.getItem(idEvento)
      : 0;
    localStorage.setItem(idEvento, ++yaReservadas);

    Swal.fire(
      "Felicitaciones!",
      `Reservaste entradas para ${descripcionEvento}`,
      "success"
    );
  });
});

document.querySelectorAll(".ampliar").forEach((eventoPasado) => {
  eventoPasado.addEventListener("click", (e) => {
    console.log(e.target.id);
  });
});

const descripcionesEventosPasados = new Map();
descripcionesEventosPasados.set("resistance", {
  img:"https://uruguay.resistancemusic.com/wp-content/uploads/sites/18/2019/08/uruguay-og.jpg",
  descripcion: "Resistance 2018 Velodromo"
});
descripcionesEventosPasados.set("galantis",{
  img:"https://edmidentity.com/wp-content/uploads/2017/11/59c8be4b78d19946401803.png.jpeg",
  descripcion: "Galantis Velodromo"});

descripcionesEventosPasados.set("carlcox",{
  img: "https://sc2.elpais.com.uy/files/article_main/uploads/2018/10/11/5bbf6579f3f17.jpeg",
  descripcion:"Carlcox Resistance 2019"});

document.querySelectorAll(".ampliar").forEach(item => {

  item.addEventListener("click", (event) => {
    const idEventoPasado = event.target.id;
    const infoEvento =
      descripcionesEventosPasados.get(idEventoPasado);

    let ampliadas = localStorage.getItem(idEventoPasado)
      ? localStorage.getItem(idEventoPasado)
      : 0;
    localStorage.setItem(idEventoPasado, ++ampliadas);

    Swal.fire({
      title: idEventoPasado,
      text: infoEvento.descripcion,
      imageUrl: infoEvento.img,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });

  });

});

/*
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



cantidad.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    let total = 0;
    

    total = precioEntradas.get(selectedEvent) == undefined? 0: precioEntradas.get(selectedEvent)  * parseInt(cantidad.value);

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `$ ${total}`;
  }

*/

document.querySelectorAll(".reservados").forEach((evento) => {
  evento.addEventListener("click", (e) => {
    console.log(e.target.id);
  });
});
const descripcionesEventos = new Map();
descripcionesEventos.set("afrojack", "Afrojack en OVO Punta del Este 5/11/2022");
descripcionesEventos.set("shm", "Swedish House Mafia Estadio Centenario 15/10/2022");
descripcionesEventos.set ("claptone", " Corona Sunsets de Punta del Este 31/12/2022");

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

  
    Swal.fire({
      title: idEventoPasado.charAt(0).toUpperCase() + idEventoPasado.slice(1, idEventoPasado.length),
      text: infoEvento.descripcion,
      imageUrl: infoEvento.img,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });

  });

});
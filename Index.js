
const cargarEventosActivos = () => {
  fetch('https://6311528d826b98071a556980.mockapi.io/conciertos')
    .then((response) => response.json())
    .then((eventos) => {
       mostrarEventosActivos(eventos)
      reservarEventosActivos(eventos);
    });
  }
  
  const mostrarEventosActivos = (eventos) => {
    let eventosActivos = document.getElementById("eventos-activos");

    eventos.forEach(evento => {
      eventosActivos.innerHTML +=
        `
      <div class="card">
        <img
          src="${evento.img}"
          alt="${evento.nombre}"
        />
        <h4>${evento.nombre}</h4>
        <p class="p">
          ${evento.descripcion}
        </p>
        <a class="reservados" id="${evento.id}" href="#">Reservar</a>
      </div>
  `
    })

  }

  const reservarEventosActivos = (eventos) => {

    eventos.forEach(evento => {
      const elemento =document.getElementById(evento.id)
      elemento.addEventListener("click", _ => {
        let yaReservadas = localStorage.getItem(evento.id)
          ? localStorage.getItem(evento.id)
          : 0;
        localStorage.setItem(evento.id, ++yaReservadas);

        Swal.fire(
          "Felicitaciones!",
          `Reservaste entradas para ${evento.nombre}`,
          "success"
        );
      });
    })
  }

  const mostrarDescripcionesEventosPasados = () => {
    const descripcionesEventosPasados = new Map();
    descripcionesEventosPasados.set("resistance", {
      img: "https://uruguay.resistancemusic.com/wp-content/uploads/sites/18/2019/08/uruguay-og.jpg",
      descripcion: "Resistance 2018 Velodromo"
    });
    descripcionesEventosPasados.set("galantis", {
      img: "https://edmidentity.com/wp-content/uploads/2017/11/59c8be4b78d19946401803.png.jpeg",
      descripcion: "Galantis Velodromo"
    });

    descripcionesEventosPasados.set("carlcox", {
      img: "https://sc2.elpais.com.uy/files/article_main/uploads/2018/10/11/5bbf6579f3f17.jpeg",
      descripcion: "Carlcox Resistance 2019"
    });

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
  }

  cargarEventosActivos();
  mostrarDescripcionesEventosPasados();
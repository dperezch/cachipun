function cachipun() {
  /* Elimina los elementos dentro del contenedor marcador para que no se agreguen nuevamente uno encima de otro */
  const contenedor = document.querySelector(".marcador");
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }

  /* pregunta cuantas veces quieres jugar */
  let cantidadJuegos = parseInt(prompt("¿Cuántas veces quieres jugar?"));
  console.log(cantidadJuegos);
  alert(`Elegiste jugar ${cantidadJuegos} veces, comencemos!`);

  /* iniciamos el marcador en 0 */
  let scoreJugador = 0;
  let scorePC = 0;
  let empates = 0;

  /* Iniciamos el ciclo de juegos */
  for (let i = 1; i <= cantidadJuegos; i++) {
    alert(`Juego número ${i}`);
    let random = Math.floor(Math.random() * 3);
    /* iniciamos pcEleccion sin ningún valor para luego asignarle uno con switch */
    let pcEleccion;
    switch (random) {
      case 0:
        pcEleccion = "piedra";
        break;
      case 1:
        pcEleccion = "papel";
        break;
      case 2:
        pcEleccion = "tijera";
        break;
      default:
        break;
    }

    /* guardamos nuestra elección y la transformamos a lower case */
    let eleccion = prompt(
      "Elige (escribe) piedra, papel o tijera"
    ).toLowerCase();

    console.log("YO: ", eleccion);
    console.log("PC: ", pcEleccion);

    /* Comprobamos que se haya elegido piedra, papel o tijera, de lo contrario cuenta como derrota */
    if (
      eleccion !== "piedra" &&
      eleccion !== "papel" &&
      eleccion !== "tijera"
    ) {
      alert(
        `Escribiste: ${eleccion}, debes escribir: piedra, papel o tijera. Pierdes este juego!`
      );
      scorePC++;
    }

    /* comparamos las elecciones y dependiendo del resultado agregamos 1 unidad al marcador correspondiente que comenzó en 0 */
    if (eleccion === "piedra" && pcEleccion === "piedra") {
      alert(
        `Elegiste ${eleccion} y el computador eligió ${pcEleccion}, resultado: Empate!!!`
      );
      empates++;
    }
    if (eleccion === "piedra" && pcEleccion === "papel") {
      alert(
        `Elegiste ${eleccion} y el computador eligió ${pcEleccion}, resultado: Perdiste!!!`
      );
      scorePC++;
    }
    if (eleccion === "piedra" && pcEleccion === "tijera") {
      alert(
        `Elegiste ${eleccion} y el computador eligió ${pcEleccion}, resultado: Ganaste!!!`
      );
      scoreJugador++;
    }
    if (eleccion === "papel" && pcEleccion === "papel") {
      alert(
        `Elegiste ${eleccion} y el computador eligió ${pcEleccion}, resultado: Empate!!!`
      );
      empates++;
    }
    if (eleccion === "papel" && pcEleccion === "tijera") {
      alert(
        `Elegiste ${eleccion} y el computador eligió ${pcEleccion}, resultado: Perdiste!!!`
      );
      scorePC++;
    }
    if (eleccion === "papel" && pcEleccion === "piedra") {
      alert(
        `Elegiste ${eleccion} y el computador eligió ${pcEleccion}, resultado: Ganaste!!!`
      );
      scoreJugador++;
    }
    if (eleccion === "tijera" && pcEleccion === "tijera") {
      alert(
        `Elegiste ${eleccion} y el computador eligió ${pcEleccion}, resultado: Empate!!!`
      );
      empates++;
    }
    if (eleccion === "tijera" && pcEleccion === "piedra") {
      alert(
        `Elegiste ${eleccion} y el computador eligió ${pcEleccion}, resultado: Perdiste!!!`
      );
      scorePC++;
    }
    if (eleccion === "tijera" && pcEleccion === "papel") {
      alert(
        `Elegiste ${eleccion} y el computador eligió ${pcEleccion}, resultado: Ganaste!!!`
      );
      scoreJugador++;
    }
  }

  console.log(
    `empates: ${empates}, ganados: ${scoreJugador}, perdidos: ${scorePC}`
  );

  /* Obtenemos el elemento con clase marcador en el html y le agregamos la punctuación y los gif correspondientes */
  const marcador = document.querySelector(".marcador");

  const puntuacion = document.createElement("p");
  const pTexto = document.createTextNode(
    `Cantidad de juegos: ${cantidadJuegos}, Victorias: ${scoreJugador}, derrotas: ${scorePC}, empates: ${empates}`
  );
  puntuacion.appendChild(pTexto);

  marcador.appendChild(puntuacion);

  if (scoreJugador > scorePC) {
    const mensaje = document.createElement("h2");
    const mTexto = document.createTextNode("FELICITACIONES, HAS GANADO!!!");
    mensaje.appendChild(mTexto);
    marcador.appendChild(mensaje);
    const img = document.createElement("img");
    img.src = "./assets/img/victory.gif";
    img.alt = "gif victoria";
    marcador.appendChild(img);
  } else if (scoreJugador < scorePC) {
    const mensaje = document.createElement("h2");
    const mTexto = document.createTextNode("LÁSTIMA, HAS PERDIDO!!!");
    mensaje.appendChild(mTexto);
    marcador.appendChild(mensaje);
    const img = document.createElement("img");
    img.src = "./assets/img/derrota.gif";
    img.alt = "gif derrota";
    marcador.appendChild(img);
  } else if (scoreJugador === scorePC) {
    const mensaje = document.createElement("h2");
    const mTexto = document.createTextNode("IGUALES, EMPATE!!!");
    mensaje.appendChild(mTexto);
    marcador.appendChild(mensaje);
    const img = document.createElement("img");
    img.src = "./assets/img/empate.gif";
    img.alt = "gif empate";
    marcador.appendChild(img);
  }
}

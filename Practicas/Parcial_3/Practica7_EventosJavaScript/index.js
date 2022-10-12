function muestraOculta(id) {//Esta funcion recibe el id del parrafo <p> a modificar
    var elemento = document.getElementById("contenidos_" + id);//Seleccionamos un determinado p
    var enlace = document.getElementById("enlace_" + id);//Seleccionamos su respectivo enlace
    if (elemento.style.display == "" || elemento.style.display == "block") {
      //Si el elemento p tiene un display igual a nada O un display de tipo block
      //Es decir, esta visible
      elemento.style.display = "none";//Entonces lo ocultamos
      enlace.innerHTML = "Mostrar contenidos";//Al enlace le ponemos este texto
    } else {//Si no esta visible el texto, entonces
      elemento.style.display = "block";//Mostramos el p o texto
      enlace.innerHTML = "Ocultar contenidos";//Al enlace le damos este texto
    }
  }

const boton = document.getElementById('miBoton');

boton.addEventListener('click', function () {
  if (boton.textContent === "No") {
    boton.textContent = "¿Estás segura?";
  } else if (boton.textContent === "¿Estás segura?") {
    boton.textContent = "¿Segura segura?";
  } else if (boton.textContent === "¿Segura segura?") {
    boton.textContent = "¿Segurísima?";
  } else if (boton.textContent === "¿Segurísima?") {
    boton.textContent = "Anda di que si";
  } else if (boton.textContent === "Anda di que si") {
    boton.textContent = "Chale porque no";
  } else if (boton.textContent === "Chale porque no") {
    boton.textContent = "Deberas segura?";
  } else if (boton.textContent === "Deberas segura?") {
    boton.textContent = "Pero segura segura??";
  } else if (boton.textContent === "Pero segura segura??") {
    boton.textContent = "Pero segura segurísima?";
  } else if (boton.textContent === "Pero segura segurísima?") {
    boton.textContent = "Super segurísima???";
  } else if (boton.textContent === "Super segurísima???") {
    boton.textContent = "No podrás decir no";
  }
  else if (boton.textContent === "No podrás decir no") {
    boton.textContent = "Jijii aunque quieras";
  }
  else if (boton.textContent === "Jijii aunque quieras") {
    boton.textContent = "No se puede 😌";
  }
  else if (boton.textContent === "No se puede 😌") {
    boton.textContent = "Ya no hay mas jiji";
  } else if (boton.textContent === "Ya no hay mas jiji") {
    boton.textContent = "Ya di que si jiji 🤭";
  }
});
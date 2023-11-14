// ----- formulario ------ //

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  crearUsuario(e);
});

function crearUsuario(e) {
  e.preventDefault();

  let formNombre = document.getElementById("nombre");
  let formEmail = document.getElementById("email");
  let formPais = document.getElementById("pais");

  if (
    formNombre.value === "" ||
    formEmail.value === "" ||
    formPais.value === ""
  ) {
    Swal.fire({
      icon: "error",
      text: "Por favor complete todos los campos",
    });
  } else {
    const usuario = {
      nombre: formNombre.value,
      email: formEmail.value,
      pais: formPais.value,
    };

    console.log(usuario);
    localStorage.setItem("user", JSON.stringify(usuario));
    form.reset();
    Swal.fire({
      icon: "success",
      title: "Gracias por su registro",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}


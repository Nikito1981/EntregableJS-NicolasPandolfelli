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

const carrito = [];

const productos = [
  {
    id: 1,
    producto:
      "Epiphone Les Paul Traditional Pro IV Limited Edition Worn Wine Red",
    precio: 670000,
    img: "./img/productos/Ep1.jpg",
  },
  {
    id: 2,
    producto: "Epiphone Les Paul Traditional Pro IV Limited Edition Worn Ebony",
    precio: 720000,
    img: "./img/productos/Ep2.jpg",
  },
  {
    id: 3,
    producto:
      "Fender Stratocaster HSS Plus Top Maple Fingerboard Limited Edition Blue Wurst",
    precio: 650000,
    img: "./img/productos/Fender3.jpg",
  },
  {
    id: 4,
    producto:
      "Fender Stratocaster HSS Plus Top Maple Fingerboard Limited Edition Sienna Sunburst",
    precio: 600000,
    img: "./img/productos/fender2.jpg",
  },
  {
    id: 5,
    producto: "Schecter Research C1 Platinum Satin Transparent Midnight Blue",
    precio: 575000,
    img: "./img/productos/Schecter1.jpg",
  },
  {
    id: 6,
    producto: "Schecter Research C1 Platinum Translucent Black",
    precio: 590000,
    img: "./img/productos/Schecter2.jpg",
  },
];

const shopContent = document.querySelector("#shopContent");
const verCarrito = document.getElementById("verCarrito");

function crearCards() {
  productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <div>
            <img src="${product.img}" class="card-img-top" alt="producto">
            <div class="card-body">
                <h3>${product.producto}</h3>
                <p class="precio">${product.precio}</p>    
                
            </div>
        </div>`;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Agregar al Carrito";
    comprar.className = "comprar";

    content.append(comprar);
    comprar.addEventListener("click", () => {
      carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.producto,
        precio: product.precio,
      });
      console.log(carrito);
    });
  });
}

crearCards();

// Abrir - esconder carrito //

const btnCart = document.querySelector(".container-icon")
const containerCartProducts = document.querySelector(".container-cart-products")
btnCart.addEventListener('click', () => {
  containerCartProducts.classList.toggle('hidden-cart')

})


function agregarACarrito(id) {
  const productoElegido = productos.find((product) => product.id == id);
  carrito.push(productoElegido);
  console.log(carrito);
  mostrarCarrito();
}

verCarrito.addEventListener("click", () => {
  console.log("Clickeaste en el carrito");
});
console.log("¿Whatt?");
setTimeout(() => {
  console.log("Hello");
}, 2000);
console.log("bye");

setInterval(() => {
  console.log("Se ejectuta el intervalo");
}, 1500);

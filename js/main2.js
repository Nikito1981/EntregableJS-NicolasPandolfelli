const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  crearUsuario(e);
});

function crearUsuario(e) {
  e.preventDefault();

  let formNombre = document.getElementById("nombre");
  let formEmail = document.getElementById("email");
  let formPais = document.getElementById("pais");

  if (formNombre.value === "" || formEmail.value === "" || formPais.value === "") {
  } else {

  const usuario = {
    nombre: formNombre.value,
    email: formEmail.value,
    pais: formPais.value,
  };

  console.log(usuario);
  localStorage.setItem("user", JSON.stringify(usuario));
  form.reset();
  alert("Gracias por su registro");
}
}

const carrito = [];

const productos = [
  {
    id: 1,
    producto:
      "Epiphone Les Paul Traditional Pro IV Limited-Edition Worn Wine Red",
    precio: 670000,
    img: "./img/productos/Ep1.jpg",
  },
  {
    id: 2,
    producto: "Epiphone Les Paul Traditional Pro IV Limited-Edition Worn Ebony",
    precio: 720000,
    img: "./img/productos/Ep2.jpg",
  },
  {
    id: 3,
    producto:
      "Fender Stratocaster HSS Plus Top Maple Fingerboard Limited-Edition Blue Wurst",
    precio: 650000,
    img: "./img/productos/Fender3.jpg",
  },
  {
    id: 4,
    producto:
      "Fender Stratocaster HSS Plus Top Maple Fingerboard Limited-Edition Sienna Sunburst",
    precio: 600000,
    img: "./img/productos/fender2.jpg",
  },
  {
    id: 5,
    producto: "Schecter Research C-1 Platinum Satin Transparent Midnight Blue",
    precio: 575000,
    img: "./img/productos/Schecter1.jpg",
  },
  {
    id: 6,
    producto: "Schecter Research C-1 Platinum Translucent Black",
    precio: 590000,
    img: "./img/productos/Schecter2.jpg",
  },
];

const shopContent = document.querySelector("#shopContent");
const verCarrito = document.getElementById("verCarrito")
shopContent.innerHTML = `
<h3 class="titulo">NUESTRA TIENDA</h3>
  `;

function crearCards() {

   
  productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <div class="card" style="width: 50rem;">
            <img src="${product.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3>${product.producto}</h3>
                <p class="precio">$ ${product.precio}</p>    
                
            </div>
        </div>`

        shopContent.append(content);

        

        let comprar = document.createElement("button");
        comprar.innerText = "Agregar al Carrito";
        comprar.className = "comprar"

        content.append(comprar);
        comprar.addEventListener("click", () =>{
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.producto,
                precio:product.precio,
            });
            console.log(carrito);

        });
    });  
}

crearCards();

function agregarACarrito(id){
    const productoElegido= productos.find((product) => product.id == id)
    carrito.push(productoElegido)
    console.log(carrito)
    mostrarCarrito()
}

verCarrito.addEventListener("click", () =>{
    console.log("Clickeaste en el carrito")
})



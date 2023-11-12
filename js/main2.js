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



const productos = [
  {
    id: 1,
    producto:
      "Epiphone Les Paul Traditional Pro IV Limited Edition Worn Wine Red",
    precio: 670,
    img: "./img/productos/Ep1.jpg",
  },
  {
    id: 2,
    producto: "Epiphone Les Paul Traditional Pro IV Limited Edition Worn Ebony",
    precio: 720,
    img: "./img/productos/Ep2.jpg",
  },
  {
    id: 3,
    producto:
      "Fender Stratocaster HSS Plus Top Maple Fingerboard Limited Edition Blue Wurst",
    precio: 650,
    img: "./img/productos/Fender3.jpg",
  },
  {
    id: 4,
    producto:
      "Fender Stratocaster HSS Plus Top Maple Fingerboard Limited Edition Sienna Sunburst",
    precio: 600,
    img: "./img/productos/fender2.jpg",
  },
  {
    id: 5,
    producto: "Schecter Research C1 Platinum Satin Transparent Midnight Blue",
    precio: 575,
    img: "./img/productos/Schecter1.jpg",
  },
  {
    id: 6,
    producto: "Schecter Research C1 Platinum Translucent Black",
    precio: 590,
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
                <p class="precio">usd ${product.precio}</p>    
                
            </div>
        </div>`;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Agregar al Carrito";
    comprar.className = "comprar";

    content.append(comprar);
    // comprar.addEventListener("click", () => {
    //   carrito.push({
    //     id: product.id,
    //     img: product.img,
    //     nombre: product.producto,
    //     precio: product.precio,
    //   });
    //   console.log(carrito);
    // });
  });
}

crearCards();

// Abrir - esconder carrito //

const btnCart = document.querySelector(".container-cart-icon");
const containerCartProducts = document.querySelector(
  ".container-cart-products"
);
btnCart.addEventListener("click", () => {
  containerCartProducts.classList.toggle("hidden-cart");
});

const cartInfo = document.querySelector(".cart-product");
const rowProduct = document.querySelector(".row-product");



let allProducts = [];

const precioTotal = document.querySelector('.total-pagar');

const contarProductos = document.querySelector('#contadorProductos');

shopContent.addEventListener('click', e =>{
  if(e.target.classList.contains('comprar')){
    const producto = e.target.parentElement;

    const infoProducto = {
      cantidad:1,
      nombre:producto.querySelector('h3').innerText,
      precio:producto.querySelector('p').innerText
    };

    const exists = allProducts.some(producto => producto.nombre === infoProducto.nombre)
    
    if(exists){
      const products = allProducts.map(producto => {
        if(producto.nombre === infoProducto.nombre){
          producto.cantidad++;
          return producto
        }else{
          return producto
        }

      })
      allProducts = [...products]
        }else{
          allProducts = [...allProducts,infoProducto]
    }


    

    showHTML()
  }
  
});

rowProduct.addEventListener('click', (e) =>{
  if(e.target.classList.contains('icon-close')){

  }


})

const showHTML = () => {

  // limpiar carrito //
  rowProduct.innerHTML = '';

  let total = 0;
  let totalOfProducts = 0;


  allProducts.forEach(productoElegido => {
    const containerProduct = document.createElement('div')
    containerProduct.classList.add('cart-product')

    containerProduct.innerHTML = `
          <div class="info-cart-product">
              <span class='cantidad-producto-carrito'>${productoElegido.cantidad}</span>,
              <span class='titulo-producto-carrito'>${productoElegido.nombre}</span>
              <span class='precio-producto-carrito'>${productoElegido.precio}</span>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5"
            stroke="currentColor" 
            class="icon-close">
            <path stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
    `

    rowProduct.append(containerProduct)



    total = total + parseInt(productoElegido.cantidad * productoElegido.precio.slice(1))
    totalOfProducts = totalOfProducts + productoElegido.cantidad;

  });

  precioTotal.innerText = `(usd ${total})`
  contarProductos.innerText = totalOfProducts;



  }




// function agregarACarrito(id) {
//   const productoElegido = productos.find((product) => product.id == id);
//   carrito.push(productoElegido);
//   console.log(carrito);
//   mostrarCarrito();
// }







// verCarrito.addEventListener("click", () => {
//   console.log("Clickeaste en el carrito");
// });
// console.log("¿Whatt?");
// setTimeout(() => {
//   console.log("Hello");
// }, 2000);
// console.log("bye");

// setInterval(() => {
//   console.log("Se ejectuta el intervalo");
// }, 1500);

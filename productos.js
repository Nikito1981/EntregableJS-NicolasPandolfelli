
const shopContent = document.querySelector("#shopContent");

// realizamos la peticion de los productos  //

const pedirProductos = async () => {
  const resp = await fetch("./productos.json");
  const productosCargados = await resp.json();

  // creamos nuestras cards de productos //

  function crearCards() {
    productosCargados.forEach((product) => {
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

      // agregamos el boton "Agregar al Carrito"  //

      let comprar = document.createElement("button");
      comprar.innerText = "Agregar al Carrito";
      comprar.className = "comprar";

      content.append(comprar);
    });
  }

  crearCards();
};

pedirProductos();

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

const precioTotal = document.querySelector(".total-pagar");

const contarProductos = document.querySelector("#contadorProductos");

shopContent.addEventListener("click", (e) => {
  if (e.target.classList.contains("comprar")) {
    const productoSeleccionado = e.target.parentElement;
    containerCartProducts.classList.remove("hidden-cart");
    containerCartProducts.scrollIntoView({ behavior: 'smooth' });
    
    

    const infoProducto = {
      cantidad: 1,
      nombre: productoSeleccionado.querySelector("h3").innerText,
      precio: productoSeleccionado.querySelector("p").innerText,
    };

    const exists = allProducts.some(
      (productoSeleccionado) =>
        productoSeleccionado.nombre === infoProducto.nombre
    );

    if (exists) {
      const products = allProducts.map((productoSeleccionado) => {
        if (productoSeleccionado.nombre === infoProducto.nombre) {
          productoSeleccionado.cantidad++;
          return productoSeleccionado;
        } else {
          return productoSeleccionado;
        }
      });
      allProducts = [...products];
    } else {
      allProducts = [...allProducts, infoProducto];
    }
  }


  showHTML();
});

// ----- funcion para cancelar productos elegidos ----- //
rowProduct.addEventListener("click", (e) => {
    if (e.target.classList.contains("icon-close")) {
      const productoAEliminar = e.target.parentElement.querySelector(
        ".titulo-producto-carrito"
      ).innerText;
  
      const productoEncontrado = allProducts.find(
        (producto) => producto.nombre === productoAEliminar
      );
  
      if (productoEncontrado) {
        productoEncontrado.cantidad--;
  
  
        allProducts = allProducts.filter(
          (producto) => producto.cantidad > 0
        );
      }
  
      showHTML();
    }
  });


const showHTML = () => {
  // limpiar carrito //
  rowProduct.innerHTML = "";

  let total = 0;
  let totalOfProducts = 0;

  allProducts.forEach((productoElegido) => {
    const containerProduct = document.createElement("div");
    containerProduct.classList.add("cart-product");

    containerProduct.innerHTML = `
          <div class="info-cart-product">
              <span class='cantidad-producto-carrito'>${
                productoElegido.cantidad
              }</span>,
              <span class='titulo-producto-carrito'>${
                productoElegido.nombre
              }</span>
              <span class='precio-producto-carrito'>${parseFloat(
                productoElegido.precio.slice(4)
              ).toFixed(2)}</span>
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
    `;

    rowProduct.append(containerProduct);

    total =
      total +
      parseFloat(productoElegido.precio.slice(4)) * productoElegido.cantidad;
    totalOfProducts = totalOfProducts + productoElegido.cantidad;
  });

  precioTotal.innerText = `(usd ${total.toFixed(2)})`;
  contarProductos.innerText = totalOfProducts;
};

showHTML();

const btnFinalizarCompra = document.querySelector(".finalizar-compra-btn");
btnFinalizarCompra.addEventListener("click", finalizarCompra);

function finalizarCompra() {

  const usuario = JSON.parse(localStorage.getItem('user')) || {};

  if (allProducts.length === 0) {
    Swal.fire({
      icon: 'warning',
      text: 'El carrito está vacío.',
    });
  } else {
    Swal.fire({
      icon: 'success',
      title: 'Gracias por tu compra',
      text: 'Se enviará un correo electrónico con la información de pago a: ' + usuario.email,
      showConfirmButton: false,
      timer: 6000,
    });

  allProducts = [];
  showHTML();
  }
}

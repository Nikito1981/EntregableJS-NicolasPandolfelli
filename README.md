# EntregableJS-Pandolfelli

Soy Nicolas Pandolfelli y en esta oportunidad realicé un simulador de compra en el cual un usuario carga 
los datos requeridos para continuar con la compra y estos datos ingresan al almacenamiento local localStorage.
Una vez ingresados estos, se puede seleccionar entre 6 productos los cuales fueron cargados desde un archivo interno Json. 
Realicé una solicitud asíncrona para cargar productos desde el archivo productos.json utilizando fetch. 
Cada producto se muestra en una tarjeta que incluye una imagen, nombre, precio y un botón "Agregar al Carrito".
He implementado un carrito de compras que se muestra cuando se hace clic en el ícono del carrito en la barra de navegación.
Los productos seleccionados se muestran en el carrito junto con su cantidad y precio total.
Cada producto en el carrito tiene un botón para eliminarlo, y al hacer clic en él, se actualiza la lista de productos y la interfaz.
Cuando se hace clic en el botón "Agregar al Carrito", se crea un objeto que representa el producto y se almacena en una lista allProducts. 
Una vez finalizada la compra accedemos a un mensaje en donde nos avisa que se nos enviara la informacion de pago al mail cargado anteriormente
por el usuario. 
Utilicé la libreria Sweet alert para todos los mensajes, sumando la utilizacion de condicionales if/else en los casos de carrito 
vacio o de no haber completado todos los campos de registro. 






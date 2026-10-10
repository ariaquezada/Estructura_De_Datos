function guardarCarrito(productos) {
    localStorage.setItem("carrito_compras", JSON.stringify(productos));
}
function obtenerCarrito() {
    const datos = localStorage.getItem("carrito_compras");
    return datos ? JSON.parse(datos) : [];
}
function cambiarTema(esOscuro) {
    localStorage.setItem("modo_oscuro", esOscuro);
}
function cargarTemaActual() {
    return localStorage.getItem("modo_oscuro") === "true";
}
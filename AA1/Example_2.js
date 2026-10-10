function iniciarSesion(tokenAcceso) {
    localStorage.setItem("user_token", tokenAcceso);
}
function comprobarSesionActiva() {
    return localStorage.getItem("user_token") !== null;
}
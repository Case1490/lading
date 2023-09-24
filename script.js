document.getElementById('icon_menu').addEventListener('click', mostrar_menu);

function mostrar_menu() {
    document.querySelector('.menu').classList.toggle("mostrar-menu")
}

window.scroll = function () {
    var posicion = document.documentElement.screenY || document.documentElement.scrollTop;
    var element1 = document.getElementById("icon_heart");
    var element2 = document.getElementById("icon_fire");    
    element1.style.bottom = posicion * 0.1 + "px";
    element2.style.top = posicion * 0.1 + "px";
}
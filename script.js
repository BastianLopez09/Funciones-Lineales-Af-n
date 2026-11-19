
function generarFuncion() {

    // Generar números aleatorios
    let b = Math.floor(Math.random() * 21) - 10;
    let c = Math.floor(Math.random() * 21) - 10;

    // Mostrar números
    document.getElementById("b").innerHTML = b;
    document.getElementById("c").innerHTML = c;

    // Mostrar fórmula
    document.getElementById("formula").innerHTML =
        "f(x) = " + b + "x + (" + c + ")";

    // Seleccionar cajas
    let lineal = document.getElementById("cajaLineal");
    let afin = document.getElementById("cajaAfin");

    // Clasificar función
    if (c == 0) {

        document.getElementById("resultado").innerHTML =
            "FUNCIÓN LINEAL";

        lineal.classList.remove("inactiva");
        afin.classList.add("inactiva");

    } else {

        document.getElementById("resultado").innerHTML =
            "FUNCIÓN AFÍN";

        afin.classList.remove("inactiva");
        lineal.classList.add("inactiva");

    }
}

// Generar función al abrir la página
generarFuncion();

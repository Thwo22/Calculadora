function insert(num) {
    let numero = document.getElementById(`res`).innerHTML;
    document.getElementById(`res`).innerHTML = numero + num
}

function clean() {
    document.getElementById(`res`).innerHTML = ``
}

function back() {
    let resultado = document.getElementById(`res`).innerHTML;
    document.getElementById(`res`).innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {
    let resultado = document.getElementById(`res`).innerHTML;
    if (resultado) {
        document.getElementById(`res`).innerHTML = eval(resultado);
    } else {
        alert (`nada para calcular`)
        return;
    }
}
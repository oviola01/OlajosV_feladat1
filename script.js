window.addEventListener("load", init)

const kutyaLista=["foxterrier","kuvasz","puli","agár","újfullandi","keverék"]

function init() {
    const ARTIC = document.querySelector("article");
    ARTIC.innerHTML += "<button>Kutya</button>";
    const GOMB = document.querySelector("button");
    GOMB.addEventListener("click", function() {kattintas(ARTIC)});
}

function kattintas(hova) {
    hova.innerHTML += `<p>${kutyaLista[2]}</p>`;
} 
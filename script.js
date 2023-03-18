window.addEventListener("load", init)

const kutyaLista=["foxterrier","kuvasz","puli","agár","újfullandi","keverék"]

function init() {
    const ARTIC = document.querySelector("article");

    //gombra kattintva kiírja a 3. kutya nevét
    /*ARTIC.innerHTML += "<button>Kutya</button>";
    const GOMB = document.querySelector("button");
    GOMB.addEventListener("click", function() {kattintas(ARTIC)}); */

    //kiírjuk a kutyafajtákat divekbe, azon belül p tagekbe
    ARTIC.innerHTML += osszeallit();
    /*azért nem a metódusba teszembe bele, mert így csak egyszer nyúl hozzá, míg ha a metódusban lenne,
    akkor annyiszor, ahány elemű a lista - NE ÍGY!!!*/
    /*másik verzió:
    let txt = osszeallit(); - itt változóként mentem, lehet ugyanaz a neve, mert a let a metóduson kívül nem látszik
    ARTIC.innerHTML += txt;
    */
    //itt helyezzük bele az article elembe
}

function osszeallit() {
    //összeállítjuk a szöveges tartalmat
    let txt = "";
    for (let index = 0; index < kutyaLista.length; index++) {
        txt += `<div><p>${kutyaLista[index]}</p></div>`;
    };
    return txt;
}

/*
function kattintas(hova) {
    hova.innerHTML += `<p>${kutyaLista[2]}</p>`;
} 
*/
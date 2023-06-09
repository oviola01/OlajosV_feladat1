window.addEventListener("load", init)

const kutyaLista=[
    {nev: "Bobó", kor: 12, fajta:"foxterrier"},
    {nev: "Mura", kor: 4, fajta:"kuvasz"},
    {nev: "Bodri", kor: 13, fajta:"puli"},
    {nev: "Mr. Jack", kor: 15, fajta:"agár"},
    {nev: "Minike", kor: 8, fajta:"újfullandi"},
    {nev: "Kolbász", kor: 12, fajta:"keverék"}
]

function init() {
    const ARTIC = document.querySelector("article");

    //gombra kattintva kiírja a 3. kutya nevét
    /*ARTIC.innerHTML += "<button>Kutya</button>";
    const GOMB = document.querySelector("button");
    GOMB.addEventListener("click", function() {kattintas(ARTIC)}); */

    ARTIC.innerHTML += osszeallit();
    /*azért nem a metódusba teszembe bele, mert így csak egyszer nyúl hozzá, míg ha a metódusban lenne,
    akkor annyiszor, ahány elemű a lista - NE ÍGY!!!*/
    /*másik verzió:
    let txt = osszeallit(); - itt változóként mentem, lehet ugyanaz a neve, mert a let a metóduson kívül nem látszik
    ARTIC.innerHTML += txt;
    */
    //itt helyezzük bele az article elembe

    /* így is hozzáadhatok gombokat
    const DIVEK = document.querySelectorALL("div");
    for (let index = 0; index < kutyaLista.length; index++) {
        DIVEK[index].innerHTML += "<button>Törlés</button>";
    } */

    /*ez még nem jó!
    const GOMBOK = document.querySelectorAll("button");
    GOMBOK.addEventListener("click", function() {delete DIVEK[gombindexe]});
    másik ötlet: a lista indexedik elemét törlöm, így nem kell megfogni a diveket
    */

    //táblázatba kutyaírás - HF!!!!!!!!!!!!!!!!!!!!!!!!
    ARTIC.innerHTML += tablazatbaIR();

    //szorgalmi: új kutya hozzáadásához egy űrlap
}

function osszeallit() {
    //összeállítjuk a szöveges tartalmat
    let txt = "";
    //kiírjuk a kutyák adatait divekbe, azon belül p tagekbe    
    for (let index = 0; index < kutyaLista.length; index++) {
        txt += `<div>` /*nyitás*/
        //for in ciklussal megyek végig
        for (const key in kutyaLista[index]) {
             txt += `<p>${kutyaLista[index][key]}</p>`
        }
        txt += `<button>Törlés</button></div>`; /*gombot itt adom hozzá, majd zárás*/
    }

    /*kiírjuk a kutyákat divekbe, azon belül p tagekbe
    for (let index = 0; index < kutyaLista.length; index++) {
        txt += `<div><p>${kutyaLista[index]}</p></div>`;
    };
    */
    return txt;
    
}

function tablazatbaIR() {
    let txt = ""
    txt += `<table>`
    for (let index = 0; index < kutyaLista.length; index++) {
        txt += `<tr>`
        for (const key in kutyaLista[index]) {
             txt += `<td>${kutyaLista[index][key]}</td>`
        }
        txt += `</tr>`
    }
    txt += `/<table>`
}

function kattintas(hova) {
    hova.innerHTML += `<p>${kutyaLista[2]}</p>`;
} 

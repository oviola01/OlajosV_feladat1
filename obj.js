window.addEventListener("load", init)
const KUTYAK = [
    {   nev: "Dézi",
        fajta: "keverék",
        lab: 4,
        marmagassag: 52,
        nem: "szuka",
        kor: 13
    },
    {    nev: "Kira",
        fajta: "yorkshire-terrier",
        lab: 4,
        marmagassag: 20,
        nem: "szuka",
        kor: 13
    }
]

function init() {
    for (const kulcs in KUTYAK[1]) {
        console.log(kulcs,KUTYAK[1][kulcs]);
    }
    
    /*
    const DEZI = {
        nev: "Dézi",
        fajta: "keverék",
        lab: 4,
        marmagassag: 52,
        nem: "szuka",
        kor: 13
    }

    const KIRA = {
        nev: "Kira",
        fajta: "yorkshire-terrier",
        lab: 4,
        marmagassag: 20,
        nem: "szuka",
        kor: 13
    }


    console.log(DEZI);
    console.log(KIRA);
    console.log(DEZI.nev);
    DEZI.kor = 14; ezzel módosítom a meglévő elemet
    console.log(DEZI.kor);
    DEZI.oltas("van"); ezzel adom hozzá az új elemet
    delete KIRA.lab; ezzel tudok törölni elemet

    for (const kulcs in KIRA) {
        console.log(kulcs,KIRA[kulcs]);
    }
    */
}
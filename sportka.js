// SPORTKA


let vyherniCisla = document.querySelector('#vyherni-cisla');


//tlacitko start
function start() {
    let osudi = [];
    let tazenaCisla = [];
    vyherniCisla.innerHTML = ""; // zajistí, že se předchozí tažená čísla vymažou

    document.querySelector('#losuj');
    // generovani osudi
    for (let i = 1; i <= 49; i = i + 1) {
        osudi.push(i);
    }

    // z osudi vyberu 7 nahodnych cisel
    for (let i = 0; i < 7; i++) {
        let vyherniIndex = Math.floor(Math.random() * osudi.length);
        let vyherniCislo = osudi[vyherniIndex];

        tazenaCisla.push(vyherniCislo);
        osudi.splice(vyherniIndex, 1);
    }

    // vypis do HTML
    for (let j = 0; j < tazenaCisla.length; j++) {
        setInterval(function () {
            vyherniCisla.innerHTML += '<span class="cislo">' + tazenaCisla[j] + '</span>';
        }, 1000)

    }
}
// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di 
// azzurro ed emetto un messaggio in console con il numero della 
// cella cliccata.

const griglia = document.getElementById("grid");
const button = document.getElementById("btn");
const difficoltà = document.getElementById("sct");
const difficoltaIniziale = difficoltà.value;




button.addEventListener("click", function () {
    griglia.classList.remove("d-none");

    const difficoltaSelezionata = difficoltà.value;

    creaGriglia(difficoltaSelezionata);
});

function creaGriglia(difficolta) {
    
    griglia.innerHTML = "";

    if (difficolta === "easy") {
        for (let i = 0; i < 100; i++) {
            let box = document.createElement("div");
            box.classList.add("box");
            griglia.append(box);
            box.innerHTML = i + 1;
            box.addEventListener("click", function () {
                this.classList.toggle("active");
                console.log(this);
            });
        }
    } else if (difficolta === "medium") {
        for (let i = 0; i < 81; i++) {
            let box = document.createElement("div");
            box.classList.add("box2");
            griglia.append(box);
            box.innerHTML = i + 1;
            box.addEventListener("click", function () {
                this.classList.toggle("active");
                console.log(this);
            });
        }
    }
    else if (difficolta === "hard") {
        for (let i = 0; i < 49; i++) {
            let box = document.createElement("div");
            box.classList.add("box3");
            griglia.append(box);
            box.innerHTML = i + 1;
            box.addEventListener("click", function () {
                this.classList.toggle("active");
                console.log(this);
            });
        }
    }
}








//referanser til HTML-elementer

let velgHotell = document.querySelector(".velgHotell");
let valgtHotell = document.querySelector("#valgtHotell");
let table = document.querySelector("#table");

//klassedefinisjoner
class Hotell{
    constructor(navn, tlf, epost, bilde, temperaturer){
        this.navn = navn;
        this.tlf = tlf;
        this.epost = epost;
        this.bilde = bilde;
        this.temperaturer = temperaturer
    }
    //get metode, når vi skal ente ut verdier fra objektet vårt
    gjSnitt(){
        let total = 0;
        for (let tall of this.temperaturer){
            total += tall
        }
        return total/this.temperaturer.length;
    }
    maks(){
        let maks = -Infinity;
        for (let tall of this.temperaturer){
            if (tall > maks){
                maks = tall
            }
        }
        return maks
    }
    mini(){
        let min = 0
    }
    vis(){
        let html = `
        <div>
            <h2> ${this.navn}</h2>
            <img src="${this.bilde}">
            <p>tlf: ${this.tlf} </p>
            <p>epost: ${this.epost}</p>
            <p> temperatur de 7 siste dagene: ${this.temperaturer.join(", ")}</p> 
            <p>gjennomsnitt temperatur: ${this.gjSnitt().toFixed(1)}</p>
            <p>maks temperatur: ${this.maks().toFixed(1)}</p>
        </div>

        `;
        valgtHotell.innerHTML = html
    }
}


//globale variabler
let spidsbergseter = new Hotell("Spidsbergseter", "61 28 40 00", "post@sgh.no", "spidsbergseter.jpg", [-5,-3,-2,0,2,3]);
let rondablikk = new Hotell("Rondablikk", "61 29 49 40", "post@rondablikk.no", "rondablikk.jpg", [-8,-5,-5,-3,-3,-3]);
let rondaneSPA = new Hotell ("Rondane SPA", "61 20 90 90", "post@rondane.no", "rondaneSPA.jpg", [-10,-8,-8,-5,-5,-4]);
let brekkeseter = new Hotell("Brekkeseter", "61 23 37 11", "post@brekkeseter.no", "brekkeseter.jpg", [-9,-7,-5,-5,-2,0]);
let hjerkinn = new Hotell("Hjerkinn", "61 21 51 00", "fjellstua@hjerkinn.no", "hjerkinn.jpg", [-12,-10,-9,-9,-7,-7]);

let hoteller = [spidsbergseter, rondablikk, rondaneSPA, brekkeseter, hjerkinn];




velgHotell.onchange = visHotell; //husk IKKE ha parentes etter onchange!

function visHotell(){
    for (let hotell of hoteller) {
        if (velgHotell.value === hotell.navn){
            hotell.vis();
        }
    }
}





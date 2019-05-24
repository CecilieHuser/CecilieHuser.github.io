// Referanser til HTML-elementer
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");


//instansierer av denne klassen, opretter et objekt av denne klassen, må stå over funkjsoner
class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r
    }


    tegn() {
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 50, 0, 2 * Math.PI);
        ctx.stroke();
    }

    beveg(){
        this.x = this.x + Math.random()*10 - 5;
        this.y = this.y + Math.random()*10 - 5;
    }

}


// Globale variabler

let bobler = [];

for (let i = 0; i < 1000; i++){
    bobler.push(new Bubble(200,300,40));
}

// Oppstart
gameloop();

//Funksjonsdefinisjoner
function gameloop(){
    tegnBakgrunn();
    for (let boble of bobler){
        boble.beveg();
        boble.tegn();
    }
    requestAnimationFrame(gameloop);
}

function tegnBakgrunn(){
    ctx.fillStyle = "red";
    ctx.fillRect(0,0,canvas.width,canvas.height); // Tegner bakgrunnsfarge på canvaset
}

function tegnBubble(){
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(bubble.x, bubble.y, 50, 0, 2 * Math.PI);
    ctx.stroke()
}

function bevegBubble(){
    bubble.x = bubble.x + Math.random()*10 - 5;
    bubble.y = bubble.y + Math.random()*10 - 5;
}

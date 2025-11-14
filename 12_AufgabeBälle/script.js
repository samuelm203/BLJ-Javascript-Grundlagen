window.addEventListener("load", initialize);

let counter = 0;

function initialize(){
    document.getElementById("ball1").addEventListener("click", shoot)
    document.getElementById("ball2").addEventListener("click", shoot)
    document.getElementById("ball3").addEventListener("click", shoot)
    document.getElementById("ball4").addEventListener("click", shoot)
}

function shoot(e){

    let imageSrc = e.target.src;

    if (imageSrc.indexOf("ball.png") > -1) {
        e.target.src = "kreuz.png";
    }

    const body = document.getElementsByTagName("body")[0];

    if (imageSrc.indexOf("kreuz.png") > -1) {
        body.removeChild(e.target);
        counter++;
        if (counter === 4) {
            let p = document.createElement("p");
            p.innerHTML = "<strong>GAME OVER</strong>";
            p.setAttribute("style", "color:red;");
            body.appendChild(p);
        }
    }
}


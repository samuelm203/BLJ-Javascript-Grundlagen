function initialize() {
    const schalter = ["antrieb", "holodeck", "hitzeschild", "transporter"];
    for (let i = 0; i < schalter.length; i++) {
        document.getElementById("schalter-" + schalter[i]).addEventListener("mouseover", hoverAn);
        document.getElementById("schalter-" + schalter[i]).addEventListener("mouseout", hoverAb);
    }
}
window.addEventListener("load", initialize);

function hoverAn(e) {
    e.target.parentElement.classList.add("hover");
}

function hoverAb(e) {
    e.target.parentElement.classList.remove("hover");
}

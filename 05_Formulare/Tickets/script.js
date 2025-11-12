window.addEventListener("load", initialize);

function initialize() {
    alert('Guten Tag und viel Spass beim Einkaufen');

    const form = document.getElementById("ticket");

    document.form.addEventListener("submit", validateForm);
}

function validateForm(e) {
    e.preventDefault();

    const form = document.getElementById("ticket");
    const emailAddr = form.elements.email.value;
    const ticketCount = form.elements.tickets.value;

    if (emailAddr === "") {
        alert("Bitte geben Sie eine E-Mail Adresse ein");
        return;
    }

    if (!isValidEmail(emailAddr)) {
        alert("Bitte geben Sie eine gültige E-Mail Adresse ein");
        return;
    }

    if (ticketCount === "0") {
        alert("Bitte wählen Sie aus, wieviele Tickets Sie bestellen möchten.");
        return;
    }

    form.submit();
}

function isValidEmail(emailAddr) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddr)) {
        return (true)
    }
    return (false)
}

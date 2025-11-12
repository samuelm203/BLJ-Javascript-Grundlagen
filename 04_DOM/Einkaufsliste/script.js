const btn = document.getElementById('add-btn');
btn.addEventListener('click', addToList)

window.addEventListener("load", initialize);

function initialize() {
   alert('Guten Tag und viel Spass mit der Einkaufsliste :-)');
}

function addToList() {
    const li = document.createElement("li");
    const ul = document.querySelector("ul");
    const input = document.getElementById("add-input");

    const value = input.value.trim();
    if (value === "") {
        return;
    }

    li.textContent = value;
    ul.appendChild(li);
    input.value = "";
}

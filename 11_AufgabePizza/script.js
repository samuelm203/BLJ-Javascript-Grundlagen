window.addEventListener("load", initialize);

function initialize() {
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("remove").addEventListener("click", remove);
}

function add() {
    var ingredients = document.getElementById("ingredients");
    let index = ingredients.selectedIndex;
    let selectedOption = ingredients.getElementsByTagName("option")[index];
    
    if (ingredients.selectedIndex > -1 ) {
        document.getElementById("choice").appendChild(selectedOption);
    }
}

function remove() {
    var choice = document.getElementById("choice");
    let index = ingredients.selectedIndex;
    let selectedOption = ingredients.getElementsByTagName("option")[index];
    
    if (choice.selectedIndex > -1 ) {
        document.getElementById("ingredients").appendChild(choice.getElementsByTagName("option")[choice.selectedIndex]);
    }
}
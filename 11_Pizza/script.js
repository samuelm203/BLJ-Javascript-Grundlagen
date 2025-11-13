window.addEventListener("load", initialize);

function initialize() {
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("remove").addEventListener("click", remove);
}

function add() {
    var ingredients = document.getElementById("ingredients");
    
    if (ingredients.selectedIndex > -1 ) {
        //todo: ausgewählte Zutat von der linken in die rechte Listbox verschieben 
    }
}

function remove() {
    var choice = document.getElementById("choice");
    
    if (choice.selectedIndex > -1 ) {
        //todo: ausgewählte Zutat von der rechten in die linke Listbox verschieben
    }
}
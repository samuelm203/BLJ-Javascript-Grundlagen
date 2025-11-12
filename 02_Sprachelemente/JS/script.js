// Aufgabe 1
let myNumber = 5;
console.log(myNumber);

//Aufgabe 3
let n1 = "3a";
let n2 = "3";
if (n1 != 3) {
    n1 = Number.NaN;
}
if (n2 != 3) {
    n2 = Number.NaN;
}
alert(n1);   //NaN
alert(n2);   //3

//Aufgabe 4
const n = Math.PI;
document.write(n.toFixed(2));

//Aufgabe 6
const a = [1, 2, 3, 14];
a[5] = 2 * a[2]; // a[5] = 6
a.splice(3, 1, 4); // 14 wird durch 4 ersetzt
let b = a[0]; // b = 1
let c = a.length; // c =  6
let d = a[3]; // d = 4
let e = a[6]; // e = undefined
let f = a[2] * a[4]; // f = NaN

//Aufgabe 6 nr2
const monate = ["Januar", "März", "April", "Mai",
    "JavaScript", "JS", "Juni", "Juli", "August", "September"];

monate.splice(1, 0, "Februar");
monate.splice(5, 2);
monate.push("Oktober", "November","Dezember");

for (let i = 0; i < monate.length; i++) {
    document.write(monate[i] + "<br>");
}

// Aufgabe 7
if (typeof addieren === "function") {
    let summe = addieren(5, 3);
    document.write(summe);
}
else {
    document.write("Funktion existiert nicht!");
}

function addieren(a, b) {
    return a + b;
}


//Aufgabe 9
const contact = {
    Firstname: "Samuel",
    LastName: "Ming",
    Mobile: "0176/1234567"
};
console.log(JSON.stringify(contact));








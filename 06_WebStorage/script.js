let isTimeRunning = false;
let startTime;
let interval;

let data = {
    logEntries: []
};

window.addEventListener("load", initialize);

function initialize() {
    document.getElementById("start-btn").addEventListener("click", startStopClicked);

    // Protokoll aus Web Storage auslesen (wenn vorhanden)
    if (localStorage.getItem("time-log")) {
        data = JSON.parse(localStorage.getItem("time-log"));
        // Protokoll im Log (GUI) anzeigen
        for (let i = 0; i < data.logEntries.length; i++) {
            addToLog(
                new Date(data.logEntries[i].from),
                new Date(data.logEntries[i].to),
                data.logEntries[i].task
            );
        }
    }
}

function startStopClicked() {
    document.getElementById("start-btn").classList.toggle("stop");
    document.getElementById("start-btn").classList.toggle("start");

    if (!isTimeRunning) {
        // Startzeit merken
        startTime = new Date();
        // alle 1000 Millisekunden GUI updaten
        interval = setInterval(updateTimeCounter, 1000);
    } else {
        // Timer stoppen
        clearInterval(interval);
        interval = null;
        document.getElementById("time-counter").innerHTML = formatElapsedTime(0);

        // Log-Eintrag erstellen
        const logEntry = {
            from: startTime,
            to: new Date(),
            task: document.getElementById("tasks-ddn").value
        };
        data.logEntries.push(logEntry);
        localStorage.setItem("time-log", JSON.stringify(data));

        // GUI aktualisieren
        addToLog(logEntry.from, logEntry.to, logEntry.task);
    }

    isTimeRunning = !isTimeRunning;
    document.getElementById("tasks-ddn").disabled = isTimeRunning;
}

function addToLog(from, to, task) {
    const tr = document.createElement("tr");
    document.getElementById("log-tbl").appendChild(tr);

    // Datum
    let td = document.createElement("td");
    td.innerHTML =
        (from.getDate() + "").padStart(2, "0") + "." +
        ((from.getMonth() + 1) + "").padStart(2, "0") + "." +
        from.getFullYear();
    tr.appendChild(td);

    // Zeit von-bis
    td = document.createElement("td");
    td.innerHTML =
        (from.getHours() + "").padStart(2, "0") + ":" +
        (from.getMinutes() + "").padStart(2, "0") + ":" +
        (from.getSeconds() + "").padStart(2, "0") +
        " bis " +
        (to.getHours() + "").padStart(2, "0") + ":" +
        (to.getMinutes() + "").padStart(2, "0") + ":" +
        (to.getSeconds() + "").padStart(2, "0");
    tr.appendChild(td);

    // Dauer
    td = document.createElement("td");
    td.innerHTML = formatElapsedTime(to - from);
    tr.appendChild(td);

    // Aufgabe
    td = document.createElement("td");
    td.innerHTML = task;
    tr.appendChild(td);
}

function updateTimeCounter() {
    document.getElementById("time-counter").innerHTML =
        formatElapsedTime(new Date() - startTime);
}

function formatElapsedTime(elapsedTime) {
    let seconds = Math.floor(elapsedTime / 1000) % 60;
    let minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
    let hours = Math.floor(elapsedTime / 1000 / 60 / 60);

    return ("" + hours).padStart(2, "0") + ":" +
        ("" + minutes).padStart(2, "0") + ":" +
        ("" + seconds).padStart(2, "0");
}

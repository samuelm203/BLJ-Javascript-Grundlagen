initialize();

function initialize() {

    const btn = document.getElementById("btnadd");
    const input = document.getElementById("inputNote");
    btn.addEventListener("click", addNote);

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            addNote();
        }
    });


    loadNotes();

}

function addNote() {
    const input = document.getElementById("inputNote");
    const text = input.value.trim();
    if (!text) return;

    const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    const header = document.createElement("header");
    const timestamp = document.createElement("span");
    timestamp.textContent = new Date().toLocaleString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const trashBtn = document.createElement("span");
    trashBtn.className = "trash";
    trashBtn.textContent = "X";
    trashBtn.addEventListener("click", () => {
        noteDiv.remove();
        deleteNoteFromLocalStorage(text, timestamp.textContent);
    });

    header.appendChild(timestamp);
    header.appendChild(trashBtn);

    const noteText = document.createElement("p");
    noteText.textContent = text;

    let timestamps = JSON.parse(localStorage.getItem("timestamp")) || [];
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText.textContent);
    timestamps.push(timestamp.textContent);
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("timestamp", JSON.stringify(timestamps));

    noteDiv.appendChild(header);
    noteDiv.appendChild(noteText);

    const notesGrid = document.getElementById("notesGrid");
    notesGrid.appendChild(noteDiv);

    input.value = "";
    input.focus();
}

function deleteNoteFromLocalStorage(text, timestamp) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    let timestamps = JSON.parse(localStorage.getItem("timestamp")) || [];

    const index = notes.findIndex((n, i) => n === text && timestamps[i] === timestamp);
    if (index > -1) {
        notes.splice(index, 1);
        timestamps.splice(index, 1);
    }

    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("timestamp", JSON.stringify(timestamps));
}

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const timestamps = JSON.parse(localStorage.getItem("timestamp")) || [];

    for (let i = 0; i < notes.length; i++) {
        const noteDiv = document.createElement("div");
        noteDiv.className = "note";

        const header = document.createElement("header");
        const timestampSpan = document.createElement("span");
        timestampSpan.textContent = timestamps[i];

        const trashBtn = document.createElement("span");
        trashBtn.className = "trash";
        trashBtn.textContent = "X";
        trashBtn.addEventListener("click", () => {
            noteDiv.remove();
            deleteNoteFromLocalStorage(notes[i], timestamps[i]);
        });

        header.appendChild(timestampSpan);
        header.appendChild(trashBtn);

        const noteText = document.createElement("p");
        noteText.textContent = notes[i];

        noteDiv.appendChild(header);
        noteDiv.appendChild(noteText);

        document.getElementById("notesGrid").appendChild(noteDiv);
    }
}
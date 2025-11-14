initialize()

function initialize(){
    document.getElementById("btn-primary").addEventListener("click", getStation);

    window.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            getStation();
        }
    });
}

function getStation(){
    let stationFromUser = document.getElementById("station").value;
    if (stationFromUser === "") {
        alert("Bitte geben Sie einen Stationsnamen ein");
        return;
    }

    document.getElementById("station-name").innerHTML = stationFromUser;

    document.getElementById("station").value = "";

    let url = "https://transport.opendata.ch/v1/stationboard?station=" + stationFromUser +"&limit=20"

    getData(url);
}

async function getData(url) {
    try {
        let response = await fetch(url, { method: "GET" });
        let data = await response.json();

        buildTable(data);

    } catch (error) {
        console.error(error);
    }
}

function buildTable(data) {
    const table = document.getElementById("departure-table");

    table.innerHTML = `
        <tr>
            <th scope="col">Zeit</th>
            <th scope="col">Zug</th>
            <th scope="col">Ziel</th>
            <th scope="col">Gleis</th>
        </tr>
    `;

    data.stationboard.forEach(entry => {
        const tr = document.createElement("tr");

        const tdTime = document.createElement("td");
        tdTime.textContent = entry.stop.departure.substring(11, 16); // HH:MM
        tr.appendChild(tdTime);

        const tdTrain = document.createElement("td");
        tdTrain.textContent = entry.category + " " + entry.number;
        tr.appendChild(tdTrain);

        const tdTo = document.createElement("td");
        tdTo.textContent = entry.to;
        tr.appendChild(tdTo);

        const tdPlatform = document.createElement("td");
        tdPlatform.textContent = entry.stop.platform ?? "-";
        tr.appendChild(tdPlatform);

        table.appendChild(tr);
    });
}





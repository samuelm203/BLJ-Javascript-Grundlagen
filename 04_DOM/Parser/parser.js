let nodeType = 0;
let nodeName = "";
let nodeValue = "";
let textContent = "";

var result = "";

function parseNode(startNode) {

    for (var i = 0; i < startNode.childNodes.length; i++) {

        var nd =  startNode.childNodes[i];

        result += "<tr>";
        result += "<td>" + nd.nodeType + "</td>";
        result += "<td>" + (nd.nodeName != null ? nd.nodeName : "") + "</td>";
        result += "<td>" + (nd.nodeValue != null ? nd.nodeValue.replace("\n", "\n")  : "") + "</td>";
        result += "<td>" + (nd.textContent != null ? nd.textContent.replace("\n", "\n") : "")  + "</td>";
        result += "</tr>";
        // rekursiver Aufruf dieser Funktion
        parseNode(nd)
    }

    return "<table><tr><th>nodeType</th><th>nodeName</th><th>nodeValue</th><th>textContent</th></tr>" + result + "</table>";
}

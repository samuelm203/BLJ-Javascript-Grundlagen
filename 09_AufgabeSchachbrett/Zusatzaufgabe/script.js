let switched = false;

window.onload = function () {
    zeichneSchachbrett();
    setInterval(() => {
        switched = !switched;
        zeichneSchachbrett();
    }, 500);
};

function zeichneSchachbrett() {
    let result = '';

    for (let row = 0; row < 8; row++) {
        for (let column = 0; column < 8; column++) {

            let isWhite = (row + column) % 2 === 0;

            if (switched) {
                isWhite = !isWhite;
            }

            let color;
            if (isWhite) {
                color = 'white';
            } else {
                color = 'black';
            }

            result += `<div class="${color}"></div>`;
        }
    }

    document.body.innerHTML = result;
}

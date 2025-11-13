zeichneSchachbrett();

function zeichneSchachbrett() {
    let result = '';

    for (let row = 0; row < 8; row++) {
        let color = '';

        for (let column = 0; column < 8; column++) {
            if ((row + column) % 2 === 0) {
                color = 'white';
            } else {
                color = 'black';
            }
            result += `<div class="${color}"></div>`;
        }
    }

    document.getElementsByTagName('body')[0].innerHTML = result;
}



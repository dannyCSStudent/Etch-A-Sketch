function createGrid(size) {
    for (let i = 0; i < (size ** 2); i++) {
        const container = document.querySelector('#container');
        const content = document.createElement('div');
        content.classList.add('content');
        content.style.border = "1px solid black";
        content.style.flexBasis = `${100 / size}%`;
        content.textContent = i;
        container.appendChild(content);
    }
}




// ----------------------Demarc----------------------------------

let s = 100;
// createGrid(s);

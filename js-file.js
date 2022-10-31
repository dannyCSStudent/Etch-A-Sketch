const container = document.querySelector('#second-column');
const gridLenght = 16;

// creates the divs in a flexbox container
// after calculating the size of the div's to
// fit perfectly, will build divs and wrap around.
function createGrid(size) {
    for (let i = 0; i < (size ** 2); i++) {
        
        const content = document.createElement('div');
        content.classList.add('content');
        content.style.flexBasis = `${100 / size}%`;
        content.style.height = `${100 / size}%`;
        container.appendChild(content);
    }
}

function clear(){
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}



createGrid(gridLenght);
// ----------------------Buttons---------------------------------

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switch (button.id) {
            case "clear":
                clear();
                createGrid(gridLenght);
                
                break
            case "black-ink":
                break
            case "random-ink":
                break
            case "rainbow-ink":
                break
            case "erase":
                break
                                                             
        }
    })
});

// ----------------mouseover listener-------------------------------------

container.addEventListener("mouseover", function(e) {
    if (e.target.matches(".content")) {
        e.target.style.backgroundColor = "rgb(0, 0, 0)";
    }
})
































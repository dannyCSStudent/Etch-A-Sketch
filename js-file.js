const container = document.querySelector('#second-column');
const initialLenght = document.getElementById("slider").value;

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

function listener() {
    container.addEventListener("mouseover", function(e) {
        if (e.target.matches(".content")) {
            e.target.style.backgroundColor = "rgb(0, 0, 0)";
        }
    })
}


createGrid(initialLenght);
// ----------------------Buttons---------------------------------

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switch (button.id) {
            case "clear":
                clear();
                const gridLenght = document.getElementById("slider").value;
                createGrid(gridLenght);
                listener();
                break
            case "black-ink":
                listener();
                break
            case "random-ink":
                let r = Math.random() * 255;
                let g = Math.random() * 255;
                let b = Math.random() * 255;
                container.addEventListener("mouseover", function(e) {
                    if (e.target.matches(".content")) {
                    
                        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                    }
                })
                break
            case "rainbow-ink":
                const rainbowColorList = ["red"
                , "orange"
                , "green"
                , "blue"
                , "indigo"
                , "violet"];

                container.addEventListener("mouseover", function(e) {
                    if (e.target.matches(".content")) {
                        e.target.style.backgroundColor =
                        rainbowColorList[Math.floor(Math.random() *
                        rainbowColorList.length)];
                    }
                })          
                break
            case "erase":
                container.addEventListener("mouseover", function(e) {
                    if (e.target.matches(".content")) {
                        e.target.style.backgroundColor = "white";
                    }
                })
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
































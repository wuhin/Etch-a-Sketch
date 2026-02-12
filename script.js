const grid = document.querySelector("#container")
let size = 16;
 

function randomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`; 
}

function createGrid(size){     
    
    grid.textContent = "";

    for(let i = 0; i < size; i++){
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        
        for(let j = 0; j < size; j++){
            let cell = document.createElement("div");
            cell.classList.add("cell");
            newRow.appendChild(cell);
            cell.addEventListener("mouseenter", function(event) {
                event.target.style.backgroundColor = randomRgb();
            })       
        }
        
        grid.appendChild(newRow);
    }
}

const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", () => {
    size = prompt("Enter a new size less than 100 for the your new sketch! ");
    if(size >= 1 && size <= 100){    
        createGrid(size);
    }
    else{
        return;
    }
    console.log(document.querySelectorAll(".row").length);
    console.log(document.querySelectorAll(".cell").length);
})

createGrid(size);
console.log(document.querySelectorAll(".row").length);
console.log(document.querySelectorAll(".cell").length);

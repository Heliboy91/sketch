//define variables
const gridNumber = document.querySelector("#gridNumber");
gridNumber.value = 5;
let value = parseInt(gridNumber.value);
console.log(value);
const screenSize = document.querySelector("#sketchSize");
const container = document.querySelector("#container");



for(i = 0; i < value ; i++) {
    const div = document.createElement("div");
    div.classList.add("row");
    container.appendChild(div);
    
    
} 
const rows = document.querySelectorAll(".row");
for (i = 0; i < rows.length; i++) {
    for(j= 0; j < value; j++) {
        const div = document.createElement("div");
        div.classList.add("column");
        rows[i].appendChild(div);
    }

}


console.log(container);





//define variables
const gridNumber = document.querySelector("#gridNumber");
//set default grid size
gridNumber.value = 6;
let value = parseInt(gridNumber.value);
//noting change in color value
let currentColor = document.querySelector("#colorPicker").value;


const screenSize = document.querySelector("#sketchSize");
const container = document.querySelector("#container");
let colorPicker = document.querySelector("#colorPicker");

colorPicker.addEventListener("change", function(e){
         let colorValue = colorPicker.value;
         currentColor =colorValue;
         console.log("New color: " + currentColor);
    })




//rendering a "basic" sketch
for(i = 0; i < value ; i++) {
    const div = document.createElement("div");
    div.classList.add("row");
    container.appendChild(div);
    
    
} 
const rows = document.querySelectorAll(".row");
for (i = 0; i < rows.length; i++) {
    for(j= 0; j < value; j++) {
        const div = document.createElement("div");
        div.classList.add("square");
        rows[i].appendChild(div);
    }

}


//changing the grid number with eventlistener;
gridNumber.addEventListener("change", function(e){
    container.innerHTML="";
    let value = gridNumber.value;
    for(i = 0; i < value ; i++) {
        const div = document.createElement("div");
        div.classList.add("row");
        container.appendChild(div);  
    } 

    const rows = document.querySelectorAll(".row");
    for (i = 0; i < rows.length; i++) {
    for(j= 0; j < value; j++) {
        const div = document.createElement("div");
        div.classList.add("square");
        rows[i].appendChild(div);
    }

    }

    const squares = document.querySelectorAll(".square");

    squares.forEach(square => square.addEventListener("mouseenter", function(e){
    square.style.backgroundColor = currentColor;
    }))


})

















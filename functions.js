//define variables
const gridNumber = document.querySelector("#gridNumber");
let currentColor = document.querySelector("#colorPicker").value;
const screenSize = document.querySelector("#sketchSize");
const container = document.querySelector("#container");
let colorPicker = document.querySelector("#colorPicker");

//set default grid size
gridNumber.value = 16;

let value = parseInt(gridNumber.value);


//noting change in color value
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
        div.id = `${i}${j}`;
        rows[i].appendChild(div);
    }

}


const grids = document.querySelectorAll(".square");

grids.forEach(square => square.addEventListener("mouseenter", function(e){
square.style.backgroundColor = currentColor;
square.classList.add("opacity");
}));




//changing the grid number with eventlistener;
gridNumber.addEventListener("change", function(e){
    container.innerHTML="";
    let value = gridNumber.value;
    if(value > 100) {
        alert ("100 is the limit! Such as life...");
        value = 100;
    }
   
    
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
        div.id = `${i}${j}`;
        rows[i].appendChild(div);
    }

    }

    const squares = document.querySelectorAll(".square");

    squares.forEach(square => square.addEventListener("mouseenter", function(e){
    
    square.style.backgroundColor = currentColor;
    square.classList.add("opacity");
    }))


})


//changing size of the the container
screenSize.addEventListener("change", function(){
    const x = screenSize.value;
    switch (x) {
        case "100%":
            container.style.width = "100%";
            container.style.height = "100%";
            break;
        case "50%":
            container.style.width = "50%";
            container.style.height = "50%"; 
            break;  
        case "75%":
            container.style.width = "75%";
            container.style.height = "75%"; 
            break;
    }
})

















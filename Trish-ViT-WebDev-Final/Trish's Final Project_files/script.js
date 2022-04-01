
document.addEventListener("DOMContentLoaded", function(event){
        
    var colorPicker = document.getElementById("colorPicker");
    var rowCount = document.getElementById("rowCount");
    var columnCount = document.getElementById("columnCount");
    var generateCanvasButton = document.getElementById("generateCanvasButton");
    var canvasContainer = document.getElementById("canvasContainer");
    var paintbrushBoolean = false;
    var resetCanvasButton = document.getElementById("resetCanvasButton")

    document.addEventListener("mousedown", function(e){
        paintbrushBoolean = true;
    })

    document.addEventListener("mouseup", function(e){
        paintbrushBoolean = false;
    })

    document.addEventListener("mouseover", function(e){
        if(paintbrushBoolean && e.target.classList[0] === "pixel"){
            e.target.style.backgroundColor = colorPicker.value; 
        }
    })
    
    function generateCanvas(){
        resetCanvas();
        for(let i = 0; i < rowCount.value; i++){

            let row = document.createElement("div");
            row.classList = "row";

            for(let j = 0; j < columnCount.value; j++){
                let column = document.createElement("div");
                column.classList = "pixel"

                row.appendChild(column);
            }
            canvasContainer.appendChild(row)
        }
    }
    generateCanvasButton.addEventListener("click", generateCanvas);
    resetCanvasButton.addEventListener("click", resetCanvas);     
})

function resetCanvas(){
    var canvasContainer = document.getElementById("canvasContainer");

    while (canvasContainer.firstChild) {
        canvasContainer.removeChild(canvasContainer.firstChild);
    }
}

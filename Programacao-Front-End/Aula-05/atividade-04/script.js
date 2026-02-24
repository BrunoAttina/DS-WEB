var div = document.getElementById("quadrado")

document.addEventListener("mousemove", function(event){
    console.log("X:" + event.clientX + " Y:" + event.clientY)
    div.style.marginTop = event.clientY + "px"
    div.style.marginLeft = event.clientX + "px"
});


var div2 = document.getElementById("quadrado2")
var contadorY = 0


document.addEventListener("keydown", function (event){
    if(event.key === "s" || event.key === "S"){
        contadorY ++
        div2.style.marginTop = contadorY + "px"
    }
})
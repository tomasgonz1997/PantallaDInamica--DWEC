window.addEventListener("load", function () {

    const inputForm = "#numPantallas"
    const idContenedor = "#contenedor"
    const idContenedorDatos = "#contenedorDatos"
    const clasePantallas = "pantalla"
    const claseDato = "dato"

    const inputPantallas = document.querySelector(inputForm);
    const form = document.querySelector("form")
    const contenedor = document.querySelector(idContenedor)
    const contenedorDatos = document.querySelector(idContenedorDatos)



    form.addEventListener("submit", function (e) {
        e.preventDefault()
        console.log("mostrar datos" + inputPantallas.value);
        crearPanttallas(inputPantallas.value)
    })

    crearContenedoDatos(5)

    function crearContenedoDatos(datos) {
        contenedorDatos.innerHTML = "";
        for (let i = 0; i < datos; i++) {
            let div = document.createElement("div")
            div.classList.add(claseDato)
            contenedorDatos.appendChild(div)
            div.setAttribute("draggable",true)
            div.innerHTML="<p>Esto es un texto de prueba </p>"
        }
    }

    function crearPanttallas(numPantallas) {
        contenedor.innerHTML = ""
        for (let i = 0; i < numPantallas; i++) {
            let div = document.createElement("div")
            div.classList.add(clasePantallas)
            contenedor.appendChild(div)
        }
    }
    var dragged;

//dragstart
document.addEventListener("dragstart", function( event ) {
    dragged = event.target;
    event.target.style.opacity = .5;
    //console.log("Has comenzado a arrastrar un objeto. [Evento: dragstart]");
});

//drag
// document.addEventListener("drag", function( event ) {
//     //console.log("Estas arrastrando un objeto. [Evento: drag]");
// });    

//dragend
document.addEventListener("dragend", function( event ) {
    event.target.style.opacity = "";
    //console.log("Has terminado de arrastrar un objeto. [Evento: dragend]");
});

//dragover
document.addEventListener("dragover", function( event ) {
    event.preventDefault();
    //console.log("Has arrastrado sobre un destino valido. [Evento: dragover]");
});

//dragenter
document.addEventListener("dragenter", function( event ) {
    if ( event.target.className == "pantalla" ) {
        event.target.style.background = "gray";
    }
    //console.log("Has arrastrado e ingresado sobre un destino valido. [Evento: dragenter]");
});

//dragleave
document.addEventListener("dragleave", function( event ) {
    if ( event.target.className == "pantalla" ) {
        event.target.style.background = "";
    }
    //console.log("Has dejado de arrastrar sobre un destino valido. [Evento: dragleave]");
});

//drop
document.addEventListener("drop", function( event ) {
    event.preventDefault();
    if ( event.target.className == "pantalla" ) {
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
    }       
});
})

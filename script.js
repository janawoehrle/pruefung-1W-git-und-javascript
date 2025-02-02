
// Kommentiere hier (b)
// Wenn ich auf den Start-button drücke, dann führt er die Funktion animationLoop aus.
//const bedeutet, das es für alle SVG Elemente gilt.

const svg = document.querySelector("#svg-field")

let running = false

function start() {
    running = true
    inside = 0
    total = 0
    num = 4* (inside / total)
    window.requestAnimationFrame(animationLoop)
}
function stop() {
    running = false 
    loopCounter = 0
    loopCounter = loopCounter + 1
   
    if (loopCounter < 100) { 
        window.requestAnimationFrame(animationLoop)
    }
}


function animationLoop() {
    
    // Kommentiere hier (c)    
    // Bedeutet, dass alles mit dem Attribut dot eine bestimmte funktion gilt. Dies wird gekennzeichnet mit einem namespace.
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Kommentiere hier (d)
    // Der Punkt bewegt sich nicht definiert nach oben und nach unten. Er ist schwarz gefüllt.
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // Kommentiere hier (e)
    //Die obrigen Bedingungen werden im SVG angehängt.

    svg.appendChild(dot)

    // Kommentiere hier (f)
    // Wenn es eine bestimmte Geschwindigkeit hat, dann dreht sich der Punkt im Kreis.
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}
function update(){
animationLoop = animationLoop + 100 
{let.setAttribute  ("fill", "red")
Math.sqrt(x*x+y*y)<= 1 }
let.setAttribute("fill", "black")
}
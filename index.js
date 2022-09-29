let btn = document.getElementById("btn")
let nav = document.getElementById("nav")

btn.addEventListener("click", menu)


function menu() {

    btn.classList.toggle("active")
    nav.classList.toggle("active")
    
}

// Hover para produtos
let span = document.querySelectorAll(".span")
let resumo = document.querySelectorAll('.resumo')

span.forEach( (x,y) => x.addEventListener("click", () => mouse(y)))
console.log(span, resumo)

function mouse(y){
    resumo[y].classList.toggle("active")
    span[y].classList.toggle("active")
}

// Menu Mobile
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

// Componente Login
let logar = document.getElementById("logar")
logar.addEventListener("click", (x) => addComponente(x))



function addComponente(x){
    console.log(x)
    login.classList.add("active")

}

let login = document.getElementById("login")
login.addEventListener("click", (y) => removeComponente(y))

let btnX = document.getElementById("btn-x")
btnX.addEventListener("click", (y) => removeComponente(y))

function removeComponente(y){
    
    if(y.target.id == "btn-x" || y.target.id == "login" ) {
        login.classList.remove("active")
    }
    
}

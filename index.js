
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

// Componente Login / Cadastrar
let logar = document.getElementById("logar")
logar.addEventListener("click", (x) => addComponente(x))

let cadastrar = document.getElementById("cadastrar")
cadastrar.addEventListener("click", (x) => addComponente(x))

let login = document.getElementById("login")
let cadas = document.getElementById("cadas")




function addComponente(x){
    console.log(x.target)
    

    if(x.target.id == "logar"){
        login.classList.add("active")

    } else {
        cadas.classList.add("active")

    }

}



login.addEventListener("click", (y) => removeComponente(y))

let btnX = document.getElementById("btn-x")
btnX.addEventListener("click", (y) => removeComponente(y))

cadas.addEventListener("click", (y) => removeComponente(y))

let btnY = document.getElementById("btn-y")
btnY.addEventListener("click", (y) => removeComponente(y))




function removeComponente(y){
    
    if(y.target.id == "btn-x" || y.target.id == "login") {
        login.classList.remove("active")
    

    } else if( y.target.id == "btn-y" || y.target.id == "cadas" ){
        cadas.classList.remove("active")
    }
    
}


// ========== Retornar Login // Retornar Cadastro ============
function retornarLogin() {

    cadas.classList.remove("active")
    login.classList.add("active")
}


function retornarCadastro() {

    login.classList.remove("active")
    cadas.classList.add("active")
}



// ====== criar usuario ============

function criarUser() {

    let inputs = document.querySelectorAll(".info-conta")
    console.log(inputs)


    cadas.classList.remove("active")
    let newUser = document.getElementById("criarUsuario")
    newUser.classList.add("active")

    // remoção do componente após 1min
    setTimeout( ()=> {
        newUser.classList.remove("active")
    },1000)


}

/*
- animação dos elementos durante a rolagem da pagina
- validação do formulário
- componente de criação de usuario
- validação do formulário
- rodapé
- corossel 

*/
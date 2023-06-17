let materia = window.document.getElementById('materia')
let data_entrega = window.document.getElementById('data')
let conteudo = window.document.getElementById('conteudo')
let botao = window.document.querySelector('button')

let numero_de_tarefas = localStorage.getItem('numero_de_tarefas')
let dado = numero_de_tarefas * 3
let onde_começar = 1

botao.addEventListener('click', salvar)

function salvar(){
    numero_de_tarefas++
    dado = numero_de_tarefas * 4

    localStorage.setItem(`dado${dado - 3}`, String(materia.value))
    localStorage.setItem(`dado${dado - 2}`, String(data_entrega.value))
    localStorage.setItem(`dado${dado - 1}`, String(conteudo.value))
    localStorage.setItem(`dado${dado}`, `<button class="apagar" onclick="apagar(${dado - 3}, ${dado})">Apagar</button>`)

    localStorage.numero_de_tarefas = String(numero_de_tarefas)
    numero_de_tarefas = localStorage.getItem('numero_de_tarefas')
    ver()
}
function ver(){
    // let dado1 = window.document.getElementById('dado1')
    // let dado2 = window.document.getElementById('dado2')
    // let dado3 = window.document.getElementById('dado3')
    // let dado4 = window.document.getElementById('dado4')
    // dado1.innerHTML = ''
    // dado2.innerHTML = ''
    // dado3.innerHTML = ''
    // dado4.innerHTML = ''
    dado = numero_de_tarefas * 4
    let ndiv = 1
    let qdivs = 1

    for(i = 1; i <= dado; i++){
        if(localStorage.getItem(`dado${i}`)){
            let div = window.document.getElementById('dado')
            if(ndiv == 1){
                div.innerHTML += `<div id='n${qdivs}' class='divdados'><p id='pdados'>${localStorage.getItem(`dado${i}`)}</p></div>`
            }
            else{
                div = document.getElementById(`n${qdivs}`)
                div.innerHTML += `<p id='pdados'>${localStorage.getItem(`dado${i}`)}</p>`
            }
            if(ndiv == 4){
                qdivs ++
                ndiv = 1
                continue
            }
        ndiv++
        }
    }
}
ver()

function apagar(c, f){
    for(i = c; i <= f; i++){
        localStorage.removeItem(`dado${i}`)
    }
    ver()
}

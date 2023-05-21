let lembrete = window.document.getElementById('lembrete')
let botao = window.document.querySelector('button')
let div = window.document.querySelector('div')
let lembretes = 1

botao.addEventListener('click', salvar)

function salvar(){
    if(localStorage.getItem('numero_de_lembretes')){
        lembretes = Number(localStorage.getItem('numero_de_lembretes'))
    }else{
        lembretes = 1
    }
    localStorage.setItem(`lembrete${lembretes}`, String(lembrete.value))
    lembretes++
    localStorage.setItem('numero_de_lembretes', String(lembretes))
    ver()
}

function ver(){
    div.innerHTML = ''
    lembretes = Number(localStorage.getItem('numero_de_lembretes'))
    for(i = 1; i <= lembretes; i++){
        if(localStorage.getItem(`lembrete${i}`)){
            div.innerHTML += '<p>' + localStorage.getItem(`lembrete${i}`) + ` <button onclick="apagar(${i})" class="apagar">Apagar</button>` + '</p>'
        }
    }
}
ver()

function apagar(p){
    localStorage.removeItem(`lembrete${p}`)
    ver()
}
//dom
const data = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')

const horas = document.querySelector('#horas')
const minutos= document.querySelector('#minutos')
const segundos= document.querySelector('#segundos')

const mensagem = document.querySelector('#mensagem')
 

//evento

const relogio = setInterval(tempo,1000)

//função

function tempo () {

    let dia = new Date ()

    let dat = dia.getDate()
    let monthy = dia.getMonth()
    let year = dia.getFullYear()


    let hr = dia.getHours()
    let min = dia.getMinutes()
    let seg = dia.getSeconds()

    

    if (hr<10){
        hr= "0"+hr
    }
    
    if (min<10){
        min="0"+min
    }
    if (seg<10){
        seg="0"+seg
    }

    if (year<10){
        year="0"+year
    }

    monthy=monthy+1

    if (monthy<10){
        monthy="0"+monthy
    }
    if (dat<10){
        dat="0"+dat
    }

    if(hr>5 && hr<12){
        mensagem.innerText='Bom dia'
    }
    if(hr>12 && hr<18){
        mensagem.innerText='Boa tarde'
    }
    else{
        mensagem.innerText='Boa noite'
    }


data.textContent = dat
mes.textContent = monthy
ano.textContent = year



horas.textContent = hr
minutos.textContent = min
segundos.textContent = seg   


}


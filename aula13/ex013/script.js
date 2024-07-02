function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date
    let hora = data.getHours()
    //let hora = 9
    msg.innerHTML = `Agora são ${hora} Horas.`
    if(hora >= 0 && hora < 12) {
        //BOM DIA
        imagem.src = 'imagens/ftmanhaboa.png'
        document.body.style.backgroundColor = '#e2cd9f'
    }else if(hora > 12 && hora <= 18) {
        //BOA TARDE
        imagem.src = 'imagens/fttardeboa.png'
        document.body.style.backgroundColor = '#b9846f'
    }else {
        //BOA NOITE
        imagem.src = 'imagens/ftnoiteboa.png'
        document.body.style.backgroundColor = '#515154'
    }
}

function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano) {
       alert('verifique os dados e tente novamente') 
    }else {
        alert('tudo ok')
    }

}

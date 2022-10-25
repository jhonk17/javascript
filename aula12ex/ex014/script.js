function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'Imagens Projetos/Imgmanha1.png'
        document.body.style.backgroundColor = '#e3c29d'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'Imagens Projetos/img2tarde2.png'
        document.body.style.backgroundColor = '#f4a869'
    } else {
        //Boa noite
        img.src = 'Imagens Projetos/img1.png'
        document.body.style.backgroundColor = '#2f2f2f'
    }
}

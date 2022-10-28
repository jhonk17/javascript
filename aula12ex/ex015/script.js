function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente"')
    }else{ 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'image/criança homem.png')
            }else if (idade < 21) {
                //jovem
            }else if (idade < 50){
                //Adulto
            }else{
                //Idoso
            }
                
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //Criança
            }else if (idade < 21) {
                //jovem
            }else if (idade < 50){
                //Adulto
            }else{
                //Idoso
            }
                
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectectamos ${genero} com ${idade} Anos`
        res.appendChild(img).style.height = '250px'
        res.appendChild(img).style.width = '250px'
    }
}
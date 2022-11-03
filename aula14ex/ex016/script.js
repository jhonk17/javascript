function contar(){
    let ini = document.getElementById('txt1')
    let fim = document.getElementById('txt2')
    let passo = document.getElementById('txt3')
    

    if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght ==0){
        alert('Erro')
    }else{
        alert('Okk')
    }
}
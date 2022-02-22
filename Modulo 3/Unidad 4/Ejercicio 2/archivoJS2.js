function contadorChar(ch){
    var maxChar=20;
    var actuales=ch.value.length;
    var restantes=maxChar-actuales;

    if(restantes<=0)
        document.getElementById('numChar').innerHTML= 'Has excedido el máximo de caracteres: '+maxChar;
        else
            document.getElementById('numChar').innerHTML=restantes+' caracteres restantes';
}
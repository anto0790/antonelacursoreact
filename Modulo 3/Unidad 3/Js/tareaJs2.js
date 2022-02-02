var numeros= [200,3,40,25,1,400,50,4,77];
var numeroMayor=numeros[0];

    for(i=0; i<numeros.length; i++){   
        if(numeros[i]>numeroMayor)
            numeroMayor=numeros[i];
    }

    document.write(numeroMayor);



/* var numeros= [200,3,40,25,1,400,50,4,77];
var i=0;
var numeroMayor=numeros[0];

    while(i<numeros.length){
        if(numeros[i]>numeroMayor)
            numeroMayor=numeros[i];

        i++;
    }

    document.write(numeroMayor); */
function pintarFondo(i){
    var fondo=document.getElementsByTagName('html');

    switch(true){
        case (i=="cuadrado1"):
            fondo[0].style= 'background: rgb(255, 137, 235);'
            break;

        case (i=="cuadrado2"):
            fondo[0].style= 'background: rgb(51, 80, 209);'
            break;

        case (i=="cuadrado3"):
            fondo[0].style= 'background: rgb(255, 238, 0);'
            break;
    }
}
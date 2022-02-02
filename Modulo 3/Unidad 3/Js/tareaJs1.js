    var distancia;
    distancia=prompt('Ingrese una distancia: ')

        switch (true) {
            case (distancia>0 && distancia<=1000): document.write('pie');
                break;
            case (distancia>1000 && distancia<=10000): document.write('bici');
                break;
            case (distancia>10000 && distancia<=30000): document.write('cole');
                break;
            case (distancia>30000 && distancia<=100000): document.write('auto');
                break;
            case (distancia>100000): document.write('avión');
                break;
            default: document.write('Debe ingresar un valor numérico')
        }
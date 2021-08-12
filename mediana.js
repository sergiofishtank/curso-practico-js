function calcularMediaAritmetica(lista){
    // let sumaLista= 0;
    // for (let i=0; i<lsista.length ;i++){
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function(valorAcumulado=0, nuevoElemento){
            return valorAcumulado +nuevoElemento;
        }
    )

    const promediolista= sumaLista/lista.length;
    return promediolista;
}

// const lista =[
//     100,
//     200,
//     500,
//     40000000
// ]



function esPar(numerito){
    if(numerito % 2 ==0){
        return true;
    }else{
        return false;
    }
}



function calcularMediana(lista){
    
    lista.sort((a,b)=>a-b);

    const mitadlista = parseInt(lista.length / 2 );

    if(esPar(lista.length)){
        const elemento1=lista[mitadlista-1];
        const elemento2=lista[mitadlista];

        const promedioElemento1y2=calcularMediaAritmetica([elemento1, elemento2])

        return promedioElemento1y2;
    }else{
        return lista[mitadlista];
    }
}
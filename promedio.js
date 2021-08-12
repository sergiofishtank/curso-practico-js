
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

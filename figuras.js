//cuadrado
console.group("Cuadrado");

//const ladoCuadrado= 5;
//console.log('Los lados del cuadrado miden '+ladoCuadrado+" cm");

function perimetoCuadrado(lado) {
    return lado *4;
}

//console.log('El perimetro del cuadrado mide '+perimetoCuadrado+" cm");

function areaCuadrado (lado){
    return lado*lado;
} 
//console.log(`El área del cuadrado es ${areaCuadrado} cm^2`);

console.groupEnd();

//Triangulo
console.group("Triangulo");

// const ladoTriangulo1= 6;
// const ladoTriangulo2= 6;
// const baseTriangulo= 4;

// console.log(
//     `Los lados del triangulo miden: 
//     ${ladoTriangulo1} cm ,
//     ${ladoTriangulo2} cm,
//     ${baseTriangulo} cm`
// );

// const alturaTriangulo= 5.5;
// console.log(`La altura del triangulo es ${alturaTriangulo} cm`);

function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}
//console.log(`El perimetro del triangulo es ${perimetroTriangulo} cm`);

function areaTriangulo(base, altura){
    return (base*altura)/2;
}
//console.log(`El área del triangulo es ${areaTriangulo} cm^2`);

console.groupEnd()

//círculo

console.group("Círculo");

// const radioCirculo = 4;
// console.log(`El radio del círculo es ${radioCirculo} cm`);

function diametroCirculo(radio){
    return radio*2
}
//console.log(`El diametro del círculo es ${diametroCirculo} cm`);

const pi = Math.PI;
//console.log(`PI es ${pi}`);

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*pi;
} 
//console.log(`El perimetro del círculo es ${perimetroCirculo} cm`);

function areaCirculo (radio){
    return pi*(Math.pow(radio,2));
} 
//console.log(`El área del círculo es ${arreaCirculo} cm^2`);

console.groupEnd();

//LLAMAR FUNCIONES DESDE HTML
//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetoCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area)
}

//Triangulo
function calcularPerimetroTriangulo(){
    const inputBase = document.getElementById("InputBaseTriangulo");
    const input1 = document.getElementById("InputLado1Triangulo");
    const input2 = document.getElementById("InputLado2Triangulo");
    const base = parseInt(inputBase.value);
    const lado1 = parseInt(input1.value);
    const lado2 = parseInt(input2.value);

    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputBaseTriangulo");
    const inputAltura = document.getElementById("InputAlturaTriangulo");
    
    const base = inputBase.value;
    const altura = inputAltura.value;
    
    const area = areaTriangulo(base,altura);
    alert(area)
}
//Isosceles
function alturaIsosceles(h,b){
    return Math.sqrt((Math.pow(h,2))-Math.pow((b/2),2));
}
function calcularAreaIsosceles(){
    const input1 = document.getElementById("InputLado1Iso");
    const input2 = document.getElementById("InputLado2Iso");
    const input3 = document.getElementById("InputLado3Iso");

    const lado1 = parseInt(input1.value);
    const lado2 = parseInt(input2.value);
    const lado3 = parseInt(input3.value);
    
    if(lado1===0 || lado2 === 0 || lado3 === 0){
        alert ("Valores inncorrectos, no es un triángulo")
    }else if(lado1 === lado2 && lado1 != lado3){
        const altura = alturaIsosceles(lado1,lado3)
        alert (`La altura del triangulo Isósceles es ${altura}`);        
    }else if(lado1 === lado3 && lado1 != lado2){
        const altura = alturaIsosceles(lado1,lado2)
        alert (`La altura del triangulo Isósceles es ${altura}`);
    }else if(lado2 === lado3 && lado2 != lado1){
        const altura = alturaIsosceles(lado2,lado1)
        alert (`La altura del triangulo Isósceles es ${altura}`);
    }else{
        alert ("No es isósceles")
    }    
}

//Circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro)
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area)
}
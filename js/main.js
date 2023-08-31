function saludo() {
    alert("Bienvenidos a mis website con boostrap y js");
}

function suma() {
    // Declaramos las variables nesecarias
    let A = 0;
    let B = 0;
    let S = 0;
    // Solicitamos los valores
    A = parseInt(prompt("ingrese el primer valor a sumar"))
    B = parseInt(prompt("ingrese el segundo valor a sumar"))
    // realizamos los prosecos
    S = A + B;
    // mostramos el resultado en pantalla
    alert ("el resultado de la suma es"+ S);
}
function operaciones() {
    alert("Algoritmo que sumara, restara, multiplicara y dividira dos valores ingresados");
    let A = 0;
    let B = 0;
    let S = 0;
    let R = 0;
    let M = 0;
    let D = 0;

    A = parseInt(prompt("Digite el primer valor a operar"));
    B = parseInt(prompt("Digite el segundo valor a operar"));

    S = A + B;
    R = A - B;
    M = A * B;
    D = A / B;

    alert ("El resultado de la suma es: " + S  + "\nEl resultado de la resta es: " + R + "\nEl resultado de la multplicación es: " + M + "\nEl resultado de la division es: " + D);
    //alert ("El resultado de la resta es: " + R);
    //alert ("El resultado de la multplicación es: " + M);
    //alert ("El resultado de la division es: " + D);
}
function mayor() {
    alert("El algoritmo que determina en el numero mayor de ingresados");
    let n1= 0;
    let n2=0;
    n1 = parseInt( prompt ("ingrese el primer valor"));
    n2 = parseInt( prompt ("ingrese el segundo valor"));
    if (n1==n2){
        alert("los valores ingresados son iguales");
    }
    else if (n1>n2){
        alert("el numero mayor es"+ n1);
    }
    else{
        alert("el numero mayor es"+ n2);
    }
    
}
// el colegio abc rrequiere un algoritmo o sistema que permita a los diferentes estudiantes ingresar sus nombre, materia, y 7 calificaciones y este, le indique si aprobo o reprobo la materia teniendo en cuenta que si aprueba el puntaje es mayor a 6
function colegio() {
    // declaramos variables
    let A = 0;
    let B = 0;
    let C = 0;
    let D = 0;
    let E = 0;
    let F = 0;
    let G = 0;
    let H = 0;
    let I = 7;
    let J = 0;
    let K = 0;
    // solicitamos valores
    K = prompt("dime tu nombre");
    A = parseInt(prompt("Ingrese el primer valor de la calificacion"))
    B = parseInt(prompt("Ingrese la segunda califacion"))
    C = parseInt(prompt("Ingrese la Tercera calificacion"))
    D = parseInt(prompt("Ingrese la cuarta calificacion"))
    E = parseInt(prompt("Ingrese la quinta calificacion"))
    F = parseInt(prompt("Ingrese la sexta calificacion"))
    G = parseInt(prompt("Ingrese la septima califacion"))
    // realizamos los prosecos
    H = A + B + C + D + E + F + G;
    J = H / I;

    // mostramos resultado
    if (J<6) {
        alert("tu nota es reprobada, por idiota")
        
    }
    else if (J>6) {
        alert("tu nota ha sido aprobada,te ganaste un pico")
    }
    alert(K + " tu nota es de "+ J);
    
}
// se rrequiere un sistema o algoritmo que al ingresar el valor en dolares nos indique a cuantos pesos colombianos equivale, euro y soles
function conversion () {
    alert("Algoritmo que hace la conversion de dolares a pesos colombianos, euros y soles.");
    let dolar = 0;
    dolar = parseInt(prompt("Digite el valor en dolares que desea convertir "));

    vpesos= 4118;
    veuros= 0.92;
    vsoles= 3.72;

    pesosc= vpesos * dolar;
    euros= veuros * dolar;
    soles= vsoles * dolar;
}
// un individuo desea invertir su capital en un banco y desea saber cuanto dinero ganara de un numero de año teniendo en cuenta que el banco paga n interes de 1.3% mensual
function banco() {
    alert("ingresa el dinero que quieres ingresar al CDT")
}
function menor() {
    alert("Algoritmo que determina el numero menor de los 3 que se ingresan");
    let numero1=0;
    let numero2=0;
    let numero3=0;

    numero1=parseInt(prompt("Digite el primer numero"))
    numero2=parseInt(prompt("Digite el segundo numero"))
    numero3=parseInt(prompt("Digite el tercer numero"))

    if ((numero1==numero2)&&(numero1==numero3)) {
        alert("Los numeros ingresados son iguales");
    }
}
function promedio() {
    const numerosStr = prompt("Ingrese números separados por comas (por ejemplo, 1,2,3):");
    const numeros = numerosStr.split(",").map(Number);

    if (numeros.some(isNaN)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    const promedio = total / numeros.length;


    alert("El promedio de los números ingresados es: " + promedio);
}


function circulo(){
    // capturamos en una constante el elemento HTML que deseamos mainupular
    const figura = document.getElementById("figura");
    // a este eleemento agregamos la clase circulo

    figura.classList.toggle("circulo");
}
function horizontal(){
    const figura = document.getElementById("figura");
    figura.classList.toggle("horizontal");
}
function vertical(){
    const figura = document.getElementById("figura");
    figura.classList.toggle("vertical");
}
function gift(){
    const figura = document.getElementById("figura");
    figura.classList.toggle("gift");

}
function movetop(){
    const figura = document.querySelector("#figura");
    figura.classList.toggle("top");
}
function right(){
    const figura = document.querySelector("#figura");
    figura.classList.toggle("right");

}
function left(){
    const figura = document.querySelector("#figura");
    figura.classList.toggle("left");
}
function bottom(){
    const figura = document.querySelector("#figura");
    figura.classList.toggle("bottom");
}
function degradado(){
    const figura = document.querySelector("#figura");
    figura.classList.toggle("degradado");
}
function rombo(){
    const figura = document.querySelector("#figura");
    figura.classList.toggle("rombo");
}
function triangulo(){
    const figura = document.querySelector("#figura");
    figura.classList.toggle("triangulo");
}
function panellateral(){
    const panel = document.getElementById("panel-lateral");

    panel.classList.toggle("active");
}
function panelsuperior(){
    const panel = document.getElementById("panel-superior");

    panel.classList.toggle("off");
}


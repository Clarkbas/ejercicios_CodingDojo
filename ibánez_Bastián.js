//PREDICCIÓN 1

// ¿Qué indicará console.log cuando se llame a esta función?

function myBirthYearFunc() {
    console.log("Nací en " + 1980);
}
console.log("Nací en " + 1980)

/*  Nací en 1980, todo junto */


// PREDICCIÓN 2 //

//Entonces, si la variable EntradaAñoNacimiento es 1980 (también conocida como var EntradaAñoNacimiento = 1980), y se llama a esta función, 
//¿qué indicará console.log?

function myBirthYearFunc(EntradaAñoNacimiento) {
    console.log("Nací en " + EntradaAñoNacimiento);
}

// Para que resulte se debe generar una variable arriba o puede ser fuera de los parentesis de esta manera:

var EntradaAñoNacimiento = 1980;
function myBirthYearFunc(EntradaAñoNacimiento) {
    console.log("Nací en " + EntradaAñoNacimiento);

}
//var EntradaAñoNacimiento = 1980; --> de esta manera igual da "Nací en 1980" //
console.log("Nací en " + EntradaAñoNacimiento);

/* De esta manera el resultado será = "Nací en 1980" */

// PREDICCIÓN 3 (PORCIA CASO)

/* Intentémoslo otra vez. Si var num1 = 10 y var num2 = 20, 
¿qué indicaría console.log? */

var num1 = 10
var num2 = 20

function add(num1, num2) {
    console.log("¡Sumando números!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2; // Remplazando num1 y num2 quedaria así:
    console.log(sum);
}

add(num1, num2)

/* Resultado es "30" */


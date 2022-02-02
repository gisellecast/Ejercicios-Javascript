//EJERCICIO 1//

const ejercicio1 = [
    3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
    19, 88, 456, 13, 23, 24
];
// solución ejercicio 1:
//con esta funcion voy a mostrar los numeros primos del arreglo
function primo(arreglonumeros) {
    //Empieza el ciclo for, vamos a contar el # de casillas del arreglo;
    var longitudarreglo = arreglonumeros.length;
    // este ciclo for va acceder al valor de cada una de las casillas del arreglo
    for (var indice = 0; indice < longitudarreglo; indice++) {
        // almacenamos el valor del arreglo en la variable valor
        var valor = arreglonumeros[indice];
        // con esta variable voy a saber si el núumero es primo
        var esPrimo = true;
        // usamos un ciclo for paras aber si el numero es primo
        for (var inicio = 1; inicio < valor; inicio++) {
            // para saber si un núumero es primo, tengo que validar que no sea divisible por otros números, excepto 1
            if (valor % inicio == 0 && inicio != 1) {
                //significa que no es número primo
                esPrimo = false;
                // usamos un break para salir del for porque ya sabemos que el numero es divisible entre otros numeros diferentes a 1
                break;
            }
        }
        //si la variable esPrimo sigue dando true es porque el número si es primo
        if (esPrimo == true) {
            console.log(valor);
        }
    }
}

primo(ejercicio1);

//EJERCICIO 2//

const ejercicio2 = [
    {
        nombre: "Gabriel",
        edad: 22,
        esFamiliar: false,
    },
    {
        nombre: "Jaime",
        edad: 15,
        esFamiliar: true,
    },
    {
        nombre: "María",
        edad: 18,
        esFamiliar: true,
    },
    {
        nombre: "Angel",
        edad: 19,
        esFamiliar: true,
    },
    {
        nombre: "Fer",
        edad: 18,
        esFamiliar: true,
    },
    {
        nombre: "Rachel",
        edad: 30,
        esFamiliar: true,
    },
];


// solución ejercicio 2:

let invitados = []
// iniciamos el for indicando donde empieza i; hasta donde llega i; como irá avanzando i "conteo de casillas del arreglo"
for (let i = 0; i < ejercicio2.length; i++) {
    //declaramos la condicion (que sean familiares mayores de 18 años) trayendo let edad >=18 && let esFamiliar
    if (ejercicio2[i].edad >= 18 && ejercicio2[i].esFamiliar) {
        // imprimimos las diferentes variables de nombre que cumplan la condicion anterior y los invitamos a pasar a la fiesta
        console.log(ejercicio2[i].nombre + " puede pasar a la fiesta")
    }
}


//EJERCICIO 3//

//sucesión fibonacci: (1, 1, 2, 3, 5, 8, 13, 21)//

let numfibo = 1;
let numfiboA = 0;
let numfiboB = 0;

//Imprimo el numerofibo de inicio
console.log(numfibo);

numfiboA = numfibo;

for (let i = 0; i < 50; i++) {
    numfibo = numfiboA + numfiboB;

    //Imprimo el numerofibo que sigue en la sucesión
    console.log(numfibo);

    numfiboA = numfiboB;
    numfiboB = numfibo;
}

if (numfiboB = 0) {

}



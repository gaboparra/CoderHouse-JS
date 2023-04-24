//algoritmo con condicional
let edad = 20;
let nacionalidad = "argentina";

if (edad >= 18 && nacionalidad === "argentina") {
    console.log("Eres mayor de edad y tienes la nacionalidad argentina");
}
else if (edad >= 18 && nacionalidad !== "argentina") {
    console.log("Eres mayor de edad pero no tienes la nacionalidad argentina");
}
else {
    console.log("Eres menor de edad");
}



//algoritmo con ciclo
let numero = 1;
let resultado = 0;

while (numero <= 10) {
    if (numero % 2 === 0) {
        resultado += numero;
    }
    numero++;
}

console.log("La suma de todos los resultados es: " + resultado);



//simulador interactivo
let nombrePokemon = prompt('Ingresa el nombre del Pokémon');
let tipoPokemon = prompt('Ingresa el tipo del Pokémon');
let nivelPokemon = Number(prompt('Ingresa el nivel del Pokémon'));

alert(`¡Has capturado a un ${nombrePokemon} de tipo ${tipoPokemon} y nivel ${nivelPokemon}!`);






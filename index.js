//let inventario = {
//    pokeballs: 5,
//    superballs: 3,
//    ultraballs: 1
//};

//const precios = {
//    pokeball: 200,
//    superball: 600,
//    ultraball: 1200
//};

//alert(`Bienvenido a la tienda Pokémon. Actualmente tienes:\n- ${inventario.pokeballs} pokeballs\n- ${inventario.superballs} superballs\n- ${inventario.ultraballs} ultraballs`);

//let opcion = prompt("¿Qué tipo de pokeball deseas comprar? (pokeball / superball / ultraball)");

//if (opcion === "pokeball") {
    //let cantidad = prompt("¿Cuántas pokeballs quieres comprar?");
    //let total = cantidad * precios.pokeball;
    //if (total > 0 && total <= 2000) {
       // if (confirm(`¿Estás seguro que quieres comprar ${cantidad} pokeballs por ${total} monedas?`)) {
            //inventario.pokeballs += Number(cantidad);
            //alert(`¡Has comprado ${cantidad} pokeballs!`);
        //} else {
           // alert("Compra cancelada.");
       // }
    //} else {
        //alert("Cantidad o monto inválido. La cantidad máxima es 10 pokeballs.");
   // }
//} else if (opcion === "superball") {
    //let cantidad = prompt("¿Cuántas superballs quieres comprar?");
    //let total = cantidad * precios.superball;
    //if (total > 0 && total <= 1800) {
        //if (confirm(`¿Estás seguro que quieres comprar ${cantidad} superballs por ${total} monedas?`)) {
            //inventario.superballs += Number(cantidad);
            //alert(`¡Has comprado ${cantidad} superballs!`);
       // } else {
           // alert("Compra cancelada.");
       // }
    //} else {
        //alert("Cantidad o monto inválido. La cantidad máxima es 3 superballs.");
   // }
//} else if (opcion === "ultraball") {
    //let cantidad = prompt("¿Cuántas ultraballs quieres comprar?");
    //let total = cantidad * precios.ultraball;
    //if (total > 0 && total <= 1200) {
        //if (confirm(`¿Estás seguro que quieres comprar ${cantidad} ultraballs por ${total} monedas?`)) {
           // inventario.ultraballs += Number(cantidad);
            //alert(`¡Has comprado ${cantidad} ultraballs!`);
       // } else {
           // alert("Compra cancelada.");
       // }
   // } else {
        //alert("Cantidad o monto inválido. La cantidad máxima es 1 ultraball.");
   // }
//} else {
   // alert("Opción inválida.");
//}

//alert(`Ahora tienes:\n- ${inventario.pokeballs} pokeballs\n- ${inventario.superballs} superballs\n- ${inventario.ultraballs} ultraballs`);



const URL = "https://pokeapi.co/api/v2/pokemon/"

const buscarInput = document.getElementById("buscar");
const pokedexContainer = document.getElementById("pokedex");

async function buscarPokemon() {

    const pokemonBuscado = buscarInput.value.toLowerCase();

    try {

        const response = await fetch(URL + pokemonBuscado)
        const data = await response.json();

        pokedexContainer.innerHTML = 
        `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}"></img>
        <p>Numero: ${data.id}</p>
        <p>Altura: ${data.height / 10}m</p>
        <p>Peso: ${data.weight / 10}kg</p>
        `;

    } catch (error) {
        console.error(error);
    }
}
document.getElementById("btn-buscar").addEventListener("click", buscarPokemon)


let multiple = Number(prompt("entrez un nombre" + " ")); // nombre de la table de multiplication
let nombre;
for (let i = 1; i <= 10; i++) { // boucle pour allant de 1 a 10 
    nombre = multiple * i; // table de multiplication
    console.log(" " + multiple + " * " + i + " = ", +nombre); // affichage en console
}
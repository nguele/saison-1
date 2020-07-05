// declaration de deux valeurs A et B
let valeurA = 3;
let valeurB = 6;
let permutation = " ";
console.log("la valeur de A est : " + valeurA + " \n " + " la valeur de B est : " + valeurB);
//permutation des valeurs A dans B et de B dans A
permutation = valeurA;
valeurA = valeurB;
valeurB = permutation;
console.log("la valeur de A est : " + valeurA + " \n \n " + " la valeur de B est : " + valeurB);
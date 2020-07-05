let nombre1 = Number(prompt(" combien font 5 + 3 ? " + " "));
// boucle qui s'execute tant que la reponse n'est pas bonne
while (nombre1 !== 8) { // condition de validation 
    alert("mauvais resulta !");
    nombre1 = Number(prompt(" combien font 5 + 3 ? " + " "));

}
alert("felicitation");
let moyenne = Number(prompt("Quel est votre moyenne : " + " "));

if (moyenne > 20) {
    alert("les moyenne sont comprises entre 0 et 20 !!!")
} else if (moyenne == 20) {
    alert("excellent");
} else if (moyenne >= 16 && moyenne < 20) {
    alert("tres bien");
} else if (moyenne >= 14 && moyenne < 16) {
    alert("bien");
} else if (moyenne >= 12 && moyenne < 14) {
    alert("assez bien");
} else if (moyenne >= 10 && moyenne < 12) {
    alert("passable");
} else {
    alert("vous avez une moyenne inferieur a 10/20");
}
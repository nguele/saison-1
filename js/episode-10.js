let montant = Number(prompt("Quel est le montant de votre facture ? " + " "));
let remise = (montant * 10) / 100
if (montant > 40000) {
    alert("total a payer est de : " + remise);
} else {
    alert("total a payer est de : " + montant);
}
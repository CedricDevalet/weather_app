const jourSemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

let ajd = new Date();
let option = {weekday: 'long'};
let jourActuelle = ajd.toLocaleDateString('fr-FR', option);
//console.log(jourActuelle, ajd);

jourActuelle = jourActuelle.charAt(0).toUpperCase() + jourActuelle.slice(1);

let tabJoursEnOrdre = jourSemaine.slice(jourSemaine.indexOf(jourActuelle)).concat(jourSemaine.slice(0, jourSemaine.indexOf(jourActuelle)));
//console.log(tabJoursEnOrdre);

export default tabJoursEnOrdre;
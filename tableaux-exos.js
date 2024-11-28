// Voici un jeu de données : interdiction d'y toucher :) 
const characterNames = [
  "63AIS",
  "A'misandra",
  "Amimari",
  "Alika",
  "54B2",
  "A'merpact",
  "Amazora",
];


/**
 * -------------------------------------------------------
 * 1 - Afficher le nombre de personnages dans le tableau 
 * -------------------------------------------------------
 */
console.log(characterNames.length);
/**
 * -------------------------------------------------------
 * 2 - Afficher le nom du premier personnage du tableau
 * -------------------------------------------------------
 */
console.log(characterNames[0]);
/**
 * -------------------------------------------------------
 * 3 - Afficher le nom du dernier personnage (le 7eme)
 * -------------------------------------------------------
 */
console.log(characterNames[6]);
/**
 * -------------------------------------------------------
 * 4 - Afficher le nom du dernier personnage **SANS** 
 * savoir qu'il est le 7eme
 * -------------------------------------------------------
 */
console.log(characterNames[characterNames.length-1]);
/**
 * -------------------------------------------------------
 * 5 - Afficher les noms de tous les personnages
 * -------------------------------------------------------
 */

console.table (characterNames);


/**
 * -------------------------------------------------------
 * 6 - Afficher le nom de chaque personnage accompagné du 
 * nombre de caractères qu'il contient. Ex: Alika (5)
 * -------------------------------------------------------
 */

for (let i=0;i<characterNames.length;i++){
  console.log(characterNames[i],characterNames[i].length);
}



/**
 * -------------------------------------------------------
 * 7 - Afficher le nom de chaque personnage en minuscules
 * -------------------------------------------------------
 */
for (let i=0;i<characterNames.length;i++){
  console.log(characterNames[i].toLowerCase());
}



/**
 * -------------------------------------------------------
 * 8 - Afficher le nombre de personnages dont le nom 
 * contient la lettre 'a' (minuscule ou majuscule)
 * -------------------------------------------------------
 */
for (let i=0;i<characterNames.length;i++){
  console.log(characterNames[i], "contient a", characterNames[i].includes("a"), "contient A", characterNames[i].includes("A"));

}


/**
 * -------------------------------------------------------
 * 9 - Créer une fonction `search(needle)` qui renvoie 
 * les personnages dont le nom contient les lettres 
 * passées en paramètre.
 * 
 * Ex : search('Amim') doit renvoyer 'Amimari'
 * ------------------------------------------------------- 
 */

let Mess="Ali"

for (let i=0;i<characterNames.length;i++){

  if (characterNames[i].includes(Mess)) {
    console.log(characterNames[i]);

  }
  
}

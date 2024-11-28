 /**
   * -------------------------------------------------------
   * 1 - Vous êtes un pilote de F1.
   * 
   * Créer une boucle qui permette d'afficher "Tour n°X" sur vos 50 tours de circuits
   * 
   * Ex : 
   * Tour n°1
   * Tour n°2
   * Tour n°3
   * etc...
   * -------------------------------------------------------
*/
for (let i=0;i<50;i++){
  console.log("Tour n°", i);
}


 /**
   * -------------------------------------------------------
   * 2 - Vous êtes (encore) un pilote de F1 mais cette fois-ci, vous avez avec vous un copain-pilote avec vous parce que vous avez deux fois plus de tours à faire.
   * 
   * Créer une boucle qui affiche tous les tours 🔂
   * Si vous êtes au premier tour, afficher "Zé bartiii, c'est à conducteur 1️⃣ de démarrer"
   * Si vous êtes au tour 25, afficher "Il faut changer de conducteur, c'est à conducteur 2️⃣"
   * Si vous êtes au tour 50, afficher "Il faut changer de conducteur, c'est à conducteur 1️⃣"
   * Si vous êtes au tour 75, afficher "Il faut changer de conducteur, c'est à conducteur 2️⃣"
   * Si vous êtes au tour 100, afficher "C'est fini, bien joué à tous, HIGH FIVE ! 🙌😎"
   * -------------------------------------------------------
*/
for (let i=0;i<100;i++){
  console.log(i); 
  
  switch(i){
    case 0:
    console.log("Zé bartilli, c'est à conducteur 1 de démarrer");
    break;
    case 24:
    console.log("Il faut changer de conducteur, c'est à conducteur 2️⃣");
    break;
    case 49:
    console.log("Il faut changer de conducteur, c'est à conducteur1️⃣" );
    break;
    case 74:
    console.log("Il faut changer de conducteur, c'est à conducteur 2️⃣");
    break;
    case 99:
    console.log("C'est fini, bien joué à tous, HIGH FIVE ! 🙌😎");
    break;
    default:
    break;
  }
  
}


 /**
   * -------------------------------------------------------
   * 3 - Vous êtes (toujours) un pilote de F1, sur 101 tours. Vous devez maintenant faire attention à votre essence. 
   * 
   * Votre réserve de carburant est de 74L.
   * Chaque tour consomme 7L.
   * 
   * Créer une boucle qui affiche tous les tours et le fuel restant à la fin de chaque tour 🔂. Ex : "Tour n°88, Fuel restant : 19"
   * Si vous allez être à court de carburant au prochain tour : 
   *    afficher en warning : "Attention carburant à recharger au prochain tour⛽️"
   *    recharger le carburant le tour suivant
   * Une fois le carburant rechargé, afficher en warning : "Le refuel a été fait 🙌😎"
   * Une fois la course terminée, afficher le nombre total de refuel qui aura été nécéssaire. Ex : "Nombre total de refuel :  2"
   * Vous devez obtenir le résultat de la capture d'écran "boucles-basiques-resultat"
   * -------------------------------------------------------
*/


let Fuel=74;
let Refuel=0
let FuelStation=0
for (let i=0;i<100;i++){
  
  if (i!=0){
  Fuel=Fuel-7
  }


  console.log("Tour n°", i, "Fuel=", Fuel);

  if (FuelStation==1){
    Fuel=74;
    FuelStation=0;
    Refuel++;
    console.warn("Le refuel a été fait 🙌😎");
  }

  

  if (Fuel<=14){
  console.warn("Attention carburant à recharger au prochain tour⛽️");
  FuelStation=1
  }

}

console.log("nombre de refuel",Refuel);


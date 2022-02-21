/*class contact {
    nom 
    prenom 
    numero_tel

 constructor (_nom, _prenom, _numero_tel){
    this.nom = _nom
    this.prenom = _prenom
    this.numero_tel = _numero_tel
}
presentation(){
return this.nom + " " + this.prenom+ ", " + this.numero_tel
}
}
let repertoire = [];
let contact1 = new contact('sanchez', 'mathieu', '0504030201');
let contact2 = new contact('kabamba', 'pati', '01020304050');
repertoire.push(contact1);
repertoire.push(contact2);
//console.log(repertoire);
console.log(" MENU ");
console.log(" 0 : Liste des contacts ");
console.log(" 1 :Ajouter un contact ");
console.log(" 2 : Supprimer un contact ");
console.log(" 3 : Quitter le programme ");

let choix_user = prompt("Faite votre choix: ");

while (choix_user != "3") {
  console.log(choix_user);
  switch (choix_user) {
    case "0":    
        for (let i = 0; i < repertoire.length; i++) {
            console.log(repertoire[i].presentation());    
        }
      break;
    case "1":
        let nom = prompt('saisir un nom: ');
        let prenom = prompt('saisir un prenom: ');
        let numero_tel = prompt('saisir un numero_tel: ');
        let contact_a_ajouter = new contact(nom, prenom, numero_tel);
        repertoire.push(contact_a_ajouter)
        console.log('contact bien ajouté' );
      break;
    case "2":
        for (let i = 0; i < repertoire.length; i++) {
          console.log(' id ' + (i+1) + ' : ' ,repertoire[i].presentation());
        }
        let id_a_supprimer = parseInt(prompt("saisir l'id qui doit etre supprimer"));
        repertoire.splice(id_a_supprimer-1, 1);
        console.log('contact bien supprimeé');
      break;
    default:
        console.log('saisie incorrecte');
      break;
  }
console.log(" MENU ");
console.log(" 0 : Liste des contacts ");
console.log(" 1 :Ajouter un contact ");
console.log(" 2 : Supprimer un contact ");
console.log(" 3 : Quitter le programme ");

  choix_user = prompt("Faite votre choix: ");
}
console.log("*** FIN DE PROGRAMME *** ");*/














class contact{
    nom
    prenom
    numero_tel

    constructor(_nom, _prenom, _numero_tel){

        this.nom = _nom
        this.prenom = _prenom
        this.numero_tel = _numero_tel

    }

    presentation(){
        return this.nom + ' ' + this.prenom + ' , ' + this.numero_tel
    }
}

let repertoire = []
let contact1 = new contact('Sanchez', 'Mathieu', '0102030405');
let contact2 = new contact('Kabamba', 'Pati', '0504030201');
repertoire.push(contact1);
repertoire.push(contact2);

console.log('MENU');
console.log(' 0 : Liste des contacts');
console.log(' 1 : Ajouter un contact');
console.log(' 2 : Supprimer un contact');
console.log(' 3 : Quitter le programme');

let choix_user = prompt('Faite votre choix !');

while (choix_user != '3') {

    console.log(choix_user);
    switch (choix_user) {

      case "0":
          for (let i = 0; i < repertoire.length; i++) {
              console.log( repertoire[i].presentation())
              
          }
          
        break;

      case "1":
          let nom = prompt('Saisi un nom');
          let prenom = prompt('Saisi un prenom');
          let numero_tel = prompt('Saisi un numero')
          let contact_a_ajouter = new contact(nom, prenom, numero_tel);
          repertoire.push(contact_a_ajouter);
          console.log('Contact bien Ajouté!')
        
        break;

      case "2":
           for (let i = 0; i < repertoire.length; i++) {
               console.log(' id ' +  (i+1) + ' : '+ repertoire[i].presentation())
            }
          let id_contact_a_supprimer = parseInt(prompt("Choisi l'id a supprimer"));
          repertoire.splice( id_contact_a_supprimer-1,1);
          
          console.log('Contact bien supprimé ');
               
        
        break;

      default:
          console.log('Erreur');
        break;


    } 
           console.log('MENU');
           console.log(' 0 : Liste des contacts');
           console.log(' 1 : Ajouter un contact');
           console.log(' 2 : Supprimer un contact');
           console.log(' 3 : Quitter le programme');

            choix_user = prompt('Faite donc  de nouveau un choix ! ');

}

console.log( '*** FIN DU PROGRAMME ***');

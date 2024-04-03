export default class Formulaire {
    //definition du constructeur
    constructor(id) {
        this.id = id;
        this.formulaireHtml = document.getElementById(this.id);
        this.formdata = new FormData(this.formulaireHtml);
        this.answers = new Array();
    }
    //mÃƒ ©thode pour rÃƒ ©cupÃƒ ©rer le div parent
    getDiv(id) {
        return document.getElementById(id).parentNode;
    }
 //mÃƒ ©thode pour rÃƒ ©cupÃƒ ©rer un Ãƒ ©lÃƒ ©ment
 getElement(id) {
    return document.getElementById(id);
   }
    //mÃƒ ©thode permettant de masquer un Ãƒ ©lÃƒ ©ment sans animation
   maskChamp(id) {
    this.getDiv(id).classList.add('masque');
    this.getElement(id).required = false;
   }
   //mÃƒ ©thode permettant d'afficher le champ
   showChamp(id) {
    this.getDiv(id).classList.remove('disp');
    this.getDiv(id).classList.add('app');
    this.getElement(id).required = true;
   }
   //mÃƒ ©thode permettant de masquer le champ avec animation
   hideChamp(id) {
    this.getDiv(id).classList.remove('app');
    this.getDiv(id).classList.add('disp');
    this.getElement(id).required = false;
   }
   //mÃƒ ©thode pour savoir si un radio est sÃƒ ©lectionnÃƒ ©
   isSelected(id, value, action, otherAction) {
    this.formdata = new Formdata(this.formulaireHtml);
    if(this.formdata.get(id) == value) {
        action();
    }
    else {
        otherAction()
    }
   }
    //mÃƒ ©thode pour rÃƒ ©cupÃƒ ©rer les Ãƒ ©lÃƒ ©ments de chaque input (et les ajouter Ãƒ  answer)
   getAnswers() {
    this.formdata = new this.formdata(this.formulaireHtml);
    this.formdata.forEach(
        (value, key) => {
            if(value != "" && value != "on"){
                this.answers.push([key, value]);
            }
        }
    )
    return this.answers
  }
  //MÃƒ ©thode pour afficher dans un alert les rÃƒ ©sultats
  affAnswers() {
    let chaine = "Raicapitulatif\n\n";
    for (let ligne of this.getAnswers()){
        chaine += '${ligne [0]} : ${ligne[1]}\n'
    }
    alert(chaine);
  }
 } 
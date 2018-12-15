const TypeWriter = function(txtElement,words,wait = 3000) {
this.txtElement = txtElement;
this.words = words;
this.txt = "";
this.wordIndex = 0;
this.wait = parseInt(wait,10);
this.type();
this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function() {
  // Récupere l'index du mot actuel
  const current = this.wordIndex % this.words.length;
  // récupere le mot actuelle
  const fulltxt = this.words[current];

  // Check if deleting avec this.isDeleting

  if(this.isDeleting) {
    // retire une lettre
    this.txt = fulltxt.substring( 0, this.txt.length - 1);

  } else {
    // sinon on ajoute une lettre
    this.txt = fulltxt.substring(0 , this.txt.length + 1);
  }

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  //Initial Type speed
  let typeSpeed = 300;

  if(this.deleting){
    typeSpeed = typeSpeed / 2 ;
  }

  // if word est complet
  if(!this.isDeleting && this.txt === fulltxt ) {
    //Make pause at end
    typeSpeed = this.wait;
    //Set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false ;
    // Move to the next word
    this.wordIndex++;
    //Pause avant de taper
    typeSpeed = 500;
  }
//vitesse d'écriture
  setTimeout(() => this.type(), 250);
}
// quand tout a charger lance la fonction init
document.addEventListener('DOMContentLoaded', init);

// Init APP
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

// Init TypeWriter
new TypeWriter(txtElement,words,wait);
}

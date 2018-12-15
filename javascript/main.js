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
  // Current index of words
  const current = this.wordIndex % this.words.length;
  // Get full text of current word
  const fulltxt = this.words[current];

  // Check if deleting avec this.isDeleting

  if(this.isDeleting) {
    // si supprimé on enleve le data-word
    this.txt = fulltxt.substring( 0, this.txt.length - 1);

  } else {
    // sinon on ajoute un data-word
    this.txt = fulltxt.substring(0 , this.txt.length + 1);
  }

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  setTimeout(() => this.type(), 250);
}
// Init on dom load
document.addEventListener('DOMContentLoaded', init);

// Init APP
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

// Init TypeWriter
new TypeWriter(txtElement,words,wait);
}

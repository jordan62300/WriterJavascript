const TypeWriter = function(txtElement,words,wait = 3000) {
this.txtElement = txtElement;
this.words = words;
this.txt = "";
this.wordsIndex = 0;
this.wait = parseInt(wait,10);
this.type();
this.isDeleting = false;
}

// Type Method

// Init on dom load
document.addEvenetListener('DOMContentLoaded', init);

// Init APP
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
}
// Init TypeWriter
new TypeWriter(txtElement,words,wait);

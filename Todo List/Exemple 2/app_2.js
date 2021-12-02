let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

//La fonction click est affecter au boutton addToDo, elle créera un element paragraphe
addToDoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  //Elle créera un paragraphe dans une liste et ajoutera les regles de style de "paragraph-styling"
  paragraph.classList.add("paragraph-styling");
  //La valeur rentrer dans la barre de texte sera le texte créer
  //Le contenu du paragraphe créer se trouve dans la page HTML c'est donc la valeur écrite dans inputField
  paragraph.innerHTML = inputField.value;
  toDoContainer.appendChild(paragraph);

  //Remet le champs libre après une saisie grace aux accolades vides.
  //Littéralement La valeur de inputField est égale à rien. = inputField.valeur = ""
  inputField.value = "";

  //Avec un click active la fonction "barre le mot".
  //Les paragraphes vont êtres affectés (addEventListener) par la fonction "click"
  //Les paragraphes seront modifiés par un effet de style, une décoration de texte qui est barré.
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  //La fonction double click supprime le paragraphe.
  paragraph.addEventListener("dblclick", function () {
    paragraph.remove(paragraph);
  });
});

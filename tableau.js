const newbtn = document.getElementById("btn1")
const notes = document.getElementById("note")
const focus = document.querySelector(".note1")
const note = document.querySelectorAll("#note")

newbtn.addEventListener("click", () => {
  focus.focus();

  if (notes.hasAttribute("hidden")) {

    newbtn.textContent = "Notation par couleurs";
    note.forEach(input => {
      input.removeAttribute("hidden")

    });
  }
  else if (!notes.getAttribute("hidden") && !notes.getAttribute("style")) {
    newbtn.textContent = "Notation par note"
    note.forEach(function(input)  {
      input.setAttribute("style", "background-color:green")
        input.addEventListener("keydown", function (event) {
          var key = event.key;

          if (key >= "0" && key <= "5") {
            // Convertissez la touche en un index de couleur
            var colorIndex = parseInt(key);

            // Définissez la couleur de fond en fonction de l'index
            switch (colorIndex) {
              case 0:
                input.style.backgroundColor = "red";
                input.value = "";
                break;
              case 1:
                input.style.backgroundColor = "red";
                input.value = "";
                break;
              case 2:
                input.style.backgroundColor = "orange";
                input.value = "";
                break;
              case 3:
                input.style.backgroundColor = "yellow";
                input.value = "";
                break;
              case 4:
              case 5:
                input.style.backgroundColor = "green";
                input.value = "";
                break;
              default:
                // Réinitialisez la couleur si la touche n'est pas dans la plage 0-5
                input.style.backgroundColor = "";
                break;
            }
          }
        });
      
    });
  }
  else {
    newbtn.textContent = "Notation par couleurs"
    note.forEach(input => {
      input.removeAttribute("style")
    });
  }

});


var inputs = document.querySelectorAll('#note')

// verifie que la valeur de l'input est bien comprise entre 0 et 5

inputs.forEach(function (input, index) {
  input.addEventListener('input', function () {

    // Vérifiez si la valeur est comprise entre 0 et 5
    var value = parseInt(input.value);

    if (!isNaN(value) && value >= 0 && value <= 5) {
      // Passez au champ de saisie suivant s'il existe
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    } else {
      // Sinon, restez sur l'input actuel
      inputs.focus();
    }
  });
});


// permet d'effacer la note si elle n'est pas comprise entre 1 et 5
const noteInput = document.querySelectorAll("#note")

noteInput.forEach(input => {
  input.addEventListener('input', function () {
    const valeur = parseInt(this.value, 10);

    if (isNaN(valeur) || valeur < 0 || valeur > 5) {
      this.value = '';
    }
  });
});

// fonction pour reset toute les valeurs dans les inputs
function resetInputs() {
  // Obtenez tous les champs de saisie par leur class
  var input1 = document.querySelector(".note1");
  var input2 = document.querySelector(".note2");
  var input3 = document.querySelector(".note3");
  var input4 = document.querySelector(".note4");
  var input5 = document.querySelector(".note5");
  var input6 = document.querySelector(".note6");
  var input7 = document.querySelector(".note7");
  var input8 = document.querySelector(".note8");
  var input9 = document.querySelector(".note9");
  var input10 = document.querySelector(".note10");
  // Réinitialisez leurs valeurs à zéro
  input1.value = "";
  input2.value = "";
  input3.value = "";
  input4.value = "";
  input5.value = "";
  input6.value = "";
  input7.value = "";
  input8.value = "";
  input9.value = "";
  input10.value = "";

}

// Ajoutez un gestionnaire d'événements "click" au bouton "reset"
var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetInputs);







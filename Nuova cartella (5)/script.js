const prendiForm = document.querySelector("#myForm");
const prendiButtonUno = document.querySelector(".primo");
const prendiButtonDue = document.querySelector(".secondo");
const prendiDiv = document.querySelector("div");

function salvaEreset() {
    const valoreInput = prendiForm.querySelector("input").value;


    const nuovoElemento = document.createTextNode(valoreInput);


    while (prendiDiv.firstChild) {
        prendiDiv.removeChild(prendiDiv.firstChild);
    }


    prendiDiv.appendChild(nuovoElemento);


    localStorage.setItem("valore_salvato", valoreInput);


    prendiForm.reset();
}

function cancellaEreset() {
    while (prendiDiv.firstChild) {
        prendiDiv.removeChild(prendiDiv.firstChild);
    }


    localStorage.removeItem("valore_salvato");


    prendiForm.reset();
}

// Mostra il valore precedentemente salvato al caricamento della pagina
const valoreSalvato = localStorage.getItem("valore_salvato");
if (valoreSalvato) {
    const nuovoElemento = document.createTextNode(valoreSalvato);
    prendiDiv.appendChild(nuovoElemento);
}







function updateCounter() {
    // Ottieni il valore corrente del contatore da localStorage
    let counterValue = localStorage.getItem("tempo_contatore") || 0;
  
    // Incrementa il contatore
    counterValue = parseInt(counterValue) + 1;
  
    // Aggiorna il valore del contatore nel DOM
    document.getElementById("counter").innerText = "Tempo trascorso: " + counterValue + " secondi";
  
    // Salva il nuovo valore del contatore in localStorage
    localStorage.setItem("tempo_contatore", counterValue);
  }
  
  // Aggiorna il contatore ogni secondo
  setInterval(updateCounter, 1000);

console.log("Script is running");//test meddelande

//Sparar Url för att göra de lätt hanterbart

const Bilder = "Bilder.html";
const Kontakta = "Kontakta.html";
const Golvslipning = "Golvslipning.html";
const Startsida = "Startsida.html";


// Hämtar id från html document för de som ska ändras
let linkB = document.getElementById("linkB");
let linkK = document.getElementById("linkK");
let linkG = document.getElementById("linkG");
let linkS = document.getElementById("linkS");
let linkB1 = document.getElementById("linkB1");
let linkK1 = document.getElementById("linkK1");
let linkG1 = document.getElementById("linkG1");
let linkS1 = document.getElementById("linkS1");
let linkK2 = document.getElementById("linkK2");

// Ändrar urln för alla sidor som har idn under
linkB.setAttribute("href", Bilder);
linkK.setAttribute("href", Kontakta);
linkG.setAttribute("href", Golvslipning);
linkS.setAttribute("href", Startsida);
linkB1.setAttribute("href", Bilder);
linkK1.setAttribute("href", Kontakta);
linkG1.setAttribute("href", Golvslipning);
linkS1.setAttribute("href", Startsida);
linkK2.setAttribute("href", Kontakta);


// kollar om man har klickat på en bild om man har gjort de så förstoras bilden

// Vänta på att hela dokumentet ska laddas innan JavaScript-koden körs
document.addEventListener('DOMContentLoaded', function() {
    // Hämta alla element med klassen 'zommaEfterKlick' och spara dem i en variabel
    const bilder = document.querySelectorAll('.zommaEfterKlick');

    // Loopa igenom varje bild och lägg till en klickhändelse för varje bild
    bilder.forEach(bild => {
        bild.addEventListener('click', function() {
            // Kontrollera om bilden redan är förstorad genom att se om den har klassen 'zoomed'
            const isZoomed = this.classList.contains('zoomed');

            // Om bilden redan är förstorad, ta bort klassen 'zoomed' för att återställa den till normal storlek
            if (isZoomed) {
                this.classList.remove('zoomed');
            } else {
                // Om bilden inte är förstorad, ta bort 'zoomed' från alla andra bilder och lägg till det på den aktuella bilden
                bilder.forEach(otherImage => {
                    otherImage.classList.remove('zoomed');
                });
                this.classList.add('zoomed');
            }
        });
    });
});
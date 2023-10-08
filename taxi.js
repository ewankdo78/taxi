const Musiques = [
  "Anissa Wejdene",
  "Dumas Dj",
  "Shakira Wakawaka",
  "Maître Gims Bella",
  "Kaaris Zoo",
];

function Taxi() {
  let FeuxRouges = 30;
  let Ewan = 10;

  function Radio(x) {
    a = Math.floor(Math.random() * x);
  }

  while (FeuxRouges != 0 && Ewan != 0) {
    Radio(Musiques.length);
    console.log("Radio : " + Musiques[a] + ".");

    if (a === 0) {
      Ewan -= 1;
      console.log("Tu perds 1 vie, il t'en reste " + Ewan + ".");
    } else {
      FeuxRouges -= 1;
      console.log(
        "Il te reste " + FeuxRouges + " feux rouges avant d'arriver !"
      );
    }
  }
  if (Ewan === 0) {
    console.log("Explosion");
  }
  if (FeuxRouges === 0) {
    let Changements = 10 - Ewan;
    console.log("Tu es bien arrivé !");
    console.log("Il t'a fallu " + Changements + " changements de taxi.");
  }
}

Taxi();

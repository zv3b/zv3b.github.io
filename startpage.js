// index.html texts
let stemwijzerTitel = document.getElementById("stemwijzerNaam");
let stemwijzerBeschrijving = document.getElementById("stemwijzerBeschrijving");

window.onload = async function() {
  await getConfig();
}

async function getConfig() {
    const response = await fetch(jsonPath);
    const config = await response.json();
    
    //stemwijzerTitel.textContent = config.stemwijzernaam;
    //stemwijzerBeschrijving.textContent = config.stemwijzerbeschrijving;
}

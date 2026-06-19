// Set variables
const progressbar = document.getElementById("progressbar");
const stellingenRemainingText = document.getElementById("remainingStandpunten");

let stellingen;

let stellingTitleDisplay = document.getElementById("standpuntTitle");
let stellingTextDisplay = document.getElementById("standpuntText");

let progressbarCurrentProgress = 1;
let maxStellingen;

let stemwijzerTitel = document.getElementById("stemwijzerNaam");
let stemwijzerBeschrijving = document.getElementById("stemwijzerBeschrijving");

// json file path
const jsonPath = "/config.json";

let partijen;

window.onload = async function() {
  await getConfig();

  progressbar.max = maxStellingen;
  progressbar.value = progressbarCurrentProgress;

  updateRemainingStellingen();
  newStelling();
}

async function getConfig() {
    const response = await fetch(jsonPath);
    const config = await response.json();
    
    const title = config.titel;
    document.title = title; //debug

    maxStellingen = config.stellingen.length
    stellingen =  config.stellingen;
    partijen = config.partijen;

    if (stemwijzerTItel) {
      stemwijzerTitel.textContent = config.stemwijzernaam;
    }
    if (stemwijzerBeschrijving) {
      stemwijzerBeschrijving.textContent = config.stemwijzerbeschrijving;
    }

}

function progressbarEvolve() {
  if (progressbar.value < progressbar.max) {
    progressbar.value += 1;
    progressbarCurrentProgress += 1;
    updateRemainingStellingen();
    newStelling();
  } else {
    hideEverything()
  }
}

function updateRemainingStellingen() {
  stellingenRemainingText.textContent = `${progressbarCurrentProgress}/${maxStellingen}`;
}

function newStelling() {
  stellingTitleDisplay.textContent = `${stellingen[progressbarCurrentProgress - 1].stellingTitel}`; 
  stellingTextDisplay.textContent = `${stellingen[progressbarCurrentProgress - 1].stellingTekst}`; 
}

function updateScore(keuze) {
  let currentStandpunt = progressbarCurrentProgress - 1;
  partijen.forEach(partij => {
    let partyChoice = partij.meningen[currentStandpunt];
    if (partyChoice === keuze) {
      partij.score += 1;
    }
  });
  progressbarEvolve();
}

function hideEverything() {
  document.getElementById("footer").style.display = "none";
  document.getElementById("standpunt").style.display = "none";

  document.getElementById("result").style.display = "flex";
  getTop3();
}

function getTop3() {
  let copyPartijen = [...partijen].sort((a, b) => b.score - a.score);
  let top3 = copyPartijen.slice(0,3);

  let percentage1 = ((top3[0].score / maxStellingen) * 100).toFixed(1);
  let percentage2 = ((top3[1].score / maxStellingen) * 100).toFixed(1);
  let percentage3 = ((top3[2].score / maxStellingen) * 100).toFixed(1);

  //number 1
  document.getElementById("img1").src = `images/partijen/${top3[0].logo}`;
  document.getElementById("img1").style.backgroundColor = top3[0].kleur;
  document.getElementById("percentage1").textContent = `${percentage1}%`;
  document.getElementById("partij1Naam").textContent = top3[0].naam;

  //number 2
  document.getElementById("img2").src = `images/partijen/${top3[1].logo}`;
  document.getElementById("img2").style.backgroundColor = top3[1].kleur;
  document.getElementById("percentage2").textContent = `${percentage2}%`;
  document.getElementById("partij2Naam").textContent = top3[1].naam;

  //number 3
  document.getElementById("img3").src = `images/partijen/${top3[2].logo}`;
  document.getElementById("img3").style.backgroundColor = top3[2].kleur;
  document.getElementById("percentage3").textContent = `${percentage3}%`;
  document.getElementById("partij3Naam").textContent = top3[2].naam;
}

"use strict";

const btnA = document.querySelector('div[data-key="65"]');
const btnS = document.querySelector('div[data-key="83"]');
const btnD = document.querySelector('div[data-key="68"]');
const btnF = document.querySelector('div[data-key="70"]');
const btnG = document.querySelector('div[data-key="71"]');
const btnH = document.querySelector('div[data-key="72"]');
const btnJ = document.querySelector('div[data-key="74"]');
const btnK = document.querySelector('div[data-key="75"]');
const btnL = document.querySelector('div[data-key="76"]');

const audioA = document.querySelector('audio[data-key="65"]');
const audioS = document.querySelector('audio[data-key="83"]');
const audioD = document.querySelector('audio[data-key="68"]');
const audioF = document.querySelector('audio[data-key="70"]');
const audioG = document.querySelector('audio[data-key="71"]');
const audioH = document.querySelector('audio[data-key="72"]');
const audioJ = document.querySelector('audio[data-key="74"]');
const audioK = document.querySelector('audio[data-key="75"]');
const audioL = document.querySelector('audio[data-key="76"]');

document.addEventListener("keydown", function (e) {
  const keyPressed = e.key;
  switch (keyPressed) {
    case "a":
      btnA.classList.add("playing");
      audioA.play();
      break;
    case "s":
      btnS.classList.add("playing");
      audioS.play();
      break;
    case "d":
      btnD.classList.add("playing");
      audioD.play();
      break;

    case "f":
      btnF.classList.add("playing");
      audioF.play();
      break;

    case "g":
      btnG.classList.add("playing");
      audioG.play();
      break;

    case "h":
      btnH.classList.add("playing");
      audioH.play();
      break;

    case "j":
      btnJ.classList.add("playing");
      audioJ.play();
      break;

    case "k":
      btnK.classList.add("playing");
      audioK.play();
      break;

    case "l":
      btnL.classList.add("playing");
      audioL.play();
      break;
  }
  
});

document.addEventListener("keyup", function (e) {
  const keyReleased = e.key;
  switch (keyReleased) {
    case "a":
      btnA.classList.remove("playing");
      break;
    case "s":
      btnS.classList.remove("playing");
      break;
    case "d":
      btnD.classList.remove("playing");
      break;
    case "f":
      btnF.classList.remove("playing");
      break;
    case "g":
      btnG.classList.remove("playing");
      break;
    case "h":
      btnH.classList.remove("playing");
      break;
    case "j":
      btnJ.classList.remove("playing");
      break;
    case "k":
      btnK.classList.remove("playing");
      break;
    case "l":
      btnL.classList.remove("playing");
      break;
  }

});

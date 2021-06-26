"use strict";

const program = {
  btnA: document.querySelector('div[data-key="65"]'),
  btnS: document.querySelector('div[data-key="83"]'),
  btnD: document.querySelector('div[data-key="68"]'),
  btnF: document.querySelector('div[data-key="70"]'),
  btnG: document.querySelector('div[data-key="71"]'),
  btnH: document.querySelector('div[data-key="72"]'),
  btnJ: document.querySelector('div[data-key="74"]'),
  btnK: document.querySelector('div[data-key="75"]'),
  btnL: document.querySelector('div[data-key="76"]'),

  audioA: document.querySelector('audio[data-key="65"]'),
  audioS: document.querySelector('audio[data-key="83"]'),
  audioD: document.querySelector('audio[data-key="68"]'),
  audioF: document.querySelector('audio[data-key="70"]'),
  audioG: document.querySelector('audio[data-key="71"]'),
  audioH: document.querySelector('audio[data-key="72"]'),
  audioJ: document.querySelector('audio[data-key="74"]'),
  audioK: document.querySelector('audio[data-key="75"]'),
  audioL: document.querySelector('audio[data-key="76"]'),
  keys: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
};

program.keys.forEach((key) => {
  document.addEventListener("keydown", function (e) {
    if (e.key.toUpperCase() === key) {
      program[`btn${key}`].classList.add("playing");
      program[`audio${key}`].play();
    }
  });
  document.addEventListener("keyup", function (e) {
    if (e.key.toUpperCase() === key) {
      program[`btn${key}`].classList.remove("playing");
//       program[`audio${key}`].load();
    }
  });
});

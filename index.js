//Detecting button press

let buttonClick = document.querySelectorAll('.drum');
for(i=0; i<buttonClick.length; i++) {
document.querySelectorAll('.drum')[i].addEventListener('click', hendalClick);

}

function hendalClick () {
let pressButtonSoundInnerHTML = this.innerHTML;
getSound(pressButtonSoundInnerHTML);
buttonAnimation(pressButtonSoundInnerHTML);
}

//Detecting keyboard press
document.addEventListener('keydown', function(event) {
getSound(event.key);
buttonAnimation(event.key);
});
//Take information from button and keyboard => make sound.
function getSound(key) {
  switch (key) {
    case 'w':
    let tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;
    case 'a':
    let tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;
    case 's':
    let tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;
    case 'd':
    let tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;
    case 'j':
    let snare = new Audio('sounds/snare.mp3');
    snare.play();
    case 'k':
    let crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;
    case 'l':
    let kickbass = new Audio('sounds/kick-bass.mp3');
    kickbass.play();
    break;
    //default: console.log(pressButtonSoundInnerHTML);

  }
}

function buttonAnimation(kurrentKey) {

  let activeButton = document.querySelector('.' + kurrentKey);

  activeButton.classList.add('pressed');


  setTimeout(function() {

    activeButton.classList.remove('pressed');

  }, 100);

}

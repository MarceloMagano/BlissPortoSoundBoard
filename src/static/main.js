function playAudioOnClick(elem) {
    var keyNumber = elem.dataset.key;
    var audio = document.querySelector('audio[data-key="' + keyNumber + '"]');
    var key = document.querySelector('div[data-key="' + keyNumber + '"]');
    removeAnimations();
    key.classList.add('bounce', 'animated');
    playSound(audio, key);
}

function keyDownHandler(e) {
  var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
  var key = document.querySelector('div[data-key="' + e.keyCode + '"]');
  removeAnimations();
  
   
  setTimeout(() => {
  key.classList.add('bounce', 'animated');  
  }, 1);
  
  playSound(audio, key);
}

function removeAnimations() {
  var keys = Array.from(document.querySelectorAll(".soundboard__key"));
  keys.forEach(function (key) {
    return key.classList.remove('bounce', 'animated');
  });
}

function stopEveryone() {
  var allAudios = document.getElementsByTagName('audio');
  var allKeys = document.getElementsByClassName('soundboard__key');
  for (var i = 0, len = allAudios.length; i < len; i++) {
    allAudios[i].pause();
    allAudios[i].currentTime = 0;
  }
  for (var i = 0, len = allKeys.length; i < len; i++) {
    allKeys[i].classList.remove('bounce', 'animated');
  }
}

function playSound(audio, key) {
  stopEveryone();
  audio.currentTime = 0;
  console.log('asd');
  audio.play();
}

var keys = Array.from(document.querySelectorAll(".soundboard__key"));

keys.forEach(function (key) {
  return key.addEventListener("click", clickHandler);
});

window.addEventListener("keydown", keyDownHandler);

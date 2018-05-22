(function () {
  function keyDownHandler(e) {
    var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
    var key = document.querySelector('div[data-key="' + e.keyCode + '"]');
    removeAnimations();
    key.classList.add('bounce', 'animated');
    playSound(audio, key);
  }

  function removeAnimations() {
    var keys = Array.from(document.querySelectorAll(".soundboard__key"));
    keys.forEach(function (key) {
      return key.classList.remove('bounce', 'animated');
    });
  }

  function clickHandler(e) {
    var audio = document.querySelector('audio[data-key="' + this.dataset.key + '"]');
    var key = document.querySelector('div[data-key="' + this.dataset.key + '"]');
    playSound(audio, key);
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
    audio.play();
  }

  var keys = Array.from(document.querySelectorAll(".soundboard__key"));

  keys.forEach(function (key) {
    return key.addEventListener("click", clickHandler);
  });

  window.addEventListener("keydown", keyDownHandler);

  // document.addEventListener("play", function (e) {
  //   var audios = document.getElementsByTagName("audio");
  //   for (var i = 0, len = audios.length; i < len; i++) {
  //     if (window.CP.shouldStopExecution(1)) {
  //       break;
  //     }
  //     if (audios[i] != e.target) {
  //       audios[i].pause();
  //     }
  //   }
  //   window.CP.exitedLoop(1);

  // }, true);
})();
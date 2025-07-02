document.addEventListener('DOMContentLoaded', function() {
  const BotonAudio = document.getElementById('BotonAudio');
  const Audio = document.getElementById('Audio');

  BotonAudio.addEventListener('click', function() {
    Audio.play();
  });
});

//Actualizado
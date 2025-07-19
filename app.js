let currentAudio = null;

function playSound(filename) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = new Audio('sounds/' + filename);
  currentAudio.volume = document.getElementById('volume').value;
  currentAudio.play();
}

function pauseSound() {
  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause();
  } else {
    currentAudio.play();
  }
}

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}

document.getElementById('volume').addEventListener('input', function () {
  if (currentAudio) {
    currentAudio.volume = this.value;
  }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker Registered'));
}

function showToast(message){
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.className = 'toast';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('installBtn').style.display = 'block';
});

document.getElementById('installBtn').addEventListener('click', () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
      document.getElementById('installBtn').style.display = 'none';
    });
  }
});


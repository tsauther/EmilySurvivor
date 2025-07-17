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
  // Prevent Chrome from showing the default prompt
  e.preventDefault();
  // Save the event so it can be triggered later
  deferredPrompt = e;

  // Show your custom install button or UI
  const installBtn = document.getElementById('installBtn');
  installBtn.style.display = 'block';

  installBtn.addEventListener('click', () => {
    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user's response
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showToast("The app has been installed.");
        installBtn.style.display = 'none';
      } 
      deferredPrompt = null;
    });
  });
});


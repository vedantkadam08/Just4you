// No special JS needed yet.
// Elements
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const popupVideo = document.getElementById("popupVideo");
const closePopup = document.getElementById("closePopup");

// IMAGE CLICK
document.querySelectorAll(".photo img").forEach(img => {
  img.addEventListener("click", () => {
    popupVideo.style.display = "none";
    popupImg.style.display = "block";
    popupImg.src = img.src;
    popup.style.display = "flex";
  });
});

// VIDEO CLICK
document.querySelectorAll(".video-thumb").forEach(v => {
  v.addEventListener("click", () => {
    popupImg.style.display = "none";
    popupVideo.style.display = "block";
    popupVideo.src = v.getAttribute("data-src");
    popup.style.display = "flex";
  });
});

// CLOSE POPUP
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
  popupVideo.pause();
});

// Close on background click
popup.addEventListener("click", e => {
  if(e.target === popup){
    popup.style.display = "none";
    popupVideo.pause();
  }
});
// elements
const bg = document.getElementById('bgMusic');
const mbtn = document.getElementById('musicToggle');
const popup = document.getElementById('musicPopup');
const popupStart = document.getElementById('popupStart');

let playing = false;

// Popup start button
popupStart.addEventListener('click', () => {
  popup.classList.add('hidden');  // hide popup

  bg.play().then(() => {
    playing = true;
    mbtn.innerText = "Pause music";
  }).catch(() => {
    // autoplay blocked but popup counts as user gesture, so it shouldn't fail
  });
});

// Music toggle button
mbtn.addEventListener('click', () => {
  if (!playing) {
    bg.play().catch(()=>{});
    mbtn.innerText = 'Pause music';
    playing = true;
  } else {
    bg.pause();
    mbtn.innerText = 'Play music';
    playing = false;
  }
});


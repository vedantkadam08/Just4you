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


<script>
  // Get the elements
  const bg = document.getElementById('bgMusic');
  const mbtn = document.getElementById('musicToggle');
  const popup = document.getElementById('introPopup');

  let playing = false;

  // 1. Logic for the INITIAL POP-UP CLICK
  popup.addEventListener('click', () => {
    // Start music (This initial click bypasses the autoplay block)
    bg.play().catch(() => {});
    playing = true;

    // Change the music button text immediately
    mbtn.innerText = 'Pause music';

    // Apply the fade-out animation class
    popup.classList.add('fade-out');

    // Wait for the transition to finish (1.5s from CSS) and then remove the element
    popup.addEventListener('transitionend', () => {
      popup.remove();
    }, { once: true });
  });

  // 2. Logic for the EXISTING MUSIC TOGGLE BUTTON
  mbtn.addEventListener('click', () => {
    // Only toggle if the popup has been clicked and the music started
    if (playing) {
      bg.pause();
      mbtn.innerText = 'Play music';
      playing = false;
    } else {
      // Use .play() on the audio element, not on the promise result
      bg.play().catch(() => {});
      mbtn.innerText = 'Pause music';
      playing = true;
    }
  });
</script>

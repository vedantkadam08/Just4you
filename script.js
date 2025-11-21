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

<style>
  /* Base style for the popup */
  #introPopup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000; /* Black background */
    color: #fff; /* White text */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    cursor: pointer;
    z-index: 1000; /* Make sure it's on top of everything */
    transition: transform 1.5s ease-out, opacity 1.5s ease-out; /* For the fade-out effect */
    user-select: none; /* Prevent text selection */
  }

  /* Style for the text inside */
  #introPopup p {
    text-align: center;
    padding: 20px;
    border: 2px solid white;
    border-radius: 10px;
  }

  /* Class to trigger the rotation and fade-out */
  .fade-out {
    opacity: 0;
    transform: rotate(360deg) scale(0); /* Rotate and shrink */
  }
</style>

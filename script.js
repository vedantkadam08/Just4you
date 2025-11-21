// No special JS needed yet.
// Create lightbox elements
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
lightbox.innerHTML = `
  <span id="lightbox-close">&times;</span>
  <img id="lightbox-content" />
`;
document.body.appendChild(lightbox);

const lightboxImg = document.getElementById("lightbox-content");
const lightboxClose = document.getElementById("lightbox-close");

// OPEN IMAGE IN POPUP
document.querySelectorAll(".photo img").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.style.display = "block";
    lightbox.style.display = "flex";
  });
});

// OPEN VIDEO IN POPUP (original aspect ratio)
document.querySelectorAll(".video-thumb").forEach(vid => {
  vid.addEventListener("click", () => {
    const videoSrc = vid.getAttribute("data-src");
    lightboxImg.outerHTML = `<video id="lightbox-content" controls autoplay style="max-width:95vw;max-height:95vh;object-fit:contain;border-radius:10px;"></video>`;
    const videoElement = document.getElementById("lightbox-content");
    videoElement.src = videoSrc;
    lightbox.style.display = "flex";
  });
});

// CLOSE POPUP
lightboxClose.addEventListener("click", () => {
  lightbox.style.display = "none";
});
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) lightbox.style.display = "none";
});

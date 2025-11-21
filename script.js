// No special JS needed yet.
function showPlaceholder(el) {
    el.src = "images/placeholder.jpg";
}

function openLightbox(src) {
    const lb = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    img.src = src;
    lb.classList.add("show");
}

function closeLightbox() {
    document.getElementById("lightbox").classList.remove("show");
}


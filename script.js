// No special JS needed yet.
function openPreview(src) {
    document.getElementById("previewImg").src = src;
    document.getElementById("imgPreview").style.display = "flex";
}

function closePreview() {
    document.getElementById("imgPreview").style.display = "none";
}

function showPlaceholder(img) {
    img.src = "images/placeholder.jpg";
}

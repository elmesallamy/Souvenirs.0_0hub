function toggleMenu() {
    document.getElementById('items').classList.toggle('active');
}
function toggleMenu() {
    const items = document.getElementById('items');
    items.classList.toggle('active');
}

// إخفاء القائمة عند الضغط على أي لينك داخلها
document.querySelectorAll('#items a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('items').classList.remove('active');
    });
});

// إخفاء القائمة عند الضغط في أي مكان خارجها
document.addEventListener('click', function (e) {
    const menu = document.getElementById('items');
    const toggle = document.querySelector('.menu-toggle');

    if (
        menu.classList.contains('active') &&
        !menu.contains(e.target) &&
        !toggle.contains(e.target)
    ) {
        menu.classList.remove('active');
    }
});







document.addEventListener("DOMContentLoaded", function () {
    let currentZoom = 1;
    const popupImage = document.getElementById("popup-image");

    window.openPopup = function (src) {
        popupImage.src = src;
        document.getElementById("popup-download").href = src;
        document.getElementById("popup-container").style.display = "flex";
        currentZoom = 1;
        popupImage.style.transform = `scale(${currentZoom})`;
    };

    window.closePopup = function () {
        document.getElementById("popup-container").style.display = "none";
    };

    window.zoomIn = function () {
        currentZoom += 0.1;
        popupImage.style.transform = `scale(${currentZoom})`;
    };

    window.zoomOut = function () {
        currentZoom = Math.max(1, currentZoom - 0.1);
        popupImage.style.transform = `scale(${currentZoom})`;
    };
});

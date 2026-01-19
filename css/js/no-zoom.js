// منع التكبير عبر اللمس المتعدد (Pinch Zoom)
document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

// منع التكبير عند النقر المزدوج
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    let now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

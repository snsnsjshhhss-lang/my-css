window.addEventListener("load", function () {
    const splash = document.getElementById("booking-splash");
    if (!splash) return;

    setTimeout(() => {
        splash.style.transition = "opacity .35s ease";
        splash.style.opacity = "0";
        setTimeout(() => splash.remove(), 350);
    }, 1000);
});

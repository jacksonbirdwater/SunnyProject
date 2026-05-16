window.addEventListener("DOMContentLoaded", () => {

  // BOOT → DESKTOP
  setTimeout(() => {
    document.getElementById("boot-screen").style.display = "none";
    document.getElementById("desktop").style.display = "block";
  }, 2000);

  // MEDIA PLAYER
  window.openPlayer = function () {
    document.getElementById("media-player").classList.remove("hidden");
  };

  window.closePlayer = function () {
    document.getElementById("media-player").classList.add("hidden");
  };

  window.playSong = function (file) {
    const audio = document.getElementById("audio");
    audio.src = file;
    audio.play();
  };

  // DRAG SYSTEM (FIXED)
    let activeWindow = null;
    let offsetX = 0;
    let offsetY = 0;

    document.addEventListener("mousedown", (e) => {
    const bar = e.target.closest(".title-bar");
    if (!bar) return;

    activeWindow = bar.closest(".window");

    if (!activeWindow) return;

    offsetX = e.clientX - activeWindow.offsetLeft;
    offsetY = e.clientY - activeWindow.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
    if (!activeWindow) return;

    activeWindow.style.left = (e.clientX - offsetX) + "px";
    activeWindow.style.top = (e.clientY - offsetY) + "px";
    });

    document.addEventListener("mouseup", () => {
    activeWindow = null;
    });

});
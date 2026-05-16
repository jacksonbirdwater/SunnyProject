// BOOT → DESKTOP
setTimeout(() => {
  document.getElementById("boot-screen").style.display = "none";
  document.getElementById("desktop").style.display = "block";
}, 2000);

// MEDIA PLAYER
function openPlayer() {
  document.getElementById("media-player").classList.remove("hidden");
}

function closePlayer() {
  document.getElementById("media-player").classList.add("hidden");
}

function playSong(file) {
  const audio = document.getElementById("audio");
  audio.src = file;
  audio.play();
}

// DRAG SYSTEM (ALL WINDOWS)
let activeWindow = null;
let offsetX = 0;
let offsetY = 0;

document.querySelectorAll(".window").forEach(win => {
  const bar = win.querySelector(".title-bar");

  bar.addEventListener("mousedown", (e) => {
    activeWindow = win;

    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
  });
});

document.addEventListener("mousemove", (e) => {
  if (!activeWindow) return;

  activeWindow.style.left = (e.clientX - offsetX) + "px";
  activeWindow.style.top = (e.clientY - offsetY) + "px";
});

document.addEventListener("mouseup", () => {
  activeWindow = null;
});
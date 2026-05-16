setTimeout(() => {
    document.getElementById("boot-screen").classList.add("fade-out");

    setTimeout(() => {
        document.getElementById("boot-screen").remove();

        // show desktop instead of site-content
        document.getElementById("desktop").style.display = "block";

        document.body.style.overflow = "auto";
    }, 1000);

}, 4000);

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

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

const windowEl = document.getElementById("media-player");
const dragBar = document.getElementById("drag-bar");

dragBar.addEventListener("mousedown", (e) => {
  isDragging = true;

  offsetX = e.clientX - windowEl.offsetLeft;
  offsetY = e.clientY - windowEl.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  windowEl.style.left = (e.clientX - offsetX) + "px";
  windowEl.style.top = (e.clientY - offsetY) + "px";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
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
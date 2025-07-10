const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const stopButton = document.querySelector(".stop");

sounds.forEach(sound => {
    const audio = new Audio(`sounds/${sound}.mp3`);
    document.querySelector(`[data-sound="${sound}"]`).addEventListener("click", () => {
        stopSounds();
        audio.play();
    });
});

stopButton.addEventListener("click", stopSounds);

function stopSounds() {
    document.querySelectorAll("audio").forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

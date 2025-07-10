//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
const stop = document.querySelector("#stop");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const text = button.innerText;
    console.log(text)
    const audio = new Audio(`sounds/${text}.mp3`);
	  stop.click();
    audio.play();
  });
});
stop.addEventListener("click", () => {
  const audios = document.querySelectorAll("audio");
  audios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0; // Reset the audio to the beginning
  });
  console.log("All sounds stopped.");
});


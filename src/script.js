// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Video Control (Card 1)
const videoIframe = document.querySelector("#video-iframe");
const videoCard = videoIframe ? videoIframe.closest(".group") : null;

if (videoIframe && videoCard) {
  videoCard.addEventListener("mouseenter", () => {
    videoIframe.contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
  });

  videoCard.addEventListener("mouseleave", () => {
    videoIframe.contentWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      "*"
    );
  });
}

// Audio Player Logic
const musicToggle = document.querySelector("#music-toggle");
const bgMusic = document.querySelector("#bg-music");
const playIcon = document.querySelector("#music-icon-play");
const pauseIcon = document.querySelector("#music-icon-pause");

if (musicToggle && bgMusic) {
  musicToggle.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      playIcon.classList.add("hidden");
      pauseIcon.classList.remove("hidden");
      musicToggle.classList.add("animate-pulse");
    } else {
      bgMusic.pause();
      playIcon.classList.remove("hidden");
      pauseIcon.classList.add("hidden");
      musicToggle.classList.remove("animate-pulse");
    }
  });
}

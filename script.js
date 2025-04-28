function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* GSAP scripts */
let tl = gsap.timeline();
tl.from(".letter-n", {
  x: -200,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out",
});

gsap.to(".letter-n-2", {
  color: "red",
  repeat: -1,
  yoyo: true,
  duration: 1,
  ease: "power1.inOut",
});

document.addEventListener("DOMContentLoaded", function () {
  const balloon = document.getElementById("balloon");
  balloon.addEventListener("mouseenter", () => {
    balloon.innerHTML = "🎈";
    balloon.classList.add("emoji");

    gsap.to(".o-to-balloon", {
      y: -500,
      rotation: 360,
      scale: 1.5,
      opacity: 0,
      duration: 2,
      ease: "bounce.out",
      onComplete: () => {
        balloon.style.display = "none";
      },
    });
  });
});

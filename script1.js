document.addEventListener("DOMContentLoaded", () => {
  let clearinter;
  const canva = document.getElementById("background");
  const ctx = canva.getContext("2d");
  canva.width = window.innerWidth;
  canva.height = window.innerHeight;
  const characters =
    "ضصثقفغعهخحجدشسيبلاتنمكطئءؤرﻻىةوزظذإآﻵﻷabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン@#$%^&*()*&^%+-/~{[|`]}<>".split(
      "",
    );
  const font = 20;
  var font_color = "#1d5e0c";
  func_intveral = 50;
  const columns = canva.width / font;
  const drops = [];
  let autotime = 1000;
  let colorinter;
  let raininter;
  let prlink = document.getElementById("prlink");
  const prlinkwidth = prlink.offsetWidth;
  let raincheck = document.getElementById("raincheck");
  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
  }
  function clearrain() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canva.width, canva.height);
  }
  function randcolor() {
    let color = "#";
    let red = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    let green = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    let blue = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    font_color = color + red + green + blue;
  }
  function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canva.width, canva.height);
    ctx.fillStyle = font_color;
    ctx.font = `${font}px monospace`;
    for (let i = 0; i < drops.length; i++) {
      const text = characters[Math.floor(Math.random() * characters.length)];
      ctx.fillText(text, i * font, drops[i] * font);
      drops[i]++;
      if (drops[i] * font > canva.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
    }
  }
  prlink.addEventListener("mouseenter", () => {
    prlink.innerText = "YES!";
    prlink.style.width = prlinkwidth + "px";
  });
  prlink.addEventListener("mouseleave", () => {
    prlink.innerText = " Wanna see my GREAT projects?!!";
    prlink.style.width = prlinkwidth + "px";
  });
  raininter = setInterval(draw, func_intveral);
  window.addEventListener("resize", () => {
    canva.width = window.innerWidth;
    canva.height = window.innerHeight;
  });
  const colorsec = document.getElementById("colorsec");
  colorsec.value = font_color;
  colorsec.addEventListener("input", () => {
    font_color = colorsec.value;
  });
  let colorcheckbox = document.getElementById("autocolor");
  colorcheckbox.addEventListener("change", () => {
    if (colorcheckbox.checked == true) {
      colorinter = setInterval(randcolor, 1000);
    } else if (colorcheckbox.checked == false) {
      clearInterval(colorinter);
    }
  });
  raincheck.addEventListener("change", () => {
    if (raincheck.checked == true) {
      clearInterval(raininter);
      clearinter = setInterval(clearrain, func_intveral);
    } else {
      clearInterval(clearinter);
      raininter = setInterval(draw, func_intveral);
    }
  });
  console.log("JS working");
});

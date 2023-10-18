import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

document.querySelector("h1").addEventListener("click", function (e) {
  alert("Hoş Geldiniz!");
});

document.querySelector("h2").addEventListener("double click", function (e) {
  alert("Hoş Geldiniz!");
});

const menuItems = document.querySelectorAll("header div nav a");
menuItems.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    item.classList.toggle("italic");
    console.log("mouseOver");
  });
});

// const destination = document.getElementsByClassName("destination");
// window.addEventListener("pink", pause);
// window.addEventListener("Beni de Al!", play);

// const textArea = document.querySelector("footer");
// textArea.addEventListener("focus", () => {
//   // Textarea odak kazandığında konsola bir mesaj göster
//   console.log("Textarea odaklandı!");
// });

// textArea.addEventListener("blur", () => {
//   // Textarea odak kaybettiğinde konsola başka bir mesaj göster
//   console.log("Textarea odak kaybetti!");
// });

const footer = document.querySelector("footer p");
document.addEventListener("keydown", function (event) {
  if (event.key === "f") {
    document.getElementsByClassName("footer p").innerText =
      "© Eğlence Otobüsü 2023";
  }
  console.log(footer);
});

const badi = document.querySelector("body");
badi.classList.add("loading");

window.addEventListener("load", (event) => {
  //   alert("Selam Murat hocam! ");
  badi.classList.remove("loading");
  console.log("page is fully loaded");
});

const menuItems = document.querySelectorAll(".nav-link");

menuItems.forEach((item) => {
  item.addEventListener("focus", (event) => {
    event.target.style.background = "red";
    event.target.style.fontSize = "2rem";
  });

  item.addEventListener("blur", (event) => {
    event.target.style.background = "none";
    event.target.style.fontSize = "1.6rem";
  });
});

let scale = 1;
function zoom(event, elParam) {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 1.4);
  // Apply scale transform
  elParam.style.transform = `scale(${scale})`;
}

let imagesNodeList = document.querySelectorAll("img");
imagesNodeList.forEach((imgEl) => {
  imgEl.addEventListener(
    "mouseover",
    (event) => {
      event.target.style.transform = "scale(1.1)";
      imgEl.addEventListener(
        "wheel",
        (event) => zoom(event, imgEl)
        // { once: true }
      );
    }
    // { once: true }
  );
  imgEl.addEventListener("mouseout", (event) => {
    event.target.style.transform = "scale(1)";
    imgEl.removeEventListener("wheel", (event) => zoom(event, imgEl));
  });
});

addEventListener("resize", (event) => {
  console.log(window.innerHeight, window.innerWidth);
});

const theInput = document.createElement("input");
theInput.setAttribute("type", "text");

theInput.addEventListener("select", (event) => {
  console.log(event.target.value);
});

const intro = document.querySelector(".intro");
intro.appendChild(theInput);

// intro section altına bir textarea ekleyip, içeride seçilen metnin etrafına tırnak ekleyelim

const introSection = document.querySelector(".intro");
const textareaEl = document.createElement("textarea");
textareaEl.style.width = "100%";
textareaEl.style.height = "100px";
introSection.appendChild(textareaEl);

textareaEl.addEventListener("select", (event) => {
  const selectedText = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  );
  event.target.value = event.target.value.replace(
    selectedText,
    `<strong>${selectedText}</strong>`
  );
});

window.document.addEventListener("click", (e) => {
  console.log("mouse click event", e);
});

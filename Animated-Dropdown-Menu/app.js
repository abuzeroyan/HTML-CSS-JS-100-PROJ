const open = document.getElementById("open"); // "open" id'sine sahip elementi seçer
const close = document.getElementById('close'); // "close" id'sine sahip elementi seçer
const container = document.querySelector(".container"); // "container" sınıfına sahip elementi seçer

open.addEventListener("click", () => { 
    container.classList.add("show-nav"); // "open" elementi tıklandığında "container" elementine "show-nav" sınıfını ekler
});

close.addEventListener("click", () => {
    container.classList.remove("show-nav"); // "close" elementi tıklandığında "container" elementinden "show-nav" sınıfını kaldırır
});

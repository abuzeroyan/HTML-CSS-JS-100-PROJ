
// Tüm ".panel" sınıfına sahip öğeleri seçer ve bir NodeList döner
const panels = document.querySelectorAll(".panel");

// Tüm paneller üzerinde döngü yapar
panels.forEach(panel => {
    // Her bir panele tıklama olayı ekler
    panel.addEventListener("click", () => {
        // Aktif sınıfı olanları kaldırmak için fonksiyonu çağırır
        removeActive();
        // Tıklanan panele "active" sınıfı ekler
        panel.classList.add("active");
    });
});

// Tüm panellerden "active" sınıfını kaldıran fonksiyon
function removeActive() {
    // Tüm paneller üzerinde döngü yapar
    panels.forEach(panel => {
        // Her bir panelden "active" sınıfını kaldırır
        panel.classList.remove("active");
    });
}

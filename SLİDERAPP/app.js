let correntIndex = 0; // Geçerli görüntünün indeksini tutar
const slider = document.querySelector('.slider'); // Slider container'ını seçer
const prevButton = document.getElementById('prevButton'); // "Önceki" butonunu seçer
const nextButton = document.getElementById('nextButton'); // "Sonraki" butonunu seçer
const images = slider.querySelectorAll('img'); // Slider içindeki tüm görüntüleri seçer
const imageCount = images.length; // Görüntülerin sayısını alır

// "Önceki" butonuna tıklanıldığında showPrevImage işlevini çağırır
prevButton.addEventListener('click', showPrevImage); 
// "Sonraki" butonuna tıklanıldığında showNextImage işlevini çağırır
nextButton.addEventListener('click', showNextImage);

// Önceki görüntüyü gösterir
function showPrevImage(){
    correntIndex = (correntIndex - 1 + imageCount) % imageCount; // Geçerli indeksi bir azaltır, gerekirse döngüsel olarak en son görüntüye gider
    updateSlider(); // Slider'ı günceller
}

// Sonraki görüntüyü gösterir
function showNextImage(){
    correntIndex = (correntIndex + 1) % imageCount; // Geçerli indeksi bir artırır, gerekirse döngüsel olarak ilk görüntüye gider
    updateSlider(); // Slider'ı günceller
}

// Slider'ı günceller ve geçerli görüntüyü gösterir
function updateSlider(){
    const slideWidth = 300; // Bir görüntünün genişliğini piksel cinsinden belirler
    const offset = -correntIndex * slideWidth; // Geçerli indekse göre kaydırma mesafesini hesaplar
    slider.style.transform = `translateX(${offset}px)`; // Slider'ı hesaplanan mesafe kadar yatayda kaydırır
}

updateSlider(); // Sayfa yüklendiğinde başlangıçta slider'ı günceller

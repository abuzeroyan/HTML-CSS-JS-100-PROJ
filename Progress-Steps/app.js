const progress = document.getElementById("progress"); // İlerleme çubuğu elemanını seç
const circles = document.querySelectorAll(".circle"); // Tüm daire elemanlarını seç
const prev = document.getElementById("prev"); // 'Önceki' butonunu seç
const next = document.getElementById("next"); // 'Sonraki' butonunu seç

let currentActive = 1; // Başlangıçta aktif olan daireyi 1 olarak ayarla

next.addEventListener("click", () => { // 'Sonraki' butonuna tıklama olayı ekle
    currentActive++; // currentActive değişkenini 1 artır
    
    if (currentActive > circles.length) { // Eğer currentActive, daire sayısını geçerse
        currentActive = circles.length; // currentActive'i daire sayısına eşitle
    }
    uptade(); // uptade fonksiyonunu çağır
});

prev.addEventListener("click", () => { // 'Önceki' butonuna tıklama olayı ekle
    currentActive--; // currentActive değişkenini 1 azalt
    if (currentActive < 1) { // Eğer currentActive 1'den küçükse
        currentActive = 1; // currentActive'i 1 olarak ayarla
    }
    uptade(); // uptade fonksiyonunu çağır
});

function uptade() { // İlerleme çubuğunu ve daireleri güncelleyen fonksiyon
    circles.forEach((circle, index) => { // Tüm daireleri döngüye al
        if (index < currentActive) { // Eğer daire index'i currentActive'den küçükse
            circle.classList.add("active"); // Daireye 'active' sınıfı ekle
        } else { // Değilse
            circle.classList.remove("active"); // Daireden 'active' sınıfını kaldır
        }
    });
    const actives = document.querySelectorAll(".active"); // Tüm 'active' sınıfına sahip daireleri seç

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%"; // İlerleme çubuğu genişliğini ayarla

    if (currentActive === 1) { // Eğer currentActive 1 ise
        prev.disabled = true; // 'prev' butonunu devre dışı bırak
    } else if (currentActive === circles.length) { // Eğer currentActive daire sayısına eşitse
        next.disabled = true; // 'next' butonunu devre dışı bırak
    } else { // Diğer durumlarda
        prev.disabled = false; // 'prev' butonunu etkinleştir
        next.disabled = false; // 'next' butonunu etkinleştir
    }
}

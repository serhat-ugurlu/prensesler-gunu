document.getElementById('princessButton').addEventListener('click', function() {
    const button = this;
    const message = document.getElementById('celebrationMessage');
    const heartContainer = document.getElementById('heartContainer');
    const heartPath = document.getElementById('heartPath');

    // 1. Butonu etkisizleştir ve değiştir
    button.textContent = '💖';
    button.disabled = true;
    
    // Butonu yavaşça gizle (kalp görünürken)
    button.style.opacity = '0';
    button.style.transition = 'opacity 0.5s ease';

    // 2. Mesajı göster (Butonun ortasında kalması için container stili ayarlandı)
    message.classList.remove('hidden');
    setTimeout(() => {
        message.classList.add('visible');
    }, 10); 

    // 3. Kalbi görünür yap ve çizim animasyonunu başlat
    heartContainer.classList.remove('hidden-heart');
    heartContainer.style.opacity = '1';
    
    // Kalp çizim animasyonunu tetikle
    heartPath.classList.add('drawing');

    // 3 saniye sonra kalbin içini doldur ve titreme animasyonuna başla
    setTimeout(() => {
        // Kalbin içini kırmızıyla doldur
        heartPath.style.fill = 'red';
        heartPath.style.transition = 'fill 0.5s ease';
        
        // Titreme animasyonu için bir sınıf ekleyelim (CSS'e eklenmesi gerekir)
        heartContainer.classList.add('heart-beat');
    }, 3000); 
    
    // Ekstra: Mesaj ve butonun 4 saniye sonra tamamen kaybolmasını sağlayıp sadece kalbi bırakabilirsiniz.
    setTimeout(() => {
        message.style.opacity = '0';
        button.style.display = 'none';
     }, 4000);
});

// *NOT: Konfeti fonksiyonunu bu dosyadan silmelisiniz.*

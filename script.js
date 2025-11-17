document.getElementById('princessButton').addEventListener('click', function() {
    const button = this;
    const message = document.getElementById('celebrationMessage');
    const canvas = document.getElementById('heartCanvas');

    // 1. Butonu etkisizleştir ve gizle
    button.textContent = '💖';
    button.disabled = true;
    button.style.opacity = '0';
    button.style.transition = 'opacity 0.5s ease';

    // 2. Mesajı göster
    message.classList.remove('hidden');
    setTimeout(() => {
        message.classList.add('visible');
    }, 10); 

    // 3. Kalp çizimini başlat
    canvas.classList.add('visible-heart');
    drawHeartAnimation(canvas);
});

// Python formüllerinin JavaScript karşılıkları
function xt(t) {
    // Python'daki 16*math.sin(t)**3
    return 16 * Math.pow(Math.sin(t), 3);
}

function yt(t) {
    // Python'daki formülün JavaScript karşılığı
    return 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
}

function drawHeartAnimation(canvas) {
    const ctx = canvas.getContext('2d');
    const scale = 12; // Formülünüzdeki çarpım faktörü (turtle kodunuzdaki 20 yerine daha küçük bir değer)
    const totalSteps = 100; // Çizimin kaç adımda tamamlanacağı
    let currentStep = 0;
    
    // Canvas'ı temizle
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Çizim Animasyonu Fonksiyonu
    function animate() {
        if (currentStep > totalSteps) {
            // Animasyon bitti, kalbi doldur
            ctx.fillStyle = 'red';
            ctx.fill();
            return;
        }

        // Canvas'ı temizleme (sadece çizilen kısmı yeniden çizmek için)
        // ctx.clearRect(0, 0, canvas.width, canvas.height); 

        // Kalbi çizmeye başla
        ctx.beginPath();
        // Merkez noktasına git
        ctx.moveTo(canvas.width / 2, canvas.height / 2);

        // Her adımda daha fazla çizgi ekle
        for (let i = 0; i < currentStep; i++) {
            // t değerini 0 ile 2*Math.PI arasında ayarla (bir tam döngü)
            let t = (i / totalSteps) * (2 * Math.PI); 
            
            // X ve Y koordinatlarını hesapla ve merkeze kaydır
            let x = xt(t) * scale + canvas.width / 2;
            let y = -yt(t) * scale + canvas.height / 2; // Y ekseni ters olduğu için eksi ile çarpıyoruz
            
            if (i === 0) {
                ctx.moveTo(x, y); // İlk noktaya başla
            } else {
                ctx.lineTo(x, y); // Diğer noktalara çizgi çiz
            }
        }
        
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 3;
        ctx.stroke();

        currentStep += 2; // Animasyon hızını ayarlar
        
        // 3 saniyede tamamlamak için zamanlayıcı kullan
        requestAnimationFrame(animate); 
    }

    // Animasyonu başlat
    animate();
}

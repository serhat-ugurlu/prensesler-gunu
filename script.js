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
    return 16 * Math.pow(Math.sin(t), 3);
}

function yt(t) {
    return 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
}

function drawHeartAnimation(canvas) {
    const ctx = canvas.getContext('2d');
    const scale = 14; // Kalbin boyutunu ayarlamak için. (Önceki 12 idi, biraz büyüttük)
    const maxT = 2 * Math.PI; // Bir tam kalp çizimi için t'nin alacağı maksimum değer
    const animationDuration = 3000; // 3 saniye
    let startTime = null;

    // Canvas'ı temizle ve başlangıç ayarlarını yap
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round'; // Çizgi uçlarını yuvarla

    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / animationDuration; // 0'dan 1'e ilerleme
        
        if (progress >= 1) {
            // Animasyon bitti, kalbi tam olarak çiz ve doldur
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawFullHeart(ctx, canvas, scale, maxT);
            
            // Opsiyonel: Kalp tam dolduktan sonra titreme/nabız efekti
            canvas.classList.add('heart-beat'); // CSS'te bu sınıf için animasyon tanımlamalıyız
            return;
        }

        // Mevcut ilerlemeye göre t'nin değerini hesapla
        const currentT = maxT * progress;

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Her karede Canvas'ı temizle
        ctx.beginPath();

        let firstPoint = true;
        for (let i = 0; i <= currentT * 100; i++) { // t'yi küçük adımlarla artır
            let t_val = (i / 100);
            if (t_val > currentT) break; // Sadece mevcut t değerine kadar çiz

            let x = xt(t_val) * scale + canvas.width / 2;
            let y = -yt(t_val) * scale + canvas.height / 2; // Y ekseni ters olduğu için eksi ile çarpıyoruz
            
            if (firstPoint) {
                ctx.moveTo(x, y);
                firstPoint = false;
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();

        requestAnimationFrame(animate); 
    }

    // Kalbi tamamen çizen ve dolduran fonksiyon
    function drawFullHeart(ctx, canvas, scale, maxT) {
        ctx.beginPath();
        let firstPoint = true;
        for (let t_val = 0; t_val <= maxT; t_val += 0.01) { // Daha hassas çizim için adım küçültüldü
            let x = xt(t_val) * scale + canvas.width / 2;
            let y = -yt(t_val) * scale + canvas.height / 2;
            
            if (firstPoint) {
                ctx.moveTo(x, y);
                firstPoint = false;
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath(); // Kalbi kapat (doldurmak için önemli)
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.strokeStyle = 'red'; // Çizginin de kırmızı olmasını sağla
        ctx.lineWidth = 3;
        ctx.stroke();
    }

    // Animasyonu başlat
    requestAnimationFrame(animate);
}

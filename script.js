document.getElementById('princessButton').addEventListener('click', function() {
    const message = document.getElementById('celebrationMessage');

    // Buton metnini değiştir (isteğe bağlı)
    this.textContent = 'Kutlandı!';
    this.disabled = true;

    // Mesajı göster
    message.classList.remove('hidden');
    // Animasyonu tetiklemek için gecikmeli olarak 'visible' sınıfını ekle
    setTimeout(() => {
        message.classList.add('visible');
    }, 10); // Küçük bir gecikme

    // Basit Konfeti Efekti
    createConfetti();
});

function createConfetti() {
    const confettiCount = 100;
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Konfeti renkleri (pembe tonları ve beyaz)
        const colors = ['#ffc0cb', '#ff69b4', '#ff1493', 'white'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Rastgele konum ve animasyon
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        
        document.body.appendChild(confetti);

        // Konfetiyi bir süre sonra kaldır
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

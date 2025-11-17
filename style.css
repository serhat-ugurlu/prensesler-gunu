body {
    background-color: #ffc0cb; /* Açık Pembe */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: sans-serif;
    color: #333;
    text-align: center;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Konumlandırma için göreceli hale getir */
    position: relative; 
}

#princessButton {
    background-color: white;
    color: #ff69b4; 
    border: 5px solid #ff69b4;
    padding: 20px 40px;
    font-size: 24px;
    font-weight: bold;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    z-index: 10; /* Butonun üstte kalması için */
    width: 150px; /* Sabit genişlik verdik */
    height: 64px; /* Sabit yükseklik verdik (padding ile) */
    display: flex;
    justify-content: center;
    align-items: center;
}

#princessButton:hover {
    background-color: #f0f0f0;
    transform: scale(1.05);
}

/* Mesaj Stilleri (Değişiklik yok) */
#celebrationMessage {
    position: absolute; /* Butonun üstüne yerleştirmek için */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    background-color: white;
    color: #ff1493; 
    padding: 20px 30px;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 1s ease;
    z-index: 100; /* En üste çıksın */
}

#celebrationMessage h1 {
    margin: 0;
    font-size: 36px;
    white-space: nowrap;
    animation: pulse 1.5s infinite;
}

.hidden { display: none; }
.visible { opacity: 1 !important; display: block !important; }

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

/* ------ Kalp Çizim Stilleri (YENİ) ------ */
#heartContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px; /* Kalp boyutu */
    height: 200px;
    transition: opacity 0.5s;
}

#heartPath {
    fill: none; /* İçini boş bırak */
    stroke: red; /* Kırmızı çizgi */
    stroke-width: 5;
    /* Çizim efektini oluşturmak için bu iki özellik kritik */
    stroke-dasharray: 400; /* Kalp yolunun yaklaşık uzunluğu */
    stroke-dashoffset: 400; /* Başlangıçta çizginin tamamı gizli */
}

/* Kalp çizilmeye başladığında bu sınıf eklenecek */
.drawing {
    animation: drawHeart 3s forwards; /* 3 saniyede tamamlansın */
}

/* Başlangıçta kalp kabı gizli */
.hidden-heart {
    opacity: 0;
    pointer-events: none;
}

/* Kalp çizim animasyonu */
@keyframes drawHeart {
    to {
        stroke-dashoffset: 0; /* Çizgiyi tamamen görünür yap */
    }
}

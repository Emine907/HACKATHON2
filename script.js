function basla() {
    document.getElementById("aciklama").style.display = "block"; // Önce açıklamayı göster

    setTimeout(function() {
        // 3 saniye sonra meteor yazısını göster
        document.getElementById("meteorYazisi").style.display = "block";

        // Meteor yazısından 0.5 saniye sonra meteorları göster ve animasyonu başlat
        setTimeout(function() {
            let meteorlar = document.querySelectorAll(".meteor, .meteor2");
            meteorlar.forEach(function(meteor) {
                meteor.style.display = "block"; // Meteorları görünür yap
                meteor.style.animation = "none"; // Animasyonu sıfırla
                meteor.offsetHeight; // Reflow zorlaması
                meteor.style.animation = meteor.classList.contains('meteor2') 
                    ? "meteorAnim 1s linear infinite" 
                    : "meteorAnim 2s linear infinite";
            });
        }, 1000); // Meteor yazısından 0.5 saniye sonra meteorlar başlasın

        // Meteor yazısından 2 saniye sonra seçim ekranı açılsın
        setTimeout(function() {
            document.getElementById("secim1").style.display = "block";
        }, 2000);

    }, 3000); // Açıklamadan 3 saniye sonra
}

window.onload = function() {
    basla();
};

function solaGit() {
    document.getElementById("aciklama").style.display = "none"; // Önce açıklamayı gizle
    document.getElementById("meteorYazisi").style.display = "none"; // meteor yazısını gizle
    document.getElementById("secim1").style.display = "none";
    document.getElementById("solYolu_div").style.display = "block";
    let gemi = document.getElementById("uzayGemisi");
    gemi.style.transition = "transform 2s linear"; // Hareketin süresi ve tipi
    gemi.style.transform = "translateX(-200px)"; // Sola 200px kaydır
    gemi.style.animation = "solaUcus 2s forwards";

}

function sagaGit() {
    document.getElementById("aciklama").style.display = "none"; // Önce açıklamayı gizle
    document.getElementById("meteorYazisi").style.display = "none"; // meteor yazısını gizle
    document.getElementById("secim1").style.display = "none";
    document.getElementById("sagYolu_div").style.display = "block";
    document.getElementById("solYolu_div").style.display = "block";
    let gemi = document.getElementById("uzayGemisi");
    gemi.style.transition = "transform 2s linear"; // Hareketin süresi ve tipi
    gemi.style.transform = "translateX(200px)"; // Sağa 200px kaydır
    gemi.style.animation = "sagaUcus 2s forwards";
}

function sistemiYenile() {
    document.getElementById("solYolu_div").style.display = "none";
    document.getElementById("sonuc").style.display = "block";
    document.getElementById("sonuc").innerHTML = `
        <h3>Sistemi yeniledin ve hızlandın.Gemiden bir sinyal geliyor!</h3>
        <button onclick="sinyaleGit1()">Sinyale Git</button>
        <button onclick="yolundanSasma()">Yolundan şaşma</button>
    `;
}

function umursamadanDevamEt() {
    document.getElementById("solYolu_div").style.display = "none";
    document.getElementById("sonuc").style.display = "block";
    document.getElementById("sonuc").innerHTML = `
        <h3>Umursamadan ilerliyorsun...</h3>
        <h2>Karşına uzaylılar çıktı!</h2>
        <button onclick="barisimzala()">Barış İmzala</button>
        <button onclick="savas()">Savaş</button>
    `;
}

function sinyaleGit1(){
    document.getElementById("sonuc").style.display = "none";
    document.getElementById("sinyaleGit1_div") = "block";
    document.getElementById("sinyaleGit1_div").innerHTML = `
    <h2> Sinyale gittin ve tehlikeyle karşılaştın. Bu bölge uzaylıların kontrolünde üstüne geliyorlar! </h2>
    <button onclick="barisimzala2()">Barış İmzala</button>
    <button onclick="savas2()">Savaş</button> `;
}

function yolundanSasma(){
    document.getElementById("sonuc").style.display = "none";
    document.getElementById("yolundanSasma_div") = "block";
    document.getElementById("yolundanSasma_div").innerHTML = `
    <h2> Yolundan şaşmamayı seçtin.Kendinden eminsin ha.\n Rotan üstünde bir güneş patlaması bekleniyor. </h2>
    <button onclick="kalkan()">Kalkan sistemlerini aktive et (enerji harcar ama korur)</button>
    <button onclick="yoldegis()">Yolu değiştir (daha uzun ve yakıt harcatan bir rota)</button> `;
}




function komutaninDediğiniYap() {
    document.getElementById("sagYolu_div").style.display = "none";
    document.getElementById("sonuc").style.display = "block";
    document.getElementById("sonuc").innerHTML = `
        <h3>Komutanı dinledin ve daha uzak olan gezegen için yola devam ettin\n böylece yakıtın azaldı\n şimdi ne yapacaksın?</h3>
        <button onclick="enYakingezegen()">En Yakın Gezegene İn</button>
        <button onclick="gemiyizorla()">Gemiyi Zorla</button>
    `;
}

function sinyalegit2() {
    document.getElementById("sagYolu_div").style.display = "none";
    document.getElementById("sonuc").style.display = "block";
    document.getElementById("sonuc").innerHTML = `
        <h3>Sinyale doğru ilerliyorsun!</h3>
        <h2>Aaa burada başka bir keşif ekibi daha var!</h2>
        <button onclick="onlaraKatil()">Onlara Katıl</button>
        <button onclick="kendiYolundan()">Kendi Yolundan İlerle</button>
    `;
}

function onlaraKatil() {
    document.getElementById("sonuc").style.display = "none";
    document.getElementById("onlaraKatil_div").style.display = "block";
    document.getElementById("onlaraKatil_div").innerHTML = `
        <h3>Onlarla beraber ilerliyorsun.</h3>
        <h2>Ama yolundan saptın ve gezegenin yolunu kaybettin. Oyun bitti!</h2>
        <h2>Kaybettiniz!!!</h2>
        <button onclick="yenidenBasla()">Yeniden Başla</button>
    `;
}

function kendiYolundan() {
    document.getElementById("sonuc").style.display = "none";
    document.getElementById("kendiYolundan_div").style.display = "block";
    document.getElementById("kendiYolundan_div").innerHTML = `
        <h3>Kendi yolundan ilerliyorsun.</h3>
        <h2>Yakıtın bitti.</h2>
        <h2>Oyunu kaybettiniz!!!</h2>
        <button onclick="yenidenBasla()">Yeniden Başla</button>
    `;
}


function yenidenBasla() {
    location.reload();
}


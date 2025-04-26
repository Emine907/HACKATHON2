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
    document.getElementById("solYolu").style.display = "block";
    let gemi = document.getElementById("uzayGemisi");
    gemi.style.transition = "transform 2s linear"; // Hareketin süresi ve tipi
    gemi.style.transform = "translateX(-200px)"; // Sola 200px kaydır
    gemi.style.animation = "solaUcus 2s forwards";

}

function sagaGit() {
    document.getElementById("aciklama").style.display = "none"; // Önce açıklamayı gizle
    document.getElementById("meteorYazisi").style.display = "none"; // meteor yazısını gizle
    document.getElementById("secim1").style.display = "none";
    document.getElementById("sagYolu").style.display = "block";
    document.getElementById("solYolu").style.display = "block";
    let gemi = document.getElementById("uzayGemisi");
    gemi.style.transition = "transform 2s linear"; // Hareketin süresi ve tipi
    gemi.style.transform = "translateX(200px)"; // Sağa 200px kaydır
    gemi.style.animation = "sagaUcus 2s forwards";
}

function sistemiYenile() {
    document.getElementById("solYolu").style.display = "none";
    document.getElementById("sonuc").style.display = "block";
    document.getElementById("sonuc").innerHTML = `
        <h3>Sistemleri onardın!</h3>
        <h2>Tebrikler oyunu kazandın!</h2>
        <button onclick="yenidenBasla()">Yeniden Başla</button>
    `;
}

function umursamadanDevamEt() {
    document.getElementById("solYolu").style.display = "none";
    document.getElementById("sonuc").style.display = "block";
    document.getElementById("sonuc").innerHTML = `
        <h3>Umursamadan ilerliyorsun...</h3>
        <h2>Oyunu kaybettin!</h2>
        <button onclick="yenidenBasla()">Yeniden Başla</button>
    `;
}

function komutaninDediğiniYap() {
    document.getElementById("sagYolu").style.display = "none";
    document.getElementById("sonuc").style.display = "block";
    document.getElementById("sonuc").innerHTML = `
        <h3>Komutanın dediği yolda yakıt bitti!</h3>
        <h2>Oyunu kaybettin!</h2>
        <button onclick="yenidenBasla()">Yeniden Başla</button>
    `;
}

function sinyaleDogruGit() {
    document.getElementById("sagYolu").style.display = "none";
    document.getElementById("sonuc").style.display = "block";
    document.getElementById("sonuc").innerHTML = `
        <h3>Sinyale doğru ilerliyorsun!</h3>
        <h2>Keşfetmen gereken gezegen karşında!</h2>
        <h2>Oyunu kazandın! Tebrikler!</h2>
        <button onclick="yenidenBasla()">Yeniden Başla</button>
    `;
}

function yenidenBasla() {
    location.reload();
}
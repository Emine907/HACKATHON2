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
    let gemi = document.getElementById("img");
    gemi.style.transition = "transform 2s linear"; // Hareketin süresi ve tipi
    gemi.style.transform = "translateX(-200px)"; // Sola 200px kaydır
    gemi.style.animation = "solaUcus 2s forwards";

}

function sagaGit() {
    document.getElementById("aciklama").style.display = "none"; // Önce açıklamayı gizle
    document.getElementById("meteorYazisi").style.display = "none"; // meteor yazısını gizle
    document.getElementById("secim1").style.display = "none";
    document.getElementById("sagYolu_div").style.display = "block";
    /*document.getElementById("solYolu_div").style.display = "block";*/
    let gemi = document.getElementById("img");
    gemi.style.transition = "transform 2s linear"; // Hareketin süresi ve tipi
    gemi.style.transform = "translateX(200px)"; // Sağa 200px kaydır
    gemi.style.animation = "sagaUcus 2s forwards";
}

function sistemiYenile() {
    document.getElementById("solYolu_div").style.display = "none";
    document.getElementById("sonuc").style.display = "block";
    document.getElementById("sonuc").innerHTML = `
        <h3>Sistemi yeniledin ve hızlandın.Gemiden bir sinyal geliyor!</h3>
        <button onclick="sinyaleGit1_div()">Sinyale Git</button>
        <button onclick="yolundanSasma()">Yolundan şaşma</button>
    `;
}

function sinyaleGit1_div() {
    document.getElementById("sonuc").innerHTML = `
        <h2>Tebrikler, Oyunu Kazandınız!!!</h2>
    `;

    kazanma1();
}

function umursamadanDevamEt() {
    document.getElementById("solYolu_div").style.display = "none";
    document.getElementById("sonuc").style.display = "block";
    document.getElementById("sonuc").innerHTML = `
        <h3>Umursamadan ilerliyorsun...</h3>
        <h2>Tebrikler, Oyunu Kazandınız!!!</h2>
    `;
    kazanma1();
}

function sinyaleGit1(){
    document.getElementById("sonuc").style.display = "none";
    document.getElementById("sinyaleGit1_div") = "block";
    document.getElementById("sinyaleGit1_div").innerHTML = `
    <h2> Sinyale gittin ve tehlikeyle karşılaştın. </h2>
    <h2>Oyunu kaybettin!</h2>
    `;
    yenidenBasla();
}

function yolundanSasma(){
    document.getElementById("sonuc").style.display = "none";
    document.getElementById("yolundanSasma_div") = "block";
    document.getElementById("yolundanSasma_div").innerHTML = `
    <h2> Yolundan şaşmamayı seçtin.Kendinden eminsin ha. </h2>
    <h2>Oyunu kazandın! Tebrikler!</h2>
     `;
     kazanma1();
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

function enYakingezegen() {
    document.getElementById("sagYolu_div").style.display = "none";
    document.getElementById("sonuc").style.display = "block";
    document.getElementById("sonuc").innerHTML = `
        <h3>Komutanı dinledin ve daha uzak olan gezegen için yola devam ettin.</h3>
        <h2>Komutanı dinlemekle iyi yaptın çünkü diğer yol senin için tehlikeliydi.</h2>
        <h2>Tebrikler, Oyunu Kazandınız!!!</h2>
    `;
    kazanma2();
}

function gemiyizorla() {
    document.getElementById("sagYolu_div").style.display = "none";
    document.getElementById("sonuc").style.display = "block";
    document.getElementById("sonuc").innerHTML = `
        <h3>Kendi bildiğini okudun ve kazandın. Tebrikler! </h3>
        
    `;
    kazanma2();
}

function sinyalegit2() {
    document.getElementById("sagYolu_div").style.display = "none";
    document.getElementById("sonuc").style.display = "block";
    document.getElementById("sonuc").innerHTML = `
        <h3>Sinyale doğru ilerliyorsun!</h3>
        <h2>Birden fazla sinyal alıyorsun hangisini tercih edersinn?</h2>
        <button onclick="solYolu_div()">Sol</button>
        <button onclick="sagYolu_div()">Sağ</button>
    `;
}



function solYolu_div() {
    
    let gemi = document.getElementById("img");
    gemi.style.transition = "transform 2s linear"; // Hareketin süresi ve tipi
    gemi.style.transform = "translateX(-200px)"; // Sola 200px kaydır
    gemi.style.animation = "solaUcus 2s forwards";

    kazanma1();
}

function sagYolu_div() {

    let gemi = document.getElementById("img");
    gemi.style.transition = "transform 2s linear"; // Hareketin süresi ve tipi
    gemi.style.transform = "translateX(200px)"; // Sağa 200px kaydır
    gemi.style.animation = "sagaUcus 2s forwards";
    
}


/*
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
*/
/*
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

*/
function yenidenBasla() {
    location.reload();
}

// function kazanma1() {
//     const gemi = document.getElementById("img");
    
//     // Eski transform/animation’u temizle
//     gemi.style.removeProperty("animation");
//     gemi.style.removeProperty("transform");
  
//     // Transition’ı ayarla
//     gemi.style.transition = "transform 5s linear";
  
//     // Hem sola (X ekseni), hem de yukarı (Y ekseni) kaydır
//     gemi.style.transform = "translate(-700px, -200px)";
//   }
  

  //position: absolute; transition: transform 2s linear;
  //position: absolute; transition: transform 2s linear; transform: translateX(-200px); animation: 2s ease 0s 1 normal forwards running solaUcus;

//   function kazanma1() {
//     const gemi = document.getElementById("img");
    
//     // İlk olarak animasyonu sıfırlıyoruz
//     gemi.style.removeProperty("animation");
//     gemi.style.removeProperty("transform");
    
//     // Geçişi ayarlıyoruz
//     gemi.style.transition = "transform 5s linear";
  
//     // Başlangıç pozisyonu (veya ilk hareket)
//     gemi.style.transform = "translate(0px, 0px)";
  
//     // Animation'ı başlat
//     gemi.style.animation = "solYukarıUcus 2s ease 0s 1 normal forwards";
// }

function kazanma1() {
    const gemi = document.getElementById("img");

    // Animasyonu sıfırlıyoruz
    gemi.style.removeProperty("animation");

    // Geçişi ayarlıyoruz (geçiş hemen başlamaz)
    gemi.style.transition = "transform 0s";  // Geçici olarak animasyon dışı bir geçiş

    // Mevcut pozisyonu alıyoruz
    const style = window.getComputedStyle(gemi);
    const matrix = new DOMMatrixReadOnly(style.transform);
    const currentX = matrix.m41;
    const currentY = matrix.m42;

    console.log("Mevcut pozisyon:", currentX, currentY);

    // 2 saniye sürecek animasyon için animasyonu ekliyoruz
    gemi.style.animation = "solYukarıUcus 2s ease 0s 1 normal forwards";

    // Sonrasında hedef pozisyonu belirleyip animasyonu başlatıyoruz
    gemi.style.transform = `translate(${currentX - 700}px, ${currentY - 200}px)`;
}





function kazanma2(){
    const gemi = document.getElementById("img");

    // Animasyonu sıfırlıyoruz
    gemi.style.removeProperty("animation");

    // Geçişi ayarlıyoruz (geçiş hemen başlamaz)
    gemi.style.transition = "transform 0s";  // Geçici olarak animasyon dışı bir geçiş

    // Mevcut pozisyonu alıyoruz
    const style = window.getComputedStyle(gemi);
    const matrix = new DOMMatrixReadOnly(style.transform);
    const currentX = matrix.m41;
    const currentY = matrix.m42;

    console.log("Mevcut pozisyon:", currentX, currentY);

    // 2 saniye sürecek animasyon için animasyonu ekliyoruz
    gemi.style.animation = "solYukarıUcus 2s ease 0s 1 normal forwards";

    // Sonrasında hedef pozisyonu belirleyip animasyonu başlatıyoruz
    gemi.style.transform = `translate(${currentX - 1500}px, ${currentY - 200}px)`;
}


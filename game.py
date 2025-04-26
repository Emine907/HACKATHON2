print("OYUNA HOŞGELDİNİZ!")
print("Başlamak için butona tıklayınız")
print("Yıl 2100...\n Bir keşif için uzaya gönderildin.Araştırma gemin x ile yola çıkıyorsun.\n Şuanki görevin yaşam olabileceği söylenen o gezegene ulaşmak.")
print("O da ne!!! Karşıdan bir sürü meteor üstümüze doğru geliyor!\n Hemen bir karar vermelisin..")
print("Sol taraftan ilerle")
print("Sağ taraftan ilerle")

def index():
    secim = None
    if request.method =="POST":
        secim= request.form.get("secim")
        if secim == "sol":
            secim ="sol"
        elif secim == "sag":
            secim = "sağ"
    return render_template_string(html, secim  = secim)

if __game__ == "__main__":
    app.run(debug = True)



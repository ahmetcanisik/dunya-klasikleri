const authors = [
    {
        id: 0,
        name: "Miguel de Cervantes",
        life: "1547-1616",
        biography: `Doğum ve Erken Yaşam: Don Kişot, asıl adıyla Alonso Quijano, İspanya'nın La Mancha bölgesinde yaşayan bir aristokrat idi. 
            Genç yaşta şövalye romanları okumaya başladı ve bu kitaplar onun zihnini etkiledi.
            
            Şövalyelik Maceraları: 50 yaşlarında, şövalye romanlarının etkisiyle deliriyormuş gibi davranmaya başladı ve kendini bir şövalye olarak ilan etti. 
            Atı Rocinante'e binerek, seyfetlerini yaşamaya çıktı. Sipahi olarak onu takip eden Sancho Panza adında bir çiftçi de vardı.
            
            Son Yılları ve Ölüm: Don Kişot, sonunda gerçek dünyaya döndü ve hayal kırıklığına uğradı. Sonunda evine döndü ve burada hayatını son verdi.
            
            Bu karakter, Miguel de Cervantes'in "Don Kişot" adlı romanında anlatılmıştır ve Batı edebiyatının en önemli eserlerinden biri olarak kabul edilir. 
            Don Kişot, tarih boyunca kitap basımları arasında İncil'den sonra ikinci sıradadır.`,
        imageUrl: "cervantes.jpg"
    },
    {
        id: 1,
        name: "William Shakespeare",
        life: "?-1616",
        biography: `Doğum ve Erken Yaşam: William Shakespeare, 23 Nisan 1564'te İngiltere'nin Stratford-upon-Avon kasabasında doğdu. 
            Babası John Shakespeare, bir eldivenci ve kasabanın ileri gelenlerinden biriydi.
            
            Kariyer ve Eserleri: Shakespeare, 1580'lerin sonlarında Londra'ya taşınarak tiyatro dünyasına adım attı. 
            "Romeo ve Juliet," "Hamlet," "Othello," "Kral Lear" ve "Macbeth" gibi çok sayıda ünlü oyunun yazarıdır. 
            Aynı zamanda birçok sonet ve şiir de yazdı. Shakespeare'in eserleri, İngilizce edebiyatın en büyük katkılarından biri olarak kabul edilir.
            
            Son Yılları ve Ölüm: Shakespeare, 1613'te Stratford-upon-Avon'a geri döndü ve burada 23 Nisan 1616'da vefat etti. 
            Holy Trinity Kilisesi'ne defnedildi.`,
        imageUrl: "shakespare.jpg"
    },
    {
        id: 2,
        name: "Victor Hugo",
        life: "1802-1885",
        biography: `Doğum ve Erken Yaşam: Victor-Marie Hugo, 26 Şubat 1802'de Fransa'nın Besançon şehrinde doğdu. 
            Bir askerin oğlu olarak büyüdü ve genç yaşta yazmaya başladı.
            
            Yazarlık Kariyeri: Hugo, "Notre-Dame de Paris" (1831) ve "Les Misérables" (1862) gibi eserlerle tanınır. 
            Romantizm akımına bağlı eserleri, hem Fransa'da hem de dünya çapında büyük bir etki yarattı.
            
            Siyasi Yaşam ve Sürgün: 1848 Devrimi'nden sonra Hugo, politik olarak aktif hale geldi ve 1851'de sürgüne gönderildi. 
            1870 yılında sürgünü sona erdi ve Paris'e geri döndü.
            
            Son Yılları ve Ölüm: Hugo, 22 Mayıs 1885'te Paris'te vefat etti ve Panthéon'da defnedildi.`,
        imageUrl: "victor.jpg"
    },
    {
        id: 3,
        name: "Fyodor Dostoyevski",
        life: "1821-1881",
        biography: `Doğum ve Erken Yaşam: Fyodor Mikhaylovich Dostoyevski, 11 Kasım 1821'de Moskova'da doğdu. 
            Genç yaşta annesini kaybetti ve babasıyla birlikte büyüdü.
            
            Eğitim ve Gençlik: Nikolayev Askeri Mühendislik Okulu'nda eğitim aldı, ancak bu alanda ilerleme gösteremedi. 
            İlk romanı "Poor Folk" 1846'da yayımlandı.
            
            Yazarlık Kariyeri: Dostoyevski, "Crime and Punishment" (1866), "The Idiot" (1868), "Demons" (1872) ve "The Brothers Karamazov" (1880) gibi eserlerle tanınır. 
            Eserleri, insanın derinliklerindeki psikolojik durumları ve toplumsal sorunları ele alır.
            
            Sibirya Hapishanesi: 1849'da Petrashevsky Cemaati'nin üyeliği nedeniyle idam cezası aldı, ancak son anda ceza infazı yerine Sibirya'ya sürgün edildi. 
            Burada dört yıl geçirdi.
            
            Son Yılları ve Ölüm: Dostoyevski, 9 Şubat 1881'de St. Petersburg'da vefat etti. Yeni Alyans Mezarlığı'na defnedildi.`,
        imageUrl: "dostoyevsli.jpg"
    },
    {
        id: 4,
        name: "Charlotte Bronte",
        life: "1816-1855",
        biography: `Doğum ve Erken Yaşam: Charlotte Brontë, 21 Nisan 1816'da İngiltere'nin Yorkshire bölgesinde Thornton'da doğdu. 
            Annesi Maria Branwell Brontë, babası Patrick Brontë, bir rahip idi.
            
            Eğitim ve Gençlik: 1824'te Clergy Daughters School'a gitti, ancak buradaki kötü koşullar nedeniyle kısa süre sonra okuldan ayrıldı. 
            Daha sonra Roe Head School'da öğretmenlik yaptı.
            
            Yazarlık Kariyeri: Charlotte, ablası Emily Brontë ve kardeşi Anne Brontë ile birlikte kurgu krallıkları kurarak yazmaya başladı. 
            1847'de ilk romanı "Jane Eyre"'yi Currer Bell adıyla yayımladı. Bu roman, büyük bir başarı elde etti ve Charlotte'ın adını duyurdu.
            
            Son Yılları ve Ölüm: Charlotte, 31 Mart 1855'te Haworth'da vefat etti. Ölümünden birkaç ay önce, 1854'te Arthur Bell Nicholls ile evlendi.`,
        imageUrl: "charlotte.jpg"
    },
    {
        id: 5,
        name: "Gustave Flaubert",
        life: "1821-1880",
        biography: `Doğum ve Erken Yaşam: Gustave Flaubert, 12 Aralık 1821'de Fransa'nın Rouen şehrinde doğdu. 
            Bir cerrahın oğlu olarak büyüdü ve genç yaşta yazmaya başladı.
            
            Eğitim ve İlk Çalışmalar: Flaubert, Paris'te hukuk eğitimi aldı, ancak bu alanda ilerleme gösteremedi ve yazmaya odaklanmaya karar verdi. 
            İlk eserlerini okul gazetesinde yayımladı.
            
            Yazarlık Kariyeri: Flaubert'in en bilinen eseri "Madame Bovary"'dir, bu roman 1857'de yayımlandı ve gerçekçi bir portre oluşturarak büyük bir tartışma yarattı. 
            Diğer önemli eserleri arasında "Sentimental Education" ve "Salammbô" bulunur.
            
            Son Yılları ve Ölüm: Flaubert, 8 Mayıs 1880'de Croisset'de beyin kanaması nedeniyle vefat etti. Rouen'daki Anıt Mezarlığı'na defnedildi.`,
        imageUrl: "gustave.jpg"
    },
    {
        id: 6,
        name: "Stendhal",
        life: "1783-1842",
        biography: `Stendhal, 23 Ocak 1783'te Fransa'nın Grenoble şehrinde doğdu. Babası avukat Chérubin Beyle,
            annesi Henriette Gagnon'dur. Yedi yaşındayken annesini kaybetti ve bu kaybı yaşamının
            önemli bir parçası haline geldi.`,
        imageUrl: "stendhal.jpg",
    },
    {
        id: 7,
        name: "Charles Dickens",
        life: "1812-1870",
        biography: `Charles Dickens, 7 Şubat 1812'de İngiltere'nin Portsmouth şehrinde doğdu. Babası John
            Dickens, borçlar yüzünden hapishaneye atıldıktan sonra ailesiyle birlikte zor zamanlar
            geçirdi. Charles, 12 yaşında fabrikada çalışmaya başlamak zorunda kaldı.`,
        imageUrl: "dickens.jpg",
    },
    {
        id: 8,
        name: "Lev Tolstoy",
        life: "1828-1910",
        biography: `Lev Nikolayeviç Tolstoy, 9 Eylül 1828'de Yasnaya Polyana, Rusya'da doğdu. Soylu bir ailede
            dünyaya gelen Tolstoy, genç yaşta hem anne hem babasını kaybetti.`,
        imageUrl: "tolstoy.jpg",
    },
    {
        id: 9,
        name: "Jonathan Swift",
        life: "1667-1745",
        biography: `Doğum ve Erken Yaşam: Jonathan Swift, 30 Kasım 1667'de Dublin, İrlanda'da doğdu. Babası
            Jonathan Swift, annesi Abigail Erick idi. Babası ölmeden önce İngiltere'ye taşınmıştı ve
            Swift'in annesi İngiltere'ye dönmüştü.`,
        imageUrl: "jonathan.jpg",
    },
    {
        id: 10,
        name: "Emily Bronte",
        life: "1818-1848",
        biography: `Doğum ve Erken Yaşam: Emily Jane Brontë, 30 Temmuz 1818'de İngiltere'nin Yorkshire
            bölgesinde Thornton'da doğdu. Annesi Maria Branwell Brontë, babası Patrick Brontë, bir rahip
            idi. Emily, iki ablası ve bir erkek kardeşiyle büyüdü.`,
        imageUrl: "emily.jpg",
    },
    {
        id: 11,
        name: "Mark Twain",
        life: "1835-1910",
        biography: `Doğum ve Erken Yaşam: Mark Twain, asıl adıyla Samuel Langhorne Clemens, 30 Kasım 1835'te
            Missouri, Florida'da doğdu. Yedi yaşında ailesiyle birlikte Mississippi Nehri boyunca
            Hannibal'a taşındı.`,
        imageUrl: "twain.jpg",
    },
    {
        id: 12,
        name: "Oscar Wilde",
        life: "1854-1900",
        biography: `Doğum ve Erken Yaşam: Oscar Fingal O'Flahertie Wills Wilde, 16 Ekim 1854'te Dublin, İrlanda'da doğdu. Babası Sir William Wilde, bir cerrah ve annesi Jane Francesca Wilde, bir şairdi. Wilde, genç yaşta yazmaya başladı ve Trinity College Dublin'de eğitim aldı. Kariyer ve Eserleri: Wilde, Londra'da moda ve sanat dünyasında yer aldı ve "The Picture of Dorian Gray" (1890) ve "The Importance of Being Earnest" (1895) gibi eserleriyle tanındı. Eserleri, özellikle mizahi ve epigram tarzıyla bilinir. Siyasi Yaşam ve Sürgün: 1895'te Wilde, Lord Alfred Douglas'un babası Marquess of Queensberry ile ilişkisinden dolayı ahlaki suçlamalarla karşı karşıya kaldı ve bir yıl hapis cezası aldı. Son Yılları ve Ölüm: Wilde, 30 Kasım 1900'de Paris'te vefat etti ve Père Lachaise Mezarlığı'na defnedildi.`,
        imageUrl: "oscar.jpg",
    },
    {
        id: 13,
        name: "Gabriel García Márquez",
        life: "1927-2014",
        biography: `Doğum ve Erken Yaşam: Gabriel García Márquez, 6 Mart 1927'de Aracataca, Kolombiya'da doğdu. Babası Nicolás García Márquez, annesi Luisa Santiaga Márquez Cotes idi. Genç yaşta yazmaya başladı ve Montessori eğitim modelini benimseyen bir anaokulunda eğitim aldı. Eğitim ve Gençlik: Sucre'ye taşınan ailesiyle birlikte, Gabriel Río Magdalena'nın ağzındaki liman kenti Barranquilla'da staj yapmayı başlattı. Lise yıllarında Colegio jesuita San José'de eğitim aldı ve ilk şiirlerini okul dergisinde yayınladı. Kariyer ve Eserleri: 1958'de Mercedes Barcha ile evlendi ve iki çocuğu oldu. García Márquez, 1967'de "Cien años de soledad" (Yüz Yıllık Yalnızlık) adlı romanıyla dünya çapında tanındı. Bu roman, sıradan ve gerçek durumlar yerine büyüleyici ve karmaşık olaylar kullanan Sihirli Gerçekçilik akımının öne çıkan eserlerinden biridir. Son Yılları ve Ölüm: Gabriel García Márquez, 17 Nisan 2014'te Meksika'da vefat etti ve Kolombiya Devlet Başkanı Juan Manuel Santos tarafından "şimdiye kadar yaşamış en büyük Kolombiyalı" olarak anıldı.`,
        imageUrl: "gabriel.jpg",
    },
    {
        id: 14,
        name: "Harper Lee",
        life: "1926-2016",
        biography: `Doğum ve Erken Yaşam: Harper Lee, asıl adıyla Nelle Harper Lee, 28 Nisan 1926'da Alabama, Monroeville'de doğdu. Babası Amasa Coleman Lee, annesi Frances Cunningham Finch Lee idi. Eğitim ve Gençlik: Lee, Huntingdon College ve Alabama Üniversitesi'nde eğitim aldı. Ancak, yüksek lisans eğitimini tamamlamadan New York'a taşındı. Kariyer ve Eserleri: 1960 yılında "To Kill a Mockingbird" adlı romanıyla tanındı. Bu roman, 1961 Pulitzer Ödülü'nü kazandı ve Amerikan edebiyatının klasikleri arasında yer aldı. 2015'te "Go Set a Watchman" adlı bir romanı da yayımladı. Son Yılları ve Ölüm: Lee, 19 Şubat 2016'da Monroeville'de vefat etti. Hayatı boyunca birçok ödül ve onur dalgalanıldı, en önemlisi 2007'de Amerika Birleşik Devletleri'nden Özgürlük Madalyası aldı.`,
        imageUrl: "harper.jpg",
    },
    {
        id: 15,
        name: "Jerome David Salinger",
        life: "1919-2010",
        biography: `Doğum ve Erken Yaşam: Jerome David Salinger, 1 Ocak 1919'da New York, ABD'de doğdu. Babası Sol Salinger, annesi Marie Jillich idi. Lise yıllarında hikaye yazmaya başladı ve ilk öyküleri 1940'ta Story dergisinde yayımlandı. Kariyer ve Eserleri: Salinger, II. Dünya Savaşı sırasında görev yaptıktan sonra, 1951'de "The Catcher in the Rye" adlı romanıyla tanındı. Bu roman, Holden Caulfield adlı ana karakterin yaşadığı ergenlik dönemi çalkantılarını anlatıyor ve genellikle ergen okurlar arasında büyük bir ilham kaynağı oldu. Ayrıca, "Nine Stories" (1953), "Franny and Zooey" (1961) ve "Raise High the Roof Beam, Carpenters and Seymour: An Introduction" (1963) gibi eserleri de yayımladı. Son Yılları ve Ölüm: Salinger, 27 Ocak 2010'da New Hampshire'daki Cornish köyünde vefat etti. Hayatı boyunca mizahi ve özgün bir tarzıyla bilinen yazar, son yıllarında oldukça münzevi bir yaşam sürdürdü ve yeni eserler yayımlamayı reddetti.`,
        imageUrl: "salinger.jpg",
    },
    {
        id: 16,
        name: "F. Scott Fitzgerald",
        life: "1896-1940",
        biography: `Doğum ve Erken Yaşam: Francis Scott Key Fitzgerald, 24 Eylül 1896'da Minnesota, St. Paul'da doğdu. Babası Edward Fitzgerald, annesi Mary McQuill...`,
        imageUrl: "fitzgerald.jpg",
    }
];

/*
<div class="book">
    <div class="sinir">
        <div class="text-container">
            <div class="ust-bilgi">
                <div>
                    <h4>Adı,Soyadı:</h4>Miguel de Cervantes
                    <h4>D.T Ve Ö.T</h4>1547-1616
                </div>
                <img class="senarist" src="cervantes.jpg" alt="kitap kapak Resmi" width="300px" height="500px">    
            </div>
            <div>
                <h4>Hayatı?</h4>
                <p> Doğum ve Erken Yaşam: Don Kişot, asıl adıyla Alonso Quijano, İspanya'nın La Mancha
                    bölgesinde yaşayan bir aristokrat idi. Genç yaşta şövalye romanları okumaya başladı ve
                    bu kitaplar onun zihnini etkiledi.

                    Şövalyelik Maceraları: 50 yaşlarında, şövalye romanlarının etkisiyle deliriyormuş gibi
                    davranmaya başladı ve kendini bir şövalye olarak ilan etti. Atı Rocinante'e binerek,
                    seyfetlerini yaşamaya çıktı. Sipahi olarak onu takip eden Sancho Panza adında bir çiftçi
                    de vardı.

                    Son Yılları ve Ölüm: Don Kişot, sonunda gerçek dünyaya döndü ve hayal kırıklığına
                    uğradı. Sonunda evine döndü ve burada hayatını son verdi2.

                    Bu karakter, Miguel de Cervantes'in "Don Kişot" adlı romanında anlatılmıştır ve Batı
                    edebiyatının en önemli eserlerinden biri olarak kabul edilir.Don Kişot, tarih boyunca
                    kitap basımları arasında İncil`den sonra ikinci sıradadır.</p>
            </div>
        </div>
    </div>
</div>
*/

function AuthorCard() {
    const gallery = document.getElementById("gallery");
    authors.forEach(author => {
        const authorCard = document.createElement("div");
        authorCard.className = "book";
        gallery.appendChild(authorCard);

        const sinir = CreateElem("div", authorCard);
        sinir.className = "sinir";

        const textContainer = CreateElem("div", sinir);
        textContainer.className = "text-container";

        const ustBilgi = CreateElem("div", textContainer);
        ustBilgi.className = "ust-bilgi";

        const divElement = CreateElem("div", ustBilgi);
        AuthorProperties("Adı,Soyadı:", author.name, divElement);
        AuthorProperties("D.T Ve Ö.T", author.life, divElement);

        const image = CreateElem("img", ustBilgi);
        image.className = "senarist";
        image.src = "../img/" + author.imageUrl;
        image.alt = "kitap kapak Resmi";

        const divElement2 = CreateElem("div", textContainer);
        AuthorProperties("Hayatı?:", author.biography, divElement2);
    });
}

function CreateElem(type, parent) {
    const elem = document.createElement(type ?? "div");
    parent.appendChild(elem);
    return elem;
}

function AuthorProperties(property, value, parent) {
    const question = document.createElement("h4");
    question.innerHTML = property;
    parent.appendChild(question);

    const answer = document.createElement("p");
    answer.innerHTML = value;
    parent.appendChild(answer);
}

AuthorCard();
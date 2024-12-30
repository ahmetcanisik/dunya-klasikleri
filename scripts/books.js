/*
<div class="book" data-title="Savaş ve Barış">
    <img src="baris.png" alt="Kitap Kapak Resmi" width="300px" height="500px">
    <div class="sinir">
        <h4>Eser:</h4>Savaş ve Barış
        <h4>Yazar:</h4>Lev Tolstoy
        <h4> Sayfa Sayısı:</h4>
        <p>1180sf</p>
        <h4>Konusu Nedir?</h4>
        <p>Cervantes'in kaleme aldığı ve günümüzün en çok okunan kitapları arasında yer alan Don Kişot,
            şövalye romanlarını eleştirir niteliktedir.
            İspanyol engizisyonu tarafından hayırseverliğin değersiz kılınması gerekçesiyle yasaklanan
            kitap, 19. yüzyılda yeniden okurlarıyla buluşmuştur.</p>
    </div>
</div> 
*/

const books = [
    {
        id: 0,
        name: "Savaş ve Barış",
        author: "Lev Tolstoy",
        image: "baris.png",
        page: 1180,
        subject: "Cervantes'in kaleme aldığı ve günümüzün en çok okunan kitapları arasında yer alan Don Kişot, şövalye romanlarını eleştirir niteliktedir. İspanyol engizisyonu tarafından hayırseverliğin değersiz kılınması gerekçesiyle yasaklanan kitap, 19. yüzyılda yeniden okurlarıyla buluşmuştur."
    },
    {
        id: 1,
        name: "Suç ve Ceza",
        author: "Fyodor Dostoyevski",
        image: "ceza.png",
        page: 687,
        subject: "Suç ve Ceza; Rodion Romanoviç Raskolnikov adındaki bir gencin işlediği çifte cinayet üzerine yaşadıklarını konu alıyor. Raskolnikov, bir yandan hukuk öğrenimi görürken diğer yandan yoksullukla boğuşan bir genç. Para ihtiyacını ise tefeci bir kadına eşyalarını bırakarak karşılıyor. Bir adamın suç işledikten sonra vicdanıyla olan mücadelesini anlatan psikolojik bir roman."
    },
    {
        id: 2,
        name: "Don Kişot",
        author: "Miguel de Cervantes",
        image: "don.png",
        page: 912,
        subject: "Kitabın konusu Don Kişot ve Sancho'nun macera dolu yolculuğudur. Ana fikir ise sınıf ve değer arasındaki ayrımdır. Yazarın yaşadığı dönemde bunu ele almak radikal bir fikirdi. Don Kişot, aristokratların genel görüşüne yani saygın ve asil oldukları yargısına saldırır."
    },
    {
        id: 3,
        name: "Romeo ve Juliet",
        author: "William Shakespeare",
        image: "remo.jpg",
        page: 133,
        subject: "1591-1596 arasında yazıldığı düşünülür. Dünya edebiyatlarında klasik bir konu olan iki düşman ailenin birbirini seven gençlerinin aşk macerasını işler. Eser, ilk kez 1594 yılında sahnelenmiş; defalarca operaya, baleye ve sinemaya uyarlanmıştır."
    },
    {
        id: 4,
        name: "Sefiller",
        author: "Victor Hugo",
        image: "sefiller.jpg",
        page: 1724,
        subject: "Ailesine ekmek götürebilmek için hırsızlık yapan ve bu yüzden kürek mahkûmiyetine çarptırılan bir adamın hikâyesi. Aldığı ağır cezanın bedelini ömrü boyunca ödeyen Jean Valjean'ı merkezine alan roman, yoksulluğu, toplumsal adaleti ve dayanışmayı anlatıyor."
    },
    {
        id: 5,
        name: "Karamazov Kardeşler",
        author: "Fyodor Dostoyevski",
        image: "karmazov.jpg",
        page: 1080,
        subject: "Karamazov Kardeşler göz göre göre işlenecek bir cinayeti işleyen yapısı, karakter yaratımı, o dönemin Rus toplumuna yöneltilmiş yargı ve eleştiriler ile Hıristiyanlık dünyasının değer yargılarına ilişkin göndermeleriyle Dostoyevski'nin en önemli romanı olarak anılıyor."
    },
    {
        id: 6,
        name: "Jane Eyre",
        author: "Charlotte Bronte",
        image: "jane.jpg",
        page: 632,
        subject: "Küçük yaşta öksüz kalan Jane Eyre, kendisini hiçbir zaman sevmeyen ancak kocasının vasiyeti üzerine bakımını üstlenen yengesiyle zor bir yaşam sürmektedir. Katı kurallarla yönetilen bir yatılı okula gönderilince, bu kez hayatın başka zorluklarıyla yüzleşmek zorunda kalır."
    },
    {
        id: 7,
        name: "Madame Bovary",
        author: "Gustave Flubert",
        image: "bovary.jpg",
        page: 408,
        subject: "İyi kalpli ve sıradan bir hayat süren doktor Charles Bovary'nin yüksek idealleri ve aşırı lüks tutkusu olan karısı Emma Bovary'nin, yaşamın tekdüzeliğinden sıyrılmak için girdiği durumları ve yaşadığı ilişkileri konu alır. Yazar, karakterlerin iç dünyalarını açıklarken realizmin gözlemci yönünü kullanmıştır."
    },
    {
        id: 8,
        name: "Kırmızı ve Siyah",
        author: "Stendhal",
        image: "siyah.jpg",
        page: 592,
        subject: "Yükselme ihtirası ile yanıp tutuşan bir genç olan Julien Sorel'in zaman zaman ikiyüzlülüğe kadar varan içten pazarlıklı halini, gerçekten bağlı olduğu dünya görüşünü ve Napolyon hayranlığını saklamaya çalışırken yaşadığı bunalımı anlatan roman bu yönü ile bir psikolojik roman özelliği taşır."
    },
    {
        id: 9,
        name: "Büyük Umutlar",
        author: "Charles Dickens",
        image: "great.jpg",
        page: 600,
        subject: "Charles Dickens'ın Büyük Umutlar adlı eseri, büyüyen ve kendisi ve başkaları hakkında birçok değerli hayat dersi öğrenen genç bir çocuk olan Pip'in hikayesini anlatır. Kendini keşfetme, sosyal hareketlilik ve mutluluğun peşinde koşma etrafında döner. Roman, kahraman Pip'in yolculuğu aracılığıyla hırsın sonuçlarını, kimliğin karmaşıklıklarını ve kişisel bütünlüğün önemini araştırır."
    },
    {
        id: 10,
        name: "Yer Altından Notlar",
        author: "Fyodor Dostoyevski",
        image: "notlar.jpg",
        page: 140,
        subject: "39 yaşına kadar memur olarak çalışan bir karakterin yaşamını ve hayata dair yaptığı sorgulamaları anlatıyor. Roman karakteri, bir akrabasının bıraktığı altı bin ruble mirastan sonra işinden ayrılıyor. Zamanına göre pek fazla olmayan bu parayla geçinmeye çalışıyor."
    },
    {
        id: 11,
        name: "Güliver'in Gezileri",
        author: "Jonathan Swift",
        image: "gulliver.jpg",
        page: 96,
        subject: "Dört ayrı yolculuğu anlatır. İlk yolculuk cüceler ülkesine, ikincisi devler ülkesine, üçüncüsü ise bilim adamlarının yaşadığı uçan adayadır. Bu üç bölüm de siyasetin ve bilim dünyasının bir parodisini içerir. Son bölüm ise Houyhnhnm'ler ile Yahoo'ların ütopik ülkesine yapılan yolculuktur."
    },
    {
        id: 12,
        name: "Uğultulu Tepeler",
        author: "Emily Bronte",
        image: "tepe.jpg",
        page: 408,
        subject: "Heathcliff ve Catherine'in, kendi hayatlarının yanı sıra pek çok insanın da hayatına etki eden aşkını konu ediniyor. Catherine'in babası, çıktığı bir iş seyahatinden yanında bir erkek çocukla birlikte dönüyor."
    },
    {
        id: 13,
        name: "Anna Karenina",
        author: "Lev Tolstoy",
        image: "anna.jpg",
        page: 1035,
        subject: "Romanda dürüst bir evliliğin mutluluğu ile yasak bir ilişkinin düş kırıklıkları karşılaştırılır; sadakat, tutku, kıskançlık gibi temalar işlenir. Bir yandan da o dönemde Rusya'da kadınların durumu, eğitim reformu gibi konular dile getirilir.",
        ageRange: "6-10"
    },
    {
        id: 14,
        name: "Yüzyıllık Yalnızlık",
        author: "Gabriel Garcia Marquez",
        image: "Yuz.jpg",
        page: 464,
        subject: "Kitapta mekan olarak çocukluğunun geçtiği Aracataca kasabasını ele alan yazar, burayı Macondo adıyla ve olağandışı unsurlarla süsleyerek anlatıyor. Yüzyıllık Yalnızlık; Buendia ailesinin, yapılan bir büyü sonucu akraba evliliği nedeniyle 100 yıl süren bir lanetle yaşamalarını konu ediniyor.",
        ageRange: "11 ve üzeri"
    },
    {
        id: 15,
        name: "Bülbülü Öldürmek",
        author: "Harper Lee",
        image: "bulbul.jpg",
        page: 355,
        subject: "Bir 'zenci'nin haksız yere suçlanması üzerinden gelişen olaylar; önyargılar, riyakârlık, sınıf ve ırk çatışmalarıyla beslenen küçük Amerikan kasabasının sınırlarını aşıp, insanlar arası ilişkide adaletin ve dürüstlüğün önemini anlatan evrensel bir hikâyeye dönüşüyor.",
        ageRange: "15 ve üzeri"
    },
    {
        id: 16,
        name: "Çavdar Tarlasında Çocuklar",
        author: "J.D. Salinger",
        image: "cocuk.jpg",
        page: 200,
        subject: "JD Salinger'ın hazırlık okulundan atılan ve yetişkinlerin dünyasına karşı yabancılaşma ve hayal kırıklığı duygularıyla mücadele eden bir genç olan Holden Caulfield'ın yolculuğunu anlatıyor.",
        ageRange: "10 ve üzeri"
    },
    {
        id: 17,
        name: "Muhteşem Gatsby",
        author: "F. Scott Fitzgerald",
        image: "gatsby.jpg",
        page: 180,
        subject: "Varlıklı Gatsby ve güzeller güzeli Daisy arasındaki aşk, Long Island'daki gösterişli partiler eşliğinde baş döndürücü bir atmosferde anlatılırken aynı zamanda toplumun çarpık ilişkilerini ve en önemlisi insanların yozlaşmalarını harika bir dille anlatıyor.",
        ageRange: "7 ve üzeri"
    },
    {
        id: 18,
        name: "Moby Dick",
        author: "Herman Melville",
        image: "dick.jpg",
        page: 744,
        subject: "Bir beyaz balina yüzünden bacağını kaybeden Kaptan Ahab'ın balinadan intikam almak için verdiği mücadele ve bu mücadelenin hayatına mal olması anlatılır. Roman, insanın doğaya karşı takındığı tutumu ve kendi doğasını ele alır.",
        ageRange: "7-12"
    },
    {
        id: 19,
        name: "Gurur ve Önyargı",
        author: "Jane Austen",
        image: "gurur.jpg",
        page: 392,
        subject: "İngiliz soylularını ve değer yargılarını eleştirirken, döneminin kadınlarının zengin birer eş bulma heveslerinin beyhudeliğini ve bunun bir statü göstergesi olamayacağını ispat etmeye çalışır.",
        ageRange: "6-12"
    },
    {
        id: 20,
        name: "İlahi Komedya",
        author: "Dante Alighieri",
        image: "ilahi.jpg",
        page: 456,
        subject: "Ölüm sonrası sırayla Cehennem, Araf ve Cennette geçen yolculuğu kendi ağzından anlatmaktadır. Ortaçağ ile Rönesans arasındaki geçiş döneminde yazılmış olan bu şiir, hayal gücü ve alegorik tasavvuru ile ölüm sonrası hayatı anlattığı hikâyesiyle Hristiyan batı kiliseleri tarafından benimsenmiştir.",
        ageRange: "6-12"
    }
];

function BookCard(searching = false) {
    const gallery = document.getElementById("gallery");
    if (searching === false) {
        books.forEach(book => {
            const bookCard = document.createElement("div");
            bookCard.className = "book";
            bookCard.dataset.title = book.name;
            gallery.appendChild(bookCard);
    
            const bookImg = document.createElement("img");
            bookImg.src = "../img/" + book.image;
            bookImg.alt = "Kitap Kapak Resmi";
            bookCard.appendChild(bookImg);
    
            const bookDetails = document.createElement("div");
            bookDetails.className = "sinir";
            bookCard.appendChild(bookDetails);
    
            BookProperties("Eser:", book.name, bookDetails);
            BookProperties("Yazar:", book.author, bookDetails);
            BookProperties("Sayfa Sayısı:", book.page, bookDetails);
            BookProperties("Konusu Nedir?:", book.subject, bookDetails);
        });
    }
}

function BookProperties(property, value, parent) {
    const question = document.createElement("h4");
    question.innerHTML = property;
    parent.appendChild(question);

    const answer = document.createElement("p");
    answer.innerHTML = value;
    parent.appendChild(answer);
}

function SearchBook(value) {
    const gallery = document.getElementById("gallery");
    const alert = document.createElement("p");
    gallery.innerHTML = "";

    const foundBooks = books.filter(book => book.name.toLowerCase() === value.toLowerCase());
    if (foundBooks.length > 0) {
        alert.innerHTML = `${foundBooks.length} sonuç bulundu!`;
        gallery.appendChild(alert);

        foundBooks.forEach(book => {
            const bookCard = document.createElement("div");
            bookCard.className = "book";
            bookCard.dataset.title = book.name;
            gallery.appendChild(bookCard);
    
            const bookImg = document.createElement("img");
            bookImg.src = "../img/" + book.image;
            bookImg.alt = "Kitap Kapak Resmi";
            bookCard.appendChild(bookImg);
    
            const bookDetails = document.createElement("div");
            bookDetails.className = "sinir";
            bookCard.appendChild(bookDetails);
    
            BookProperties("Eser:", book.name, bookDetails);
            BookProperties("Yazar:", book.author, bookDetails);
            BookProperties("Sayfa Sayısı:", book.page, bookDetails);
            BookProperties("Konusu Nedir?:", book.subject, bookDetails);
        });
    } else {
        alert.innerHTML = `Herhangi bir kitap bulunamadı!`;
        gallery.prepend(alert);
    }
}

async function main() {
    document.addEventListener("DOMContentLoaded", () => {
        BookCard();

        const searchBookBtn = document.getElementById("kitap_bul");
        searchBookBtn.addEventListener("click", () => {
            SearchBook(document.getElementById("kitap_ara").value);
        });
    });
}

main();
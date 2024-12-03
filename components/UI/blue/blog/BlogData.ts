import {BlogPost} from "@/types/type";

export const BlogData: BlogPost[] = [

    {
        id: 1,
        title: "Dlaczego phishing jest najczęstszym wektorem ataku?",
        h1: "Czym jest phishing?",
        desc: "Phishing to technika stosowana przez cyberprzestępców w celu wyłudzenia poufnych informacji, takich jak dane logowania, numery kart kredytowych czy dane osobowe. Polega na wysyłaniu fałszywych wiadomości e-mail lub tworzeniu podrobionych stron internetowych, które wyglądają jak autentyczne.",
        p1: "<img src='/assets/img/blueblog/phishing/phishing.jpg' alt='ransomware' class='imgBlog'><ul class='font-semibold my-4 text-xl'>1. Jak działa phishing?</ul>Przestępcy podszywają się pod zaufane firmy, banki czy instytucje, aby oszukać użytkowników i skłonić ich do ujawnienia danych." +
            "<h4 class='mt-4 font-bold'>Co zrobić, aby się chronić?</h4>" +
            "<ul>" +
            "<ol>- Uważaj na e-maile z prośbą o pilne działanie, np. zmiany hasła.</ol>" +
            "<ol>- Sprawdzaj adresy e-mail nadawców.</ol>" +
            "<ol>- Nie klikaj w podejrzane linki ani załączniki.</ol>" +
            "<ol>- Korzystaj z filtrów antyphishingowych i szkol pracowników.</ol>" +
            "</ul>",
        h2: "Jak rozpoznać próbę phishingu?<img src='/assets/img/blueblog/phishing/phishing1.jpg' alt='ransomware' class='imgBlog'>",
        p2: "Większość prób phishingu można zidentyfikować dzięki niezgodnościom w treści wiadomości, literówkom w adresach URL lub nienaturalnemu językowi. Ważne jest, aby zawsze zwracać uwagę na szczegóły.",
        h3: "Jak możemy Ci pomóc?",
        p3: "Nasza firma oferuje:\n" +
            "- Wdrożenie zaawansowanych systemów ochrony przed phishingiem,\n" +
            "- Szkolenia dla pracowników w zakresie rozpoznawania zagrożeń,\n" +
            "- Audyty bezpieczeństwa Twojej organizacji.",
        imgHeader: '/assets/img/blueblog/phishing/phishingbg.jpg',
        data: '13.10.2024'
    },

    {
        id:2,
        title: "Jak stworzyć bezpieczne środowisko pracy zdalnej?",
        h1: "Wyzwania pracy zdalnej",
        desc: "Praca zdalna stała się standardem w wielu firmach, ale wiąże się z nowymi wyzwaniami w zakresie cyberbezpieczeństwa. Jakie kroki należy podjąć, aby zabezpieczyć dane firmowe podczas pracy poza biurem?",
        p1: "<img src='/assets/img/blueblog/jakstworzycbezpieczne/safe.jpg' alt='ransomware' class='imgBlog'><ul class='font-semibold my-4 text-xl'>1. Korzystanie z VPN</ul>Sieć VPN szyfruje dane przesyłane między użytkownikiem a firmowym serwerem, zapewniając ochronę przed podsłuchem." +
            "<ul class='font-semibold my-4 text-xl'>2. Zabezpieczone urządzenia</ul>Każde urządzenie używane do pracy zdalnej powinno być zabezpieczone silnym hasłem oraz programem antywirusowym." +
            "<ul class='font-semibold my-4 text-xl'>3. Regularne aktualizacje</ul>Nieaktualne systemy operacyjne i aplikacje to otwarte drzwi dla cyberprzestępców." +
            "<ul class='font-semibold my-4 text-xl'>4. Szkolenia z cyberbezpieczeństwa</ul>Pracownicy powinni być regularnie szkoleni z zasad bezpieczeństwa podczas pracy zdalnej.",
        h2: "Dlaczego warto zadbać o bezpieczeństwo pracy zdalnej?<img src='/assets/img/blueblog/jakstworzycbezpieczne/safe2.jpg' alt='ransomware' class='imgBlog'>",
        p2: "Naruszenia bezpieczeństwa podczas pracy zdalnej mogą prowadzić do wycieku poufnych danych, strat finansowych oraz utraty reputacji firmy.",
        h3: "Nasze rozwiązania",
        p3: "Oferujemy:\n" +
            "- Wdrożenie bezpiecznych środowisk pracy zdalnej,\n" +
            "- Konfigurację VPN i ochrony sieciowej,\n" +
            "- Szkolenia z zakresu pracy zdalnej i bezpieczeństwa.",
        imgHeader: '/assets/img/blueblog/jakstworzycbezpieczne/safe2.jpg',
        data: '16.10.2024'
    },

    {
        id: 3,
        title: "Bezpieczne płatności online – co musisz wiedzieć?",
        h1: "Ryzyka związane z płatnościami online",
        desc: "Każdego dnia miliony osób dokonują transakcji online. Niestety, brak świadomości i odpowiednich zabezpieczeń może prowadzić do kradzieży danych i strat finansowych. Jak płacić bezpiecznie w Internecie?",
        p1: "<img src='/assets/img/blueblog/bezpieczneplatnosci/pay.jpg' alt='ransomware' class='imgBlog'><ul class='font-semibold my-4 text-xl'>1. Używaj zaufanych platform płatniczych</ul>Zawsze wybieraj sprawdzone serwisy, takie jak PayPal czy Google Pay, które oferują dodatkowe warstwy zabezpieczeń." +
            "<ul class='font-semibold my-4 text-xl'>2. Korzystaj z weryfikacji dwuskładnikowej</ul>Dwuskładnikowe uwierzytelnianie (MFA) dodaje dodatkowy poziom ochrony podczas logowania." +
            "<ul class='font-semibold my-4 text-xl'>3. Unikaj publicznych sieci Wi-Fi</ul>Nigdy nie dokonuj płatności online, korzystając z niezabezpieczonych sieci publicznych." +
            "<ul class='font-semibold my-4 text-xl'>4. Sprawdzaj certyfikaty SSL</ul>Zanim wprowadzisz dane karty, upewnij się, że strona ma aktywny certyfikat SSL (zielona kłódka w pasku adresu).",
        h2: "Jakie są najczęstsze zagrożenia?<img src='/assets/img/blueblog/bezpieczneplatnosci/pay1.jpg' alt='ransomware' class='imgBlog'>",
        p2: "Najczęstsze ataki to phishing, skimming oraz przechwytywanie danych w niezabezpieczonych sieciach. Edukacja i stosowanie odpowiednich narzędzi mogą znacznie zmniejszyć ryzyko.",
        h3: "Zaufaj ekspertom",
        p3: "Nasze usługi obejmują:\n" +
            "- Audyt bezpieczeństwa płatności online,\n" +
            "- Wdrożenie systemów antyfraudowych,\n" +
            "- Doradztwo w zakresie bezpiecznych metod płatności.",
        imgHeader: '/assets/img/blueblog/bezpieczneplatnosci/pay2.jpg',
        data: '25.10.2024'
    },
    {
        id: 4,
        title: "Czy Twoja firma jest gotowa na atak ransomware?",
        h1: "Ransomware – współczesne zagrożenie",
        desc: "Ataki ransomware stają się coraz bardziej powszechne, a ich skutki mogą być katastrofalne dla każdej organizacji. Czy Twoja firma jest przygotowana na ten scenariusz?",
        p1: "<img src='/assets/img/blueblog/blogRansomware.jpg' alt='ransomware' class='imgBlog'>" +
            "<ul class='font-semibold my-4 text-xl'>1. Jak działa ransomware?</ul>Ransomware szyfruje dane ofiary, żądając okupu w zamian za ich odblokowanie." +
            "<ul class='font-semibold my-4 text-xl'>2. Backup jako kluczowe narzędzie</ul>Regularne tworzenie kopii zapasowych pozwala na szybkie przywrócenie danych bez konieczności płacenia okupu." +
            "<ul class='font-semibold my-4 text-xl'>3. Zabezpieczenie sieci</ul>Ochrona sieci przed ransomware wymaga stosowania zaawansowanych narzędzi, takich jak firewalle nowej generacji czy systemy IDS." +
            "<ul class='font-semibold my-4 text-xl'>4. Edukacja pracowników</ul>Pracownicy są często pierwszą linią obrony – ich świadomość zagrożeń jest kluczowa.",
        h2: "Jakie są konsekwencje ataków ransomware?" +
            "<img src='/assets/img/blueblog/ransomware1.jpg' alt='ransomware' class='imgBlog'>",
        p2: "Koszty finansowe, straty wizerunkowe oraz utrata danych to najczęstsze skutki ataków ransomware. Odpowiednie przygotowanie może zapobiec takim sytuacjom.",
        h3: "Nasza pomoc",
        p3: "Zapewniamy:\n" +
            "- Kompleksowe rozwiązania antyransomware,\n" +
            "- Szkolenia w zakresie ochrony przed atakami,\n" +
            "- Analizę i wdrożenie polityki backupu.",
        imgHeader: '/assets/img/blueblog/headerRansomware.jpg',
        data: '15.11.2024'
    },

]
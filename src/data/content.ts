export type Locale = "pl" | "en";

const pl = {
  meta: {
    title: "Biuro Rachunkowe GOZ — Poznań",
    description:
      "Biuro Rachunkowe GOZ — pełna księgowość, KPiR, ryczałt, kadry i płace. Na rynku od 2001 roku, świadectwo kwalifikacyjne Ministra Finansów nr 22010/01.",
  },
  nav: {
    about: "O nas",
    services: "Usługi",
    pricing: "Cennik",
    contact: "Kontakt",
    logoAria: "Biuro Rachunkowe GOZ — przewiń do góry",
    themeToLight: "Włącz tryb jasny",
    themeToDark: "Włącz tryb ciemny",
    langSwitchTo: "English",
  },
  hero: {
    eyebrow: "Biuro Rachunkowe GOZ · Poznań",
    heading: "Twoja księgowość, prowadzona jak należy — od 2001 roku",
    body:
      "Prężnie działające biuro rachunkowe obsługujące firmy krajowe i zagraniczne. Pełna księgowość, KPiR, ryczałt, kadry i płace — pod jednym, licencjonowanym dachem.",
    ctaPrimary: "Umów rozmowę",
    ctaSecondary: "Zobacz usługi",
    stampYear: "od 2001",
    stampLicense: "MF nr 22010/01",
  },
  about: {
    eyebrow: "O nas",
    heading: "Świadectwo kwalifikacyjne. Dwadzieścia lat praktyki.",
    paragraphs: [
      "Jesteśmy Biurem Rachunkowym działającym na rynku finansowym od roku 2001, na podstawie posiadanego świadectwa kwalifikacyjnego Ministra Finansów nr 22010/01.",
      "Jesteśmy prężnie działającą firmą świadczącą zewnętrznie usługi księgowe podmiotów krajowych i zagranicznych, specjalizującą się w obsłudze pełnej księgowości, jak również pozostałych form ewidencji księgowej (KPiR, ryczałty).",
    ],
    stats: [
      { value: "2001", label: "rok założenia" },
      { value: "22010/01", label: "nr świadectwa MF" },
      { value: "2", label: "formy ewidencji: KPiR i ryczałt" },
    ],
  },
  services: {
    eyebrow: "Usługi",
    heading: "Świadczymy następujące usługi z zakresu obsługi księgowej firm",
    items: [
      {
        title: "Księgi rachunkowe",
        description:
          "Pełna księgowość: zakładanie planu kont, prowadzenie ksiąg miesięcznie, sporządzanie sprawozdań finansowych, roczne rozliczenia podatkowe.",
      },
      {
        title: "Podatkowa Księga Przychodów i Rozchodów",
        description:
          "Prowadzenie ewidencji KPiR zgodnie z przepisami podatkowymi, miesięczne zamknięcia, roczne deklaracje podatkowe.",
      },
      {
        title: "Ryczałt ewidencjonowany",
        description:
          "Ewidencja przychodów, obsługa dokumentacji VAT, roczne rozliczenia podatkowe.",
      },
      {
        title: "Kadry, płace i ZUS",
        description:
          "Naliczanie wynagrodzeń pracowników, dokumentacja ZUS, prowadzenie akt osobowych.",
      },
      {
        title: "Usługi dodatkowe",
        description:
          "Sprawozdania GUS, doradztwo księgowe, podatkowe i kadrowe, reprezentowanie klienta przed urzędami skarbowymi.",
      },
    ],
  },
  pricing: {
    eyebrow: "Cennik",
    heading: "Wycena dopasowana do Twojej firmy",
    body:
      "Nie publikujemy sztywnego cennika — każda firma ma inną liczbę dokumentów, pracowników i formę opodatkowania. Napisz lub zadzwoń, a przygotujemy indywidualną wycenę w 24 godziny.",
    cta: "Poproś o wycenę",
    note: "Bez zobowiązań. Odpowiadamy tego samego dnia roboczego.",
  },
  contact: {
    eyebrow: "Kontakt",
    heading: "Zapraszamy do naszego biura",
    body: "Zostaw wiadomość, a otworzymy dla Ciebie gotową odpowiedź w skrzynce mailowej — albo zadzwoń bezpośrednio.",
    phoneLabel: "Telefon",
    phone: "+48 61 8244 074",
    emailLabel: "E-mail",
    email: "biuro@biurogoz.pl",
    addressLabel: "Adres",
    address: "ul. Obornicka 330, 60-689 Poznań",
    form: {
      name: "Imię i nazwisko",
      namePlaceholder: "Jan Kowalski",
      email: "Adres e-mail",
      emailPlaceholder: "jan@firma.pl",
      phone: "Telefon (opcjonalnie)",
      phonePlaceholder: "+48 600 000 000",
      message: "Wiadomość",
      messagePlaceholder: "Opisz krótko swoją firmę i czego potrzebujesz...",
      submit: "Wyślij wiadomość",
      submitted: "Otwieramy Twój program pocztowy…",
      errorRequired: "To pole jest wymagane",
      errorEmail: "Podaj prawidłowy adres e-mail",
      mailSubject: "Zapytanie ze strony — Biuro Rachunkowe GOZ",
    },
  },
  links: {
    eyebrow: "Przydatne linki",
    heading: "Instytucje, z którymi współpracujemy na co dzień",
    items: [
      { label: "Ministerstwo Finansów", href: "https://www.gov.pl/web/finanse" },
      { label: "Zakład Ubezpieczeń Społecznych (ZUS)", href: "https://www.zus.pl" },
      { label: "Główny Urząd Statystyczny (GUS)", href: "https://stat.gov.pl" },
      { label: "Urzędy Skarbowe — Poznań", href: "https://www.podatki.gov.pl" },
    ],
  },
  footer: {
    rights: "Wszystkie prawa zastrzeżone.",
    backToTop: "Do góry",
  },
};

const en: typeof pl = {
  meta: {
    title: "Biuro Rachunkowe GOZ — Poznań Accounting Office",
    description:
      "Biuro Rachunkowe GOZ — full bookkeeping, KPiR, flat-rate revenue accounting, payroll & HR. Operating since 2001, Ministry of Finance qualification certificate nr 22010/01.",
  },
  nav: {
    about: "About",
    services: "Services",
    pricing: "Pricing",
    contact: "Contact",
    logoAria: "Biuro Rachunkowe GOZ — scroll to top",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    langSwitchTo: "Polski",
  },
  hero: {
    eyebrow: "Biuro Rachunkowe GOZ · Poznań, Poland",
    heading: "Your bookkeeping, done properly — since 2001",
    body:
      "An established accounting office serving domestic and foreign companies. Full bookkeeping, KPiR, flat-rate accounting, payroll and HR — all under one licensed roof.",
    ctaPrimary: "Book a call",
    ctaSecondary: "See services",
    stampYear: "since 2001",
    stampLicense: "MF no. 22010/01",
  },
  about: {
    eyebrow: "About us",
    heading: "A Ministry of Finance certificate. Two decades of practice.",
    paragraphs: [
      "We are an accounting office operating in the financial market since 2001, under Ministry of Finance qualification certificate nr 22010/01.",
      "We are an established firm providing outsourced accounting services to domestic and foreign entities, specializing in full bookkeeping as well as other forms of accounting records (KPiR, flat-rate revenue accounting).",
    ],
    stats: [
      { value: "2001", label: "year founded" },
      { value: "22010/01", label: "MF certificate no." },
      { value: "2", label: "record-keeping regimes: KPiR & ryczałt" },
    ],
  },
  services: {
    eyebrow: "Services",
    heading: "The accounting services we provide",
    items: [
      {
        title: "Full bookkeeping (ledgers)",
        description:
          "Chart of accounts setup, monthly ledger management, financial statement preparation, annual tax filings.",
      },
      {
        title: "Tax Revenue & Expense Ledger (KPiR)",
        description:
          "Record-keeping per Polish tax law, monthly closings, annual tax declarations.",
      },
      {
        title: "Flat-rate revenue accounting (ryczałt)",
        description: "Revenue tracking, VAT documentation, annual tax returns.",
      },
      {
        title: "Payroll, HR & Social Security (ZUS)",
        description: "Payroll processing, ZUS documentation, personnel file management.",
      },
      {
        title: "Additional services",
        description:
          "GUS statistical reports, accounting/tax/HR advisory, client representation before tax authorities.",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    heading: "A quote fitted to your business",
    body:
      "We don't publish a fixed price list — every business differs by document volume, headcount, and tax regime. Get in touch and we'll prepare an individual quote within 24 hours.",
    cta: "Request a quote",
    note: "No obligation. We reply the same business day.",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Get in touch with our office",
    body: "Leave a message and we'll open a ready-to-send email in your inbox — or call us directly.",
    phoneLabel: "Phone",
    phone: "+48 61 8244 074",
    emailLabel: "Email",
    email: "biuro@biurogoz.pl",
    addressLabel: "Address",
    address: "ul. Obornicka 330, 60-689 Poznań, Poland",
    form: {
      name: "Full name",
      namePlaceholder: "Jane Smith",
      email: "Email address",
      emailPlaceholder: "jane@company.com",
      phone: "Phone (optional)",
      phonePlaceholder: "+48 600 000 000",
      message: "Message",
      messagePlaceholder: "Briefly describe your business and what you need...",
      submit: "Send message",
      submitted: "Opening your mail client…",
      errorRequired: "This field is required",
      errorEmail: "Enter a valid email address",
      mailSubject: "Website inquiry — Biuro Rachunkowe GOZ",
    },
  },
  links: {
    eyebrow: "Useful links",
    heading: "Institutions we work with every day",
    items: [
      { label: "Ministry of Finance", href: "https://www.gov.pl/web/finanse" },
      { label: "Social Insurance Institution (ZUS)", href: "https://www.zus.pl" },
      { label: "Central Statistical Office (GUS)", href: "https://stat.gov.pl" },
      { label: "Tax Offices — Poznań", href: "https://www.podatki.gov.pl" },
    ],
  },
  footer: {
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
};

export const content = { pl, en };

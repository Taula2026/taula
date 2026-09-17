import type { ProductSlug } from "@/data/products";

export interface FeatureItem {
  title: string;
  text: string;
}

export interface ProcessStep {
  title: string;
  text: string;
}

export interface ImageCardCopy {
  alt: string;
  caption: string;
}

export interface ProductCopy {
  name: string;
  short: string;
  long: string;
}

const de = {
  meta: {
    defaultTitle: "TAULA – Tiefkühlgemüse für die Schweiz",
    defaultDescription:
      "TAULA importiert und verteilt tiefgefrorenes Gemüse ägyptischer Erzeuger für Restaurants, Detailhandel, Grosshandel und Foodservice in der Schweiz.",
  },
  nav: {
    home: "Start",
    about: "Über uns",
    products: "Produkte",
    bread: "Tabuny",
    supplyChain: "Lieferkette",
    contact: "Kontakt",
    ctaContact: "Kontakt aufnehmen",
  },
  languageSwitcherLabel: "Sprache wählen",
  common: {
    formatsOnRequest: "Formate auf Anfrage",
    detailsCta: "Details ansehen",
    close: "Schliessen",
    menu: "Menü",
    generalInquiry: "Allgemeine Anfrage",
  },
  footer: {
    tagline: "Tiefkühlgemüse aus Ägypten, zuverlässig verteilt für die Schweiz.",
    originLine: "Herkunft der Produkte: Ägypten",
    navHeading: "Navigation",
    contactHeading: "Kontakt",
    addressHeading: "Adresse",
    legalHeading: "Rechtliches",
    imprintLink: "Impressum",
    placeholderWarning:
      "Diese Website enthält Platzhalterangaben (Telefon, Adresse, UID), die vor dem Livegang durch die echten Geschäftsdaten ersetzt werden müssen.",
    rights: "Alle Rechte vorbehalten.",
  },
  mobileCallBar: {
    call: "Anrufen",
    contact: "Kontakt",
  },
  home: {
    hero: {
      eyebrow: "Tiefkühlgemüse aus Ägypten",
      headingLine1: "Verlässliche Frostware",
      headingLine2: "für die Gastronomie in der Schweiz",
      lead: "TAULA importiert und verteilt tiefgefrorenes Gemüse ägyptischer Erzeuger — für Restaurants, Detailhandel, Grosshandel und Foodservice in der ganzen Schweiz.",
      ctaPrimary: "Kontakt aufnehmen",
      ctaSecondary: "Produkte entdecken",
      imageAlt: "Kisten mit tiefgefrorenem Gemüse im Kühllager",
    },
    trustStrip: [
      "Direkt aus eigenem Import",
      "Durchgehende Kühlkette",
      "Grosshandelsmengen verfügbar",
      "Kurze Reaktionszeiten",
      "Persönliche Beratung",
    ],
    about: {
      eyebrow: "Über TAULA",
      heading: "Frisch geerntet, schockgefrostet, zuverlässig geliefert",
      body: "TAULA importiert tiefgefrorenes Gemüse von ausgewählten ägyptischen Erzeugern und beliefert Gastronomie- und Handelsbetriebe in der ganzen Schweiz. Vom Feld über die Schockfrostung bis zur Kühlkette in die Schweiz achten wir auf durchgängige Sorgfalt nach strengen Qualitätsstandards — für einen Partner, auf den sich Küche und Einkauf verlassen können.",
      ctaLabel: "Mehr über uns",
      imageAlts: [
        "Tiefkühlregal im Lager",
        "Verladung von Gemüsekisten",
        "Nahaufnahme von tiefgefrorenem Gemüse",
      ] as [string, string, string],
    },
    productsTeaser: {
      eyebrow: "Sortiment",
      heading: "Unser Gemüse, ein Ansprechpartner",
      lead: "Von Molokhia bis Bohnen — unser Sortiment deckt die Klassiker der Küche und darüber hinaus ab.",
      ctaLabel: "Alle Produkte ansehen",
    },
    contactBand: {
      eyebrow: "Kontakt",
      heading: "Sprechen wir über Ihren Bedarf",
      lead: "Ob grosse Mengen oder spezielle Anfragen — rufen Sie an oder schreiben Sie uns, wir melden uns persönlich zurück.",
      ctaPrimary: "Jetzt anrufen",
      ctaSecondary: "E-Mail schreiben",
    },
  },
  aboutPage: {
    hero: {
      eyebrow: "Über uns",
      heading: "Import und Verteilung mit Sorgfalt",
      lead: "TAULA verbindet ausgewählte ägyptische Erzeuger mit Gastronomie-, Detailhandels- und Grosshandelsbetrieben in der Schweiz — mit kurzen Wegen von der Anfrage bis zur Anlieferung.",
      imageAlt: "Lagerhalle mit Palettenregalen für Tiefkühlware",
      stackedAlt1: "Mitarbeitende bei der Kommissionierung im Kühllager",
      stackedAlt2: "Bereitgestellte Paletten zur Auslieferung",
    },
    trustMarkers: [
      "Direktimport ab ausgewählten Erzeugern",
      "Durchgehende Kühlkette",
      "Sortiment für Gastronomie und Handel",
      "Persönliche Betreuung",
    ],
    featureBand: [
      {
        title: "Direkter Import",
        text: "Wir importieren direkt ab ausgewählten ägyptischen Erzeugern, ohne unnötige Zwischenstationen.",
      },
      {
        title: "Durchgehend gefroren",
        text: "Vom Schockfrosten bis zur Anlieferung bleibt die Kühlkette lückenlos.",
      },
      {
        title: "Breites Sortiment",
        text: "Unsere Gemüsesorten decken die gängigen Bedürfnisse von Küche und Handel ab.",
      },
      {
        title: "Flexible Mengen",
        text: "Von der einzelnen Palette bis zur Grosshandelsmenge — wir richten uns nach Ihrem Bedarf.",
      },
      {
        title: "Persönlicher Kontakt",
        text: "Ein fester Ansprechpartner begleitet Anfrage, Angebot und Lieferung.",
      },
    ] as FeatureItem[],
    whyTaula: {
      eyebrow: "Warum TAULA",
      heading: "Was uns als Partner auszeichnet",
      cards: [
        {
          title: "Spezialisierung auf ägyptisches Gemüse",
          text: "Wir kennen die Erzeuger, die Erntezeiten und die Verarbeitung unserer Produkte im Detail.",
        },
        {
          title: "Molokhia im Sortiment",
          text: "Als einer von wenigen Anbietern in der Schweiz führen wir Molokhia durchgehend im Angebot.",
        },
        {
          title: "Schockfrostung direkt nach der Ernte",
          text: "Das Gemüse wird unmittelbar nach der Ernte schockgefroren, um Aroma und Konsistenz zu erhalten.",
        },
        {
          title: "Lückenlose Kühlkette",
          text: "Von der Einfuhr bis zur Auslieferung bleibt die Ware durchgehend tiefgekühlt.",
        },
        {
          title: "Sorgfältige Wareneingangskontrolle",
          text: "Jede Lieferung wird bei Eingang optisch und mengenmässig geprüft.",
        },
        {
          title: "Formate nach Bedarf",
          text: "Wir besprechen Formate und Liefermengen direkt mit Ihnen — auf Anfrage, nicht von der Stange.",
        },
        {
          title: "Zuverlässige Distribution in der Schweiz",
          text: "Unsere Logistik ist auf Betriebe in der ganzen Schweiz ausgerichtet.",
        },
        {
          title: "Direkter Draht zum Team",
          text: "Fragen und Sonderwünsche klären wir telefonisch oder per E-Mail, ohne Umwege.",
        },
      ] as FeatureItem[],
    },
  },
  productsPage: {
    hero: {
      eyebrow: "Produkte",
      heading: "Tiefkühlgemüse für Küche und Handel",
      lead: "Unsere Sorten aus ägyptischem Anbau, schockgefroren und bereit für Ihre Küche oder Ihr Sortiment.",
      imageAlt: "Verschiedene tiefgefrorene Gemüsesorten aus dem Sortiment",
      badges: [
        "100 % Gemüse",
        "Ohne Zusatzstoffe",
        "Direkt tiefgefroren",
        "Herkunft: Ägypten",
      ],
    },
    benefits: [
      {
        title: "Gleichbleibende Qualität",
        text: "Durch die Schockfrostung direkt nach der Ernte bleiben Farbe, Aroma und Konsistenz erhalten.",
      },
      {
        title: "Einfache Lagerung",
        text: "Tiefgekühlte Ware lässt sich lange und platzsparend lagern, ganz ohne Verderb.",
      },
      {
        title: "Flexibler Einsatz",
        text: "Ob Grossküche oder Ladentheke — die Produkte lassen sich unkompliziert einplanen.",
      },
    ] as FeatureItem[],
    breadTeaser: {
      heading: "Tabuny",
      text: "Traditionell gebackenes Fladenbrot im Karton — unsere zweite Produktlinie für Gastronomie und Handel.",
      cta: "Mehr erfahren",
    },
    contactCta: {
      eyebrow: "Interesse?",
      heading: "Fragen Sie Formate und Verfügbarkeit an",
      lead: "Formate, Liefermengen und Termine besprechen wir direkt mit Ihnen.",
      ctaPrimary: "Jetzt anrufen",
      ctaSecondary: "Anfrage senden",
    },
  },
  breadPage: {
    hero: {
      eyebrow: "Zweite Produktlinie",
      heading: "Tabuny",
      lead: "Traditionell gebackenes Fladenbrot, im Karton für Restaurants, Take-aways und Wiederverkäufer in der Schweiz.",
      imageAlt: "Frisch gebackenes Fladenbrot auf einem Gitter",
    },
    story: {
      eyebrow: "Herkunft",
      heading: "Aus unserer eigenen Bäckerei",
      text: "Tabuny ist mehr als nur Brot: ein Stück Handwerk, das mit Zeit, besten Zutaten und Respekt vor der Tradition entsteht. Wie unsere Vorfahren backen wir es klassisch auf offenem Feuer im Tontopf-Ofen, in unserer eigenen Bäckerei in Ganterschwil. Über TAULA bieten wir es zusätzlich zu unserem Gemüsesortiment auch Gastronomie- und Handelsbetrieben an, die regelmässig grössere Mengen benötigen.",
    },
    philosophy: {
      eyebrow: "Unsere Grundsätze",
      heading: "Philosophie & Qualität",
      items: [
        {
          title: "Keine Kompromisse bei den Zutaten",
          text: "Wir verwenden ausschliesslich hochwertige Rohstoffe und wissen genau, woher sie stammen.",
        },
        {
          title: "Zeit ist eine Zutat",
          text: "Guter Teig braucht Ruhe — wir geben ihm die Zeit, sein volles Aroma zu entfalten.",
        },
        {
          title: "Nachhaltigkeit",
          text: "Von der Auswahl unserer Partner bis zur Logistik handeln wir verantwortungsbewusst.",
        },
        {
          title: "Tradition trifft Moderne",
          text: "Jahrhundertealte Backtechniken kombiniert mit modernen Standards für authentischen Geschmack.",
        },
        {
          title: "Verlässlichkeit",
          text: "Pünktlichkeit und partnerschaftliche Zusammenarbeit — mit jeder Lieferung.",
        },
      ] as FeatureItem[],
    },
    promise: {
      eyebrow: "Unser Versprechen",
      heading: "Jedes Brot, das unsere Backstube verlässt, ist das Ergebnis von Leidenschaft, Geduld und der Liebe zum Detail.",
      lead: "Wir sind stolz darauf, Teil Ihres Genussmoments zu sein.",
      cta: "Kontakt aufnehmen",
    },
    benefits: [
      {
        title: "Traditionelle Rezeptur",
        text: "Klassisches Fladenbrot, gebacken nach überlieferter Tradition.",
      },
      {
        title: "Verpackt für den Betrieb",
        text: "Lieferung im Karton zu mehreren Packungen, praktisch für Küche oder Theke.",
      },
      {
        title: "Persönliche Abwicklung",
        text: "Menge, Liefertermin und Zahlungskonditionen besprechen wir direkt mit Ihnen.",
      },
    ] as FeatureItem[],
    orderCard: {
      heading: "Karton-Anfrage",
      unitLabel: "1 Karton = 24 Packungen",
      cartonsLabel: "Anzahl Kartons",
      noteLabel: "Bemerkung (optional)",
      notePlaceholder: "z. B. gewünschter Liefertermin",
      submitCta: "Anfrage senden",
      helperText: "Diese Anfrage ist unverbindlich. Wir melden uns persönlich zur Bestätigung von Menge, Termin und Konditionen.",
    },
    contactCta: {
      eyebrow: "Interesse?",
      heading: "Sprechen Sie mit uns über Ihren Bedarf",
      lead: "Rufen Sie uns an oder senden Sie eine Anfrage — wir melden uns persönlich zurück.",
      ctaPrimary: "Jetzt anrufen",
      ctaSecondary: "Anfrage senden",
    },
  },
  supplyChainPage: {
    hero: {
      eyebrow: "Lieferkette",
      heading: "Vom Feld in Ägypten bis vor Ihre Tür in der Schweiz",
      lead: "Ein durchgehender Prozess sorgt dafür, dass unser Gemüse sicher, frisch und zuverlässig ankommt.",
      imageAlt: "Lastwagen auf einer alpinen Passstrasse",
    },
    steps: [
      {
        title: "Vertrauenswürdige Erzeuger",
        text: "Wir arbeiten mit ausgewählten Erzeugern in Ägypten zusammen, die wir persönlich kennen.",
      },
      {
        title: "IQF-Verarbeitung",
        text: "Direkt nach der Ernte wird das Gemüse einzeln schockgefroren (IQF), um Qualität und Textur zu sichern.",
      },
      {
        title: "Import und Zoll",
        text: "Die Ware wird fachgerecht importiert und durch den Schweizer Zoll abgefertigt.",
      },
      {
        title: "Kühllagerung",
        text: "Bis zur Auslieferung lagert das Gemüse durchgehend bei konstanten Tiefkühltemperaturen.",
      },
      {
        title: "Qualitätskontrolle",
        text: "Jede Charge wird vor der Auslieferung optisch und mengenmässig kontrolliert.",
      },
      {
        title: "Distribution",
        text: "Über unsere Logistikpartner erreicht die Ware Betriebe in der ganzen Schweiz.",
      },
    ] as ProcessStep[],
    imageCards: [
      { alt: "Gang im Kühllager mit Palettenregalen", caption: "Kühllager" },
      { alt: "Regalsystem für Tiefkühlpaletten", caption: "Lagerung" },
      { alt: "IQF-Produktionslinie für Gemüse", caption: "IQF-Verarbeitung" },
      { alt: "Team bei der Qualitätsprüfung", caption: "Qualitätsprüfung" },
      { alt: "Lastwagenflotte am Verteilzentrum", caption: "Distribution" },
    ] as ImageCardCopy[],
    closingCta: {
      eyebrow: "Bereit für die Zusammenarbeit?",
      heading: "Nehmen Sie Kontakt mit uns auf",
      lead: "Wir beraten Sie gerne zu Sortiment, Prozess und Lieferung.",
      ctaPrimary: "Jetzt anrufen",
      ctaSecondary: "E-Mail schreiben",
    },
  },
  contactPage: {
    eyebrow: "Kontakt",
    heading: "Sprechen wir über Ihren Bedarf",
    lead: "Rufen Sie uns an oder senden Sie uns eine Nachricht — wir melden uns persönlich zurück.",
    detailsHeading: "Direktkontakt",
    phoneLabel: "Telefon",
    emailLabel: "E-Mail",
    addressLabel: "Adresse",
    followUsHeading: "Folgen Sie uns",
    form: {
      heading: "Nachricht senden",
      name: "Name",
      company: "Firma",
      email: "E-Mail",
      phone: "Telefon",
      interest: "Interesse",
      interestHelp: "Wählen Sie das Produkt, zu dem Sie Informationen wünschen — wir melden uns mit den passenden Angaben.",
      message: "Nachricht",
      interestGeneral: "Allgemeine Anfrage",
      interestBread: "Tabuny",
      submit: "Nachricht senden",
      submitting: "Wird gesendet…",
      successTitle: "Danke für Ihre Nachricht",
      successMessage: "Wir haben Ihre Anfrage erhalten und melden uns in Kürze.",
      errorTitle: "Ihre Nachricht konnte nicht gesendet werden",
      errorMessage: "Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.",
      requiredNote: "* Pflichtfeld",
    },
  },
  imprintPage: {
    heading: "Impressum",
    companyLabel: "Firma",
    addressLabel: "Adresse",
    uidLabel: "UID",
    contactLabel: "Kontakt",
    disclaimerHeading: "Haftungshinweis",
    disclaimerText:
      "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich.",
  },
  products: {
    molokhia: {
      name: "Molokhia",
      short: "Fein geschnittenes Molokhia-Blattgemüse, schockgefroren direkt nach der Ernte.",
      long: "Molokhia ist in der Schweiz nur bei wenigen Anbietern erhältlich — bei TAULA gehört es fest zum Sortiment. Das Blattgemüse wird in Ägypten geerntet, fein geschnitten und unmittelbar danach schockgefroren, damit Farbe und Aroma erhalten bleiben. Geeignet für die klassische Zubereitung als Eintopf sowie als Zutat in weiteren Gerichten. Formate auf Anfrage.",
    },
    okra: {
      name: "Okra",
      short: "Ganze, tiefgefrorene Okraschoten aus ägyptischem Anbau.",
      long: "Unsere Okra wird im optimalen Reifezustand geerntet und direkt danach schockgefroren, um Biss und Aroma zu bewahren. Vielseitig einsetzbar in Eintöpfen, Currys oder als Beilage. Formate auf Anfrage.",
    },
    peas: {
      name: "Erbsen",
      short: "Zarte grüne Erbsen, schonend tiefgefroren.",
      long: "Die Erbsen werden kurz nach der Ernte verarbeitet und schockgefroren, damit Süsse und Farbe erhalten bleiben. Ein vielseitiger Klassiker für Küche und Beilagen, ganzjährig verfügbar. Formate auf Anfrage.",
    },
    potatoes: {
      name: "Taro",
      short: "Tiefgefrorene Taro-Stücke aus ägyptischem Anbau.",
      long: "Taro (auch als Qulqas bekannt) ist eine in der ägyptischen Küche beliebte Wurzelknolle mit feinem, leicht nussigem Geschmack. Wir schockfrosten die geschälten Stücke direkt nach der Verarbeitung, um Textur und Geschmack zu erhalten. Geeignet für Eintöpfe, Currys und traditionelle Zubereitungen. Formate auf Anfrage.",
    },
    mixed: {
      name: "Gemüsemischung",
      short: "Ausgewogene Mischung aus mehreren tiefgefrorenen Gemüsesorten.",
      long: "Die Gemüsemischung kombiniert mehrere unserer Sorten zu einer praktischen Basis für Eintöpfe, Suppen und Beilagen. Alle Komponenten werden einzeln schockgefroren und anschliessend gemischt, damit jede Sorte ihre Textur behält. Formate auf Anfrage.",
    },
    spinach: {
      name: "Spinat",
      short: "Blattspinat, schonend tiefgefroren.",
      long: "Der Spinat wird nach der Ernte gewaschen, portioniert und schockgefroren, um Nährstoffe und Farbe zu erhalten. Einsetzbar als Beilage, in Saucen oder als Zutat in weiteren Gerichten. Formate auf Anfrage.",
    },
    beans: {
      name: "Bohnen",
      short: "Grüne Bohnen, ganz und tiefgefroren.",
      long: "Unsere grünen Bohnen werden im optimalen Reifezustand geerntet und direkt danach schockgefroren, um Biss und Farbe zu bewahren. Vielseitig einsetzbar als Beilage oder in Eintöpfen. Formate auf Anfrage.",
    },
    whiteBeans: {
      name: "Weisse Bohnen",
      short: "Sorgfältig ausgewählte, tiefgefrorene weisse Bohnen, aromatisch und verzehrfertig.",
      long: "Sorgfältig ausgewählte, tiefgefrorene weisse Bohnen, aromatisch und verzehrfertig. Direkt nach der Ernte schockgefroren, um Textur und Geschmack zu bewahren. Vielseitig einsetzbar in Eintöpfen, Suppen und als Beilage. Formate auf Anfrage.",
    },
    redBeans: {
      name: "Rote Bohnen",
      short: "Sorgfältig ausgewählte, tiefgefrorene rote Bohnen, aromatisch und verzehrfertig.",
      long: "Sorgfältig ausgewählte, tiefgefrorene rote Bohnen, aromatisch und verzehrfertig. Direkt nach der Ernte schockgefroren, um Textur und Geschmack zu bewahren. Vielseitig einsetzbar in Eintöpfen, Chili und als Beilage. Formate auf Anfrage.",
    },
  } as Record<ProductSlug, ProductCopy>,
};

export type Dictionary = typeof de;

export default de;

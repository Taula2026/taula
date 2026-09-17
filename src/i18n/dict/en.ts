import type { Dictionary, FeatureItem } from "./de";

const en: Dictionary = {
  meta: {
    defaultTitle: "TAULA – Frozen Vegetables for Switzerland",
    defaultDescription:
      "TAULA imports and distributes frozen vegetables from Egyptian producers for restaurants, retailers, wholesalers and food service businesses in Switzerland.",
  },
  nav: {
    home: "Home",
    about: "About us",
    products: "Products",
    bread: "Tabuny",
    supplyChain: "Supply chain",
    contact: "Contact",
    ctaContact: "Get in touch",
  },
  languageSwitcherLabel: "Choose language",
  common: {
    formatsOnRequest: "Formats on request",
    detailsCta: "View details",
    close: "Close",
    menu: "Menu",
    generalInquiry: "General inquiry",
  },
  footer: {
    tagline: "Frozen vegetables from Egypt, reliably distributed for Switzerland.",
    originLine: "Origin of products: Egypt",
    navHeading: "Navigation",
    contactHeading: "Contact",
    addressHeading: "Address",
    legalHeading: "Legal",
    imprintLink: "Imprint",
    placeholderWarning:
      "This website contains placeholder details (phone, address, UID) that must be replaced with the real business data before going live.",
    rights: "All rights reserved.",
  },
  mobileCallBar: {
    call: "Call",
    contact: "Contact",
  },
  home: {
    hero: {
      eyebrow: "Frozen vegetables from Egypt",
      headingLine1: "Dependable frozen produce",
      headingLine2: "for food service in Switzerland",
      lead: "TAULA imports and distributes frozen vegetables from Egyptian producers — for restaurants, retailers, wholesalers and food service across Switzerland.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "Explore products",
      imageAlt: "Crates of frozen vegetables in a cold store",
    },
    trustStrip: [
      "Direct from our own imports",
      "Unbroken cold chain",
      "Wholesale quantities available",
      "Fast response times",
      "Personal advice",
    ],
    about: {
      eyebrow: "About TAULA",
      heading: "Freshly harvested, flash-frozen, reliably delivered",
      body: "TAULA imports frozen vegetables from selected Egyptian producers and supplies food service and trade businesses across Switzerland. From the field through flash-freezing to the cold chain into Switzerland, we maintain consistent care to strict quality standards — for a partner that kitchens and buyers can rely on.",
      ctaLabel: "More about us",
      imageAlts: [
        "Frozen goods shelving in the warehouse",
        "Loading of vegetable crates",
        "Close-up of frozen vegetables",
      ],
    },
    productsTeaser: {
      eyebrow: "Range",
      heading: "Our vegetables, one point of contact",
      lead: "From molokhia to green beans — our range covers the kitchen classics and more.",
      ctaLabel: "View all products",
    },
    contactBand: {
      eyebrow: "Contact",
      heading: "Let's talk about your needs",
      lead: "Whether large quantities or special requests — call or write to us, and we'll get back to you personally.",
      ctaPrimary: "Call now",
      ctaSecondary: "Send an email",
    },
  },
  aboutPage: {
    hero: {
      eyebrow: "About us",
      heading: "Import and distribution with care",
      lead: "TAULA connects selected Egyptian producers with food service, retail and wholesale businesses in Switzerland — with short paths from inquiry to delivery.",
      imageAlt: "Warehouse with pallet racking for frozen goods",
      stackedAlt1: "Staff picking orders in the cold store",
      stackedAlt2: "Pallets staged for delivery",
    },
    trustMarkers: [
      "Direct import from selected producers",
      "Unbroken cold chain",
      "Range for food service and trade",
      "Personal support",
    ],
    featureBand: [
      {
        title: "Direct import",
        text: "We import directly from selected Egyptian producers, without unnecessary intermediaries.",
      },
      {
        title: "Frozen throughout",
        text: "From flash-freezing to delivery, the cold chain stays unbroken.",
      },
      {
        title: "Broad range",
        text: "Our vegetable varieties cover the everyday needs of kitchens and trade.",
      },
      {
        title: "Flexible quantities",
        text: "From a single pallet to wholesale volumes — we adapt to your needs.",
      },
      {
        title: "Personal contact",
        text: "A dedicated contact person accompanies your inquiry, offer and delivery.",
      },
    ],
    whyTaula: {
      eyebrow: "Why TAULA",
      heading: "What sets us apart as a partner",
      cards: [
        {
          title: "Specialised in Egyptian vegetables",
          text: "We know the producers, the harvest seasons and the processing of our products in detail.",
        },
        {
          title: "Molokhia in our range",
          text: "As one of few suppliers in Switzerland, we carry molokhia in our range on an ongoing basis.",
        },
        {
          title: "Flash-frozen right after harvest",
          text: "The vegetables are flash-frozen immediately after harvest to preserve aroma and texture.",
        },
        {
          title: "Unbroken cold chain",
          text: "From import to delivery, the goods stay frozen throughout.",
        },
        {
          title: "Careful goods-in inspection",
          text: "Every delivery is checked visually and by quantity on arrival.",
        },
        {
          title: "Formats to suit your needs",
          text: "We discuss formats and delivery quantities directly with you — on request, not off the shelf.",
        },
        {
          title: "Reliable distribution across Switzerland",
          text: "Our logistics are set up to reach businesses throughout Switzerland.",
        },
        {
          title: "A direct line to the team",
          text: "Questions and special requests are handled by phone or email, without detours.",
        },
      ],
    },
  },
  productsPage: {
    hero: {
      eyebrow: "Products",
      heading: "Frozen vegetables for kitchens and trade",
      lead: "Our varieties grown in Egypt, flash-frozen and ready for your kitchen or your range.",
      imageAlt: "A selection of frozen vegetables from the range",
      badges: ["100% vegetables", "No additives", "Flash-frozen immediately", "Origin: Egypt"],
    },
    benefits: [
      {
        title: "Consistent quality",
        text: "Flash-freezing right after harvest preserves colour, aroma and texture.",
      },
      {
        title: "Simple storage",
        text: "Frozen goods can be stored for a long time and save space, with no spoilage.",
      },
      {
        title: "Flexible use",
        text: "Whether in a large kitchen or at the counter — the products are easy to plan with.",
      },
    ],
    breadTeaser: {
      heading: "Tabuny",
      text: "Traditionally baked flatbread by the carton — our second product line for food service and retail.",
      cta: "Learn more",
    },
    contactCta: {
      eyebrow: "Interested?",
      heading: "Ask about formats and availability",
      lead: "We discuss formats, delivery quantities and timing directly with you.",
      ctaPrimary: "Call now",
      ctaSecondary: "Send an inquiry",
    },
  },
  breadPage: {
    hero: {
      eyebrow: "Second product line",
      heading: "Tabuny",
      lead: "Traditionally baked flatbread, supplied by the carton to restaurants, take-aways and resellers in Switzerland.",
      imageAlt: "Freshly baked flatbread on a cooling rack",
    },
    story: {
      eyebrow: "Origin",
      heading: "From our own bakery",
      text: "Tabuny is more than bread: a piece of craftsmanship shaped by time, the best ingredients and respect for tradition. Like our ancestors, we bake it the classic way — over an open fire in a clay-pot oven — in our own bakery in Ganterschwil. Through TAULA, we also offer it alongside our vegetable range to food service and trade businesses that need larger quantities on a regular basis.",
    },
    philosophy: {
      eyebrow: "Our principles",
      heading: "Philosophy & quality",
      items: [
        {
          title: "No compromises on ingredients",
          text: "We use only high-quality raw materials and know exactly where they come from.",
        },
        {
          title: "Time is an ingredient",
          text: "Good dough needs rest — we give it the time to develop its full flavour.",
        },
        {
          title: "Sustainability",
          text: "From choosing our partners to our logistics, we act responsibly.",
        },
        {
          title: "Tradition meets modern",
          text: "Centuries-old baking techniques combined with modern standards for authentic flavour.",
        },
        {
          title: "Reliability",
          text: "Punctuality and a partnership approach — with every delivery.",
        },
      ] as FeatureItem[],
    },
    promise: {
      eyebrow: "Our promise",
      heading: "Every loaf that leaves our bakery is the result of passion, patience and love for detail.",
      lead: "We're proud to be part of your moment of enjoyment.",
      cta: "Get in touch",
    },
    benefits: [
      {
        title: "Traditional recipe",
        text: "Classic flatbread, baked according to time-honoured tradition.",
      },
      {
        title: "Packed for business use",
        text: "Delivered by the carton with multiple packs inside, practical for kitchens or counters.",
      },
      {
        title: "Handled personally",
        text: "We discuss quantity, delivery date and payment terms directly with you.",
      },
    ] as FeatureItem[],
    orderCard: {
      heading: "Carton inquiry",
      unitLabel: "1 carton = 24 packs",
      cartonsLabel: "Number of cartons",
      noteLabel: "Note (optional)",
      notePlaceholder: "e.g. preferred delivery date",
      submitCta: "Send inquiry",
      helperText: "This inquiry is non-binding. We'll get in touch personally to confirm quantity, timing and terms.",
    },
    contactCta: {
      eyebrow: "Interested?",
      heading: "Talk to us about your needs",
      lead: "Call us or send an inquiry — we'll get back to you personally.",
      ctaPrimary: "Call now",
      ctaSecondary: "Send an inquiry",
    },
  },
  supplyChainPage: {
    hero: {
      eyebrow: "Supply chain",
      heading: "From the fields in Egypt to your door in Switzerland",
      lead: "A continuous process ensures our vegetables arrive safely, fresh and reliably.",
      imageAlt: "Truck on an alpine mountain pass road",
    },
    steps: [
      {
        title: "Trusted producers",
        text: "We work with selected producers in Egypt whom we know personally.",
      },
      {
        title: "IQF processing",
        text: "Right after harvest, the vegetables are individually flash-frozen (IQF) to preserve quality and texture.",
      },
      {
        title: "Import and customs",
        text: "The goods are properly imported and cleared through Swiss customs.",
      },
      {
        title: "Cold storage",
        text: "Until delivery, the vegetables are stored continuously at constant frozen temperatures.",
      },
      {
        title: "Quality inspection",
        text: "Every batch is checked visually and by quantity before delivery.",
      },
      {
        title: "Distribution",
        text: "Our logistics partners bring the goods to businesses throughout Switzerland.",
      },
    ],
    imageCards: [
      { alt: "Aisle in a cold store with pallet racking", caption: "Cold store" },
      { alt: "Racking system for frozen pallets", caption: "Storage" },
      { alt: "IQF production line for vegetables", caption: "IQF processing" },
      { alt: "Team performing a quality check", caption: "Quality inspection" },
      { alt: "Truck fleet at the distribution depot", caption: "Distribution" },
    ],
    closingCta: {
      eyebrow: "Ready to work together?",
      heading: "Get in touch with us",
      lead: "We're happy to advise you on range, process and delivery.",
      ctaPrimary: "Call now",
      ctaSecondary: "Send an email",
    },
  },
  contactPage: {
    eyebrow: "Contact",
    heading: "Let's talk about your needs",
    lead: "Call us or send us a message — we'll get back to you personally.",
    detailsHeading: "Direct contact",
    phoneLabel: "Phone",
    emailLabel: "Email",
    addressLabel: "Address",
    followUsHeading: "Follow us",
    form: {
      heading: "Send a message",
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      interest: "Interest",
      interestHelp: "Select the product you'd like more information about — we'll get back to you with the details.",
      message: "Message",
      interestGeneral: "General inquiry",
      interestBread: "Tabuny",
      submit: "Send message",
      submitting: "Sending…",
      successTitle: "Thank you for your message",
      successMessage: "We have received your inquiry and will get back to you shortly.",
      errorTitle: "Your message could not be sent",
      errorMessage: "Please try again or call us directly.",
      requiredNote: "* Required field",
    },
  },
  imprintPage: {
    heading: "Imprint",
    companyLabel: "Company",
    addressLabel: "Address",
    uidLabel: "UID",
    contactLabel: "Contact",
    disclaimerHeading: "Liability notice",
    disclaimerText:
      "Despite careful review of content, we accept no liability for the content of external links. The operators of linked pages are solely responsible for their content.",
  },
  products: {
    molokhia: {
      name: "Molokhia",
      short: "Finely chopped molokhia leaves, flash-frozen right after harvest.",
      long: "Molokhia is available from only a few suppliers in Switzerland — at TAULA it's a permanent part of the range. The leafy vegetable is harvested in Egypt, finely chopped and flash-frozen immediately afterwards to preserve colour and aroma. Suitable for the classic stew preparation as well as an ingredient in other dishes. Formats on request.",
    },
    okra: {
      name: "Okra",
      short: "Whole frozen okra pods grown in Egypt.",
      long: "Our okra is harvested at the optimal stage of ripeness and flash-frozen right afterwards to preserve bite and aroma. Versatile in stews, curries or as a side dish. Formats on request.",
    },
    peas: {
      name: "Peas",
      short: "Tender green peas, gently frozen.",
      long: "The peas are processed and flash-frozen shortly after harvest so that sweetness and colour are preserved. A versatile classic for cooking and side dishes, available year-round. Formats on request.",
    },
    potatoes: {
      name: "Taro",
      short: "Frozen taro pieces from Egyptian cultivation.",
      long: "Taro (also known as qulqas) is a root vegetable popular in Egyptian cooking, with a delicate, slightly nutty flavour. We flash-freeze the peeled pieces immediately after processing to preserve texture and flavour. Suitable for stews, curries and traditional preparations. Formats on request.",
    },
    mixed: {
      name: "Vegetable mix",
      short: "A balanced mix of several frozen vegetable varieties.",
      long: "The vegetable mix combines several of our varieties into a practical base for stews, soups and side dishes. All components are individually flash-frozen and then combined, so each variety keeps its texture. Formats on request.",
    },
    spinach: {
      name: "Spinach",
      short: "Leaf spinach, gently frozen.",
      long: "The spinach is washed, portioned and flash-frozen after harvest to preserve nutrients and colour. Can be used as a side dish, in sauces or as an ingredient in other dishes. Formats on request.",
    },
    beans: {
      name: "Green beans",
      short: "Whole green beans, frozen.",
      long: "Our green beans are harvested at the optimal stage of ripeness and flash-frozen right afterwards to preserve bite and colour. Versatile as a side dish or in stews. Formats on request.",
    },
    whiteBeans: {
      name: "White beans",
      short: "Carefully selected frozen white beans, flavourful and ready to use.",
      long: "Carefully selected frozen white beans, flavourful and ready to use. Flash-frozen right after harvest to preserve texture and taste. Versatile in stews, soups and as a side. Formats on request.",
    },
    redBeans: {
      name: "Red beans",
      short: "Carefully selected frozen red beans, flavourful and ready to use.",
      long: "Carefully selected frozen red beans, flavourful and ready to use. Flash-frozen right after harvest to preserve texture and taste. Versatile in stews, chili and as a side. Formats on request.",
    },
  },
};

export default en;

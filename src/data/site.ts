export const site = {
  name: "TAULA",
  legalName: "TAULA CH",
  phone: "+41 76 457 56 55",
  phoneHref: "tel:+41764575655",
  email: "info@taula.ch",
  address: {
    street: "Leimeneggstrasse 9",
    zip: "8400",
    city: "Winterthur",
    country: "Schweiz",
  },
  uid: "CHE-390.832.252",
  originCountry: "Ägypten",
  // Not live yet — user will send real profile URLs once the accounts exist.
  // Icons render regardless so the footer/contact layout is ready to go.
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
  },
  placeholders: {
    phone: false,
    address: false,
    uid: false,
  },
} as const;

export const hasPlaceholders = Object.values(site.placeholders).some(Boolean);

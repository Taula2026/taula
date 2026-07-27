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
  uid: "CHE-XXX.XXX.XXX",
  originCountry: "Ägypten",
  placeholders: {
    phone: false,
    address: false,
    uid: true,
  },
} as const;

export const hasPlaceholders = Object.values(site.placeholders).some(Boolean);

const DEFAULT_SITE_URL = "https://rands.lk";
const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const resolvedSiteUrl = envSiteUrl && envSiteUrl.length > 0 ? envSiteUrl : DEFAULT_SITE_URL;
export const SITE_URL = resolvedSiteUrl.replace(/\/+$/, "");

export const CONTACT_PHONE_DISPLAY = "+94 11 485 8899";
export const CONTACT_PHONE_E164 = "+94114858899";
export const CONTACT_EMAIL = "hi@rands.lk";

export const CONTACT_ADDRESS = "345/35, RIT Alles Mw, Colombo 08";
export const CONTACT_MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=345%2F35%2C+RIT+Alles+Mw%2C+Colombo+08";

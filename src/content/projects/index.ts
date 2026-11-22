import type { Locale } from "../../i18n/types";

export const projectIds = ["inin-sport", "leen-world", "maden-florist", "aljazea-pharmacy", "on-ecommerce", "imdb-stream", "atlas-erp", "viva", "youtube-clone", "nexton-ecommerce", "reeq-al-nahl", "sakib", "nannocare", "beans-united", "foushi-events", "yumauth", "charlottesweets"];

function simplifyModules(glob: Record<string, any>) {
  const result: Record<string, any> = {};
  for (const [path, mod] of Object.entries(glob)) {
    const match = path.match(/\/([a-z0-9_-]+)\.ts$/i);
    if (match) result[match[1] as string] = mod;
  }
  return result;
}

export const projectModules = {
  ar: simplifyModules(import.meta.glob("./ar/*.ts", { eager: true })),
  en: simplifyModules(import.meta.glob("./en/*.ts", { eager: true })),
} as const satisfies Record<Locale, Record<string, any>>;

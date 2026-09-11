export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Active Matter Wiki",
  shortName: "Active Matter",
  logoText: "AM",
  tagline: "Futuristic Sci-Fi Extraction Shooter Guides & Weapons",
  description: "Complete Active Matter Wiki with weapon guides, gameplay tips, missions, updates, and detailed information to help players master this futuristic sci-fi shooter.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://activematter.blog",
  gameUrl: "https://store.steampowered.com/app/2887580/Active_Matter/",
  heroVideoId: "Zltmk_OveVk", // Active Matter 2026 Gameplay Trailer
  social: {
    discord: "https://discord.gg/activematter",
    youtube: "https://www.youtube.com/@Active_Matter",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};

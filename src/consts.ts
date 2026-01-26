interface SocialLink {
  href: string;
  label: string;
}

interface Site {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives: boolean;
  showBackButton: boolean;
  dynamicOgImage: boolean;
  lang: string;
  timezone: string;
}

// Site configuration
export const SITE: Site = {
  website: "https://civanozbay.github.io/astro-test/",
  author: "Civan Özbay",
  profile: "https://civanozbay.github.io/astro-test/",
  desc: "AI-powered tools from Swift roots to web frontiers. Every commit lands on GitHub for you to fork & remix.",
  title: "Civan Özbay",
  ogImage: "peter-avatar.jpg",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: false,
  showBackButton: false,
  dynamicOgImage: true,
  lang: "en",
  timezone: "Europe/Berlin",
};

export const SITE_TITLE = SITE.title;
export const SITE_DESCRIPTION = SITE.desc;

// Navigation links
export const NAV_LINKS: SocialLink[] = [
  {
    href: "/",
    label: "Blog",
  },
  {
    href: "/about",
    label: "About",
  },
];

// Social media links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/civanozbay",
    label: "GitHub",
  },
  {
    href:"https://linkedin.com/in/civanozbay",
    label:"Linkedin"
  }
];

// Icon map for social media
export const ICON_MAP: Record<string, string> = {
  GitHub: "github",
  Linkedin:"linkedin",
  Email: "mail",
};

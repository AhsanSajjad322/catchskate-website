// ============================================================================
// data.js — CatchSkate website content
//
// Everything that isn't page layout lives here: videos, app store links,
// social handles, and contact info. Edit this file to update the site —
// no need to touch any component.
// ============================================================================

export const appInfo = {
  name: "Catch Skate",
  tagline: "The phone is the skateboard.",
  shortDescription:
    "Flip it, catch it, land the trick. Catch Skate uses a model trained on flipped data to predict your tricks — then lets you run games of SKATE with your friends.",
};

// Replace "#" with your live App Store / Google Play links once published.
export const appLinks = {
  appStore: { url: "#", available: false, label: "App Store" },
  googlePlay: { url: "#", available: false, label: "Google Play" },
};

// Videos are pulled straight from YouTube via their share links below.
export const videos = [
  {
    id: "intro",
    title: "Intro Video",
    description: "Meet Catch Skate and see the game in action.",
    youtubeUrl: "https://youtu.be/YYkSsRmHPTA",
  },
  {
    id: "quickstart",
    title: "Quick Start",
    description: "Everything you need to play your first round.",
    youtubeUrl: "https://youtu.be/IHwoCtucDbk",
  },
  {
    id: "skate-instructions",
    title: "SKATE — Detailed Instructions",
    description: "The full rundown of how a game of SKATE is played.",
    // No link yet — shows a "Coming soon" placeholder until this is set.
    // Once you have the real video, just paste the link here, e.g.
    // youtubeUrl: "https://youtu.be/XXXXXXXXXXX",
    youtubeUrl: null,
  },
];

// Helper to turn any youtu.be / youtube.com URL into an embeddable ID.
export function getYouTubeId(url) {
  const patterns = [
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/watch\?v=([^?&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export const socials = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@catchskate",
    url: "https://instagram.com/catchskate",
  },
  {
    id: "tiktok",
    label: "TikTok",
    handle: "@catchskate",
    url: "https://tiktok.com/@catchskate",
  },
  {
    id: "youtube",
    label: "YouTube",
    handle: "@catchskate",
    url: "https://youtube.com/@catchskate",
  },
];

export const contact = {
  email: "catchskateapp@gmail.com",
  phone: "Coming soon",
  address: {
    city: "San Diego",
    state: "CA",
    zip: "92111",
  },
};

export const legalLinks = {
  terms: "/terms.html",
  privacy: "/privacy.html",
};

/**
 * Digital Media Ambassador Scholarship portfolio content.
 *
 * PLACEHOLDER GUIDE — search for "[insert" across this file to find values to replace:
 * - reel links / embed URLs → `link` on each content item
 * - stats → `contentImpact.stats` and per-item `stats` on content items
 * - contact links → `contact.links`
 */

export type ContentRole =
  | "on-camera presenter"
  | "hook ideation"
  | "editing direction"
  | "filming plan"
  | "society content planning"
  | "mini vlog creator";

export type ContentPlatform = "Instagram" | "TikTok" | "YouTube";

export type ContentItem = {
  id: string;
  title: string;
  platform: ContentPlatform;
  /** REPLACE: paste reel URL or embed URL */
  link: string;
  role: ContentRole;
  description: string;
  stats: {
    views: string;
    likes: string;
    comments: string;
    sharesSaves: string;
    engagementNote: string;
  };
};

export type ContentCategory = {
  id: string;
  title: string;
  description: string;
  items: ContentItem[];
};

export const mediaAmbassadorCopy = {
  hero: {
    headline: "Digital Media Ambassador Portfolio",
    subheading:
      "Short-form video, student storytelling, and cultural content created with a focus on connection, clarity, and audience engagement.",
    intro:
      "I'm Bhakthi Salimath — a Bachelor of Advanced Computing student at the University of Sydney, Media Relations Associate at GDG on Campus USYD, and upcoming OLE In-Country Experience participant in Japan.",
    cta: {
      reels: "View Featured Reels",
      experience: "See Content Experience",
      contact: "Contact Me",
    },
    arrowLabel: "Scroll to content",
  },

  scholarshipFit: {
    title: "Why I'm suited to be a Digital Media Ambassador",
    subtitle:
      "Skills and experience that align with the OLE In-Country Experience Digital Media Ambassador role.",
    points: [
      {
        title: "Confident on camera",
        body: "Comfortable being on camera and representing the University of Sydney publicly — whether for society content or personal mini vlogs.",
      },
      {
        title: "Short-form video experience",
        body: "Nearly half a year planning and creating short-form video content through GDG on Campus USYD — from ideation to filming support.",
      },
      {
        title: "Hooks & audience retention",
        body: "Able to ideate hooks and structure content so viewers keep watching — thinking about the first 2–3 seconds and pacing throughout.",
      },
      {
        title: "Instagram-style storytelling",
        body: "Experience with reels, mini vlogs, and student-focused storytelling on Instagram and TikTok (@bhakthi_).",
      },
      {
        title: "Reliable under deadlines",
        body: "Used to working around event timelines and society deadlines — planning content ahead and delivering on time.",
      },
      {
        title: "Passion for Japan & culture",
        body: "Strong interest in documenting Japan, language learning, cultural immersion, and authentic student life abroad.",
      },
    ],
  },

  /**
   * FEATURED REELS — add your reel links in each item's `link` field.
   * Categories group content by type; role labels clarify your contribution
   * even when you're not on camera.
   */
  contentCategories: [
    {
      id: "gdg-content",
      title: "GDG on Campus USYD Content",
      description:
        "On-camera reels for @gdg.usyd — 13 society posts I appeared in through my Media Relations role, oldest to newest.",
      items: [
        {
          id: "gdg-1",
          title: "On-camera GDG reel · 1 of 13",
          platform: "Instagram" as ContentPlatform,
          link: "https://www.instagram.com/gdg.usyd/reel/DIvbVLmzPf6/",
          role: "on-camera presenter" as ContentRole,
          description:
            "On-camera society content for GDG on Campus USYD — earliest reel in this series.",
          stats: {
            views: "4,267",
            likes: "42",
            comments: "6",
            sharesSaves: "—",
            engagementNote: "Oldest reel in my on-camera GDG series.",
          },
        },
        {
          id: "gdg-2",
          title: "On-camera GDG reel · 2 of 13",
          platform: "Instagram" as ContentPlatform,
          link: "https://www.instagram.com/gdg.usyd/reel/DNSkrMZTKit/",
          role: "on-camera presenter" as ContentRole,
          description:
            "On-camera society content for GDG on Campus USYD.",
          stats: {
            views: "3,338",
            likes: "35",
            comments: "2",
            sharesSaves: "—",
            engagementNote: "",
          },
        },
        {
          id: "gdg-3",
          title: "On-camera GDG reel · 3 of 13",
          platform: "Instagram" as ContentPlatform,
          link: "https://www.instagram.com/gdg.usyd/reel/DOap1FNkgEG/",
          role: "on-camera presenter" as ContentRole,
          description:
            "On-camera society content for GDG on Campus USYD.",
          stats: {
            views: "4,342",
            likes: "56",
            comments: "3",
            sharesSaves: "—",
            engagementNote: "Strong like count relative to views.",
          },
        },
        {
          id: "gdg-4",
          title: "On-camera GDG reel · 4 of 13",
          platform: "Instagram" as ContentPlatform,
          link: "https://www.instagram.com/gdg.usyd/reel/DOvXdpEEnzx/",
          role: "on-camera presenter" as ContentRole,
          description:
            "On-camera society content for GDG on Campus USYD.",
          stats: {
            views: "3,243",
            likes: "29",
            comments: "3",
            sharesSaves: "—",
            engagementNote: "",
          },
        },
        {
          id: "gdg-5",
          title: "On-camera GDG reel · 5 of 13",
          platform: "Instagram" as ContentPlatform,
          link: "https://www.instagram.com/gdg.usyd/reel/DPSgGsjjC1D/",
          role: "on-camera presenter" as ContentRole,
          description:
            "On-camera society content for GDG on Campus USYD.",
          stats: {
            views: "3,397",
            likes: "27",
            comments: "2",
            sharesSaves: "—",
            engagementNote: "",
          },
        },
        {
          id: "gdg-6",
          title: "On-camera GDG reel · 6 of 13",
          platform: "Instagram" as ContentPlatform,
          link: "https://www.instagram.com/gdg.usyd/reel/DQbjTUqEqJ-/",
          role: "on-camera presenter" as ContentRole,
          description:
            "On-camera society content for GDG on Campus USYD.",
          stats: {
            views: "5,444",
            likes: "55",
            comments: "3",
            sharesSaves: "—",
            engagementNote: "Solid mid-series performer by views and likes.",
          },
        },
        {
          id: "gdg-7",
          title: "On-camera GDG reel · 7 of 13",
          platform: "Instagram" as ContentPlatform,
          link: "https://www.instagram.com/gdg.usyd/reel/DVNrIAYiWlK/",
          role: "on-camera presenter" as ContentRole,
          description:
            "On-camera society content for GDG on Campus USYD.",
          stats: {
            views: "3,889",
            likes: "35",
            comments: "1",
            sharesSaves: "—",
            engagementNote: "",
          },
        },
        {
          id: "gdg-8",
          title: "On-camera GDG reel · 8 of 13",
          platform: "Instagram" as ContentPlatform,
          link: "https://www.instagram.com/gdg.usyd/reel/DVxhpGokhA5/",
          role: "on-camera presenter" as ContentRole,
          description:
            "On-camera society content for GDG on Campus USYD.",
          stats: {
            views: "5,854",
            likes: "26",
            comments: "1",
            sharesSaves: "—",
            engagementNote: "",
          },
        },
        {
          id: "gdg-9",
          title: "On-camera GDG reel · 9 of 13",
          platform: "Instagram" as ContentPlatform,
          link: "https://www.instagram.com/gdg.usyd/reel/DWTEoKCEkce/",
          role: "on-camera presenter" as ContentRole,
          description:
            "On-camera society content for GDG on Campus USYD.",
          stats: {
            views: "6,630",
            likes: "50",
            comments: "1",
            sharesSaves: "—",
            engagementNote: "Second-highest views among my on-camera GDG reels.",
          },
        },
        {
          id: "gdg-10",
          title: "On-camera GDG reel · 10 of 13",
          platform: "Instagram" as ContentPlatform,
          link: "https://www.instagram.com/gdg.usyd/reel/DWdYy03pDhj/",
          role: "on-camera presenter" as ContentRole,
          description:
            "On-camera society content for GDG on Campus USYD.",
          stats: {
            views: "4,554",
            likes: "33",
            comments: "1",
            sharesSaves: "—",
            engagementNote: "",
          },
        },
        {
          id: "gdg-11",
          title: "On-camera GDG reel · 11 of 13",
          platform: "Instagram" as ContentPlatform,
          link: "https://www.instagram.com/gdg.usyd/reel/DW8t163J3MK/",
          role: "on-camera presenter" as ContentRole,
          description:
            "On-camera society content for GDG on Campus USYD.",
          stats: {
            views: "8,685",
            likes: "32",
            comments: "0",
            sharesSaves: "—",
            engagementNote:
              "Highest views among my on-camera @gdg.usyd reels.",
          },
        },
        {
          id: "gdg-12",
          title: "On-camera GDG reel · 12 of 13",
          platform: "Instagram" as ContentPlatform,
          link: "https://www.instagram.com/gdg.usyd/reel/DXL6wXekpoV/",
          role: "on-camera presenter" as ContentRole,
          description:
            "On-camera society content for GDG on Campus USYD.",
          stats: {
            views: "4,748",
            likes: "22",
            comments: "1",
            sharesSaves: "—",
            engagementNote: "",
          },
        },
        {
          id: "gdg-13",
          title: "On-camera GDG reel · 13 of 13",
          platform: "Instagram" as ContentPlatform,
          link: "https://www.instagram.com/gdg.usyd/reel/DXZHR6BEtaj/",
          role: "on-camera presenter" as ContentRole,
          description:
            "On-camera society content for GDG on Campus USYD — most recent reel in this series.",
          stats: {
            views: "4,673",
            likes: "26",
            comments: "3",
            sharesSaves: "—",
            engagementNote: "Latest reel in my on-camera GDG series.",
          },
        },
      ],
    },
    {
      id: "on-camera",
      title: "On-Camera / Presenter Content",
      description:
        "Highlighted on-camera work — see GDG on Campus USYD Content for the full series of 13 reels.",
      items: [
        {
          id: "camera-highlight",
          title: "Top on-camera GDG reel by views",
          platform: "Instagram" as ContentPlatform,
          link: "https://www.instagram.com/gdg.usyd/reel/DW8t163J3MK/",
          role: "on-camera presenter" as ContentRole,
          description:
            "My highest-view on-camera reel for @gdg.usyd — representative of the on-camera content I deliver for the society.",
          stats: {
            views: "8,685",
            likes: "32",
            comments: "0",
            sharesSaves: "—",
            engagementNote: "Highest views among my on-camera GDG reels.",
          },
        },
      ],
    },
    {
      id: "mini-vlogs",
      title: "Personal Mini Vlogs",
      description:
        "Personal short-form content on @bhakthi_ — mini vlogs and student-life storytelling.",
      items: [
        {
          id: "vlog-1",
          title: "[insert reel title]",
          platform: "Instagram" as ContentPlatform,
          link: "[insert reel link]",
          role: "mini vlog creator" as ContentRole,
          description:
            "[insert short description — e.g. day-in-the-life or campus mini vlog]",
          stats: {
            views: "[insert views]",
            likes: "[insert likes]",
            comments: "[insert comments]",
            sharesSaves: "[insert shares/saves]",
            engagementNote: "[insert engagement detail]",
          },
        },
      ],
    },
    {
      id: "planning-hooks",
      title: "Content Planning & Hooks",
      description:
        "Reels where I contributed hook ideation and content direction — my strongest-performing example below.",
      items: [
        {
          id: "plan-ideation-top",
          title: "Top-performing reel — hook ideation",
          platform: "Instagram" as ContentPlatform,
          link: "https://www.instagram.com/reel/DILeMTfTyRO/",
          role: "hook ideation" as ContentRole,
          description:
            "Reel I helped ideate — strongest performer in this portfolio by views, likes, and comments.",
          stats: {
            views: "24,200",
            likes: "244",
            comments: "40",
            sharesSaves: "—",
            engagementNote:
              "Best-performing reel I helped ideate — 24.2K views, 1.2% engagement rate (likes + comments ÷ views).",
          },
        },
      ],
    },
  ] satisfies ContentCategory[],

  /**
   * CONTENT IMPACT — REPLACE placeholder stat values below.
   */
  contentImpact: {
    title: "Content Impact",
    subtitle: "Selected metrics from content I've contributed to.",
    note: "Stats shown are based on selected content I contributed to through GDG on Campus USYD and personal content creation.",
    stats: [
      {
        label: "Total views",
        value: "87,264",
        detail: "total views across selected reels",
      },
      {
        label: "Top reel",
        value: "24,200",
        detail: "views on top-performing reel (hook ideation)",
      },
      {
        label: "Engagement",
        value: "1.2%",
        detail: "engagement rate on top-performing reel",
      },
      {
        label: "Audience growth",
        value: "[insert follower growth or audience interaction metric]",
        detail: "audience growth/interaction since joining media relations",
      },
      {
        label: "Reels created",
        value: "14",
        detail: "reels on-camera or contributed to (13 GDG + 1 ideation)",
      },
    ],
  },

  contentProcess: {
    title: "How I approach content",
    subtitle: "My four-step process for creating engaging short-form video.",
    steps: [
      {
        step: 1,
        title: "Hook",
        body: "Identify the first 2–3 seconds that will make someone keep watching — a question, visual, or moment that earns attention immediately.",
      },
      {
        step: 2,
        title: "Story",
        body: "Structure the video around a clear student experience or event moment — one idea per reel, told simply.",
      },
      {
        step: 3,
        title: "Edit",
        body: "Keep the pacing sharp, visual, and platform-friendly — cuts on beat, text when it helps, nothing that drags.",
      },
      {
        step: 4,
        title: "Reflect",
        body: "Connect the content back to audience value — culture, learning, community, or a takeaway viewers can relate to.",
      },
    ],
  },

  japanOle: {
    title: "What I want to create in Japan",
    subtitle:
      "If selected as Digital Media Ambassador, here's the content I'd bring to the OLE In-Country Experience.",
    intro:
      "I'm genuinely excited to document my time in Japan — not as polished travel ads, but as honest, engaging student stories that connect with other USyd students thinking about studying abroad.",
    topics: [
      "First impressions of Japan as a USyd student",
      "Day-in-the-life clips during the OLE In-Country Experience",
      "Language learning moments — the wins and the awkward ones",
      "Cultural immersion and local discoveries off the tourist trail",
      "Student travel tips for making the most of the experience",
      "Short reflections on adapting to a new environment",
      "Photography and mini vlog content showing the student experience authentically",
    ],
  },

  about: {
    title: "About me",
    subtitle:
      "Student, content creator, and aspiring Digital Media Ambassador for the USyd OLE In-Country Experience.",
    paragraphs: [
      "I'm Bhakthi Salimath, a Bachelor of Advanced Computing student at the University of Sydney. Alongside my studies, I work as Media Relations Associate at GDG on Campus USYD, where I've spent nearly half a year planning what we shoot, ideating reels, creating hooks, supporting filming, and contributing to audience-focused video content.",
      "I'm comfortable on camera and used to representing a student organisation publicly. I understand how to create catchy, audience-grabbing short-form videos — and I've recently started building my own mini vlogs on Instagram (@bhakthi_).",
      "I'm interested in combining technology, creativity, travel, and storytelling. I'm applying for the Digital Media Ambassador Scholarship because I want to represent the OLE In-Country Experience through engaging, authentic content that helps other students see what studying abroad really looks like.",
    ],
    facts: [
      "Degree: Bachelor of Advanced Computing, University of Sydney",
      "Role: Media Relations Associate, GDG on Campus USYD (~6 months)",
      "OLE: In-Country Experience in Japan",
      "Handles: @bhakthi_ on Instagram & TikTok",
    ],
  },

  /**
   * CONTACT — REPLACE placeholder links below.
   */
  contact: {
    title: "Get in touch",
    subtitle:
      "Reach out for scholarship enquiries, content collaborations, or questions about my experience.",
    blurb:
      "Best way to reach me is email. You can also find me on Instagram and TikTok.",
    links: [
      {
        label: "Instagram",
        handle: "bhakthi_",
        href: "https://www.instagram.com/bhakthi_/",
        icon: null,
      },
      {
        label: "TikTok",
        handle: "bhakthi_",
        href: "https://www.tiktok.com/@bhakthi_",
        icon: null,
      },
      {
        label: "Email",
        handle: "[insert university email]",
        href: "mailto:[insert university email]",
        icon: "/icons/email.svg",
      },
      {
        label: "LinkedIn",
        handle: "[insert LinkedIn]",
        href: "[insert LinkedIn]",
        icon: "/icons/linkedin.svg",
      },
      {
        label: "Main portfolio",
        handle: "[insert link if needed]",
        href: "[insert link if needed]",
        icon: null,
      },
    ],
  },
} as const;

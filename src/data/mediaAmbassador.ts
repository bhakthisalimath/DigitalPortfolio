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
        "Reels and short-form content planned, filmed, or supported through my Media Relations role.",
      items: [
        {
          id: "gdg-1",
          title: "[insert reel title]",
          platform: "Instagram" as ContentPlatform,
          link: "[insert reel link]",
          role: "society content planning" as ContentRole,
          description:
            "[insert short description — e.g. event recap reel for a GDG on Campus workshop]",
          stats: {
            views: "[insert views]",
            likes: "[insert likes]",
            comments: "[insert comments]",
            sharesSaves: "[insert shares/saves]",
            engagementNote: "[insert engagement detail]",
          },
        },
        {
          id: "gdg-2",
          title: "[insert reel title]",
          platform: "Instagram" as ContentPlatform,
          link: "[insert reel link]",
          role: "hook ideation" as ContentRole,
          description:
            "[insert short description — e.g. hook and structure for a society announcement reel]",
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
      id: "on-camera",
      title: "On-Camera / Presenter Content",
      description:
        "Content where I appear on camera as a presenter or host.",
      items: [
        {
          id: "camera-1",
          title: "[insert reel title]",
          platform: "Instagram" as ContentPlatform,
          link: "[insert reel link]",
          role: "on-camera presenter" as ContentRole,
          description:
            "[insert short description — e.g. on-camera intro for a society event]",
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
        "Behind-the-scenes contribution — ideation, filming plans, and editing direction without being on camera.",
      items: [
        {
          id: "plan-1",
          title: "[insert reel title]",
          platform: "Instagram" as ContentPlatform,
          link: "[insert reel link]",
          role: "filming plan" as ContentRole,
          description:
            "[insert short description — e.g. shot list and filming plan for event coverage]",
          stats: {
            views: "[insert views]",
            likes: "[insert likes]",
            comments: "[insert comments]",
            sharesSaves: "[insert shares/saves]",
            engagementNote: "[insert engagement detail]",
          },
        },
        {
          id: "plan-2",
          title: "[insert reel title]",
          platform: "Instagram" as ContentPlatform,
          link: "[insert reel link]",
          role: "editing direction" as ContentRole,
          description:
            "[insert short description — e.g. pacing and cut direction for a society reel]",
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
        value: "[insert total views]",
        detail: "total views across selected reels",
      },
      {
        label: "Top reel",
        value: "[insert highest reel views]",
        detail: "views on top-performing reel",
      },
      {
        label: "Engagement",
        value: "[insert engagement rate]%",
        detail: "engagement rate",
      },
      {
        label: "Audience growth",
        value: "[insert follower growth or audience interaction metric]",
        detail: "audience growth/interaction since joining media relations",
      },
      {
        label: "Reels created",
        value: "[insert number]",
        detail: "reels planned, supported, or created",
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

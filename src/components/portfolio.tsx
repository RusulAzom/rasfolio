"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";

/* ---------------------------------- icons --------------------------------- */

type IconName =
  | "arrow-down"
  | "arrow-right"
  | "arrow-up-right"
  | "brain"
  | "briefcase"
  | "check"
  | "cloud"
  | "code"
  | "cpu"
  | "database"
  | "external"
  | "github"
  | "graduation"
  | "layers"
  | "linkedin"
  | "mail"
  | "map-pin"
  | "menu"
  | "phone"
  | "send"
  | "sparkles"
  | "terminal"
  | "x"
  | "zap";

function Icon({
  name,
  size = 16,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const paths: Record<IconName, ReactNode> = {
    "arrow-down": <path d="M12 5v14m-7-7 7 7 7-7" />,
    "arrow-right": <path d="M5 12h14m-7-7 7 7-7 7" />,
    "arrow-up-right": <path d="M7 17 17 7M7 7h10v10" />,
    brain: (
      <>
        <path d="M12 5a3 3 0 0 0-3-2.9A3 3 0 0 0 6.2 4.6 3 3 0 0 0 4 7.5a3 3 0 0 0 .3 4.3A3 3 0 0 0 5 17a3 3 0 0 0 4 2.8V5Z" />
        <path d="M12 5a3 3 0 0 1 3-2.9 3 3 0 0 1 2.8 2.5A3 3 0 0 1 20 7.5a3 3 0 0 1-.3 4.3A3 3 0 0 1 19 17a3 3 0 0 1-4 2.8V5Z" />
        <path d="M12 5v15" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-13 5h18m-11 0v2h4v-2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    cloud: <path d="M17.5 19a4.5 4.5 0 0 0 .3-9 6 6 0 0 0-11.5 1.6A4 4 0 0 0 7 19h10.5Z" />,
    code: <path d="m8 17-5-5 5-5m8 10 5-5-5-5" />,
    cpu: (
      <>
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <rect x="10" y="10" width="4" height="4" />
        <path d="M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </>
    ),
    external: (
      <>
        <path d="M14 3h7v7m0-7L10 14" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </>
    ),
    github: (
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.5 1.2 15 3a13.4 13.4 0 0 0-7 0C5.5 1.2 4.3 1.5 4.3 1.5a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 2.8 8.7c0 5.2 3.1 6.4 6.1 6.7A3.4 3.4 0 0 0 8 18.1V22" />
    ),
    graduation: (
      <>
        <path d="m2 10 10-5 10 5-10 5-10-5Z" />
        <path d="M6 12v5c3.5 3 8.5 3 12 0v-5m4-2v6" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5m-18 4 9 5 9-5" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    "map-pin": (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
    ),
    send: <path d="m22 2-7 20-4-9-9-4 20-7Zm0 0L11 13" />,
    sparkles: (
      <>
        <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" />
        <path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14ZM5 2l.8 2.2L8 5l-2.2.8L5 8l-.8-2.2L2 5l2.2-.8L5 2Z" />
      </>
    ),
    terminal: (
      <>
        <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
        <path d="m6.5 9 3 3-3 3m5 0h6" />
      </>
    ),
    x: <path d="m18 6-12 12M6 6l12 12" />,
    zap: <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z" />,
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

/* ---------------------------------- data ---------------------------------- */

const navigation = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
] as const;

const phoneNumber = "+880 1882-834071";
const whatsappUrl =
  "https://wa.me/8801882834071?text=Hi%20Rusul%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/RusulAzom", icon: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rusulazomsumon",
    icon: "linkedin",
  },
  {
    name: "Email",
    href: "mailto:rusulazomsumon@gmail.com",
    icon: "mail",
  },
] as const;

type Skill = { name: string; level: number };

const skills: { title: string; subtitle: string; icon: IconName; items: Skill[] }[] = [
  {
    title: "Frontend",
    subtitle: "Interface systems & rendering",
    icon: "code",
    items: [
      { name: "Next.js (App Router)", level: 92 },
      { name: "React", level: 93 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    title: "Backend & Databases",
    subtitle: "Services, data & APIs",
    icon: "database",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "PHP", level: 82 },
      { name: "Laravel", level: 70 },
      { name: "MongoDB", level: 76 },
      { name: "Firebase", level: 84 },
      { name: "MySQL", level: 75 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Tools, Cloud & AI",
    subtitle: "Delivery pipeline & copilots",
    icon: "cpu",
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 92 },
      { name: "Vercel", level: 88 },
      { name: "Netlify", level: 85 },
      { name: "Cloudflare", level: 78 },
      { name: "Copilot", level: 90 },
      { name: "Cline", level: 88 },
      { name: "Technical SEO", level: 86 },
    ],
  },
];

type Project = {
  number: string;
  title: string;
  kicker: string;
  summary: string;
  stack: string[];
  live: string;
  liveLabel: string;
  repo: string;
  description: string;
  features: string[];
  challenges: string;
  improvements: string;
  preview: "psych" | "bcspark" | "dhit" | "news";
};

const projects: Project[] = [
  {
    number: "01",
    title: "PsychTestHub",
    kicker: "Scientifically Validated Psychology Assessments",
    summary:
      "A privacy-first, GDPR-compliant self-discovery platform with 15+ peer-reviewed psychological assessments and instant analytical dashboards.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "LocalStorage Engine",
      "Netlify",
    ],
    live: "https://psychtesthub.netlify.app/",
    liveLabel: "psychtesthub.netlify.app",
    repo: "https://github.com/RusulAzom",
    description:
      "PsychTestHub turns validated psychometrics into an instant, zero-signup experience. It ships 15+ peer-reviewed instruments—Big Five OCEAN (IPIP-50), Attachment Style (ECR-R), Dark Triad (SD3), Emotional Intelligence, IQ, GAD-7 Anxiety, and Career Fit—each computed entirely on the client with analytical dashboards, radar charts, and multi-language readiness while staying fully GDPR/COPPA compliant.",
    features: [
      "15+ peer-reviewed assessment engines (IPIP-50, ECR-R, SD3, GAD-7)",
      "Instant multi-dimensional percentile scoring, 100% client-side",
      "Radar-chart analytical dashboards with zero signup friction",
      "Zero-backend persistence and GDPR/COPPA privacy compliance",
    ],
    challenges:
      "Designing a zero-backend, 100% client-side scoring and persistence architecture that computes multi-dimensional psychometric percentiles and radar visualizations instantaneously while keeping full GDPR/COPPA privacy compliance and multi-language readiness.",
    improvements:
      "Adding comparative longitudinal mood/trait tracking, shareable encrypted result cards, and AI-guided personalized growth action plans.",
    preview: "psych",
  },
  {
    number: "02",
    title: "BCSpark",
    kicker: "AI-Powered BCS & Gov-Job Preparation",
    summary:
      "An exam preparation ecosystem with 40+ specialized study tools and a real-time randomized mock test engine scaled via static JSON + CDN edge caching.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Vercel",
    ],
    live: "https://bcspark.vercel.app/",
    liveLabel: "bcspark.vercel.app",
    repo: "https://github.com/RusulAzom",
    description:
      "BCSpark brings exam preparation into one approachable learning workspace. It combines more than 40 study tools with multi-level micro-topic filtering and a real-time 20-question randomized mock test engine. Static JSON content and CDN edge caching keep common study journeys fast and support zero-cost scaling as usage grows.",
    features: [
      "40+ focused study and revision tools",
      "Real-time 20-question randomized mock test engine",
      "Multi-level micro-topic filtering across thousands of topics",
      "Static JSON + CDN edge caching for zero-cost scaling",
    ],
    challenges:
      "Eliminating database read bottlenecks and latency on massive MCQ datasets while preserving full SSR/SEO indexability across thousands of micro-topics.",
    improvements:
      "Launching adaptive spaced-repetition study schedules and AI weak-topic diagnostics.",
    preview: "bcspark",
  },
  {
    number: "03",
    title: "DHITedu.info",
    kicker: "Institutional Information Portal & Dashboard",
    summary:
      "A responsive institutional directory and management dashboard with fast district and sub-district filtering and role-based branch administration.",
    stack: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    live: "https://dhitedu.info",
    liveLabel: "dhitedu.info",
    repo: "https://github.com/RusulAzom",
    description:
      "DHITedu.info organizes institutional information in a clear, searchable portal and gives branch teams a role-aware dashboard. Visitors can narrow branches through multi-level district and sub-district filters, while authorized administrators manage branch information in a centralized workspace.",
    features: [
      "Multi-level district and sub-district cascading filters",
      "Branch information portal and centralized dashboard",
      "Role-based controls for branch administrators",
      "Firebase-backed application data and workflows",
    ],
    challenges:
      "Architecting dense multi-tier administrative data tables and cascading location filters that remain effortless on low-bandwidth mobile devices.",
    improvements:
      "Integrating automated student enrollment analytics and downloadable PDF reporting.",
    preview: "dhit",
  },
  {
    number: "04",
    title: "News Card & Asset Generator Suite",
    kicker: "Automated Rendering Engine + Chrome Extension",
    summary:
      "An automated social media news-card rendering engine and Chrome extension toolkit for rapid web asset extraction and branded graphic generation.",
    stack: [
      "JavaScript",
      "HTML5 Canvas",
      "Chrome Extension APIs",
      "Next.js",
    ],
    live: "https://github.com/RusulAzom",
    liveLabel: "View repository",
    repo: "https://github.com/RusulAzom",
    description:
      "This generator suite streamlines two repetitive publishing tasks: rendering consistent social media news cards and extracting assets directly from browser pages. Canvas-based layouts compose headlines and imagery into reusable, share-ready branded graphics.",
    features: [
      "Automated social media news-card rendering engine",
      "Browser asset extraction through extension APIs",
      "Canvas-based composition for branded graphics",
      "Reusable foundation for publishing templates",
    ],
    challenges:
      "Handling cross-origin image tainting (CORS) on HTML5 Canvas and maintaining crisp typography scaling across variable headline lengths.",
    improvements:
      "Adding batch template automation and direct multi-platform social publishing workflows.",
    preview: "news",
  },
];

/* --------------------------- client contributions -------------------------- */

const clientWork = [
  {
    name: "INTLAB",
    display: "intlab.it",
    url: "https://intlab.it/",
    role: "Web Developer & Technical Specialist",
    tag: "PRODUCTION",
    summary:
      "Engineered custom themes, plugins, responsive frontend components, and Core Web Vitals performance optimizations for an Italian web technology platform.",
  },
  {
    name: "Banglar Gonojagoron 24",
    display: "banglargonojagoron24.com",
    url: "http://banglargonojagoron24.com/",
    role: "Custom WordPress Theme Developer",
    tag: "THEME DEV",
    summary:
      "Designed and developed a bespoke, high-speed WordPress news portal theme featuring structured editorial categories, mobile-first reading layouts, and custom social sharing card workflows.",
  },
  {
    name: "Autism New Zealand",
    display: "autismnz.org.nz",
    url: "https://autismnz.org.nz/",
    role: "Project Team Member — Content Writing & Copywriting",
    tag: "COPYWRITING",
    summary:
      "Contributed accessible, empathetic web copywriting and structured content architecture as part of the digital delivery team supporting New Zealand's national autism organization.",
  },
] as const;

/* ------------------------------ neural canvas ------------------------------ */

function NeuralCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const palette = ["103,232,165", "102,217,232", "167,139,250"];

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; c: string };
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    const spawn = () => {
      const count = Math.min(85, Math.max(30, Math.floor(window.innerWidth / 17)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22 * dpr,
        vy: (Math.random() - 0.5) * 0.22 * dpr,
        r: (Math.random() * 1.2 + 0.6) * dpr,
        c: palette[Math.floor(Math.random() * palette.length)],
      }));
    };

    const resize = () => {
      width = canvas.width = window.innerWidth * dpr;
      height = canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      spawn();
      if (reduced) draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const linkDist = 130 * dpr;

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.14;
            ctx.strokeStyle = `rgba(148,214,200,${alpha})`;
            ctx.lineWidth = dpr * 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.fillStyle = `rgba(${p.c},0.55)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // cursor constellation
      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 190 * dpr) {
          const alpha = (1 - dist / (190 * dpr)) * 0.3;
          ctx.strokeStyle = `rgba(102,217,232,${alpha})`;
          ctx.lineWidth = dpr * 0.6;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    };

    const step = () => {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;
      }
      draw();
      raf = window.requestAnimationFrame(step);
    };

    const onPointer = (event: PointerEvent) => {
      mouse.x = event.clientX * dpr;
      mouse.y = event.clientY * dpr;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    if (reduced) {
      draw();
    } else {
      raf = window.requestAnimationFrame(step);
    }

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="neural-canvas" aria-hidden="true" />;
}

/* ------------------------------- project art ------------------------------- */

function RadarArt() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 150"
      className="radar-art"
      role="presentation"
    >
      <g stroke="rgba(102,217,232,0.22)" fill="none" strokeWidth="1">
        <polygon points="100,12 166,48 166,112 100,138 34,112 34,48" />
        <polygon points="100,32 148,58 148,102 100,118 52,102 52,58" />
        <polygon points="100,52 130,68 130,92 100,98 70,92 70,68" />
        <path d="M100 12v126M34 48h132M34 112h132" strokeOpacity="0.35" />
      </g>
      <polygon
        points="100,26 152,62 142,106 100,116 60,96 56,56"
        fill="rgba(103,232,165,0.16)"
        stroke="#67e8a5"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {[
        [100, 26],
        [152, 62],
        [142, 106],
        [100, 116],
        [60, 96],
        [56, 56],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.4" fill="#67e8a5" />
      ))}
      <text x="100" y="8" textAnchor="middle" className="radar-art-label">OCEAN</text>
    </svg>
  );
}

function ProjectPreview({ kind }: { kind: Project["preview"] }) {
  if (kind === "psych") {
    return (
      <div className="project-preview preview-psych" aria-hidden="true">
        <RadarArt />
        <div className="psych-chips">
          <span className="psych-chip"><i />OCEAN · 92%</span>
          <span className="psych-chip"><i />EQ · 84%</span>
          <span className="psych-chip"><i />GAD-7 · LOW</span>
        </div>
      </div>
    );
  }

  if (kind === "news") {
    return (
      <div className="project-preview preview-news" aria-hidden="true">
        <div className="news-art">
          <span className="news-tag">THE DAILY BRIEF</span>
          <span className="news-title">A clearer story,<br />ready to share.</span>
          <span className="news-meta">1280×720 · PNG · CANVAS</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`project-preview ${kind === "dhit" ? "preview-dhit" : ""}`}
      aria-hidden="true"
    >
      <div className="preview-window">
        <div className="preview-bar"><i /><i /><i /></div>
        <div className="preview-body">
          {kind === "bcspark" && <div className="preview-sidebar"><i /><i /><i /><i /></div>}
          <div className="preview-content">
            <div className="preview-heading" />
            <div className="preview-stats"><i /><i /><i /></div>
            {kind === "dhit" ? (
              <div className="preview-table"><i /><i /><i /><i /></div>
            ) : (
              <>
                <div className="preview-line" />
                <div className="preview-line short" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- helpers -------------------------------- */

function SocialLink({
  name,
  href,
  icon,
}: {
  name: string;
  href: string;
  icon: IconName;
}) {
  return (
    <a
      className="social-icon"
      href={href}
      aria-label={name}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <Icon name={icon} size={15} />
    </a>
  );
}

function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
  id,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  id: string;
}) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">
        <span className="eyebrow-index">{index}</span> {eyebrow}
      </span>
      <h2 className="section-title" id={id}>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

/* --------------------------------- root ----------------------------------- */

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [sent, setSent] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const clockRef = useRef<HTMLSpanElement>(null);

  /* floating pill state */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* scroll reveal */
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("on"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  /* mouse-tracking spotlight */
  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const card = target?.closest?.(".spot") as HTMLElement | null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* HUD clock (UTC+6 Dhaka) */
  useEffect(() => {
    const tick = () => {
      if (!clockRef.current) return;
      clockRef.current.textContent = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Dhaka",
      }).format(new Date());
    };
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  /* lock scroll while drawer open */
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  /* project modal */
  useEffect(() => {
    if (!activeProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeProject]);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
  }

  return (
    <>
      <NeuralCanvas />

      {/* ------------------------------ navigation ------------------------------ */}
      <header className={`nav-pill ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Rusul.dev home">
          <span className="brand-mark">RAS</span>
          <span className="brand-text">RUSUL<i>{"//"}</i>DEV</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a className="nav-link" href={href} key={href}>{label}</a>
          ))}
        </nav>
        <div className="nav-cta-group">
          <a className="nav-status" href="#contact" aria-label="Available for work">
            <span className="status-dot" />
            <span className="nav-status-label">ONLINE</span>
          </a>
          <a
            className="nav-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Let&apos;s talk <Icon name="arrow-up-right" size={13} />
          </a>
        </div>
        <button
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <Icon name={menuOpen ? "x" : "menu"} size={18} />
        </button>
      </header>

      {menuOpen && (
        <div className="drawer-backdrop" onClick={() => setMenuOpen(false)}>
          <nav
            className="drawer"
            id="mobile-navigation"
            aria-label="Mobile navigation"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="drawer-head">
              <span className="drawer-label">NAVIGATION_MENU</span>
              <button
                aria-label="Close navigation menu"
                className="drawer-close"
                onClick={() => setMenuOpen(false)}
                type="button"
              >
                <Icon name="x" size={16} />
              </button>
            </div>
            {navigation.map(([label, href], index) => (
              <a
                className="drawer-link"
                href={href}
                key={href}
                style={{ animationDelay: `${60 + index * 45}ms` }}
                onClick={() => setMenuOpen(false)}
              >
                <span className="drawer-index">0{index + 1}</span>
                {label}
                <Icon name="arrow-up-right" size={14} />
              </a>
            ))}
            <div className="drawer-foot">
              <a className="button-primary" href="/resume.html" download="Rusul_Azom_Sumon_Resume.html">
                <Icon name="arrow-down" size={14} /> Resume
              </a>
              <div className="drawer-socials">
                {socialLinks.map((social) => (
                  <SocialLink key={social.name} {...social} />
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}

      <main id="top" className="page-shell">
        {/* -------------------------------- hero -------------------------------- */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-telemetry reveal">
              <span className="hud-chip">
                <span className="status-dot" />
                SYSTEM ONLINE
              </span>
              <span className="hud-chip hud-chip-dim">
                DHAKA · UTC+6 · <span ref={clockRef}>--:--:--</span>
              </span>
              <span className="hud-chip hud-chip-dim">
                <Icon name="zap" size={11} /> SUB-SECOND LCP
              </span>
            </div>
            <h1 id="hero-title" className="hero-title">
              <span className="kinetic-line">
                {"Rusul Azom".split("").map((char, index) => (
                  <span
                    className="kinetic-char"
                    key={`a-${index}`}
                    style={{ animationDelay: `${index * 34}ms` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
              <span className="kinetic-line kinetic-accent">
                {"Sumon".split("").map((char, index) => (
                  <span
                    className="kinetic-char"
                    key={`b-${index}`}
                    style={{ animationDelay: `${340 + index * 40}ms` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </h1>
            <p className="hero-role reveal">
              <span className="hero-role-prefix">$</span> AI-Driven Full-Stack Developer
              <span className="hero-stack-tag">Next.js · React · Node.js · TypeScript</span>
            </p>
            <p className="hero-description reveal">
              Architecting sub-second, SEO-indexed, zero-cost-scaling web
              platforms powered by modern frontend systems and AI engineering
              workflows.
            </p>
            <div className="hero-actions reveal">
              <a
                className="button-primary button-glow"
                href="/resume.html"
                download="Rusul_Azom_Sumon_Resume.html"
              >
                <Icon name="arrow-down" size={15} /> Download Resume
              </a>
              <a className="button-secondary" href="#projects">
                Explore Work <Icon name="arrow-right" size={15} />
              </a>
            </div>
            <div className="social-links reveal" aria-label="Social profiles">
              <span className="social-label">FIND_ME</span>
              {socialLinks.map((social) => (
                <SocialLink key={social.name} {...social} />
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Rusul Azom Sumon profile">
            <div className="orbital">
              <span className="orbital-ring ring-a" />
              <span className="orbital-ring ring-b" />
              <span className="orbital-orbit"><i className="orbit-dot" /></span>
              <span className="orbital-halo" />
              <div className="portrait-frame">
                <img
                  src="https://github.com/RusulAzom.png"
                  alt="Rusul Azom Sumon"
                  width="360"
                  height="408"
                  fetchPriority="high"
                />
                <span className="portrait-scan" />
              </div>
              <div className="portrait-badge badge-status">
                <span className="status-dot" />
                <span><small>STATUS</small>Open to projects</span>
              </div>
              <div className="portrait-badge badge-location">
                <Icon name="map-pin" size={14} />
                <span><small>BASE</small>Dhaka, BD</span>
              </div>
              <div className="mini-code">
                <span><strong>const</strong> ship = <em>async</em> () =&gt; {"\u007B"}</span>
                <span>{"\u00A0\u00A0"}impact: <span className="mini-str">&quot;max&quot;</span>,</span>
                <span>{"\u00A0\u00A0"}latency: <span className="mini-str">&quot;sub-second&quot;</span></span>
                <span>{"\u007D"};</span>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------ stats strip ---------------------------- */}
        <div className="stats-strip reveal" aria-label="Portfolio highlights">
          <div className="stat">
            <span className="stat-value">15+</span>
            <span className="stat-label">Validated assessment engines</span>
          </div>
          <div className="stat">
            <span className="stat-value">40+</span>
            <span className="stat-label">BCSpark study tools</span>
          </div>
          <div className="stat">
            <span className="stat-value">&lt;1s</span>
            <span className="stat-label">Target LCP on every build</span>
          </div>
          <div className="stat">
            <span className="stat-value">0→1</span>
            <span className="stat-label">Ideas shipped into products</span>
          </div>
        </div>

        {/* --------------------------------- about ------------------------------- */}
        <section className="section" id="about" aria-labelledby="about-title">
          <SectionHeading
            index="01"
            eyebrow="About // Telemetry"
            title={<>Curious by nature.<br />An engineer by choice.</>}
            id="about-title"
          />
          <div className="bento">
            <article className="bento-card spot span-2 reveal">
              <div className="bento-card-head">
                <span className="bento-chip"><Icon name="terminal" size={12} /> JOURNEY.LOG</span>
                <span className="bento-line" />
              </div>
              <h3>Programming journey</h3>
              <p>
                It started with a <strong>BSc in Computer Science and Engineering
                from IUBAT</strong> and the practical pull of building useful things
                for the web. I moved from <strong>WordPress and PHP systems</strong> into
                architecting modern full-stack applications with{" "}
                <strong>Next.js, React, and TypeScript</strong>—treating AI-assisted
                workflows (Copilot, Cline, OpenCode) as force multipliers for
                thoughtful architecture, never as a substitute for it.
              </p>
            </article>

            <article className="bento-card spot reveal">
              <div className="bento-card-head">
                <span className="bento-chip bento-chip-cyan"><Icon name="code" size={12} /> STACK.EVOLVE</span>
                <span className="bento-line" />
              </div>
              <h3>Evolution path</h3>
              <div className="evolve-list">
                <div className="evolve-step done"><span>WordPress era</span><small>themes · PHP</small></div>
                <div className="evolve-step done"><span>PHP systems</span><small>Laravel · MySQL</small></div>
                <div className="evolve-step active"><span>Full-stack systems</span><small>Next.js · TS · Firebase</small></div>
              </div>
            </article>

            <article className="bento-card spot span-2 reveal">
              <div className="bento-card-head">
                <span className="bento-chip bento-chip-violet"><Icon name="zap" size={12} /> ENJOY.MD</span>
                <span className="bento-line" />
              </div>
              <h3>What I enjoy building</h3>
              <div className="enjoy-grid">
                <div className="enjoy-item">
                  <Icon name="zap" size={14} />
                  <strong>Ultra-fast platforms</strong>
                  <span>Systems that scale at near-zero infrastructure cost.</span>
                </div>
                <div className="enjoy-item">
                  <Icon name="brain" size={14} />
                  <strong>Assessment engines</strong>
                  <span>Interactive, instant-feedback learning &amp; testing flows.</span>
                </div>
                <div className="enjoy-item">
                  <Icon name="layers" size={14} />
                  <strong>Component systems</strong>
                  <span>Clean primitives that make complex products feel simple.</span>
                </div>
              </div>
            </article>

            <article className="bento-card spot reveal">
              <div className="bento-card-head">
                <span className="bento-chip"><Icon name="sparkles" size={12} /> OFF.HOURS</span>
                <span className="bento-line" />
              </div>
              <h3>Beyond code</h3>
              <div className="interest-list">
                <div className="interest-item">
                  <span className="interest-glyph">♞</span>
                  <span><strong>Tactical chess</strong> — openings, endgames, and long calculations.</span>
                </div>
                <div className="interest-item">
                  <span className="interest-glyph">▣</span>
                  <span><strong>Cinema</strong> — analyzing narrative craft frame by frame.</span>
                </div>
                <div className="interest-item">
                  <span className="interest-glyph">◈</span>
                  <span><strong>AI agents</strong> — experimenting with autonomous coding agents.</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* -------------------------------- skills ------------------------------- */}
        <section className="section" id="skills" aria-labelledby="skills-title">
          <SectionHeading
            index="02"
            eyebrow="Skills // Matrix"
            title="The toolkit, instrumented."
            subtitle="A practical mix of frontend craft, backend fundamentals, and AI-accelerated delivery—each instrumented with honest proficiency levels."
            id="skills-title"
          />
          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-card spot reveal" key={group.title}>
                <div className="skill-head">
                  <span className="skill-icon"><Icon name={group.icon} size={16} /></span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.subtitle}</p>
                  </div>
                </div>
                <div className="skill-meter-list">
                  {group.items.map((skill) => (
                    <div className="skill-row" key={skill.name}>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-meter" aria-label={`${skill.name} proficiency ${skill.level}%`}>
                        <i style={{ width: `${skill.level}%` }} />
                      </span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ------------------------------ experience ----------------------------- */}
        <section className="section" id="experience" aria-labelledby="experience-title">
          <SectionHeading
            index="03"
            eyebrow="Experience // Timeline"
            title="Experience, built by doing."
            id="experience-title"
          />
          <div className="timeline">
            <article className="timeline-item reveal">
              <div className="timeline-card spot">
                <div className="timeline-topline">
                  <div>
                    <h3>Full-Stack Web Developer</h3>
                    <div className="timeline-company">Freelance &amp; Independent Builder</div>
                  </div>
                  <span className="date-chip">2024 — PRESENT</span>
                </div>
                <ul>
                  <li>Architected and shipped full-stack Next.js platforms, including PsychTestHub, BCSpark, and DHITedu.info.</li>
                  <li>Applied SSR/SSG optimization, Firebase &amp; MongoDB pipelines, and CDN delivery for sub-second user experiences.</li>
                  <li>Built zero-cost-scaling content and caching flows designed to stay fast as projects grow.</li>
                </ul>
              </div>
            </article>
            <article className="timeline-item reveal">
              <div className="timeline-card spot">
                <div className="timeline-topline">
                  <div>
                    <h3>Web Developer &amp; Technical Specialist</h3>
                    <div className="timeline-company">INTLAB</div>
                  </div>
                  <span className="date-chip">DEC 2024 — JAN 2026</span>
                </div>
                <ul>
                  <li>Developed custom themes, plugins, and responsive frontend features for the web.</li>
                  <li>Investigated Core Web Vitals and frontend performance bottlenecks to improve delivery and usability.</li>
                  <li>Combined hands-on implementation with practical technical support and troubleshooting.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* ------------------------------- education ----------------------------- */}
        <section className="section" id="education" aria-labelledby="education-title">
          <SectionHeading
            index="04"
            eyebrow="Education // Foundation"
            title="The foundation."
            id="education-title"
          />
          <article className="education-card spot reveal">
            <div className="education-icon"><Icon name="graduation" size={20} /></div>
            <div>
              <h3>Bachelor of Science in Computer Science and Engineering (CSE)</h3>
              <div className="education-school">
                International University of Business Agriculture and Technology
                (IUBAT) · Dhaka, Bangladesh
              </div>
              <p>
                A grounding in the core principles of computing—from structuring
                data and designing algorithms to building and maintaining
                software systems.
              </p>
              <div className="education-coursework" aria-label="Core coursework">
                {["Data Structures", "Algorithms", "DBMS", "Software Engineering"].map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="education-meta" aria-hidden="true">
              <span>BSc</span>CSE
            </div>
          </article>
        </section>

        {/* -------------------------------- projects ----------------------------- */}
        <section className="section" id="projects" aria-labelledby="projects-title">
          <SectionHeading
            index="05"
            eyebrow="Projects // Showcase"
            title="Ideas, meet implementation."
            subtitle="Four flagship builds where thoughtful architecture meets useful, real-world workflows. Open any card for the full engineering inspection."
            id="projects-title"
          />
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card spot reveal" key={project.number}>
                <ProjectPreview kind={project.preview} />
                <div className="project-content">
                  <span className="project-number">PROJECT / {project.number}</span>
                  <h3>{project.title}</h3>
                  <p className="project-kicker">{project.kicker}</p>
                  <p>{project.summary}</p>
                  <div className="tag-list">
                    {project.stack.slice(0, 4).map((technology) => (
                      <span className="tag" key={technology}>{technology}</span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="tag">+{project.stack.length - 4}</span>
                    )}
                  </div>
                  <button
                    className="project-link"
                    onClick={() => setActiveProject(project)}
                    type="button"
                  >
                    View Details <Icon name="arrow-up-right" size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* client & production contributions */}
          <div className="client-block" aria-labelledby="clients-title">
            <div className="client-heading reveal">
              <span className="eyebrow">
                <span className="eyebrow-index">05+</span> Client &amp; Production // Contributions
              </span>
              <h2 className="section-title" id="clients-title">Shipped for real clients.</h2>
              <p className="section-subtitle">
                Beyond personal builds—production work delivered for teams and
                organizations across three countries.
              </p>
            </div>
            <div className="client-grid">
              {clientWork.map((client) => (
                <article className="client-card spot reveal" key={client.name}>
                  <div className="client-card-top">
                    <span className="client-domain">{client.display}</span>
                    <span className="client-tag">{client.tag}</span>
                  </div>
                  <h3>{client.name}</h3>
                  <span className="client-role">
                    <Icon name="briefcase" size={11} /> {client.role}
                  </span>
                  <p>{client.summary}</p>
                  <a
                    className="client-link"
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit live site <Icon name="external" size={13} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------- contact ------------------------------ */}
        <section className="section" id="contact" aria-labelledby="contact-title">
          <SectionHeading
            index="06"
            eyebrow="Contact // Uplink"
            title="Let's make it work."
            subtitle="Have a project, a collaboration idea, or just want to talk tech? My inbox is open."
            id="contact-title"
          />
          <div className="contact-grid">
            <div className="contact-info">
              <a className="contact-card spot reveal" href="mailto:rusulazomsumon@gmail.com">
                <span className="contact-card-icon"><Icon name="mail" size={16} /></span>
                <span><small>EMAIL</small><strong>rusulazomsumon@gmail.com</strong></span>
                <Icon name="arrow-up-right" size={13} className="contact-arrow" />
              </a>
              <a
                className="contact-card spot reveal"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-card-icon"><Icon name="phone" size={16} /></span>
                <span><small>PHONE &amp; WHATSAPP</small><strong>{phoneNumber}</strong></span>
                <Icon name="arrow-up-right" size={13} className="contact-arrow" />
              </a>
              <div className="contact-card spot reveal">
                <span className="contact-card-icon"><Icon name="map-pin" size={16} /></span>
                <span><small>LOCATION</small><strong>Dhaka, Bangladesh</strong></span>
              </div>
              <div className="contact-hud spot reveal" aria-hidden="true">
                <span className="contact-hud-row"><i /><b>RESPONSE.TIME</b><em>&lt; 24H</em></span>
                <span className="contact-hud-row"><i /><b>TIMEZONE</b><em>UTC+6</em></span>
                <span className="contact-hud-row"><i /><b>AVAILABILITY</b><em>FREELANCE</em></span>
              </div>
            </div>
            <div className="contact-panel spot reveal">
              {sent ? (
                <div className="form-success" role="status" aria-live="polite">
                  <span className="success-ring"><Icon name="check" size={22} /></span>
                  <h3>Transmission received</h3>
                  <p>
                    Your message cleared the uplink. This demo form doesn&apos;t
                    store or send data—email{" "}
                    <a href="mailto:rusulazomsumon@gmail.com">rusulazomsumon@gmail.com</a>{" "}
                    for a direct reply.
                  </p>
                  <button
                    className="button-secondary"
                    onClick={() => setSent(false)}
                    type="button"
                  >
                    Send another <Icon name="arrow-right" size={14} />
                  </button>
                </div>
              ) : (
                <>
                  <h3>Send a transmission</h3>
                  <p>This demo form doesn&apos;t store or send messages. For a direct reply, reach out by email.</p>
                  <form className="contact-form" onSubmit={handleContactSubmit}>
                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="contact-name">Your name</label>
                        <input id="contact-name" name="name" placeholder="Jane Smith" required />
                      </div>
                      <div className="form-field">
                        <label htmlFor="contact-email">Email address</label>
                        <input id="contact-email" name="email" type="email" placeholder="jane@example.com" required />
                      </div>
                    </div>
                    <div className="form-field">
                      <label htmlFor="contact-message">Your message</label>
                      <textarea id="contact-message" name="message" placeholder="Tell me a little about what you have in mind..." required />
                    </div>
                    <button className="button-primary button-glow" type="submit">
                      Transmit message <Icon name="send" size={14} />
                    </button>
                    <p className="form-note">
                      Submitting shows an on-page confirmation only; nothing is
                      saved. Email is the best way to get a response.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* -------------------------------- footer ------------------------------- */}
        <footer className="site-footer">
          <div className="footer-copy">
            <span className="footer-brand">RUSUL<i>{"//"}</i>DEV</span>
            <span>© 2026 Rusul Azom Sumon · Engineered at the edge</span>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {[
              ["About", "#about"],
              ["Experience", "#experience"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </nav>
          <div className="footer-socials" aria-label="Social profiles">
            {socialLinks.map((social) => <SocialLink key={social.name} {...social} />)}
          </div>
        </footer>
      </main>

      {/* ----------------------------- project modal ---------------------------- */}
      {activeProject && (
        <div
          className="modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveProject(null);
          }}
        >
          <section
            aria-labelledby="project-dialog-title"
            aria-modal="true"
            className="project-dialog"
            role="dialog"
          >
            <div className="dialog-glow" aria-hidden="true" />
            <button
              aria-label="Close project details"
              className="dialog-close"
              onClick={() => setActiveProject(null)}
              ref={closeButtonRef}
              type="button"
            >
              <Icon name="x" size={16} />
            </button>
            <span className="dialog-kicker">INSPECTION // {activeProject.number} · {activeProject.kicker}</span>
            <h2 id="project-dialog-title">{activeProject.title}</h2>
            <p className="dialog-summary">{activeProject.summary}</p>
            <div className="dialog-section">
              <h3><Icon name="layers" size={13} /> Main technology stack</h3>
              <div className="tag-list">
                {activeProject.stack.map((technology) => (
                  <span className="tag" key={technology}>{technology}</span>
                ))}
              </div>
            </div>
            <div className="dialog-section">
              <h3><Icon name="terminal" size={13} /> Brief description &amp; key highlights</h3>
              <p>{activeProject.description}</p>
              <div className="dialog-features">
                {activeProject.features.map((feature) => (
                  <div className="dialog-feature" key={feature}>
                    <Icon name="check" size={12} />{feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="dialog-section">
              <h3><Icon name="cpu" size={13} /> Challenges faced</h3>
              <p>{activeProject.challenges}</p>
            </div>
            <div className="dialog-section">
              <h3><Icon name="sparkles" size={13} /> Potential improvements &amp; future plans</h3>
              <p>{activeProject.improvements}</p>
            </div>
            <div className="dialog-actions">
              <a className="button-primary" href={activeProject.live} target="_blank" rel="noreferrer">
                Visit live project <Icon name="external" size={13} />
                <small>{activeProject.liveLabel}</small>
              </a>
              <a className="button-secondary" href={activeProject.repo} target="_blank" rel="noreferrer">
                Client GitHub repository <Icon name="github" size={13} />
              </a>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

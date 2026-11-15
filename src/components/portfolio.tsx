"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";

type IconName =
  | "arrow-down"
  | "arrow-right"
  | "arrow-up-right"
  | "briefcase"
  | "check"
  | "code"
  | "external"
  | "github"
  | "graduation"
  | "layers"
  | "linkedin"
  | "mail"
  | "map-pin"
  | "menu"
  | "phone"
  | "sparkles"
  | "x";

function Icon({
  name,
  size = 16,
}: {
  name: IconName;
  size?: number;
}) {
  const paths: Record<IconName, ReactNode> = {
    "arrow-down": <path d="M12 5v14m-7-7 7 7 7-7" />,
    "arrow-right": <path d="M5 12h14m-7-7 7 7-7 7" />,
    "arrow-up-right": <path d="M7 17 17 7M7 7h10v10" />,
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-13 5h18m-11 0v2h4v-2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    code: (
      <>
        <path d="m8 17-5-5 5-5m8 10 5-5-5-5m-2-3-4 16" />
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
    sparkles: (
      <>
        <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" />
        <path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14ZM5 2l.8 2.2L8 5l-2.2.8L5 8l-.8-2.2L2 5l2.2-.8L5 2Z" />
      </>
    ),
    x: <path d="m18 6-12 12M6 6l12 12" />,
  };

  return (
    <svg
      aria-hidden="true"
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

const navigation = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
] as const;

// Placeholder—replace with the exact phone and WhatsApp digits before publishing.
const phoneNumber = "+880 1700-000000";

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

const skills = [
  {
    title: "Frontend",
    subtitle: "Fast, accessible interfaces",
    icon: "code",
    items: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend & databases",
    subtitle: "Practical, dependable foundations",
    icon: "layers",
    items: [
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "MongoDB",
      "Firebase",
      "MySQL",
      "REST APIs",
    ],
  },
  {
    title: "Tools & cloud",
    subtitle: "Lean delivery from commit to edge",
    icon: "sparkles",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Cloudflare",
      "Copilot",
      "Cline",
      "Technical SEO",
    ],
  },
] as const;

type Project = {
  number: string;
  title: string;
  summary: string;
  stack: string[];
  live: string;
  repo: string;
  description: string;
  features: string[];
  challenges: string;
  improvements: string;
  preview: "bcspark" | "dhit" | "news";
};

const projects: Project[] = [
  {
    number: "01",
    title: "BCSpark",
    summary:
      "An AI-powered BCS and government-job preparation platform designed to make daily practice feel focused and rewarding.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Vercel",
    ],
    live: "https://bcspark.vercel.app/",
    repo: "https://github.com/RusulAzom",
    description:
      "BCSpark brings exam preparation into one approachable learning workspace. It combines more than 40 study tools with a T20-style randomized quiz engine, quick revision flows, and focused practice across BCS and government-job subjects. Static JSON content and CDN edge caching keep common study journeys fast and support zero-cost scaling as usage grows.",
    features: [
      "40+ focused study and revision tools",
      "T20 randomized quiz engine for quick practice",
      "Static JSON content backed by CDN edge caching",
      "Firebase-powered account and learning flows",
    ],
    challenges:
      "Keeping a large MCQ dataset responsive across search, filters, and randomized quizzes required careful client-side data shaping. The platform needed to deliver low-latency practice without turning every question view into a costly server request.",
    improvements:
      "Add personalized AI study roadmaps that adapt to quiz performance, highlight weak topics, and suggest a realistic daily revision plan.",
    preview: "bcspark",
  },
  {
    number: "02",
    title: "DHITedu.info",
    summary:
      "An institutional information portal and dashboard for finding branch information across district and sub-district levels.",
    stack: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    live: "https://dhitedu.info",
    repo: "https://github.com/RusulAzom",
    description:
      "DHITedu.info organizes institutional information in a clear, searchable portal and gives branch teams a role-aware dashboard. Visitors can narrow branches through multi-level district and sub-district filters, while authorized administrators manage branch information in a centralized workspace.",
    features: [
      "Multi-level district and sub-district filtering",
      "Branch information portal and dashboard",
      "Role-based controls for branch administrators",
      "Firebase-backed application data and workflows",
    ],
    challenges:
      "Dense branch data needed to remain useful on small screens. Responsive tables had to preserve context and readable hierarchy without forcing visitors to pan across a wide desktop-style layout.",
    improvements:
      "Introduce automated student analytics with clear branch-level summaries and trends to help administrators understand enrollment activity.",
    preview: "dhit",
  },
  {
    number: "03",
    title: "Dynamic News Card & Asset Generator",
    summary:
      "A browser-based toolkit for turning news into share-ready social cards and quickly extracting useful page assets.",
    stack: ["JavaScript", "HTML5 Canvas", "Chrome Extension APIs", "Next.js"],
    live: "https://github.com/RusulAzom",
    repo: "https://github.com/RusulAzom",
    description:
      "This generator suite streamlines two repetitive publishing tasks: rendering consistent social media news cards and extracting assets directly from browser pages. Canvas-based layouts make it possible to compose headlines and imagery into reusable, share-ready graphics.",
    features: [
      "Automated social media news-card rendering",
      "Browser asset extraction through extension APIs",
      "Canvas-based composition for generated graphics",
      "Reusable foundation for publishing templates",
    ],
    challenges:
      "Cross-origin source images can taint an HTML5 Canvas and prevent its contents from being exported. The rendering flow needs to account for image permissions and origin constraints rather than assuming every remote asset is exportable.",
    improvements:
      "Add batch export and user-customizable templates so teams can apply their own layouts and visual identity to multiple stories.",
    preview: "news",
  },
];

function ProjectPreview({ kind }: { kind: Project["preview"] }) {
  if (kind === "news") {
    return (
      <div className="project-preview preview-news" aria-hidden="true">
        <div className="news-art">
          <span className="news-tag">THE DAILY BRIEF</span>
          <span className="news-title">A clearer story,<br />ready to share.</span>
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
          {kind === "bcspark" && (
            <div className="preview-sidebar"><i /><i /><i /><i /></div>
          )}
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
      <Icon name={icon} size={16} />
    </a>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  useEffect(
    () => () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    },
    [],
  );

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setToastVisible(true);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToastVisible(false), 5200);
  }

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#top" aria-label="Rusul.dev home">
            <span className="brand-mark">RAS</span>
            <span>Rusul<span className="brand-dot">.dev</span></span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map(([label, href]) => (
              <a className="nav-link" href={href} key={href}>{label}</a>
            ))}
            <a className="nav-contact" href="#contact">
              Let&apos;s talk <Icon name="arrow-up-right" size={13} />
            </a>
          </nav>
          <button
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <Icon name={menuOpen ? "x" : "menu"} size={19} />
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
            {navigation.map(([label, href]) => (
              <a href={href} key={href} onClick={() => setMenuOpen(false)}>
                {label}<Icon name="arrow-up-right" size={14} />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="top" className="page-shell">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              INDEPENDENT BUILDER · DHAKA, BD
            </div>
            <h1 id="hero-title">
              Rusul Azom
              <span>Sumon</span>
            </h1>
            <p className="hero-role">
              AI-Driven Full-Stack Developer
              <span aria-hidden="true"> — </span>
              <span className="hero-stack">Next.js, React, Node.js, TypeScript</span>
            </p>
            <p className="hero-description">
              Building sub-second, SEO-indexed, scalable web applications with
              modern frontend architectures and lean cloud infrastructure.
            </p>
            <div className="hero-actions">
              <a
                className="button-primary"
                href="/resume.html"
                download="Rusul_Azom_Sumon_Resume.html"
              >
                <Icon name="arrow-down" size={15} /> Download Resume
              </a>
              <a className="button-secondary" href="#projects">
                Explore my work <Icon name="arrow-right" size={15} />
              </a>
            </div>
            <div className="social-links" aria-label="Social profiles">
              <span className="social-label">FIND ME</span>
              {socialLinks.map((social) => (
                <SocialLink key={social.name} {...social} />
              ))}
            </div>
          </div>
          <div className="hero-visual" aria-label="Rusul Azom Sumon profile">
            <div className="portrait-halo" />
            <div className="portrait-frame">
              <img
                src="https://github.com/RusulAzom.png"
                alt="Rusul Azom Sumon"
                width="360"
                height="408"
                fetchPriority="high"
              />
            </div>
            <div className="portrait-badge badge-location">
              <Icon name="map-pin" size={15} />
              <span><small>BASED IN</small>Dhaka, Bangladesh</span>
            </div>
            <div className="portrait-badge badge-status">
              <span className="status-dot" />
              <span><small>OPEN TO</small>Thoughtful projects</span>
            </div>
            <div className="mini-code">
              <span><strong>const</strong> ideas =</span>
              <span>buildWithCare();</span>
            </div>
          </div>
        </section>

        <div className="stats-strip" aria-label="Portfolio highlights">
          <div className="stat">
            <span className="stat-value">40+</span>
            <span className="stat-label">BCSpark study tools</span>
          </div>
          <div className="stat">
            <span className="stat-value">SSR / SSG</span>
            <span className="stat-label">Performance-minded builds</span>
          </div>
          <div className="stat">
            <span className="stat-value">0→1</span>
            <span className="stat-label">Ideas shipped into products</span>
          </div>
        </div>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <span className="eyebrow">A little about me</span>
            <h2 className="section-title" id="about-title">
              Curious by nature.<br />An engineer by choice.
            </h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>
                My programming journey began with a <strong>BSc in Computer
                Science and Engineering from IUBAT</strong> and the practical
                challenge of building useful things for the web. I moved from
                WordPress and PHP systems into architecting modern applications
                with <strong>Next.js, React, and TypeScript</strong>—using AI-assisted
                engineering workflows as a tool, not a substitute for thoughtful
                problem-solving.
              </p>
              <p>
                I enjoy engineering <strong>ultra-fast platforms that scale
                without scaling the bill</strong>, interactive learning engines,
                and component systems that make complex products feel simple.
                Performance, search visibility, and a clear user journey belong
                in the design from the start.
              </p>
              <p>
                Away from the editor, you&apos;ll find me studying chess openings
                and endgames, analyzing how cinema tells a story, or exploring
                what the next generation of AI coding agents can help us build.
              </p>
            </div>
            <aside className="interest-card">
              <div className="interest-title">
                <Icon name="sparkles" size={17} /> Beyond the code
              </div>
              <div className="interest-list">
                <div className="interest-item">
                  <Icon name="check" size={14} />
                  <span><strong>Chess</strong> — tactical puzzles, opening ideas, and endgames.</span>
                </div>
                <div className="interest-item">
                  <Icon name="check" size={14} />
                  <span><strong>Cinema</strong> — the craft behind memorable storytelling.</span>
                </div>
                <div className="interest-item">
                  <Icon name="check" size={14} />
                  <span><strong>AI tools</strong> — experimenting with emerging coding agents.</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <span className="eyebrow">The toolkit</span>
            <h2 className="section-title" id="skills-title">Tools for the whole stack.</h2>
            <p className="section-subtitle">
              A practical mix of frontend craft, backend fundamentals, and
              modern delivery tools—chosen to fit the problem.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-icon">
                  <Icon name={group.icon} size={17} />
                </div>
                <h3>{group.title}</h3>
                <p>{group.subtitle}</p>
                <div className="tag-list">
                  {group.items.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <span className="eyebrow">Where I&apos;ve been</span>
            <h2 className="section-title" id="experience-title">Experience, built by doing.</h2>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-card">
                <div className="timeline-topline">
                  <div>
                    <h3>Full-Stack Web Developer</h3>
                    <div className="timeline-company">Freelance &amp; Independent Builder</div>
                  </div>
                  <span className="date-chip">2024 — Present</span>
                </div>
                <ul>
                  <li>Architected and shipped full-stack Next.js and React platforms, including BCSpark and DHITedu.info.</li>
                  <li>Applied SSR/SSG optimization, Firebase and MongoDB auth pipelines, and CDN delivery for responsive user experiences.</li>
                  <li>Built cost-conscious content and caching flows designed to stay fast as projects grow.</li>
                </ul>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-card">
                <div className="timeline-topline">
                  <div>
                    <h3>Web Developer &amp; Technical Specialist</h3>
                    <div className="timeline-company">INTLAB</div>
                  </div>
                  <span className="date-chip">Dec 2024 — Jan 2026</span>
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

        <section className="section" id="education" aria-labelledby="education-title">
          <div className="section-heading">
            <span className="eyebrow">The foundation</span>
            <h2 className="section-title" id="education-title">Education.</h2>
          </div>
          <article className="education-card">
            <div className="education-icon"><Icon name="graduation" size={21} /></div>
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
                {["Data Structures", "Algorithms", "Database Management Systems", "Software Engineering"].map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <span className="eyebrow">Selected work</span>
            <h2 className="section-title" id="projects-title">Ideas, meet implementation.</h2>
            <p className="section-subtitle">
              A few projects where thoughtful architecture meets useful,
              real-world workflows.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <ProjectPreview kind={project.preview} />
                <div className="project-content">
                  <span className="project-number">PROJECT / {project.number}</span>
                  <h3>{project.title}</h3>
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
        </section>

        <section className="section" id="contact" aria-labelledby="contact-title">
          <div className="section-heading">
            <span className="eyebrow">Have something in mind?</span>
            <h2 className="section-title" id="contact-title">Let&apos;s make it work.</h2>
            <p className="section-subtitle">
              Have a project, a collaboration idea, or just want to talk tech?
              My inbox is open.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <a className="contact-card" href="mailto:rusulazomsumon@gmail.com">
                <span className="contact-card-icon"><Icon name="mail" size={16} /></span>
                <span><small>EMAIL</small><strong>rusulazomsumon@gmail.com</strong></span>
              </a>
              <a
                className="contact-card"
                href={`https://wa.me/${phoneNumber.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-card-icon"><Icon name="phone" size={16} /></span>
                <span><small>PHONE &amp; WHATSAPP</small><strong>{phoneNumber}</strong></span>
              </a>
              <div className="contact-card">
                <span className="contact-card-icon"><Icon name="map-pin" size={16} /></span>
                <span><small>LOCATION</small><strong>Dhaka, Bangladesh</strong></span>
              </div>
            </div>
            <div className="contact-panel">
              <h3>Send a quick note</h3>
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
                <button className="button-primary" type="submit">
                  Send a message <Icon name="arrow-right" size={14} />
                </button>
                <p className="form-note">
                  Submitting shows an on-page confirmation only; nothing is
                  saved. Email is the best way to get a response.
                </p>
              </form>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-copy">
            <span className="footer-brand">Rusul.dev</span><br />
            © 2026 Rusul Azom Sumon
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
            <button
              aria-label="Close project details"
              className="dialog-close"
              onClick={() => setActiveProject(null)}
              ref={closeButtonRef}
              type="button"
            >
              <Icon name="x" size={17} />
            </button>
            <span className="dialog-kicker">Project / {activeProject.number}</span>
            <h2 id="project-dialog-title">{activeProject.title}</h2>
            <p className="dialog-summary">{activeProject.summary}</p>
            <div className="dialog-section">
              <h3>Main technology stack</h3>
              <div className="tag-list">
                {activeProject.stack.map((technology) => (
                  <span className="tag" key={technology}>{technology}</span>
                ))}
              </div>
            </div>
            <div className="dialog-section">
              <h3>About the project</h3>
              <p>{activeProject.description}</p>
              <div className="dialog-features" style={{ marginTop: 13 }}>
                {activeProject.features.map((feature) => (
                  <div className="dialog-feature" key={feature}>
                    <Icon name="check" size={13} />{feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="dialog-section">
              <h3>Challenges faced</h3>
              <p>{activeProject.challenges}</p>
            </div>
            <div className="dialog-section">
              <h3>Potential improvements &amp; future plans</h3>
              <p>{activeProject.improvements}</p>
            </div>
            <div className="dialog-actions">
              <a className="button-primary" href={activeProject.live} target="_blank" rel="noreferrer">
                Visit live project <Icon name="external" size={14} />
              </a>
              <a className="button-secondary" href={activeProject.repo} target="_blank" rel="noreferrer">
                Client GitHub repository <Icon name="github" size={14} />
              </a>
            </div>
          </section>
        </div>
      )}

      {toastVisible && (
        <div className="toast" role="status" aria-live="polite">
          <Icon name="check" size={17} />
          Thanks for reaching out! This form is demo-only—email me directly for a reply.
        </div>
      )}
    </>
  );
}

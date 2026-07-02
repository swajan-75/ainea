import SideNav from "./components/SideNav";

type Grade = "S" | "A" | "B" | "C" | "D";
const GRADE_ORDER: Grade[] = ["D", "C", "B", "A", "S"];

function GradeDots({ grade }: { grade: Grade }) {
  const level = GRADE_ORDER.indexOf(grade) + 1;
  return (
    <span className="inline-flex items-center gap-3">
      <span className="flex gap-[4px]">
        {GRADE_ORDER.map((_, i) => (
          <span key={i} className={`grade-dot ${i < level ? "filled" : ""}`} />
        ))}
      </span>
      <span className="font-mono text-[10px] tracking-wide text-slate-500">{grade}</span>
    </span>
  );
}

function SectionTag({ label }: { label: string }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-violet-400">
        {label}
      </span>
      <span className="section-divider" />
    </div>
  );
}

type SkillItem = { name: string; grade: Grade };
const skillGroups: { title: string; items: SkillItem[]; color: string }[] = [
  {
    title: "Languages",
    color: "from-violet-500 to-purple-600",
    items: [
      { name: "Python", grade: "A" },
      { name: "JavaScript", grade: "A" },
      { name: "Java", grade: "C" },
      { name: "C++", grade: "C" },
      { name: "C#", grade: "C" },
      { name: "R", grade: "C" },
      { name: "PHP", grade: "D" },
    ],
  },
  {
    title: "Web & Frameworks",
    color: "from-cyan-500 to-sky-600",
    items: [
      { name: "Django", grade: "A" },
      { name: "Node.js", grade: "A" },
      { name: "React", grade: "A" },
      { name: "Vue.js", grade: "A" },
      { name: "ERPNext / Frappe", grade: "A" },
      { name: "HTML / CSS", grade: "A" },
    ],
  },
  {
    title: "Data & ML",
    color: "from-emerald-500 to-teal-600",
    items: [
      { name: "TensorFlow / Keras", grade: "C" },
      { name: "Pandas", grade: "B" },
      { name: "MySQL", grade: "A" },
      { name: "SQL Server", grade: "C" },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "from-pink-500 to-rose-600",
    items: [
      { name: "GitHub", grade: "B" },
      { name: "Google Colab", grade: "B" },
      { name: "Linux (Ubuntu)", grade: "B" },
      { name: "Xampp", grade: "C" },
    ],
  },
];

const academicProjects: {
  title: string;
  period: string;
  stack: string[];
  summary: string;
  color: string;
}[] = [
  {
    title: "Face Recognition System",
    period: "Feb 2025",
    stack: ["Python", "Keras", "CNN"],
    color: "from-violet-500 to-indigo-600",
    summary:
      "CNN-based face recognition model trained on Google Colab, applying deep learning for facial feature extraction and classification.",
  },
  {
    title: "White Blood Cell Classification",
    period: "Feb 2024",
    stack: ["Python", "DL + ML"],
    color: "from-cyan-500 to-blue-600",
    summary:
      "Hybrid deep learning and machine learning model classifying 8 types of white blood cells for improved diagnostic accuracy.",
  },
  {
    title: "Tomato Leaf Disease Classification",
    period: "Jan 2024",
    stack: ["Python", "CNN"],
    color: "from-emerald-500 to-green-600",
    summary:
      "Hybrid CNN model detecting and classifying tomato leaf diseases to support automated agricultural diagnostics.",
  },
  {
    title: "Web Scraping & Topic Modeling",
    period: "Jun 2024",
    stack: ["R", "NLP", "LDA"],
    color: "from-pink-500 to-rose-600",
    summary:
      "Scraped CNN news articles and applied Latent Dirichlet Allocation to surface thematic structures in the corpus.",
  },
];

export default function Home() {
  return (
    <>
      {/* Background blobs */}
      <div className="bg-blobs" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
        <div className="blob blob-5" />
      </div>

      {/* Left side dock */}
      <SideNav />

      <main className="mx-auto max-w-[1140px] px-10 relative z-20 pl-24 sm:pl-28">

        {/* ══════════════════════════════════════════════════════
            HERO — full viewport height
        ══════════════════════════════════════════════════════ */}
        <section id="home" className="hero-section">

          {/* Name */}
          <h1 className="font-display text-[3.2rem] sm:text-7xl leading-[1.02] mb-6 anim-fade-up">
            <span className="text-white">Ainea Esrat</span>
            <br />
            <span className="gradient-text italic">Esika</span>
          </h1>

          {/* Role chips */}
          <div className="flex flex-wrap gap-2 mb-8 anim-fade-up-1">
            {["Python Developer", "Full-Stack Engineer", "ML Researcher"].map((r) => (
              <span
                key={r}
                className="font-mono text-[11px] px-3 py-1.5 rounded-full glass text-slate-300"
              >
                {r}
              </span>
            ))}
          </div>

          {/* Tagline */}
          <p className="max-w-[52rem] text-[1.05rem] leading-[1.85] text-slate-400 mb-10 anim-fade-up-2">
            Python Developer at{" "}
            <span className="text-violet-300 font-medium">GLASCUTR</span>,
            building across Django, Node.js and ERPNext on the backend and
            React / Vue.js on the front — with a research background in machine
            learning and a published paper in public-health data science.
          </p>

          {/* CTA links */}
          <div className="flex flex-wrap gap-4 anim-fade-up-3">
            <a
              href="https://mail.google.com/mail/?view=cm&to=aineaesratesika@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-[12px] text-white"
              style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Get in touch
            </a>
            <a
              href="https://linkedin.com/in/ainea-esrat"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-[12px] glass text-slate-300 link-hover"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center anim-fade-up-4">
            <div className="flex flex-col items-center gap-2 text-slate-600">
              <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
              <svg className="scroll-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            EXPERIENCE
        ══════════════════════════════════════════════════════ */}
        <section id="experience" className="mb-24 pt-20">
          <SectionTag label="Experience" />
          <div className="glass-featured rounded-2xl p-7 sm:p-9">
            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 mb-5">
              <div>
                <h3 className="font-display text-2xl text-white mb-1">Python Developer</h3>
                <p className="font-mono text-[12px] tracking-wide text-violet-300">GLASCUTR</p>
              </div>
              <span className="font-mono text-[12px] text-emerald-400 glass rounded-full px-3 py-1 whitespace-nowrap">
                Jul 2025 — Present
              </span>
            </div>
            <p className="text-[0.95rem] leading-[1.85] text-slate-300 mb-6">
              Joined as an intern building a Smart Inventory Management System in ERPNext and a
              parallel Django-based system, then converted to a full-time Python Developer role.
              Now works across Django, Node.js, and ERPNext for backend development and React /
              Vue.js for frontend delivery — covering API design, database schema work, real-time
              data workflows, and cross-stack feature ownership, alongside testing and performance
              optimization.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "Django", "Node.js", "ERPNext", "React", "Vue.js", "MySQL"].map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            PROJECTS
        ══════════════════════════════════════════════════════ */}
        <section id="projects" className="mb-24 pt-4">
          <SectionTag label="Selected Projects" />

          {/* Featured */}
          <div className="glass-featured rounded-2xl p-7 sm:p-9 mb-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 mb-2">
              <h3 className="font-display text-xl text-white">Smart Inventory Management System</h3>
              <span className="font-mono text-[11px] text-emerald-400">Jul 2025 — Present</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {["ERPNext", "Django", "Python", "MySQL"].map((s) => (
                <span key={s} className="tech-tag">{s}</span>
              ))}
            </div>
            <p className="text-[0.92rem] leading-[1.8] text-slate-300">
              Built an ERPNext-based inventory platform with customized modules and automated stock
              workflows, alongside a parallel Django/Python system handling backend logic and
              real-time stock updates. Owns testing, debugging, and performance tuning across both
              systems.
            </p>
            <span className="mt-5 inline-block font-mono text-[10px] uppercase tracking-widest text-violet-400 border border-violet-400/30 rounded-full px-3 py-1">
              ★ Professional
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {academicProjects.map((p) => (
              <div key={p.title} className="glass rounded-2xl p-6">
                <h4
                  className={`font-display text-[16px] bg-gradient-to-r ${p.color} bg-clip-text text-transparent mb-2`}
                >
                  {p.title}
                </h4>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.stack.map((s) => (
                    <span key={s} className="tech-tag text-[10px]">{s}</span>
                  ))}
                  <span className="font-mono text-[10px] text-slate-500 self-center ml-1">· {p.period}</span>
                </div>
                <p className="text-[0.87rem] leading-[1.75] text-slate-400">{p.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            SKILLS
        ══════════════════════════════════════════════════════ */}
        <section id="skills" className="mb-24 pt-4">
          <SectionTag label="Technical Skills" />
          <p className="mb-7 font-mono text-[11px] text-slate-500">
            Self-rated · S = lead level · D = theoretical
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="glass rounded-2xl p-6">
                <h4
                  className={`font-display text-[15px] italic mb-5 bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}
                >
                  {group.title}
                </h4>
                <ul className="space-y-3.5">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-center justify-between gap-4">
                      <span className="text-[0.9rem] text-slate-300">{item.name}</span>
                      <GradeDots grade={item.grade} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            EDUCATION
        ══════════════════════════════════════════════════════ */}
        <section id="education" className="mb-24 pt-4">
          <SectionTag label="Education" />
          <div className="glass rounded-2xl p-7 space-y-7">
            {[
              {
                degree: "BSc in Computer Science",
                school: "American International University-Bangladesh (AIUB), Dhaka",
                period: "2022 — 2025",
                grade: "CGPA 3.76/4.00",
                color: "text-violet-300",
              },
              {
                degree: "HSC",
                school: "Khulna Government Girls' College, Khulna",
                period: "2018 — 2020",
                grade: "GPA 5.00/5.00",
                color: "text-cyan-300",
              },
              {
                degree: "SSC",
                school: "Khulna Government Girls' High School, Khulna",
                period: "2017 — 2018",
                grade: "GPA 5.00/5.00",
                color: "text-emerald-300",
              },
            ].map((ed, i) => (
              <div key={i} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <div>
                  <h4 className={`font-display text-lg ${ed.color}`}>{ed.degree}</h4>
                  <p className="text-[0.9rem] text-slate-400 mt-0.5">{ed.school}</p>
                </div>
                <div className="text-right font-mono text-[11px] text-slate-500 whitespace-nowrap">
                  <p>{ed.period}</p>
                  <p className="text-emerald-400">{ed.grade}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="grid gap-5 sm:grid-cols-2 mt-6">
            {[
              {
                title: "Publication",
                color: "from-violet-400 to-pink-400",
                content: (
                  <p className="text-[0.88rem] leading-[1.75] text-slate-400">
                    &ldquo;Understanding the Impact of Secondhand Smoke: Public Perspectives&rdquo; —
                    accepted at the RURS Conference, published on ResearchGate, 2025.
                  </p>
                ),
              },
              {
                title: "Honors",
                color: "from-amber-400 to-yellow-500",
                content: (
                  <ul className="space-y-1.5 text-[0.88rem] text-slate-400">
                    <li>Dean&rsquo;s List Honors — 2022, 2023, 2024, AIUB</li>
                    <li>Language Fiesta Certificate — AIUB, 2024</li>
                  </ul>
                ),
              },
              {
                title: "Programming Contests",
                color: "from-cyan-400 to-blue-400",
                content: (
                  <ul className="space-y-1.5 text-[0.88rem] text-slate-400">
                    <li>9th Place — Intra AIUB Girls&rsquo; Programming Contest, 2024</li>
                    <li>8th Place — AIUB CS Fest Girls&rsquo; Programming Contest, 2024</li>
                    <li>Participant — National Girls&rsquo; Programming Contest, 2022</li>
                  </ul>
                ),
              },
              {
                title: "Leadership",
                color: "from-emerald-400 to-teal-400",
                content: (
                  <ul className="space-y-1.5 text-[0.88rem] text-slate-400">
                    <li>PR Coordinator — AIUB Drama Club, Nov 2024–Present</li>
                    <li>Brand Ambassador — ICT Olympiad Bangladesh, 2024–Ongoing</li>
                  </ul>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="glass rounded-2xl p-6">
                <h4
                  className={`font-display text-[15px] italic bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}
                >
                  {item.title}
                </h4>
                {item.content}
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CONTACT
        ══════════════════════════════════════════════════════ */}
        <section id="contact" className="mb-24 pt-4">
          <SectionTag label="Contact" />
          <div className="glass-featured rounded-2xl p-10 text-center">
            <h2 className="font-display text-3xl sm:text-4xl gradient-text mb-4">
              Let&rsquo;s work together
            </h2>
            <p className="text-slate-400 text-[1rem] leading-relaxed mb-8 max-w-md mx-auto">
              Open to full-time roles, freelance projects, and research collaborations.
              Drop me an email and I&rsquo;ll get back to you quickly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&to=aineaesratesika@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-[13px] text-white transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                aineaesratesika@gmail.com
              </a>
              <a
                href="tel:01729698944"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-[13px] glass text-slate-300 link-hover"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                01729-698944
              </a>
              <a
                href="https://linkedin.com/in/ainea-esrat"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-[13px] glass text-slate-300 link-hover"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
            </div>
            <p className="mt-6 font-mono text-[11px] text-slate-600">Dhaka, Bangladesh</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 pt-8 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-[11px] text-slate-600">
              © {new Date().getFullYear()} Ainea Esrat Esika
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { lang: "Bengali", color: "from-violet-500 to-purple-600" },
                { lang: "English", color: "from-cyan-500 to-blue-600" },
              ].map(({ lang, color }) => (
                <span
                  key={lang}
                  className={`font-mono text-[11px] rounded-full px-4 py-1 text-white bg-gradient-to-r ${color}`}
                >
                  {lang} — Fluent
                </span>
              ))}
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}

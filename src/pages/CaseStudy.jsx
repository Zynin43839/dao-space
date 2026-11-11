import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BarChart3,
  CheckCircle2,
  Database,
  FileText,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { FancyLink, FancyRouterLink } from "../components/FancyLink";

const BASE = "/case-study";

const metrics = [
  { value: "25", label: "documents delivered" },
  { value: "15 + 8", label: "functional + quality requirements" },
  { value: "23", label: "test cases" },
  { value: "100%", label: "requirements traced to tests" },
];

const roles = [
  {
    icon: Sparkles,
    title: "Discovery",
    body: "The discovery phase covered nine stakeholder groups, two user personas, six pain points, and seven requirement-linked gaps.",
    docs: "D-02 · D-03 · D-04",
  },
  {
    icon: FileText,
    title: "Requirements",
    body: "The requirements phase produced an SRS with fifteen functional requirements and Given/When/Then acceptance criteria, ten user stories, six use cases, and ten business rules.",
    docs: "D-05 · D-06 · D-07 · D-08",
  },
  {
    icon: Layers,
    title: "Modeling",
    body: "Modelling comprised swimlane process flows, three C4 levels, an entity-relationship model with row-level security, two DFD levels, and six sequence diagrams.",
    docs: "D-10 · D-11 · D-12 · D-13 · D-14",
  },
  {
    icon: BarChart3,
    title: "Design",
    body: "Design work covered fifteen API endpoints, seven screens with a design token set, and ten architecture decision records.",
    docs: "D-15 · D-16 · D-17",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    body: "Quality assurance included eight measurable quality scenarios, eleven tracked risks, a twenty-three-case test plan, and an acceptance plan.",
    docs: "D-18 · D-19 · D-20 · D-21",
  },
  {
    icon: Database,
    title: "Delivery",
    body: "Delivery planning comprised a three-release roadmap, nine logged change requests, and a shared glossary.",
    docs: "D-22 · D-23 · D-24",
  },
];

const figures = [
  { src: `${BASE}/img/c4-l2.png`, title: "C4 Level 2 — containers", note: "Next.js, Elysia, Supabase, and Google Gemini behind a single API boundary." },
  { src: `${BASE}/img/erd.png`, title: "ERD — diary_entries", note: "A vector column, an HNSW index, and four row-level security policies on a single table." },
  { src: `${BASE}/img/dfd-l0.png`, title: "DFD Level 0 — trust boundary", note: "The point at which note text and queries cross to the external AI provider." },
  { src: `${BASE}/img/use-case.png`, title: "Use case diagram", note: "Six use cases and the included indexing service." },
  { src: `${BASE}/img/seq01.png`, title: "SEQ-01 — registration and session", note: "The session travels back as an httpOnly Set-Cookie, so no token is readable from JavaScript (ADR-10)." },
];

const keyDocs = [
  ["D-05", "Software Requirements Specification", "D-05-SRS.pdf"],
  ["D-09", "Traceability Matrix", "D-09-TRACEABILITY-MATRIX.pdf"],
  ["D-11", "C4 Architecture", "D-11-C4-ARCHITECTURE.pdf"],
  ["D-14", "DFD and Privacy", "D-14-DFD-PRIVACY.pdf"],
  ["D-20", "Test Plan", "D-20-TEST-PLAN.pdf"],
  ["D-01", "Case Study (document)", "D-01-CASE-STUDY.pdf"],
];

const Section = ({ id, kicker, title, children }) => (
  <section id={id} className="container-narrow py-14 border-t border-white/10">
    <p className="text-xs tracking-[0.2em] uppercase text-white/50">{kicker}</p>
    <h2 className="mt-2 mb-6 text-2xl md:text-3xl font-bold">{title}</h2>
    {children}
  </section>
);

const DOCS = [
  ["D-00", "Document set README"], ["D-01", "Case Study"], ["D-02", "Product Brief"],
  ["D-03", "Stakeholder Matrix"], ["D-04", "AS-IS / TO-BE"], ["D-05", "SRS"],
  ["D-06", "User Stories"], ["D-07", "Use Cases"], ["D-08", "Business Rules"],
  ["D-09", "Traceability Matrix"], ["D-10", "Process Flows"], ["D-11", "C4 Architecture"],
  ["D-12", "Data Model"], ["D-13", "Sequence Diagrams"], ["D-14", "DFD & Privacy"],
  ["D-15", "UI Wireframes"], ["D-16", "API Contract"], ["D-17", "ADR"],
  ["D-18", "NFR Spec"], ["D-19", "Risk Register"], ["D-20", "Test Plan"],
  ["D-21", "UAT"], ["D-22", "Roadmap"], ["D-23", "Change Request Log"],
  ["D-24", "Glossary"],
];

const DOC_FILES = {
  "D-00": "D-00-README.pdf",
  "D-01": "D-01-CASE-STUDY.pdf",
  "D-02": "D-02-PRODUCT-BRIEF.pdf",
  "D-03": "D-03-STAKEHOLDER-MATRIX.pdf",
  "D-04": "D-04-AS-IS-TO-BE.pdf",
  "D-05": "D-05-SRS.pdf",
  "D-06": "D-06-USER-STORIES.pdf",
  "D-07": "D-07-USE-CASES.pdf",
  "D-08": "D-08-BUSINESS-RULES.pdf",
  "D-09": "D-09-TRACEABILITY-MATRIX.pdf",
  "D-10": "D-10-PROCESS-FLOWS.pdf",
  "D-11": "D-11-C4-ARCHITECTURE.pdf",
  "D-12": "D-12-DATA-MODEL.pdf",
  "D-13": "D-13-SEQUENCE-DIAGRAMS.pdf",
  "D-14": "D-14-DFD-PRIVACY.pdf",
  "D-15": "D-15-UI-WIREFRAMES.pdf",
  "D-16": "D-16-API-CONTRACT.pdf",
  "D-17": "D-17-ADR.pdf",
  "D-18": "D-18-NFR-SPEC.pdf",
  "D-19": "D-19-RISK-REGISTER.pdf",
  "D-20": "D-20-TEST-PLAN.pdf",
  "D-21": "D-21-UAT.pdf",
  "D-22": "D-22-ROADMAP.pdf",
  "D-23": "D-23-CHANGE-REQUEST-LOG.pdf",
  "D-24": "D-24-GLOSSARY.pdf",
};

export default function CaseStudy() {
  const [openDoc, setOpenDoc] = useState(null);
  const [docLang, setDocLang] = useState("th");
  const docBase = docLang === "th" ? `${BASE}/docs` : `${BASE}/docs/en`;

  return (
    <div className="min-h-screen bg-[#070b1a] text-white">
      <div className="sticky top-0 z-20 backdrop-blur bg-[rgba(7,11,26,0.75)] border-b border-white/10">
        <div className="container-narrow h-14 flex items-center justify-between gap-4">
          <FancyRouterLink to="/" className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <ArrowLeft size={16} /> Dao • Spacefolio
          </FancyRouterLink>
          <div className="flex gap-2">
            <FancyLink className="btn-outline text-sm" href={`${BASE}/RAG-Diary-Docs.zip`} download>
              Docs ZIP · TH
            </FancyLink>
            <FancyLink
              className="btn-outline text-sm hidden sm:inline-flex"
              href={`${BASE}/RAG-Diary-Docs-EN.zip`}
              download
            >
              Docs ZIP · EN
            </FancyLink>
            <FancyLink
              className="btn text-sm"
              href="https://github.com/Zynin43839/rag-diary-front-end"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </FancyLink>
          </div>
        </div>
      </div>

      <header className="container-narrow pt-16 pb-10">
        <p className="text-xs tracking-[0.22em] uppercase text-white/50">
          Case study · Business / System Analysis
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">
          RAG-Diary: semantic retrieval and retrieval-augmented dialogue for personal journaling
        </h1>
        <p className="mt-4 max-w-3xl text-white/80">
          This case study examines a private journaling system that supports semantic retrieval,
          retrieval-augmented dialogue over the user's own entries, and period-level mood summarisation
          with image generation. The analysis and the implementation were carried out by a single author,
          and each requirement in the specification set is traced to an implemented behaviour.
        </p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs">
          {["Next.js", "Elysia (Bun)", "TypeScript", "Supabase Postgres", "pgvector", "Google Gemini"].map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-md bg-white/10">{t}</span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <FancyLink className="btn" href={`${BASE}/deck.html`} target="_blank" rel="noreferrer">
            Open the 22-slide deck · TH
          </FancyLink>
          <FancyLink className="btn-outline" href={`${BASE}/deck-en.html`} target="_blank" rel="noreferrer">
            22-slide deck · EN
          </FancyLink>
          <FancyLink className="btn-outline" href={`${BASE}/RAG-Diary-Docs.zip`} download>
            All 25 documents · TH
          </FancyLink>
          <FancyLink className="btn-outline" href={`${BASE}/RAG-Diary-Docs-EN.zip`} download>
            All 25 documents · EN
          </FancyLink>
          <FancyLink
            className="btn-outline"
            href="https://rag-diary-app.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Live app
          </FancyLink>
          <FancyLink
            className="btn-outline"
            href="https://portfolio-six-wine-wzu5libw9r.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            BA/SA portfolio site
          </FancyLink>
        </div>
        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="card !p-4">
            <dt className="text-xs uppercase tracking-wider text-white/50">Role</dt>
            <dd className="mt-1 text-sm">Business Analyst / System Analyst (solo, self-initiated)</dd>
          </div>
          <div className="card !p-4">
            <dt className="text-xs uppercase tracking-wider text-white/50">Timeline</dt>
            <dd className="mt-1 text-sm">October 2026</dd>
          </div>
          <div className="card !p-4">
            <dt className="text-xs uppercase tracking-wider text-white/50">Scope</dt>
            <dd className="mt-1 text-sm">Discovery to delivery, documentation and working app</dd>
          </div>
        </dl>
      </header>

      <div className="container-narrow grid grid-cols-2 md:grid-cols-4 gap-3 pb-4">
        {metrics.map((m) => (
          <div key={m.label} className="card !p-5">
            <p className="text-2xl md:text-3xl font-bold text-accent">{m.value}</p>
            <p className="mt-1 text-xs text-white/60">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="container-narrow py-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="card !p-3"
        >
          <video
            className="w-full rounded-xl border border-white/10"
            controls
            preload="metadata"
            poster={`${BASE}/img/poster.png`}
          >
            <source src={`${BASE}/clip.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="px-3 py-2 text-xs text-white/50">
            A 30-second walkthrough: problem, real screens, architecture and the delivered numbers.
          </p>
        </motion.div>
      </div>

      <Section id="problem" kicker="01 · Problem" title="Problem statement: recording is straightforward, retrieval is not">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Distributed records", "Entries are kept in several applications, which prevents retrieval from a single point."],
            ["Lexical retrieval only", "When the original wording is not recalled, the entry cannot be located."],
            ["No longitudinal view", "No mechanism supports reviewing emotional patterns across a period."],
          ].map(([title, body]) => (
            <div key={title} className="card">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-white/60">
          Six pain points identified in the AS-IS analysis were translated into seven gaps, each mapped to a requirement in the SRS.
        </p>
      </Section>

      <Section id="work" kicker="02 · What I delivered" title="Analysis and delivery phases">
        <div className="grid gap-4 md:grid-cols-3">
          {roles.map(({ icon: Icon, title, body, docs }) => (
            <div key={title} className="card">
              <Icon size={20} className="text-accent" />
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{body}</p>
              <p className="mt-3 text-[11px] tracking-wider text-white/40">{docs}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="architecture" kicker="03 · Architecture and data" title="Architecture and data boundaries">
        <div className="grid gap-4 md:grid-cols-2">
          {figures.map((f) => (
            <figure key={f.title} className="card !p-3">
              <a href={f.src} target="_blank" rel="noreferrer">
                <img src={f.src} alt={f.title} loading="lazy" className="w-full rounded-lg bg-white/5" />
              </a>
              <figcaption className="px-2 py-2">
                <span className="text-sm font-medium">{f.title}</span>
                <span className="mt-1 block text-xs text-white/60">{f.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            ["Isolation happens in the database", "Four row-level security policies restrict access to auth.uid() = user_id, so an application defect cannot expose a row."],
            ["Search is vector-first", "1,536-dimension embeddings are indexed with HNSW and combined with a keyword weight in a hybrid search function."],
            ["Consent before any outbound call", "A consent gate informs the user and records acceptance; consent can be revoked from the settings page."],
            ["Failures are visible", "Errors are mapped to readable messages, and provider failures do not leave the interface blank."],
          ].map(([title, body]) => (
            <div key={title} className="card">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" />
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-white/70">{body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="quality" kicker="04 · Quality evidence" title="Quality criteria and verification evidence">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card">
            <h3 className="font-semibold">Measurable, not adjectives</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/75 list-disc list-inside">
              <li>Search responds within 3.5 s at p95 with up to 5,000 entries per user (NFR-01)</li>
              <li>Zero cross-user reads; every data endpoint requires the httpOnly session cookie (NFR-02)</li>
              <li>Consent shown before external processing, export and delete-all verified (NFR-03)</li>
              <li>Keyboard access and readable announcements across the main screens (NFR-04)</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold">Traceability, end to end</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/75 list-disc list-inside">
              <li>Twenty-three requirements are mapped to a gap, use case, user story, screen, endpoint, and test case</li>
              <li>Twenty-three test cases and seven UAT scenarios define entry and exit criteria</li>
              <li>Eleven risks are scored by likelihood and impact, each with an assigned owner</li>
              <li>Nine change requests are recorded with an impact analysis</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 card">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-semibold">
                All 25 documents ({docLang === "th" ? "Thai" : "English"} PDF)
              </h3>
              <p className="mt-1 text-xs text-white/50">
                Click a document to read it here, no download. The same 25 documents exist in both languages.
              </p>
            </div>
            <div
              className="flex gap-1 rounded-lg border border-white/15 p-1"
              role="group"
              aria-label="Document language"
            >
              {[
                ["th", "ไทย"],
                ["en", "English"],
              ].map(([code, label]) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setDocLang(code)}
                  aria-pressed={docLang === code}
                  className={`rounded-md px-3 py-1 text-xs transition ${
                    docLang === code
                      ? "bg-white/15 text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <ul className="mt-3 grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
            {DOCS.map(([code, title]) => (
              <li key={code}>
                <button
                  type="button"
                  onClick={() => setOpenDoc({ code, title })}
                  className="flex w-full items-baseline gap-3 rounded-md px-2 py-1.5 text-left text-sm text-white/80 hover:bg-white/10"
                >
                  <span className="w-12 shrink-0 text-white/45">{code}</span>
                  <span className="flex-1">{title}</span>
                  <span className="text-xs text-[var(--accent,#7c4dff)]">Read</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {openDoc && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 md:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`${openDoc.code} ${openDoc.title}`}
            onClick={(e) => { if (e.target === e.currentTarget) setOpenDoc(null); }}
          >
            <div className="flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-white/15 bg-[#0b1020]">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2">
                <p className="truncate text-sm text-white/80">
                  <span className="text-white/45">{openDoc.code}</span> {openDoc.title}
                </p>
                <div className="flex shrink-0 items-center gap-2">
                  <a
                    className="text-xs underline underline-offset-2"
                    href={`${docBase}/${DOC_FILES[openDoc.code]}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in a new tab
                  </a>
                  <button
                    type="button"
                    className="rounded-md border border-white/20 px-3 py-1 text-xs hover:bg-white/10"
                    onClick={() => setOpenDoc(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
              <iframe
                key={openDoc.code}
                title={`${openDoc.code} ${openDoc.title}`}
                className="h-full w-full bg-white"
                src={`${docBase}/${DOC_FILES[openDoc.code]}#view=FitH`}
              />
            </div>
          </div>
        )}
      </Section>

      <Section id="limits" kicker="05 · Limits" title="Scope and limitations">
        <div className="card border-amber-300/20 bg-amber-200/5">
          <ul className="space-y-2 text-sm text-amber-100/80 list-disc list-inside">
            <li>The project was executed by a single author using simulated roles rather than by a team with external stakeholders.</li>
            <li>Timelines and effort estimates are practice-based targets rather than field measurements.</li>
            <li>User acceptance testing has been prepared but not yet conducted with end users.</li>
            <li>Image generation is limited by the AI provider's quota, and rate limiting is implemented in code but not yet enabled in the database.</li>
          </ul>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <FancyRouterLink to="/#projects" className="btn-outline">
            <ArrowLeft size={16} /> Back to projects
          </FancyRouterLink>
          <FancyLink
            className="btn"
            href="https://github.com/Zynin43839/rag-diary-front-end"
            target="_blank"
            rel="noreferrer"
          >
            View the repository
          </FancyLink>
        </div>
      </Section>

      <footer className="container-narrow py-10 text-xs text-white/40 border-t border-white/10">
        Case study built from the project's own document set · RAG-Diary, October 2026
      </footer>
    </div>
  );
}

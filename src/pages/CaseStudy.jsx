import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  Layers,
  ShieldCheck,
  Sparkles,
  TestTube2,
} from "lucide-react";
import { FancyLink, FancyRouterLink } from "../components/FancyLink";

const BASE = "/case-study";
const IMG = `${BASE}/img`;

const LIVE_APP = "https://rag-diary-app.vercel.app";
const REPO = "https://github.com/Zynin43839/rag-diary";
const ANALYSIS_SITE = "https://oranut-ba-portfolio.vercel.app";

const metrics = [
  { value: "15", label: "API endpoints" },
  { value: "22", label: "automated tests" },
  { value: "7", label: "screens" },
  { value: "2", label: "languages, th / en" },
];

const features = [
  {
    title: "Search by meaning",
    body: "Entries are embedded into 1,536-dimension vectors and matched with HNSW, so a half-remembered phrase still finds the entry.",
  },
  {
    title: "Talk to your own entries",
    body: "A question is embedded, the five closest entries are retrieved, and only those are handed to the model before it answers.",
  },
  {
    title: "Mood summary and illustration",
    body: "A chosen period is summarised into a mood note, with an optional generated illustration when the provider quota allows it.",
  },
  {
    title: "Own your data",
    body: "Every entry can be exported, and the whole account can be deleted from the settings screen without contacting support.",
  },
];

const decisions = [
  {
    icon: ShieldCheck,
    title: "The session never touches JavaScript",
    body: "Login sets an httpOnly, same-site cookie behind a same-origin proxy, so a script injected into the page cannot read the session. Recorded as ADR-10.",
  },
  {
    icon: Database,
    title: "Isolation is enforced in the database",
    body: "Four row-level security policies on diary_entries compare user_id with auth.uid(), so an application bug cannot leak another user's row.",
  },
  {
    icon: Layers,
    title: "Search is vector-first, keyword-aware",
    body: "pgvector with an HNSW cosine index, combined with a keyword weight in a single SQL function, and a 0.6 similarity floor to keep noise out.",
  },
  {
    icon: Code2,
    title: "The AI provider is an adapter, not a dependency",
    body: "Embeddings, chat and image calls sit behind one module, and model names come from the environment, so a provider change is a config change.",
  },
  {
    icon: Sparkles,
    title: "Two languages from the first screen",
    body: "A dictionary plus a provider and a useT hook cover every screen, the choice persists in localStorage, and the html lang attribute follows it.",
  },
  {
    icon: TestTube2,
    title: "Limits are real, not decorative",
    body: "A fixed-window rate limit per user and per route returns 429 when exceeded, and provider failures return a readable message instead of a blank screen.",
  },
];

const figures = [
  {
    src: `${IMG}/c4-l2.png`,
    title: "C4 Level 2 — containers",
    note: "Next.js on Vercel, an Elysia API on Bun, Supabase Postgres with pgvector, and Google Gemini behind one adapter.",
  },
  {
    src: `${IMG}/erd.png`,
    title: "ERD — diary_entries",
    note: "A vector column, an HNSW index, and four row-level security policies on a single table.",
  },
  {
    src: `${IMG}/seq01.png`,
    title: "SEQ-01 — registration and session",
    note: "The session comes back as an httpOnly Set-Cookie, so no token is readable from the page.",
  },
];

const shots = [
  {
    src: `${IMG}/app-home.png`,
    caption: "Home: write an entry, pick a tag, and see recent entries",
  },
  {
    src: `${IMG}/app-search.png`,
    caption: "Search and chat: ask in your own words, get answers grounded in your entries",
  },
];

const Section = ({ id, kicker, title, children }) => (
  <section id={id} className="container-narrow py-14 border-t border-white/10">
    <p className="text-xs tracking-[0.2em] uppercase text-white/50">{kicker}</p>
    <h2 className="mt-2 mb-6 text-2xl md:text-3xl font-bold">{title}</h2>
    {children}
  </section>
);

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-[#070b1a] text-white">
      <div className="sticky top-0 z-20 backdrop-blur bg-[rgba(7,11,26,0.75)] border-b border-white/10">
        <div className="container-narrow h-14 flex items-center justify-between gap-4">
          <FancyRouterLink to="/" className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <ArrowLeft size={16} /> Dao • Spacefolio
          </FancyRouterLink>
          <div className="flex gap-2">
            <FancyLink className="btn-outline text-sm" href={REPO} target="_blank" rel="noreferrer">
              Repo
            </FancyLink>
            <FancyLink className="btn text-sm" href={LIVE_APP} target="_blank" rel="noreferrer">
              Live app
            </FancyLink>
          </div>
        </div>
      </div>

      <header className="container-narrow pt-16 pb-10">
        <p className="text-xs tracking-[0.22em] uppercase text-white/50">
          Case study · Full-stack build
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">
          RAG-Diary: a privacy-first AI diary, built and shipped
        </h1>
        <p className="mt-4 max-w-3xl text-white/80">
          A working diary application with semantic search, retrieval-augmented chat over your own
          entries, and a period mood summary. I built the frontend, the API, the database schema and
          the deployment, and I am the only author. Everything described on this page can be opened
          in the live app or read in the repository.
        </p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs">
          {["Next.js", "TypeScript", "Elysia (Bun)", "Supabase Postgres", "pgvector", "Google Gemini", "GitHub Actions"].map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-md bg-white/10">{t}</span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <FancyLink className="btn" href={LIVE_APP} target="_blank" rel="noreferrer">
            Open the live app <ArrowUpRight size={16} />
          </FancyLink>
          <FancyLink className="btn-outline" href={REPO} target="_blank" rel="noreferrer">
            Read the code
          </FancyLink>
          <FancyLink className="btn-outline" href={ANALYSIS_SITE} target="_blank" rel="noreferrer">
            The analysis behind it
          </FancyLink>
        </div>
        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="card !p-4">
            <dt className="text-xs uppercase tracking-wider text-white/50">Role</dt>
            <dd className="mt-1 text-sm">Full-stack developer (solo, self-initiated)</dd>
          </div>
          <div className="card !p-4">
            <dt className="text-xs uppercase tracking-wider text-white/50">Timeline</dt>
            <dd className="mt-1 text-sm">October 2026</dd>
          </div>
          <div className="card !p-4">
            <dt className="text-xs uppercase tracking-wider text-white/50">Scope</dt>
            <dd className="mt-1 text-sm">Schema, API, UI, tests and deployment</dd>
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

      <Section id="features" kicker="01 · What it does" title="Four behaviours, all reachable in the live app">
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="card">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="architecture" kicker="02 · Architecture" title="How the pieces fit together">
        <div className="grid gap-4 md:grid-cols-3">
          {figures.map((f) => (
            <figure key={f.title} className="card !p-3 flex flex-col">
              <a
                href={f.src}
                target="_blank"
                rel="noreferrer"
                className="flex h-44 md:h-52 items-center justify-center rounded-lg bg-white/5 p-2"
              >
                <img
                  src={f.src}
                  alt={f.title}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </a>
              <figcaption className="px-2 py-2">
                <span className="text-sm font-medium">{f.title}</span>
                <span className="mt-1 block text-xs text-white/60">{f.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section id="decisions" kicker="03 · Engineering decisions" title="The choices that shaped the code">
        <div className="grid gap-4 md:grid-cols-2">
          {decisions.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card">
              <Icon size={20} className="text-accent" />
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="screens" kicker="04 · The product" title="The interface, as deployed">
        <div className="grid gap-4 md:grid-cols-2">
          {shots.map((s) => (
            <motion.figure
              key={s.src}
              className="card !p-3"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              <a href={s.src} target="_blank" rel="noreferrer">
                <img src={s.src} alt={s.caption} loading="lazy" className="w-full rounded-lg bg-white/5" />
              </a>
              <figcaption className="px-2 py-2 text-xs text-white/60">{s.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </Section>

      <Section id="quality" kicker="05 · Quality" title="What is checked, and how">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card">
            <h3 className="font-semibold">Automated</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/75 list-disc list-inside">
              <li>22 tests: 13 on the server, 9 on the frontend, all passing locally</li>
              <li>GitHub Actions runs the suite on every push</li>
              <li>TypeScript compiles with no errors across the app and the API</li>
              <li>Search p95 measured at 3.16 s against a 3.5 s target</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold">Checked by hand</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/75 list-disc list-inside">
              <li>Every endpoint answers 401 without a session</li>
              <li>One user's rows stay invisible to another user</li>
              <li>Consent appears before the first AI call and can be withdrawn</li>
              <li>Thai and English both render from 390 px to 1440 px with no overflow</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="limits" kicker="06 · Limits" title="What is not finished">
        <div className="card border-amber-300/20 bg-amber-200/5">
          <ul className="space-y-2 text-sm text-amber-100/80 list-disc list-inside">
            <li>Image generation depends on the provider's free quota and returns 503 when it runs out.</li>
            <li>Rate limiting is implemented and tested, but the database migration that switches it on has not been run yet.</li>
            <li>No acceptance testing with real users has taken place; the flows were verified by the author.</li>
            <li>The project is a solo build, so the timeline reflects practice rather than a team schedule.</li>
          </ul>
        </div>
        <div className="mt-6 card">
          <div className="flex items-start gap-3">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" />
            <p className="text-sm text-white/75">
              The analysis side of this project — requirements, traceability, risk, test plan and 25
              documents in Thai and English — lives on the{" "}
              <a
                className="underline underline-offset-2"
                href={ANALYSIS_SITE}
                target="_blank"
                rel="noreferrer"
              >
                BA/SA portfolio
              </a>
              . This page stays on the code.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <FancyRouterLink to="/#projects" className="btn-outline">
            <ArrowLeft size={16} /> Back to projects
          </FancyRouterLink>
          <FancyLink className="btn" href={REPO} target="_blank" rel="noreferrer">
            View the repository
          </FancyLink>
        </div>
      </Section>

      <footer className="container-narrow py-10 text-xs text-white/40 border-t border-white/10">
        Built from the deployed system and its repository · RAG-Diary, October 2026
      </footer>
    </div>
  );
}

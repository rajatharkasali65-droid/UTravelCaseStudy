import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import travelScreenshot from "@/imports/U-travel_2.png";
import travelScreenshot2 from "@/imports/U-travel_2-1.png";
import { ArrowRight, Users, Clock, Target, CheckCircle, TrendingUp, Palette, Type, Grid, Smartphone, Globe, Search, Star, ChevronDown } from "lucide-react";

const COLORS = [
  { name: "Brand Red", hex: "#B03133", role: "Primary CTA, Highlights" },
  { name: "Ink Black", hex: "#1A1612", role: "Text, Dark Sections" },
  { name: "Warm Sand", hex: "#F7F5F2", role: "Page Background" },
  { name: "Mist", hex: "#EDE9E4", role: "Cards, Inputs" },
  { name: "Stone", hex: "#7A7470", role: "Captions, Secondary Text" },
  { name: "Pure White", hex: "#FFFFFF", role: "Cards, Panels" },
];

const STATS = [
  { value: "5 wks", label: "Project Duration" },
  { value: "2300+", label: "Users Surveyed" },
  { value: "38%", label: "Booking Drop-off Reduced" },
  { value: "4.7★", label: "Avg. Usability Score" },
];

const RESEARCH = [
  {
    icon: Search,
    title: "Discovery & Surveys",
    body: "Conducted 12 stakeholder interviews and 2,300-person surveys across 6 markets. Identified the top pain point: users abandon multi-leg bookings mid-flow due to tab-switching and form complexity.",
  },
  {
    icon: Users,
    title: "Competitive Analysis",
    body: "Audited Kayak, Booking.com, Expedia, and Skyscanner. All four overload the search bar with conditional fields shown upfront. We hypothesized a progressive disclosure model would reduce cognitive load.",
  },
  {
    icon: Target,
    title: "Personas Defined",
    body: "Three primary personas emerged: the Solo Explorer (25–34, mobile-first), the Family Planner (35–50, value-focused), and the Business Traveler (28–45, speed-sensitive). Each shaped different information hierarchies.",
  },
];

const DECISIONS = [
  {
    num: "01",
    title: "Tabbed Search Over Unified Bar",
    challenge: "A single search bar covering flights, hotels, and packages is flexible but opaque — users don't know what mode they're in.",
    decision: "Persistent tab system anchored at the top of the hero. Active tab shifts the form fields below, making mode explicit while keeping the hero clean.",
    outcome: "Qualitative testing showed 76% of participants correctly identified their booking mode on first attempt vs. 41% in baseline.",
  },
  {
    num: "02",
    title: "Progressive Destination Cards",
    challenge: "Destination grids with equal-weight cards don't direct the eye. All destinations compete for attention.",
    decision: "Hero card spans 2 columns at 280px height; supporting cards are 160px. The visual weight gradient naturally guides scanning top-left to bottom-right.",
    outcome: "Heatmap studies showed 83% of sessions started with the hero card, then moved systematically through secondary cards.",
  },
  {
    num: "03",
    title: "Price Anchoring in Flight Cards",
    challenge: "Users needed to compare prices quickly but flight card layouts buried the price among secondary data.",
    decision: "Price moved to the top-right of every flight card in a 700-weight type, with a subtle red badge for the lowest fare in a set.",
    outcome: "Price comparison task completion time reduced from 18.4 s to 9.1 s. Users cited clarity as the primary reason.",
  },
  {
    num: "04",
    title: "Sticky Search Bar on Scroll",
    challenge: "After scrolling past the hero, users lost the ability to re-search without scrolling back up.",
    decision: "After 80 px of scroll, the full search form collapses into a compact sticky bar at the top with city, dates, and a Search CTA.",
    outcome: "Re-search rate (modifying a query mid-session) increased by 22%, a proxy for deeper product engagement.",
  },
];

const OUTCOMES = [
  { metric: "Booking Completion Rate", before: "52%", after: "71%", delta: "+19 pts" },
  { metric: "Avg. Session Duration", before: "4m 12s", after: "6m 38s", delta: "+58%" },
  { metric: "Mobile Conversion Rate", before: "1.8%", after: "3.1%", delta: "+72%" },
  { metric: "Support Tickets (Search)", before: "340/wk", after: "118/wk", delta: "−65%" },
];

const TYPE_SCALE = [
  { name: "Display / Hero", font: "Satoshi", weight: "700", size: "64px / 4rem", sample: "Explore the world" },
  { name: "Section Heading", font: "Satoshi", weight: "600", size: "36px / 2.25rem", sample: "Popular Destinations" },
  { name: "Card Title", font: "Inter", weight: "600", size: "20px / 1.25rem", sample: "Venice, Italy" },
  { name: "Body Copy", font: "Inter", weight: "400", size: "16px / 1rem", sample: "Flights, hotels, and packages in one place." },
  { name: "Label / Meta", font: "DM Mono", weight: "400", size: "13px / 0.8rem", sample: "FROM $299 · NON-STOP" },
];

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`px-6 md:px-12 lg:px-24 py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-[0.18em] uppercase mb-4 font-medium text-[#b03133]">
      {children}
    </p>
  );
}

function SectionTitle({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2
      className={`font-['Satoshi'] text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] ${light ? "text-white" : "text-[#1a1612]"}`}
    >
      {children}
    </h2>
  );
}

function Divider() {
  return <div className="w-12 h-[2px] mt-6 mb-10 bg-[#b03133]" />;
}

export default function App() {
  const [activeDecision, setActiveDecision] = useState<string | null>("01");

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
          <span className="font-['Satoshi'] font-bold text-lg text-[#1a1612] tracking-tight">
            Case Study<span className="text-[#d63029]">.</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#7a7470]">
            {["Overview", "Research", "Design", "Outcomes"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#1a1612] transition-colors duration-150"
              >
                {item}
              </a>
            ))}
          </div>
          <span className="font-mono text-xs text-[#7a7470] tracking-widest">2024</span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div className="pt-14">
        <div className="bg-[#1a1612] text-white min-h-[90vh] flex flex-col">
          <div className="flex-1 px-6 md:px-12 lg:px-24 pt-20 pb-0 max-w-7xl mx-auto w-full">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {["Travel & Booking", "UX Design", "Desktop", "2024"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] tracking-widest uppercase border border-white/20 px-3 py-1 rounded-sm text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-end">
              {/* Left: Title block */}
              <div>
                <p className="font-mono text-xs tracking-[0.2em] uppercase mb-5 text-[#b03133]">
                  UI/UX Design Case Study
                </p>
                <h1
                  className="font-['Satoshi'] text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.0] text-white mb-8"
                >
                  UTravel<br />
                  <em className="font-light italic text-white/70">— Booking</em><br />
                  Reimagined
                </h1>
                <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-md mb-10">A 5 week end-to-end redesign of a travel booking platform serving Sri Lankan–based travel agents and their clients across 6 markets.</p>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <span className="font-mono text-xs tracking-widest uppercase text-white/40">
                    Scroll to explore
                  </span>
                  <ChevronDown size={14} className="text-[#d63029] group-hover:translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Right: Screenshot preview */}
              <div className="relative self-end">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612] via-transparent to-transparent z-10 pointer-events-none" />
                <div className="border border-white/10 rounded-t-lg overflow-hidden shadow-2xl">
                  <div className="bg-[#2a2622] flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#d63029]/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                    <span className="font-mono text-[10px] text-white/20 ml-3 tracking-wider">
                      utravel.com
                    </span>
                  </div>
                  <ImageWithFallback
                    src={travelScreenshot}
                    alt="UTravel website final design — full-page view showing hero, destination cards, flights, hotels, routes, and footer sections"
                    className="w-full object-cover object-top"
                    style={{ maxHeight: "420px" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="border-t border-white/10 mt-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-2 md:grid-cols-4">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`py-6 px-4 flex flex-col gap-1 ${i < STATS.length - 1 ? "border-r border-white/10" : ""}`}
                >
                  <span className="font-['Satoshi'] text-3xl font-bold text-white">{s.value}</span>
                  <span className="font-mono text-[11px] tracking-widest uppercase text-white/40">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── OVERVIEW ── */}
      <Section id="overview" className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <SectionLabel>01 — Overview</SectionLabel>
            <SectionTitle>A platform built for agents, trusted by travelers</SectionTitle>
            <Divider />
            <p className="text-[#7a7470] text-base leading-relaxed max-w-2xl mb-6">
              UTravel&rsquo;s legacy booking portal had grown organically over 8 years. The result was a patchwork of UI patterns, inconsistent information hierarchy, and a mobile experience that accounted for 61% of traffic but less than 12% of completed bookings.
            </p>
            <p className="text-[#7a7470] text-base leading-relaxed max-w-2xl">The brief was to unify the search and discovery experience across flights, hotels, and packages with a design system that the in-house team of 4 engineers could maintain without a dedicated frontend designer.</p>
          </div>

          <div className="space-y-6">
            {[
              { label: "Role", value: "Lead UI/UX Designer" },
              { label: "Team", value: "1 Designer · 4 Engineers · 1 PM" },
              { label: "Timeline", value: "Jan – March 2024 (5 weeks)" },
              { label: "Tools", value: "Figma, FigJam, Photoshop, Notion" },
              { label: "Platform", value: "Web application" },
            ].map(({ label, value }) => (
              <div key={label} className="border-b border-border pb-4">
                <p className="font-mono text-[11px] tracking-widest uppercase mb-1 text-[#b03133]">{label}</p>
                <p className="text-[#1a1612] text-sm font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROBLEM ── */}
      <div className="bg-[#1a1612] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28">
          <SectionLabel>02 — Problem Statement</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-16 items-start mt-4">
            <SectionTitle light>
              How might we reduce booking drop-off for multi-service travel queries?
            </SectionTitle>
            <div className="space-y-6 pt-2">
              <p className="text-white/55 leading-relaxed">
                38% of users who started a booking abandoned it before entering passenger details. Exit surveys pointed to three compounding issues: confusing form layout, hidden pricing, and no visible progress indication across a 4-step checkout.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { pct: "61%", label: "Mobile traffic" },
                  { pct: "12%", label: "Mobile conversions" },
                  { pct: "38%", label: "Drop-off rate" },
                ].map(({ pct, label }) => (
                  <div key={label} className="border border-white/10 p-4 rounded-sm">
                    <div className="font-['Satoshi'] text-2xl font-bold text-[#b03133]">{pct}</div>
                    <div className="font-mono text-[10px] tracking-widest uppercase text-white/40 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── RESEARCH ── */}
      <Section id="research" className="max-w-7xl mx-auto">
        <SectionLabel>03 — Research</SectionLabel>
        <SectionTitle>Grounding decisions in evidence</SectionTitle>
        <Divider />

        <div className="grid md:grid-cols-3 gap-8">
          {RESEARCH.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-card border border-border p-8 rounded-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-[#d63029]/10 rounded-sm flex items-center justify-center mb-6">
                <Icon size={18} className="text-[#d63029]" />
              </div>
              <h3 className="font-['Satoshi'] text-xl font-semibold text-[#1a1612] mb-3">{title}</h3>
              <p className="text-[#7a7470] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Journey map callout */}
        <div className="mt-16 bg-[#ede9e4] p-8 md:p-12 rounded-sm">
          <p className="font-mono text-[11px] tracking-widest uppercase mb-4 text-[#b03133]">Key Insight</p>
          <blockquote className="font-['Satoshi'] text-2xl md:text-3xl font-medium text-[#1a1612] leading-snug max-w-3xl">“Users don’t abandon because they lose interest they abandon because they lose their place.”</blockquote>
          <p className="text-[#7a7470] text-sm mt-4">
            Confirmed across 8 moderated usability sessions. Users who triggered the sticky search bar completed bookings at 2.4× the rate of those who didn&rsquo;t.
          </p>
        </div>
      </Section>

      {/* ── DESIGN SYSTEM ── */}
      <div id="design" className="bg-[#1a1612] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28">
          <SectionLabel>04 — Design System</SectionLabel>
          <SectionTitle light>Built to scale, designed to feel human</SectionTitle>
          <div className="w-12 h-[2px] mt-6 mb-16 bg-[#b03133]" />

          {/* Colors */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Palette size={16} className="text-[#d63029]" />
              <span className="font-mono text-xs tracking-widest uppercase text-white/50">Color Palette</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {COLORS.map(({ name, hex, role }) => (
                <div key={name} className="group">
                  <div
                    className="h-20 rounded-sm mb-3 border border-white/10"
                    style={{ backgroundColor: hex }}
                  />
                  <p className="text-white text-sm font-medium">{name}</p>
                  <p className="font-mono text-[11px] text-white/40 mt-0.5">{hex}</p>
                  <p className="text-white/30 text-xs mt-1">{role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Type size={16} className="text-[#d63029]" />
              <span className="font-mono text-xs tracking-widest uppercase text-white/50">Type Scale</span>
            </div>
            <div className="space-y-px">
              {TYPE_SCALE.map(({ name, font, weight, size, sample }) => (
                <div
                  key={name}
                  className="grid md:grid-cols-4 gap-4 py-5 border-b border-white/8 items-center hover:bg-white/3 transition-colors px-2 rounded-sm"
                >
                  <div>
                    <p className="font-mono text-[11px] tracking-widest uppercase text-white/35">{name}</p>
                    <p className="text-white/50 text-xs mt-1">{font} · {weight} · {size}</p>
                  </div>
                  <div className="md:col-span-3">
                    <span
                      className="text-white"
                      style={{
                        fontFamily: font === "DM Mono" ? "'DM Mono', monospace" : font === "Inter" ? "'Inter', sans-serif" : "'Satoshi', sans-serif",
                        fontWeight: parseInt(weight),
                        fontSize: size.split(" / ")[0],
                        lineHeight: 1.2,
                      }}
                    >
                      {sample}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── FULL SCREEN SHOWCASE ── */}
      <Section className="max-w-7xl mx-auto">
        <SectionLabel>05 — Final Design</SectionLabel>
        <SectionTitle>The delivered product</SectionTitle>
        <Divider />
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 sticky top-24">
            <p className="text-[#7a7470] leading-relaxed text-base mb-8">The final design delivers a cohesive booking experience across search, discovery, and checkout with every section optimized through iterative usability testing over 6 rounds.</p>
            <div className="space-y-3">
              {[
                { icon: Globe, label: "6 market localizations" },
                { icon: Smartphone, label: "Mobile-first responsive" },
                { icon: Grid, label: "48 reusable components" },
                { icon: Star, label: "4.7★ usability score" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={15} className="text-[#d63029] shrink-0" />
                  <span className="text-[#1a1612] text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 relative">
            {/* Browser chrome */}
            <div className="border border-border rounded-sm overflow-hidden shadow-xl">
              <div className="bg-[#ede9e4] flex items-center gap-1.5 px-4 py-2.5 border-b border-border">
                <div className="w-2.5 h-2.5 rounded-full bg-[#d63029]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                <span className="font-mono text-[10px] text-[#7a7470] ml-3 tracking-wider">
                  utravel.com — Final Deliverable
                </span>
              </div>
              <ImageWithFallback
                src={travelScreenshot2}
                alt="UTravel final design — complete website showing all sections from hero to footer"
                className="w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ── DESIGN DECISIONS ── */}
      <div className="bg-[#ede9e4]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28">
          <SectionLabel>06 — Design Decisions</SectionLabel>
          <SectionTitle>Why each choice was made</SectionTitle>
          <Divider />

          <div className="grid md:grid-cols-4 gap-px bg-border">
            {DECISIONS.map((d) => (
              <button
                key={d.num}
                onClick={() => setActiveDecision(activeDecision === d.num ? null : d.num)}
                className={`text-left p-6 transition-colors ${
                  activeDecision === d.num
                    ? "bg-[#1a1612] text-white"
                    : "bg-white hover:bg-[#f7f5f2]"
                }`}
              >
                <span
                  className={`font-mono text-xs tracking-widest ${ activeDecision === d.num ? "text-[#d63029]" : "text-[#d63029]" } text-[#b03133]`}
                >
                  {d.num}
                </span>
                <h3
                  className={`font-['Satoshi'] text-base font-semibold mt-2 leading-snug ${
                    activeDecision === d.num ? "text-white" : "text-[#1a1612]"
                  }`}
                >
                  {d.title}
                </h3>
                <ArrowRight
                  size={14}
                  className={`mt-3 transition-transform ${
                    activeDecision === d.num
                      ? "text-[#d63029] rotate-90"
                      : "text-[#7a7470]"
                  }`}
                />
              </button>
            ))}
          </div>

          {activeDecision && (() => {
            const d = DECISIONS.find((dec) => dec.num === activeDecision)!;
            return (
              <div className="bg-white border border-border p-8 md:p-12 mt-px grid md:grid-cols-3 gap-8">
                <div>
                  <p className="font-mono text-[11px] tracking-widest uppercase text-[#7a7470] mb-2">Challenge</p>
                  <p className="text-[#1a1612] text-sm leading-relaxed">{d.challenge}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-widest uppercase mb-2 text-[#b03133]">Decision</p>
                  <p className="text-[#1a1612] text-sm leading-relaxed">{d.decision}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-widest uppercase text-[#7a7470] mb-2">Outcome</p>
                  <p className="text-[#1a1612] text-sm leading-relaxed">{d.outcome}</p>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* ── OUTCOMES ── */}
      <Section id="outcomes" className="max-w-7xl mx-auto">
        <SectionLabel>07 — Outcomes</SectionLabel>
        <SectionTitle>Measurable impact at 60 days post-launch</SectionTitle>
        <Divider />

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {OUTCOMES.map(({ metric, before, after, delta }) => (
            <div key={metric} className="bg-card p-8 flex flex-col gap-4">
              <p className="font-mono text-[11px] tracking-widest uppercase text-[#7a7470]">{metric}</p>
              <div className="flex items-end gap-6">
                <div>
                  <span className="text-[#7a7470] text-xs font-mono uppercase tracking-wider block mb-1">Before</span>
                  <span className="font-['Satoshi'] text-3xl font-bold text-[#1a1612]/40">{before}</span>
                </div>
                <ArrowRight size={16} className="text-[#d63029] mb-2" />
                <div>
                  <span className="text-[#7a7470] text-xs font-mono uppercase tracking-wider block mb-1">After</span>
                  <span className="font-['Satoshi'] text-3xl font-bold text-[#1a1612]">{after}</span>
                </div>
                <div className="ml-auto">
                  <span className="font-mono text-sm font-bold text-[#d63029] bg-[#d63029]/10 px-3 py-1.5 rounded-sm">
                    {delta}
                  </span>
                </div>
              </div>
              {/* Progress bar */}
              <div className="h-0.5 bg-[#ede9e4] rounded-full overflow-hidden">
                <div className="h-full rounded-full w-3/4 bg-[#b03133]" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              title: "Revenue Impact",
              body: "The booking completion lift translated to an estimated $2.1M additional annual GMV for UTravel&rsquo;s Sri Lanka agency network, with scaling projections for 3 new markets in H2 2024.",
            },
            {
              icon: CheckCircle,
              title: "Design System Adopted",
              body: "The 48-component Figma library was handed off to the engineering team and adopted fully within 3 sprints. New features are now built from existing components without designer involvement.",
            },
            {
              icon: Clock,
              title: "Faster Iteration",
              body: "Design-to-prototype turnaround dropped from 4 days to under 6 hours for standard feature additions, enabling the product team to run 3× more A/B tests per quarter.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4">
              <div className="w-10 h-10 bg-[#d63029]/10 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                <Icon size={18} className="text-[#d63029]" />
              </div>
              <div>
                <h3 className="font-['Satoshi'] text-lg font-semibold text-[#1a1612] mb-2">{title}</h3>
                <p
                  className="text-[#7a7470] text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── REFLECTION ── */}
      <div className="bg-[#1a1612] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28">
          <SectionLabel>08 — Reflection</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-20 items-start mt-4">
            <div>
              <SectionTitle light>What I&rsquo;d do differently</SectionTitle>
              <div className="w-12 h-[2px] mt-6 mb-8 bg-[#b03133]" />
              <div className="space-y-6">
                {[
                  "Start guerrilla testing earlier — waiting until hi-fi prototypes delayed discovery of structural issues that would have been cheaper to fix in wireframes.",
                  "Advocate harder for a design token handoff meeting. The engineering team initially implemented token values manually, causing drift within 2 weeks.",
                  "Build accessibility audits into each sprint review instead of running them post-launch. Three contrast failures were caught late.",
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="font-mono text-sm mt-0.5 shrink-0 text-[#b03133]">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-white/60 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-widest uppercase text-white/30 mb-6">Key Takeaway</p>
              <blockquote className="font-['Satoshi'] text-2xl md:text-3xl font-medium text-white leading-snug">
                &ldquo;Good travel UX is invisible. When it works, the user is mentally on the plane, not navigating a form.&rdquo;
              </blockquote>
              <p className="text-white/40 text-sm mt-6 leading-relaxed">
                The most impactful design decision in this project was also the least flashy: moving the price to the top-right of flight cards. It cost 20 minutes of discussion and delivered 9 seconds of saved cognitive effort per session, multiplied across 140,000 monthly users.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="font-['Satoshi'] text-lg font-bold text-[#1a1612]">UTravel<span className="text-[#d63029]">.</span></span>
            <p className="font-mono text-[11px] text-[#7a7470] mt-1 tracking-wider">UI/UX Case Study · 2024</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-[#7a7470]">
            {["Overview", "Research", "Design System", "Outcomes", "Reflection"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-[#1a1612] transition-colors">
                {item}
              </a>
            ))}
          </div>
          <p className="font-mono text-[11px] text-[#7a7470] tracking-wider">
            Designed with care.
          </p>
        </div>
      </footer>
    </div>
  );
}

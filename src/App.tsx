import { motion, useMotionValue, useSpring } from "framer-motion"
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleDollarSign,
  Layers3,
  Menu,
  Package,
  Play,
  Receipt,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react"
import { useEffect, useState } from "react"
import SlotText3D from "./components/SlotText3D"
import NavAssistant from "./components/NavAssistant"

const modules = [
  ["01", BarChart3, "Business intelligence", "See revenue, margins, cash flow, and operational health without stitching together spreadsheets."],
  ["02", Package, "Inventory & operations", "Track stock, purchasing, fulfillment, and movement from one connected operational layer."],
  ["03", Receipt, "Finance & billing", "Keep invoices, payments, expenses, and approvals in the same source of truth."],
  ["04", Users, "People & teams", "Give everyone clear ownership, permissions, schedules, and the context they need to act."],
]

const faqs = [
  ["What is Aether?", "Aether is a unified ERP workspace that connects finance, people, operations, and reporting in one interface."],
  ["Can I start with one team?", "Yes. Start with the functions that matter most today, then activate additional modules as the business grows."],
  ["Does Aether replace spreadsheets?", "It can replace recurring operational work that gets trapped in spreadsheets while keeping reporting in one consistent system."],
  ["Can we connect existing tools?", "Aether is designed around integrations, imports, and a shared data layer so teams can keep the systems that still make sense."],
]

function InteractiveField() {
  const x = useMotionValue(50)
  const y = useMotionValue(50)
  const sx = useSpring(x, { stiffness: 80, damping: 24 })
  const sy = useSpring(y, { stiffness: 80, damping: 24 })

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set((event.clientX / window.innerWidth) * 100)
      y.set((event.clientY / window.innerHeight) * 100)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [x, y])

  return (
    <div className="hero-field" aria-hidden="true">
      <motion.div className="hero-glow" style={{ left: sx, top: sy }} />
      <div className="hero-grid" />
      <div className="hero-orbit orbit-a" />
      <div className="hero-orbit orbit-b" />
      <div className="hero-orbit orbit-c" />
    </div>
  )
}

function DashboardMockup() {
  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <div className="mini-brand"><span className="mini-brand-mark" /> Aether</div>
        <div className="mini-nav-group">
          {["Overview", "Revenue", "Projects", "People", "Inventory"].map((item, index) => (
            <div key={item} className={index === 0 ? "mini-nav active" : "mini-nav"}>
              <span className="mini-nav-dot" /> {item}
            </div>
          ))}
        </div>
        <div className="mini-sidebar-footer">
          <div className="mini-avatar">AR</div>
          <div><strong>Alex Rivera</strong><small>Admin</small></div>
        </div>
      </aside>

      <div className="dashboard-main">
        <div className="dash-top">
          <div><span className="eyebrow">Overview</span><h3>Good morning, Alex</h3></div>
          <div className="dash-actions"><span className="status-dot" /> All systems live</div>
        </div>

        <div className="dash-kpis">
          {[
            ["$428,940", "+12.8%", "Revenue"],
            ["$92,410", "+8.2%", "Gross profit"],
            ["186", "+14", "Open orders"],
          ].map(([value, delta, label]) => (
            <div className="dash-kpi" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
              <small>{delta} this month</small>
            </div>
          ))}
        </div>

        <div className="dash-content-grid">
          <div className="dash-chart-card">
            <div className="dash-card-head">
              <div><span>Revenue</span><strong>$428,940</strong></div>
              <span className="chart-filter">Last 30 days</span>
            </div>
            <div className="chart">
              <div className="chart-grid-lines" />
              <svg viewBox="0 0 620 190" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#4d5a34" stopOpacity=".26" />
                    <stop offset="100%" stopColor="#4d5a34" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 155 C55 145 70 128 118 140 S190 105 230 118 S294 88 336 101 S405 48 446 72 S520 42 620 28 L620 190 L0 190 Z" fill="url(#fill)" />
                <path d="M0 155 C55 145 70 128 118 140 S190 105 230 118 S294 88 336 101 S405 48 446 72 S520 42 620 28" fill="none" stroke="#4d5a34" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
            <div className="chart-axis"><span>01</span><span>08</span><span>15</span><span>22</span><span>30</span></div>
          </div>

          <div className="dash-list-card">
            <div className="dash-card-head"><div><span>Recent activity</span><strong>Today</strong></div><span className="activity-count">8</span></div>
            {[
              ["Invoice paid", "Northstar Ltd.", "$18,400"],
              ["Project completed", "Atlas rollout", "100%"],
              ["Purchase order", "Orchid Supply", "$7,240"],
              ["New teammate", "Maya Chen", "Added"],
            ].map(([label, company, value]) => (
              <div className="activity-row" key={label}>
                <span className="activity-icon"><Check size={13} /></span>
                <div><strong>{label}</strong><small>{company}</small></div>
                <span className="activity-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const scrollTo = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top"><span className="brand-mark"><span /></span><span>Aether</span></a>

        <nav className={mobileOpen ? "desktop-nav mobile-visible" : "desktop-nav"}>
          {[
            ["Modules", "modules"],
            ["Workflow", "workflow"],
            ["Pricing", "pricing"],
            ["Contact", "contact"],
          ].map(([label, target]) => <button key={target} onClick={() => scrollTo(target)}>{label}</button>)}
        </nav>

        <div className="header-actions">
          <NavAssistant />
          <button className="header-cta" onClick={() => scrollTo("contact")}>Start free <ArrowRight size={14} /></button>
          <button className="mobile-menu" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle navigation">
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <section className="hero">
        <InteractiveField />
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="hero-kicker"><Sparkles size={14} /> The operating system for modern teams</span>
            <h1>Run the whole business <span className="hero-accent"><SlotText3D text="from one place." /></span></h1>
            <p>Aether brings finance, people, projects, inventory, and reporting together in one calm, connected workspace.</p>
            <div className="hero-actions">
              <button className="button button-dark" onClick={() => scrollTo("contact")}>Start free <ArrowRight size={16} /></button>
              <button className="button button-light" onClick={() => scrollTo("workflow")}><Play size={15} /> See how it works</button>
            </div>
            <div className="hero-proof">
              <span><ShieldCheck size={14} /> SOC 2-ready controls</span>
              <span><Check size={14} /> No credit card required</span>
            </div>
          </div>
        </div>
        <div className="hero-dashboard"><DashboardMockup /></div>
      </section>

      <section className="logo-strip">
        <span>Built for teams at</span>
        {["Northstar", "Arcwell", "Fieldnote", "Vanta", "Monument", "Orbit"].map((name) => <strong key={name}>{name}</strong>)}
      </section>

      <section className="section section-modules" id="modules">
        <div className="section-head">
          <div><div className="eyebrow">Core modules</div><h2>Everything connected.<br />Nothing buried.</h2></div>
          <p>Aether keeps the work visible across the business, so every team can act from the same set of numbers and priorities.</p>
        </div>

        <div className="module-grid">
          {modules.map(([number, Icon, title, text]) => (
            <motion.article whileHover={{ y: -4 }} transition={{ duration: .22 }} className="module-card" key={String(number)}>
              <div className="module-top"><span className="module-number">{number}</span><Icon size={20} strokeWidth={1.7} /></div>
              <h3>{title}</h3><p>{text}</p>
              <span className="module-link">Explore module <ArrowRight size={14} /></span>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section feature-section">
        <div className="feature-copy">
          <div className="eyebrow">One source of truth</div>
          <h2>From first invoice to final report.</h2>
          <p>Your operations are connected by default. Changes made in one workflow appear everywhere they matter, without another import or spreadsheet handoff.</p>
          <div className="feature-points">
            {["Live financial context", "Role-based workflows", "Automated approvals", "Audit-ready history"].map((point) => <div key={point}><Check size={15} />{point}</div>)}
          </div>
        </div>
        <div className="feature-visual">
          <div className="visual-window">
            <div className="window-bar"><span /><span /><span /><small>Finance / Cash flow</small></div>
            <div className="visual-content">
              <div className="visual-sidebar"><span className="visual-active" /><span /><span /><span /><span /></div>
              <div className="visual-main">
                <div className="visual-title"><span>Cash flow</span><strong>$92,410</strong></div>
                <div className="visual-bars">{[44, 62, 52, 74, 68, 88, 79, 94].map((h, i) => <span key={i} style={{ height: String(h) + "%" }} />)}</div>
                <div className="visual-footer"><span>Operating cash</span><strong>+18.4%</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="stats-grid">
          {[["34%", "less admin time"], ["2.8×", "faster reporting"], ["18 days", "saved per quarter"], ["1", "connected workspace"]].map(([value, label]) => (
            <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </section>

      <section className="section workflow-section" id="workflow">
        <div className="section-head centered">
          <div><div className="eyebrow">How it works</div><h2>A cleaner way to<br />operate every day.</h2></div>
          <p>Start with your most important workflow. Connect the next one when you are ready.</p>
        </div>
        <div className="workflow-grid">
          {[
            ["01", "Connect", "Bring your existing people, financials, and operational data into one structured workspace."],
            ["02", "Configure", "Set permissions, approval paths, and team views around how your business already works."],
            ["03", "Operate", "Run the day-to-day from one interface, with every action updating the shared system."],
          ].map(([number, title, text]) => (
            <div className="workflow-card" key={number}><span>{number}</span><Layers3 size={19} /><h3>{title}</h3><p>{text}</p></div>
          ))}
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="section-head centered">
          <div><div className="eyebrow">Pricing</div><h2>Simple plans.<br />Serious operations.</h2></div>
          <p>Start small, then add what the business needs. No surprise platform fees.</p>
        </div>

        <div className="pricing-grid">
          {[
            ["Starter", "$19", "For small teams building their operating foundation.", ["Core dashboard", "Finance", "Projects", "5 integrations"]],
            ["Growth", "$39", "For teams that need deeper workflows and live visibility.", ["Everything in Starter", "Inventory", "Automations", "Advanced reporting"]],
            ["Scale", "Custom", "For complex operations, multiple entities, and dedicated support.", ["Everything in Growth", "Multi-entity", "Custom controls", "Priority support"]],
          ].map(([name, price, text, points], index) => (
            <div className={index === 1 ? "price-card featured" : "price-card"} key={name}>
              {index === 1 && <div className="featured-label">Most popular</div>}
              <span className="price-name">{name}</span>
              <h3>{price}{price !== "Custom" && <span>/seat</span>}</h3>
              <p>{text}</p>
              <button className={index === 1 ? "button button-dark full" : "button button-light full"} onClick={() => scrollTo("contact")}>{price === "Custom" ? "Talk to sales" : "Start free"} <ArrowRight size={15} /></button>
              <ul>{(points as string[]).map((v) => <li key={v}><Check size={14} />{v}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section faq-section">
        <div className="faq-intro"><div className="eyebrow">FAQ</div><h2>Still have<br />questions?</h2><p>Start with the essentials. We can walk your team through the rest.</p></div>
        <div className="faq-list">
          {faqs.map(([q, a], index) => {
            const active = openFaq === index
            return (
              <div className="faq-item" key={q}>
                <button onClick={() => setOpenFaq(active ? -1 : index)}><span>{q}</span><ChevronDown size={17} className={active ? "rotate-180" : ""} /></button>
                <motion.div initial={false} animate={{ height: active ? "auto" : 0, opacity: active ? 1 : 0 }} className="faq-answer-wrap"><p>{a}</p></motion.div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-inner">
          <div className="cta-symbol"><CircleDollarSign size={22} /></div>
          <div className="eyebrow">Get started</div>
          <h2>Give your team<br />a clearer way forward.</h2>
          <p>Bring finance, operations, and people into one calm workspace.</p>
          <button className="button button-light" onClick={() => window.alert("Aether demo signup is ready to connect.")}>Start free <ArrowRight size={15} /></button>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <div><a className="brand footer-brand" href="#top"><span className="brand-mark"><span /></span><span>Aether</span></a><p>One connected workspace for the modern business.</p></div>
          <div className="footer-links">
            <div><span>Product</span><a href="#modules">Modules</a><a href="#workflow">Workflow</a><a href="#pricing">Pricing</a></div>
            <div><span>Company</span><a href="#contact">Contact</a><a href="#top">About</a><a href="#top">Security</a></div>
            <div><span>Social</span><a href="#top">LinkedIn</a><a href="#top">X</a><a href="#top">Instagram</a></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 Aether Systems</span><span>Built for modern operators.</span></div>
      </footer>
    </main>
  )
}

export default App

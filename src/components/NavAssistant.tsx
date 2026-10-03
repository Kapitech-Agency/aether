import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, ChevronDown, Search, X } from "lucide-react"
import { useMemo, useState } from "react"

const items = [
  { label: "Overview", target: "top" },
  { label: "Modules", target: "modules" },
  { label: "How it works", target: "workflow" },
  { label: "Pricing", target: "pricing" },
  { label: "Contact", target: "contact" },
]

export default function NavAssistant() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")

  const filtered = useMemo(
    () => items.filter((item) => item.label.toLowerCase().includes(query.trim().toLowerCase())),
    [query],
  )

  const go = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" })
    setOpen(false)
    setQuery("")
  }

  return (
    <div className="nav-assistant">
      <button className="nav-assistant-trigger" onClick={() => setOpen((v) => !v)}>
        <Search size={15} />
        <span>Explore Aether</span>
        <ChevronDown size={14} className={open ? "rotate-180" : ""} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-assistant-panel"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="nav-assistant-search">
              <Search size={15} />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section"
              />
              <button className="icon-button" onClick={() => setOpen(false)} aria-label="Close">
                <X size={14} />
              </button>
            </div>

            <div className="nav-assistant-list">
              {filtered.map((item) => (
                <button key={item.target} className="nav-assistant-item" onClick={() => go(item.target)}>
                  <span>{item.label}</span>
                  <ArrowUpRight size={14} />
                </button>
              ))}
              {filtered.length === 0 && <div className="nav-assistant-empty">No matching section.</div>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

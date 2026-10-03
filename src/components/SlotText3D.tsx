import { motion } from "framer-motion"
import { useState } from "react"

type Props = {
  text: string
  hoverColor?: string
  className?: string
}

export default function SlotText3D({ text, hoverColor = "#4d5a34", className = "" }: Props) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.span
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: "inline-flex", perspective: 900 }}
      aria-label={text}
    >
      {Array.from(text).map((char, index) => {
        const isSpace = char === " "
        return (
          <span
            key={index}
            aria-hidden="true"
            style={{
              position: "relative",
              display: "inline-block",
              width: isSpace ? "0.3em" : "auto",
              height: "1em",
              transformStyle: "preserve-3d",
            }}
          >
            <motion.span
              animate={hovered ? { y: "-0.98em", rotateX: 90, opacity: 0 } : { y: 0, rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.42, delay: index * 0.018, ease: [0.65, 0, 0.35, 1] }}
              style={{ position: "absolute", inset: 0, transformOrigin: "50% 100%", backfaceVisibility: "hidden" }}
            >
              {isSpace ? "\u00A0" : char}
            </motion.span>
            <motion.span
              animate={hovered ? { y: 0, rotateX: 0, opacity: 1, color: hoverColor } : { y: "0.98em", rotateX: -90, opacity: 0, color: "currentColor" }}
              transition={{ duration: 0.42, delay: index * 0.018, ease: [0.65, 0, 0.35, 1] }}
              style={{ position: "absolute", inset: 0, transformOrigin: "50% 0%", backfaceVisibility: "hidden" }}
            >
              {isSpace ? "\u00A0" : char}
            </motion.span>
          </span>
        )
      })}
    </motion.span>
  )
}

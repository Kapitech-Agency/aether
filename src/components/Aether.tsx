import { forwardRef, type ComponentType } from "react"
import { motion } from "framer-motion"

export function withRotate(Component: ComponentType<any>): ComponentType<any> {
  return forwardRef((props, ref) => (
    <motion.div ref={ref} {...props} animate={{ rotate: 90 }} transition={{ duration: 2 }} />
  ))
}

export function withHover(Component: ComponentType<any>): ComponentType<any> {
  return forwardRef((props, ref) => <motion.div ref={ref} {...props} whileHover={{ scale: 1.04 }} />)
}

export function withRandomColor(Component: ComponentType<any>): ComponentType<any> {
  return forwardRef((props, ref) => {
    const randomColor = () => {
      const colors = ["#101010", "#20261f", "#3a2e22", "#25253c", "#1d3a35"]
      return colors[Math.floor(Math.random() * colors.length)]
    }
    return (
      <motion.div
        ref={ref}
        {...props}
        animate={{ backgroundColor: props.backgroundColor ?? "#101010" }}
        whileTap={{ backgroundColor: randomColor() }}
        transition={{ duration: 0.35 }}
      />
    )
  })
}

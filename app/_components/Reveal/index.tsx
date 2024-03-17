'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  className?: string // Make className optional by adding "?"
  variants?: any // You can replace "any" with a more specific type if needed
}

const defaultVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

const Reveal: React.FC<RevealProps> = ({ children, className, variants }) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    } else {
      mainControls.start('hidden')
    }
  }, [mainControls, isInView])

  return (
    <div className={className} ref={ref} style={{ position: 'relative' }}>
      <motion.div
        variants={variants ? variants : defaultVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal

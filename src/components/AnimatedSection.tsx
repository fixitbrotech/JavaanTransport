import React from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';

// ======= ANIMATION VARIANTS =======

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 }
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 }
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 }
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -5, scale: 0.95 },
  visible: { opacity: 1, rotate: 0, scale: 1 }
};

export const flipIn: Variants = {
  hidden: { opacity: 0, rotateX: 90 },
  visible: { opacity: 1, rotateX: 0 }
};

export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 15 }
  }
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
};

export const zoomRotate: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: 10 },
  visible: { opacity: 1, scale: 1, rotate: 0 }
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(20px)', scale: 1.1 },
  visible: { opacity: 1, filter: 'blur(0px)', scale: 1 }
};

export const skewIn: Variants = {
  hidden: { opacity: 0, skewX: -20, x: -100 },
  visible: { opacity: 1, skewX: 0, x: 0 }
};

export const reveal: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: { clipPath: 'inset(0 0 0 0)' }
};

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } }
};

// ======= STAGGER CONTAINER =======
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

// ======= COMPONENT =======
interface AnimatedSectionProps {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  variants = fadeUp, 
  delay = 0, 
  className = '',
  style
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;

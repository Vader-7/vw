//Blog animations

export const staggerB = {
  hidden: {
    opacity: 0.5,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export const staggerChildrenB = {
  hidden: {
    transform: "scale(0.9)",
    opacity: 0,
  },
  visible: {
    transform: "scale(1)",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      type: "spring",
      stiffness: 20,
    },
  },
}

//Home animations
export const staggerP = {
  hidden: {
    opacity: 0.5,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export const staggerChildrenP = {
  hidden: {
    x: -10,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}

//Layout animations

export const variant = {
  hidden: {
    y: -15,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
}

export const variantx = {
  hidden: {
    y: 15,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
}

//Index animations
export const staggerI = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}

export const staggerChildrenI = {
  hidden: {
    filter: "blur(1px)",
    transform: "scale(0.9)",
    opacity: 0.5,
  },
  visible: {
    filter: "blur(0px)",
    transform: "scale(1)",
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 20,
      damping: 10,
    },
  },
}

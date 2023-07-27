export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const listVariants = {
  hidden: {
    opacity: 0,
    y: 10,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 1,
      delayChildren: 0.1,
      staggerChildren: 0.15,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.8,
      when: "beforeChildren",
      delayChildren: 0.1,
      staggerChildren: 0.15,
    },
    close: {
      opacity: 0,
      x: -20,
    },
  },
};

export const itemVariants = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  }),
  hidden: (i) => ({
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  }),
  close: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export const test = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

export const containerVariants = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    visible: {
        opacity: 1,
        y: 0,
        type: 'spring',
        bounce: 0,
        transition: { 
            duration: .5, 
            ease: 'easeInOut',
            staggerChildren: .1,
            startDelay: .15    
        },        
    },
    exitAnimation: {
        opacity: 0,
        y: -50,
        transition: { 
            duration: .2,
            ease: 'easeOut' }
    },
    exitBeforeEnter: true,

};

export const dropUpVariants = {
    hidden : { 
        opacity: 0,
        y: 25,
    },
    visible: { 
        opacity: 1,
        y: 0,
    },
    transition: {
        duration: 0.2,
    }
};

export const homePageVariants = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    visible: {
        opacity: 1,
        y: 0,
        type: 'spring',
        bounce: 0,
        transition: { 
            duration: .5, 
            ease: 'easeInOut',
            staggerChildren: .1,
            startDelay: .15    
        },        
    },
    exitAnimation: {
        opacity: 0,
        transition: { 
            duration: .5,
            ease: 'easeOut' }
    },
    exitBeforeEnter: true,

};

export const summaryVariants = {
    open: {
        clipPath: "inset(0% 0% 0% 0% round 10px)",
        transition: {
          type: "spring",
          bounce: 0,
          duration: 0.7,
          delayChildren: 0.3,
          staggerChildren: 0.05
        }
      },
      closed: {
        clipPath: "inset(10% 50% 90% 50% round 10px)",
        transition: {
          type: "spring",
          bounce: 0,
          duration: 0.3
        }
      }
}
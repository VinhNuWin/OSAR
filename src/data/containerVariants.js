export const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
export const item = {
    hidden: { opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }


export const listVariants = {
    hidden: {
        opacity: 0,  
        y: 10,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 1,
            delayChildren: .1,
            staggerChildren: 0.15
        }
    },
    visible:{
        opacity: 1, 
        y: 0,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.8,
            when: "beforeChildren",
            delayChildren: .1,
            staggerChildren: 0.15
        },
        close: {
          opacity: 0,
          x: -20,
    
      }
    },
}

export const itemVariants = {
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24, delay: i * 0.1 }
    }),
    hidden: i => ({ 
        opacity: 0, 
        y: 20, 
        transition: { duration: 0.2, delay: i * 0.1 }
    }),
    close: i => ({
        y: -20,
        opacity: 0,
        transition: { duration: 0.2, ease: "easeInOut", delay: i * 0.1 },
      }),
  };

  export const test = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 },

}

  export const summaryVariants = {
    hidden: {
        opacity: 0,
        y: 10,
        // clipPath: "inset(0% 0% 0% 0% round 10px)",
        // transition: {
        //   type: "spring",
        //   bounce: 0,
        //   duration: 0.7,
        //   delayChildren: 0.3,
        //   staggerChildren: 0.05
        // }
      },
      visible: {
        opacity: 1,
        y: 0,
        // type: 'spring',
        // bounce: 0,
        // transition: { 
        //     duration: .5, 
        //     ease: 'easeInOut',
        //     staggerChildren: .1,
        //     startDelay: .15    
        },     
        // clipPath: "inset(10% 50% 90% 50% round 10px)",
        // transition: {
        //   type: "spring",
        //   bounce: 0,
        //   duration: 0.3
    //     }
}
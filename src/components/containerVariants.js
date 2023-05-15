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
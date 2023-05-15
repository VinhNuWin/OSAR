export const containerVariants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        duration: .1,
        transition: { ease: 'easeInOut' }
    },
    exitAnimation: {
        opacity: 0,
        y: -50,
        transition: { ease: 'easeInOut' }
    }
}
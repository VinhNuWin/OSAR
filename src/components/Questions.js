import { useSelector } from  'react-redux';
import { motion, AnimatePresence } from 'framer-motion';


function Questions() {
    // const dispatch = useDispatch();

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0.5, type: 'spring', stiffness: 2 }
        },
        exit: {
            x: '-100vw',
            transition: { ease: 'easeInOut' }
        }
    };

    const { question, index } = useSelector((state) => {
        return {
            index: state.index.index,
            question: state.form.question,
        }
    });


    return (
        <AnimatePresence>
            <motion.div 
                className=''
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={index}
                exit="exit"
                >
                <h1 className='text-5xl'>{question[index]}</h1>
            </motion.div>
        </AnimatePresence>

    )
}

export default Questions;


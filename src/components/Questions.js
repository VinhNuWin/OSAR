import { useSelector } from  'react-redux';
import AnswerCard from './AnswerCard';
import { motion, AnimatePresence } from 'framer-motion';
import TestCard from './TestCard';


function Questions() {
    // const dispatch = useDispatch();

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0.1, type: 'spring', stiffness: 5 }
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
            className='container-question'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={index}
                exit="exit"
                >
                    <h1 className='text-4xl'>{question[index]}</h1>
            </motion.div>
            {/* <TestCard/> */}
        </AnimatePresence>

    )
}

export default Questions;


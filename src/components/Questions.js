import { useSelector } from  'react-redux';
import AnswerCard from './AnswerCard';
import { motion, AnimatePresence } from 'framer-motion';


function Questions() {
    // const dispatch = useDispatch();

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 1.5, duration: 3.5 }
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
        <motion.div className='text-5xl py-48 justify-center text-center h-96 border border-green-400'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        transition= {{ delay: 1.5, type: 'spring'}}
        key={index}
        >
            <h1 className=''>{question[index]}</h1>
        </motion.div>
        </AnimatePresence>
    )
}

export default Questions;


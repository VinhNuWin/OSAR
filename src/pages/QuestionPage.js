import '../styles.css';
import Questions from '../components/Questions';
import AnswerCard from '../components/AnswerCard';
import ButtonCard from '../components/ButtonCard';
import MultiSelect from '../components/MultiSelect';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence, isValidMotionProp, stagger } from 'framer-motion';
import { Button, Container, chakra, shouldForwardProp, Box} from '@chakra-ui/react';
import HomePage from '../components/HomePage';
import { useSelector } from 'react-redux';
import { containerVariants, dropUpVariants, homePageVariants } from '../components/containerVariants';


const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

function QuestionPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const { index, question} = useSelector((state) => {
        return {
            question: state.form.question,
            index: state.index.index,
        }
    });

    const questionPageIndex = index;

    return (
          <div className='Registry'>
                    {questionPageIndex === 0 ? ( 
                        <motion.div 
                        key={questionPageIndex}
                        variants={homePageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exitAnimation"
                        >
                            <HomePage />
                        </motion.div>
                    ) : questionPageIndex >= 0 ?
                    <motion.div 
                        key={questionPageIndex}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exitAnimation"
                        className="wrapper "
                        >
                            <Questions  />
                            <AnswerCard variants={dropUpVariants} />
                            <ButtonCard />
                    </motion.div>
                    : questionPageIndex === 22 (
                        <div>
                        <div>
                            <h2>Thank you for your submission, Your registry has been filed and a timestamped copy will be sent to the the email provided.</h2>
                        </div>  
                        <Button>Finish</Button>
                        </div>
                        )
                    }
            </div>
    )
};

export default QuestionPage;



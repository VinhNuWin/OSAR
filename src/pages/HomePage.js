import '../styles.css';
import Registry from './Registry';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence, isValidMotionProp, stagger } from 'framer-motion';
import { Button, Container, chakra, shouldForwardProp, Box} from '@chakra-ui/react';
import SignIn from './SignIn';
import { useSelector } from 'react-redux';
import { containerVariants, dropUpVariants, homePageVariants } from '../components/containerVariants';


const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

function HomePage() {
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
                            <SignIn />
                        </motion.div>
                    ) : questionPageIndex >= 1 ? (
                    <motion.div 
                        key={questionPageIndex}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exitAnimation"
                        className="wrapper"
                        >
                            <Registry />
                    </motion.div>
                    ) : questionPageIndex === 22 (
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

export default HomePage;



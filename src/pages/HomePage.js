import Registry from './Registry';
import RegistryComplete from './RegistryComplete';
import { motion } from 'framer-motion';
import { Button, Text, Flex } from '@chakra-ui/react';
import SignIn from './SignIn';
import { useSelector } from 'react-redux';
import { containerVariants, homePageVariants } from '../data/containerVariants';
import MissionStatement from '../views/modals/MissionStatement';

// const ChakraBox = chakra(motion.div, {
//     shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
//   });

function HomePage() {
    const { index } = useSelector((state) => {
        return {
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
                    ) : questionPageIndex === 17 ? ( 
                        <motion.div 
                        key={questionPageIndex}
                        variants={homePageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exitAnimation"
                        >
                            <RegistryComplete />
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
                            <MissionStatement />
                            <Registry />
                    </motion.div>
                    ) : null (
                        )
                    }
   
            </div>
    )
};

export default HomePage;



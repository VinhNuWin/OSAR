import Registry from './Registry';
import RegistryComplete from './RegistryComplete';
import { motion } from 'framer-motion';
import { Button, Text, Flex, useMediaQuery } from '@chakra-ui/react';
import SignIn from './SignIn';
import MobileSignIn from '../views/MobileSignIn';
import { useSelector } from 'react-redux';
import { containerVariants, homePageVariants } from '../data/containerVariants';
import MissionStatement from '../views/modals/MissionStatement';
import MobileView from '../views/MobileView';


// const ChakraBox = chakra(motion.div, {
//     shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
//   });

function HomePage() {

    const [ isLargerThan568, isLargerThan320 ] = useMediaQuery([
        '(min-width: 568px)',
        '(min-width: 320px)',
    ]);

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
                                { isLargerThan568 ? <SignIn /> : <MobileSignIn /> }
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
                            { isLargerThan568 ? <Registry /> : <MobileView /> }
                    </motion.div>
                    ) : null (
                        )
                    }
   
            </div>
    )
};

export default HomePage;



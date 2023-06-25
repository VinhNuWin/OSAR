import Registry from './Registry';
import RegistryComplete from './RegistryComplete';
import { motion } from 'framer-motion';
import { Button, Text, Flex, useMediaQuery } from '@chakra-ui/react';
import SignIn from './SignIn';
import MobileSignIn from '../MobileSignIn';
import { useSelector } from 'react-redux';
import { containerVariants, homePageVariants } from '../../data/containerVariants';
import MissionStatement from '../../components/modals/MissionStatement';
import MobileView from '../MobileView';
import SelectYourRegistry from '../registries/SelectYourRegistry';


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
        <div>
        <Flex className='header'>
        <MissionStatement />
        </Flex>
          <div className='Homepage'>
                    {questionPageIndex === 0 ? ( 
                        <center>
                        <motion.div 
                        key={questionPageIndex}
                        variants={homePageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exitAnimation"
                        >
                                { isLargerThan568 ? <SignIn /> : <MobileSignIn /> }
                        </motion.div>
                        </center>
                    ) : questionPageIndex === 18 ? ( 
                        <motion.div 
                        key={questionPageIndex}
                        variants={homePageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exitAnimation"
                        >
                            <RegistryComplete />
                        </motion.div>
                    ) : questionPageIndex === 1 ? (
                        <SelectYourRegistry />
                    ) : questionPageIndex >= 2 ? (
                        <div>
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exitAnimation"
                        className="wrapper-block"
                        >
                            { isLargerThan568 ? <Registry /> : <MobileView /> }
                    </motion.div>
                    </div>
                    ) : null (
                        <RegistryComplete />
                        )
                    }
   
            </div>
            </div>
    )
};

export default HomePage;



import { Flex, chakra, shouldForwardProp } from '@chakra-ui/react';
import NextButton from '../../components/buttons/NextButton';
import BackButton from '../../components/buttons/BackButton';
import { useSelector } from 'react-redux';
import GeneralQuestions from '../registryQuestions/GeneralQuestions';
import GeneralAnswers from '../registryAnswers/GeneralAnswers';
import FinalSubmit from '../../components/buttons/FinalSubmit';
import MissionStatement from '../../components/modals/MissionStatement';
import employee from '../../images/employee.png';
import { listVariants, itemVariants } from '../../data/containerVariants';
import { motion, isValidMotionProp, AnimatePresence } from 'framer-motion'; 
import EmailSubmit from '../../components/buttons/emailSubmit';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });


export default function GeneralRegistry() {
    const { registryType, index, isVisible } = useSelector((state) => {
        return {
            registryType: state.index.registry.registryType,
            index: state.index.index,
        }
    })

    console.log(registryType);


    return (
        <AnimatePresence>
        <Flex>
        <ChakraBox>
            <ChakraBox  >

        { index <= 12 ? (

        <Flex >
            <Flex className='panel-one' direction='column'>
                <Flex className='header'/>

                        <ChakraBox className='panel-one-questions'  >
                            <GeneralQuestions />
                        </ChakraBox >                        
                    <ChakraBox className='panel-one-answers'>
                    
                            <ChakraBox >
                                <GeneralAnswers />
                            </ChakraBox>
                        </ChakraBox>
                    
                    <Flex className='panel-one-buttons'  >
                        {index < 12 ? <BackButton /> : null }
                        {index===8 ? <FinalSubmit /> : index === 9 ? <EmailSubmit /> : index < 14 ? <NextButton /> : null }       
                    </Flex>
                </Flex>
            </Flex>

        ) : null (
        )} 

            </ChakraBox>
            </ChakraBox>

<Flex className='panel-two'>
    <img src={employee} />
    </Flex>


        </Flex>
        </AnimatePresence>
    )
}


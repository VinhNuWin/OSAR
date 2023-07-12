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
import { motion, isValidMotionProp } from 'framer-motion'; 

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });


export default function GeneralRegistry() {
    const { registryType, index } = useSelector((state) => {
        return {
            registryType: state.index.registry.registryType,
            index: state.index.index,
        }
    })

    console.log(registryType);


    return (
<Flex>

        { index <= 10 ? (
        <Flex>
            <Flex className='panel-one' direction='column'>
                <Flex className='header'/>
                    <Flex className='panel-one-questions' >
                        <GeneralQuestions />
                    </Flex>
                    <Flex className='panel-one-answers'>
                    <ChakraBox 
                        initial='hidden'
                        animate='visible'
                        variants={listVariants}>
                            <ChakraBox variants={itemVariants}>
                                <GeneralAnswers />
                            </ChakraBox>
                        </ChakraBox>
                    </Flex>
                    <Flex className='panel-one-buttons'>
                        {index < 9 ? <BackButton /> : null }
                        {index===8 ? <FinalSubmit /> : index < 9 ? <NextButton /> : null}       
                    </Flex>
                </Flex>
            </Flex>
        ) : null (
        )} 


<Flex className='panel-two'>
    <img src={employee} />
</Flex>
        </Flex>
    )
}


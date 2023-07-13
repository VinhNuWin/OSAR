import { Flex, Text, chakra, shouldForwardProp } from '@chakra-ui/react';
import NextButton from '../../components/buttons/NextButton';
import BackButton from '../../components/buttons/BackButton';
import { useSelector } from 'react-redux';
import SpouseQuestions from '../registryQuestions/SpouseQuestions';
import SpouseAnswers from '../registryAnswers/SpouseAnswers';
import RegistryComplete from '../pages/RegistryComplete';
import FinalSubmit from '../../components/buttons/FinalSubmit';
import spouse from '../../images/elderly.png';
import { motion, isValidMotionProp } from 'framer-motion';
import { listVariants, itemVariants } from '../../data/containerVariants';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });



export default function SpouseRegistry() {
    const { registryType, index } = useSelector((state) => {
        return {
            registryType: state.index.registry.registryType,
            index: state.index.index,
        }
    })

    console.log(registryType);

    return (
        <ChakraBox 
        initial='hidden'
        animate='visible'
        variants={listVariants}>
            <ChakraBox variants={itemVariants} key={index}>
        { index <= 14 ? (
            <Flex>
                <Flex className='panel-one' direction='column'>
                    <Flex className='header'/>
                <Flex className='panel-one-questions' >
                    <SpouseQuestions />
                </Flex>
                <Flex className='panel-one-answers'>
                    <SpouseAnswers />
                </Flex>
                    <Flex className='panel-one-buttons'>
                        {index < 14 ? <BackButton /> : null }    
                        {index===13 ? <FinalSubmit /> : index < 14 ? <NextButton /> : null }       
                    </Flex>
                </Flex>
            </Flex>
        ) : null (
            <RegistryComplete />
        )} 


<Flex className='panel-two'>
    <img src={spouse} />
</Flex>
        </ChakraBox>
        </ChakraBox>
    )
}


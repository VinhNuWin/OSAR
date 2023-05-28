import { useSelector } from  'react-redux';
import { AnimatePresence } from 'framer-motion';
import { dropUpVariants } from '../data/containerVariants.js';
import { Flex, Text } from '@chakra-ui/react';

function Questions() {

    const { question, index } = useSelector((state) => {
        return {
            index: state.index.index,
            question: state.form.question,
        }
    });

const questionIndex = index;

    return (
        <AnimatePresence mode='wait' >
            <Flex className='questions'>     
            <Text variants={dropUpVariants} > 
                {question[questionIndex]}</Text>
            </Flex>
        </AnimatePresence>
    )
}


export default Questions;


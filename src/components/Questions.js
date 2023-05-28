import { useSelector } from  'react-redux';
import { useState } from 'react';
import { AnimatePresence, isValidMotionProp } from 'framer-motion';
import { ChakraBox } from './animation';
import { dropUpVariants } from './containerVariants';
import { Flex, Text } from '@chakra-ui/react';

function Questions() {
    
    // const containerVariants = {
    //     hidden: {
    //         opacity: 0,
    //         y: 50
    //     },
    //     visible: {
    //         opacity: 1,
    //         y: 0,
    //         duration: .1,
    //         transition: { ease: 'easeInOut' }
    //     },
    //     exitAnimation: {
    //         opacity: 0,
    //         y: -50,
    //         transition: { ease: 'easeInOut' }
    //     }
    //     };

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
            <Text fontSize='12px' variants={dropUpVariants} > 
                {question[questionIndex]}</Text>
            </Flex>
        </AnimatePresence>
    )
}


export default Questions;


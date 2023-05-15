import { useSelector } from  'react-redux';
import { useState } from 'react';
import { motion, AnimatePresence, isValidMotionProp } from 'framer-motion';
import { ChakraBox } from './animation';
import { dropUpVariants } from './containerVariants';

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
            <div>     
            <h1 className='questions text-5xl' variants={dropUpVariants} > 
                {question[questionIndex]}</h1>
            </div>
        </AnimatePresence>
    )
}


export default Questions;


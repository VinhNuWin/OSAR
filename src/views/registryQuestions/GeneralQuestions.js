import { Flex, Text } from '@chakra-ui/react';
import { useSelector } from  'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { itemVariants } from '../../data/containerVariants';


export default function GeneralQuestions () {
    const { generalForm, index } = useSelector((state) => {
        return {
            index: state.index.index,
            generalForm: state.form.generalForm,
        }
    });

    const generalIndex = index;
    const questions = generalForm[generalIndex];

    return (

        <Flex direction='column'>
        <Flex wrap='nowrap' direction='column' className='questions'>
            <AnimatePresence mode='wait'>
                <motion.h1 
                    className='' 
                    key={generalIndex}
                    variants={itemVariants}
                    initial='hidden'
                    animate='visible'
                    exit='close'
                    >{questions}
                </motion.h1>
            </AnimatePresence>
        </Flex>
        </Flex>

    )
}
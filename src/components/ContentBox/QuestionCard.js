import { Flex, Box, Text } from '@chakra-ui/react';
import { useSelector } from  'react-redux';
import Questions from '../Questions';


export default function QuestionCard () {

    const { question, index } = useSelector((state) => {
        return {
            index: state.index.index,
            question: state.form.question,
        }
    });

    const questionIndex = index;
    const questions = question[questionIndex];

    return (
        <Flex direction='column' className='ml-10 mt-10'>
            <Text fontSize='20px' color='white'>Questions</Text>
            <Text fontSize='50px' color='white'>{questions}</Text>
        </Flex>
    )
}
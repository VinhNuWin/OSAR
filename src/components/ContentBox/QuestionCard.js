import { Flex, Box, Text } from '@chakra-ui/react';
import { useSelector } from  'react-redux';


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
        <Flex direction='column' className='questions'>
            <Text fontSize='20px' color='rgb(73, 79, 86)'>Questions</Text>
            <Text fontSize='32px' color='rgb(73, 79, 86)'>{questions}</Text>
        </Flex>
    )
}
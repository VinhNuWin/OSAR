import { Flex, Button, Box, Text, IconButton } from '@chakra-ui/react';
import { useSelector } from  'react-redux';
import { RepeatIcon } from '@chakra-ui/icons';
import DidYouKnow from '../DidYouKnow';
import { useEffect, useState } from 'react';

export default function QuestionCard () {
    const [ fact, setFact ] = useState(true);
    const { question, index } = useSelector((state) => {
        return {
            index: state.index.index,
            question: state.form.question,
        }
    });

    const questionIndex = index;
    const questions = question[questionIndex];

    useEffect(() => {
        {}
    }, [fact])

    return (
        <Flex direction='column'>
        <Flex direction='' className='questions'>
            <Text fontSize='2xl' color='rgb(73, 79, 86)'>Questions</Text>
            <Text fontSize='4xl' color='rgb(73, 79, 86)'>{questions}</Text>
        </Flex>

        <Flex className='did-you-know'>
            <Flex>
            <Text fontSize='md'>Did you know.. </Text>
            <IconButton 
            aria-label='Report Summary' 
            size='sm'
            variant=''
            colorScheme='rgb(73, 79, 86)'
            onClick={()=>setFact(!fact)}
            icon={<RepeatIcon />}></IconButton>
            </Flex>
            <Flex>
                <DidYouKnow />
            </Flex>
        </Flex>
        </Flex>
    )
}
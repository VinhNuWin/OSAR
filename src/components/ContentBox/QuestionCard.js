import { Flex, Text, IconButton } from '@chakra-ui/react';
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

    return (
        <Flex direction='column'>
        <Flex wrap='nowrap' direction='column' className='questions'>
            <Text fontSize={{ base: '14px', md: '20px', lg: '26px' }} color='rgb(73, 79, 86)'>Questions</Text>
            <Text className='div-c' fontSize={{ base: '20px', md: '24px', lg: '32px' }} color='rgb(73, 79, 86)'>{questions}</Text>
        </Flex>
        <Flex>
            <DidYouKnow />
        </Flex>
        {/* <Flex className='did-you-know'>
            <Flex>
            <Text fontSize={{ base: '10px', md: '12px', lg: '14px' }}>Did you know.. </Text>
            <IconButton 
            marginLeft='2'
            aria-label='Report Summary' 
            size='xsm'
            variant=''
            colorScheme='rgb(73, 79, 86)'
            onClick={()=>setFact(!fact)}
            icon={<RepeatIcon />}></IconButton>
            </Flex>
            <Flex>
                <DidYouKnow />
            </Flex>
        </Flex> */}
        </Flex>
    )
}
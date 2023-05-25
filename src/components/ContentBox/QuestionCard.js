import { Flex, Box, Text } from '@chakra-ui/react';
import ContentBox from './ContentBox';
import Questions from '../Questions';


export default function QuestionCard () {

    return (
        <Flex 
        className='border2'
        width='100%'
        >
            <Text fontSize='50px' color='white'>Questions</Text>
        </Flex>
    )
}
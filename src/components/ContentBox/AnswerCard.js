import { Flex, Box, Text } from '@chakra-ui/react';
import ContentBox from './ContentBox';
import Questions from '../Questions';



export default function AnswerCard () {

    return (
        <Flex
        padding="1rem"
        borderRadius="15px"
        width="100%"
        className='border'
        >
            <Text fontSize='50px' color='white'>AnswerInputs</Text>
        </Flex>
    )
}
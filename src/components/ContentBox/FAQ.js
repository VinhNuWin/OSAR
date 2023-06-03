import { Flex, Box, Text, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function FAQ () {
    const { index } = useSelector((state) => {
        return {
            index: state.index.index
        }
    })

    const progressIndex= index * 6.25;

    return (
        <Flex justify='' align='center'>
                      <center>
            <Text fontSize='20px' color='white'>FAQ</Text>

  
        <CircularProgress value={progressIndex} color='orange.400' size='100px'>
        <CircularProgressLabel>{progressIndex}%</CircularProgressLabel>
        </CircularProgress>
        </center>
        </Flex>
    )
}
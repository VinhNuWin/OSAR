import {     
    Text,
    CircularProgress, 
    CircularProgressLabel,
    Center,
    Flex
} from '@chakra-ui/react';
import {
    useSelector
} from 'react-redux';

export default function RegistryProgressCircle() {

    const { index } = useSelector((state) => {
        return {
            email: state.index.registry.email,
            _id: state.index.registry._id,
            index: state.index.index
        }
      });

      const progressIndex = index * 6.25;
      
    return (
        <Flex className='progress-circle'>
        <center>
            <Flex>
                <Text fontSize='20px' color='white'>Progress</Text>
            </Flex>
            <CircularProgress value={progressIndex} color='orange.400' size='7vw' >
                <CircularProgressLabel>{progressIndex}%</CircularProgressLabel>
            </CircularProgress>
        </center>
        </Flex>
    )
}
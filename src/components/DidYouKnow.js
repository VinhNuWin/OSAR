import { Flex, Text, IconButton } from '@chakra-ui/react';
import { 
    assaultFacts,
    locationFacts,
    whyNoReportFacts 
} from "../data/assaultFacts";
import { useSelector } from 'react-redux';
import { RepeatIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

const randomFact = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length)

    const randomItem = arr[randomIndex];

    return randomItem;
    
}; 


export default function DidYouKnow() {
    const [ fact, setFact ] = useState(true);
    const { index } = useSelector((state) => {
        return {
            index: state.index.index
        }
    });

    useEffect(() => {
        {}
    }, [fact])

    return (
        <Flex className='did-you-know-container'>
        <Flex className='div-a'>
        { index === 2 ? (
            <Flex>
                <Text fontSize={{ base: '16px', md: '18px', lg: '20px' }} >{randomFact(locationFacts)}</Text>
            </Flex>
        ) : index === 16 ? (
            <Flex>
                <Text fontSize={{ base: '16px', md: '18px', lg: '20px' }} >{randomFact(whyNoReportFacts)}</Text>
            </Flex>
        ) : index >= 1 ? (
            <Flex>
                <Text fontSize={{ base: '16px', md: '18px', lg: '20px' }} >{randomFact(assaultFacts)}</Text>
            </Flex>
        ) : index >= 12 ? (
            <Flex>
                <Text fontSize={{ base: '16px', md: '18px', lg: '20px' }} >{randomFact(assaultFacts)}</Text>
            </Flex>
        ) : index === null (
            <Flex>
            </Flex>
        )
        }
        </Flex>
        <IconButton 
        marginLeft='2'
        aria-label='Report Summary' 
        size='xsm'
        variant=''
        colorScheme='rgb(73, 79, 86)'
        onClick={()=>setFact(!fact)}
        icon={<RepeatIcon />}></IconButton>
        </Flex>
    )
}
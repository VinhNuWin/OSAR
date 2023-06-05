import { Flex, Text } from '@chakra-ui/react';
import { 
    assaultFacts,
    locationFacts,
    whyNoReportFacts 
} from "../data/assaultFacts";
import { useSelector, useEffect } from 'react-redux';

const randomFact = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length)

    const randomItem = arr[randomIndex];

    return randomItem;
}; 

export default function DidYouKnow() {
    const { index } = useSelector((state) => {
        return {
            index: state.index.index
        }
    });

    return (
        <Flex>
        { index === 2 ? (
            <Flex>
                <Text>{randomFact(locationFacts)}</Text>
            </Flex>
        ) : index === 16 ? (
            <Flex>
                <Text>{randomFact(whyNoReportFacts)}</Text>
            </Flex>
        ) : index >= 1 ? (
            <Flex>
                <Text>{randomFact(assaultFacts)}</Text>
            </Flex>
        ) : index >= 12 ? (
            <Flex>
                <Text>{randomFact(assaultFacts)}</Text>
            </Flex>
        ) : index === null (
            <Flex>
            </Flex>
        )
        }

        </Flex>
    )
}
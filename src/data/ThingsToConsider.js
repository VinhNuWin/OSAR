import { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';


export default function ThingsToConsider (props) {
    const { index } = useSelector((state) => {
        return {
            index: state.index.index
        }
    });

    // const considerThis = props.slice({index});

// console.log(considerThis);

    return (
        <Flex>
                <Text key={1} >{props.question}</Text>
        </Flex>
    )

}

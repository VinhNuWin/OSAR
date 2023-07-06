import { Flex, Text } from '@chakra-ui/react';
import { useSelector } from  'react-redux';


export default function AssaultQuestions () {
    const { assaultForm, index } = useSelector((state) => {
        return {
            index: state.index.index,
            assaultForm: state.form.assaultForm,
        }
    });

    const assaultIndex = index - 1;
    const questions = assaultForm[assaultIndex];

    console.log(questions);

    return (
        <Flex direction='column'>
        <Flex wrap='nowrap' direction='column' className='questions'>
            <Text className='div-c' fontSize={{ base: '16px', md: '20px', lg: '26px' }} color='rgb(73, 79, 86)'>{questions}</Text>
        </Flex>
        </Flex>
    )
}
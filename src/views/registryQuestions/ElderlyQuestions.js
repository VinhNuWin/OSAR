import { Flex, Text } from '@chakra-ui/react';
import { useSelector } from  'react-redux';


export default function ElderlyQuestions () {
    const { elderlyForm, index } = useSelector((state) => {
        return {
            index: state.index.index,
            elderlyForm: state.form.elderlyForm,
        }
    });

    const elderlyIndex = index;
    const questions = elderlyForm[elderlyIndex];

    console.log(questions);
    console.log();

    return (
        <Flex direction='column'>
        <Flex wrap='nowrap' direction='column' className='questions'>
            <Text className='div-c' fontSize={{ base: '30px', md: '24px', lg: '32px' }} color='rgb(73, 79, 86)'>{questions}</Text>
        </Flex>
        </Flex>
    )
}
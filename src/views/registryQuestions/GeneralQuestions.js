import { Flex, Text } from '@chakra-ui/react';
import { useSelector } from  'react-redux';


export default function GeneralQuestions () {
    const { generalForm, index } = useSelector((state) => {
        return {
            index: state.index.index,
            generalForm: state.form.generalForm,
        }
    });

    const generalIndex = index - 1;
    const questions = generalForm[generalIndex];

    console.log(questions);
    console.log(generalForm);

    return (
        <Flex direction='column'>
        <Flex wrap='nowrap' direction='column' className='questions'>
            <Text className='' fontSize={{ base: '20px', md: '20px', lg: '26px' }} color='rgb(73, 79, 86)'>{questions}</Text>
        </Flex>
        </Flex>
    )
}
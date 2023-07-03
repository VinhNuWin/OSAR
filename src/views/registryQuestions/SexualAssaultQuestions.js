import { Flex, Text } from '@chakra-ui/react';
import { useSelector } from  'react-redux';


export default function SexualAssaultQuestions () {
    const { sexualAssaultForm, index } = useSelector((state) => {
        return {
            index: state.index.index,
            sexualAssaultForm: state.form.sexualAssaultForm,
        }
    });

    const sexualAssaultIndex = index - 1;
    const questions = sexualAssaultForm[sexualAssaultIndex];

    console.log(questions);

    return (
        <Flex direction='column'>
        <Flex wrap='nowrap' direction='column' className='questions'>
            <Text className='div-c' fontSize={{ base: '16px', md: '20px', lg: '26px' }} color='rgb(73, 79, 86)'>{questions}</Text>
        </Flex>
        </Flex>
    )
}
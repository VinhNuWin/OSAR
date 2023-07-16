import { Flex, Text } from '@chakra-ui/react';
import { useSelector } from  'react-redux';


export default function GeneralQuestions () {
    const { generalForm, index } = useSelector((state) => {
        return {
            index: state.index.index,
            generalForm: state.form.generalForm,
        }
    });

    const generalIndex = index;
    const questions = generalForm[generalIndex];

    return (
        <Flex direction='column'>
        <Flex wrap='nowrap' direction='column' className='questions'>
            <h1 className='' >{questions}</h1>
        </Flex>
        </Flex>
    )
}
import { Flex, Text } from '@chakra-ui/react';
import { useSelector } from  'react-redux';


export default function EmployeeQuestions () {
    const { employeeForm, index } = useSelector((state) => {
        return {
            index: state.index.index,
            employeeForm: state.form.employeeForm,
        }
    });

    const employeeIndex = index - 1;
    const questions = employeeForm[employeeIndex];


    return (
        <Flex wrap='nowrap' direction='column' >
            <Text className='div-c' fontSize={{ base: '16px', md: '20px', lg: '26px' }} color='rgb(73, 79, 86)'>{questions}</Text>
        </Flex>
    )
}
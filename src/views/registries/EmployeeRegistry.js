import { Flex } from '@chakra-ui/react';
import NextButton from '../../components/buttons/NextButton';
import BackButton from '../../components/buttons/BackButton';
import { useSelector } from 'react-redux';
import EmployeeQuestions from '../registryQuestions/EmployeeQuestions';
import EmployeeAnswers from '../registryAnswers/EmployeeAnswers';
import RegistryComplete from '../pages/RegistryComplete';
import FinalSubmit from '../../components/buttons/FinalSubmit';
import MissionStatement from '../../components/modals/MissionStatement';
import employee from '../../images/employee2.png';

export default function EmployeeRegistry() {
    const { registryType, index } = useSelector((state) => {
        return {
            registryType: state.index.registry.registryType,
            index: state.index.index,
        }
    })

    console.log(registryType);

    return (
<Flex>

        { index <= 13 ? (
            <Flex>
            <Flex className='panel-one' direction='column'>
                <MissionStatement />
                    <Flex className='panel-one-questions' >
                        <EmployeeQuestions />
                    </Flex>
                    <Flex className='panel-one-answers'>
                        <EmployeeAnswers />
                    </Flex>
                    <Flex className='panel-one-buttons'>
                        <BackButton />
                        {index===13 ? <FinalSubmit /> : <NextButton />}       
                    </Flex>
                </Flex>
            </Flex>
        ) : null (
            <RegistryComplete />
        )} 


<Flex className='panel-two' >
            <img src={employee} />
</Flex>
        </Flex>
    )
}


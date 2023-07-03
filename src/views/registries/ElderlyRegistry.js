import { Flex } from '@chakra-ui/react';
import NextButton from '../../components/buttons/NextButton';
import BackButton from '../../components/buttons/BackButton';
import { useSelector } from 'react-redux';
import ElderlyQuestions from '../registryQuestions/ElderlyQuestions';
import ElderlyAnswers from '../registryAnswers/ElderlyAnswers';
import RegistryComplete from '../pages/RegistryComplete';
import FinalSubmit from '../../components/buttons/FinalSubmit';
import MissionStatement from '../../components/modals/MissionStatement';

export default function ElderlyRegistry() {
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
                    <ElderlyQuestions />
                </Flex>
                <Flex className='panel-one-answers'>
                    <ElderlyAnswers />
                </Flex>
                <Flex className='panel-one-buttons'>
                <BackButton />
                {index===13 ? <FinalSubmit /> : <NextButton />}       
                </Flex>
</Flex>

            </Flex>
        ) : index >= 15 ? (
                <RegistryComplete />
        ) : null (
            <RegistryComplete />
        )} 


<Flex className='panel-two'>

</Flex>
        </Flex>
    )
}


import { Flex } from '@chakra-ui/react';
import NextButton from '../../components/buttons/NextButton';
import BackButton from '../../components/buttons/BackButton';
import { useSelector } from 'react-redux';
import SexualAssaultQuestions from '../registryQuestions/SexualAssaultQuestions';
import SexualAssaultAnswers from '../registryAnswers/SexualAssaultAnswers';
import RegistryComplete from '../pages/RegistryComplete';
import FinalSubmit from '../../components/buttons/FinalSubmit';
import MissionStatement from '../../components/modals/MissionStatement';
import assault from '../../images/assault.png';

export default function SexualAssaultRegistry() {
    const { registryType, index } = useSelector((state) => {
        return {
            registryType: state.index.registry.registryType,
            index: state.index.index,
        }
    })

    console.log(registryType);


    return (
<Flex>

        { index <= 18 ? (
            <Flex>

                <Flex className='panel-one' direction='column'>
                    <MissionStatement />
                <Flex className='panel-one-questions' >
                    <SexualAssaultQuestions />
                </Flex>
                <Flex className='panel-one-answers'>
                    <SexualAssaultAnswers />
                </Flex>
                    <Flex className='panel-one-buttons'>
                        <BackButton />
                        {index===18 ? <FinalSubmit /> : <NextButton />}       
                    </Flex>
                </Flex>
            </Flex>
        ) : null (
            <RegistryComplete />
        )} 


<Flex className='panel-two'>
<img src={assault} />
</Flex>
        </Flex>
    )
}


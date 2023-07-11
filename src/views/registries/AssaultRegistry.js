import { Flex } from '@chakra-ui/react';
import NextButton from '../../components/buttons/NextButton';
import BackButton from '../../components/buttons/BackButton';
import { useSelector } from 'react-redux';
import AssaultQuestions from '../registryQuestions/AssaultQuestions';
import AssaultAnswers from '../registryAnswers/AssaultAnswers';
import RegistryComplete from '../pages/RegistryComplete';
import FinalSubmit from '../../components/buttons/FinalSubmit';
import MissionStatement from '../../components/modals/MissionStatement';
import assault from '../../images/assault.png';
import logo from '../../images/logo.png';

export default function AssaultRegistry() {
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
                    <Flex className='header'/>
                <Flex className='panel-one-questions' >
                    <AssaultQuestions />
                </Flex>
                <Flex className='panel-one-answers'>
                    <AssaultAnswers />
                </Flex>
                    <Flex className='panel-one-buttons'>
                        {index < 19 ? <BackButton /> : null }
                        {index===18 ? <FinalSubmit /> : index === 19 ? <NextButton /> : null}       
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


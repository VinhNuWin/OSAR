import { Flex } from '@chakra-ui/react';
import NextButton from '../../../components/buttons/NextButton';
import BackButton from '../../../components/buttons/BackButton';
import { useSelector } from 'react-redux';
import AssaultQuestions from '../../registryQuestions/AssaultQuestions';
import AssaultAnswers from '../../registryAnswers/AssaultAnswers';
import RegistryComplete from '../RegistryComplete';
import FinalSubmit from '../../../components/buttons/FinalSubmit';
import MissionStatement from '../../../components/modals/MissionStatement';

export default function MobileAssaultRegistry() {
    const { registryType, index, _id, email } = useSelector((state) => {
        return {
            registryType: state.index.registry.registryType,
            index: state.index.index,
            _id: state.index.registry._id,
            email: state.index.registry.email
        }
    })

    console.log(registryType);

    return (
<Flex>
        { index <= 14 ? (
            <Flex>

            <Flex className='panel-one-mobile' direction='column'>
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
        ) : index === 15 ? (
                <RegistryComplete />
        ) : null (
            <RegistryComplete />
        )} 
        </Flex>
    )
}
import { Flex } from '@chakra-ui/react';
import NextButton from '../../../components/buttons/NextButton';
import BackButton from '../../../components/buttons/BackButton';
import { useSelector } from 'react-redux';
import ChildrensQuestions from '../../registryQuestions/ChildrensQuestions';
import ChildrensAnswers from '../../registryAnswers/ChildrensAnswers';
import RegistryComplete from '../../pages/RegistryComplete';
import FinalSubmit from '../../../components/buttons/FinalSubmit';

export default function MobileChildrensRegistry() {
    const { registryType, index } = useSelector((state) => {
        return {
            registryType: state.index.registry.registryType,
            index: state.index.index,
        }
    })

    console.log(registryType);

    return (
<Flex>
        { index <= 14 ? (
            <Flex>

            <Flex className='dual-panel-wrapper' direction='column'>
            {/* <MissionStatement /> */}
                <Flex className='panel-one-questions' >
                    <ChildrensQuestions />
                </Flex>
                <Flex className='panel-one-answers'>
                    <ChildrensAnswers />
                </Flex>
                <Flex className='panel-one-buttons'>
                <BackButton />
                {index===14 ? <FinalSubmit /> : <NextButton />}       
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
import { Flex } from '@chakra-ui/react';
import NextButton from '../../../components/buttons/NextButton';
import BackButton from '../../../components/buttons/BackButton';
import { useSelector } from 'react-redux';
import GeneralQuestions from '../../registryQuestions/GeneralQuestions';
import GeneralAnswers from '../../registryAnswers/GeneralAnswers';
import FinalSubmit from '../../../components/buttons/FinalSubmit';
import MissionStatement from '../../../components/modals/MissionStatement';

export default function MobileGeneralRegistry() {
    const { registryType, index } = useSelector((state) => {
        return {
            registryType: state.index.registry.registryType,
            index: state.index.index,
        }
    })

    console.log(registryType);


    return (
<Flex>

        { index <= 7 ? (
        <Flex>
            <Flex className='panel-one-mobile' direction='column'>
                <Flex className='header'/>
                    <Flex className='panel-one-questions' >
                        <GeneralQuestions />
                    </Flex>
                    <Flex className='panel-one-answers'>
                        <GeneralAnswers />
                    </Flex>
                    <Flex className='panel-one-buttons'>
                        {index < 9 ? <BackButton /> : null }
                        {index===8 ? <FinalSubmit /> : index < 9 ? <NextButton /> : null}       
                    </Flex>
                </Flex>
            </Flex>
        ) : null (
        )} 
        </Flex>
    )
}


import { Flex, Text } from '@chakra-ui/react';
import FAQ from '../../components/ContentBox/FAQ';
import RegistryResponses from '../../components/RegistryResponses';
import NextButton from '../../components/buttons/NextButton';
import BackButton from '../../components/buttons/BackButton';
import SkipButton from '../../components/buttons/SkipButton';
import ReportSummary from '../../components/drawer/ReportSummary';
import { useSelector } from 'react-redux';
import DidYouKnow from '../../components/DidYouKnow';
import SpouseQuestions from '../registryQuestions/SpouseQuestions';

export default function SpouseRegistry() {
    const { assaultType } = useSelector((state) => {
        return {
            assaultType: state.index.registry.assaultType
        }
    })

    console.log(assaultType.assaultType);

    const registrySelected = assaultType.assaultType;

    return (
        <Flex height="100%" className=''>
            <Flex className='container'>
                <Flex direction='column' className='question-container'>
                        <Flex className='question-card'>
                            <SpouseQuestions />
                        </Flex>
                        <Flex className=''>
                            <DidYouKnow />
                        </Flex>
                </Flex>
                <Flex className='faq-container'>
                        <FAQ />
                </Flex>
                <Flex className='answer-card'>
                    <Flex className='button'>
                        <NextButton />
                    </Flex>
                    <Flex className='input-card '>
                        <RegistryResponses />
                    </Flex>
                    <Flex className='button2'>
                        <BackButton />
                        <SkipButton />
                    </Flex>
                </Flex>
            </Flex>

            <Flex className='icon-container '>
                <ReportSummary />
            </Flex>
        </Flex>
    )
}
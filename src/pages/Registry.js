import { Flex } from '@chakra-ui/react';
import QuestionCard from '../components/ContentBox/QuestionCard';
import FAQ from '../components/ContentBox/FAQ';
import RegistryResponses from '../components/RegistryResponses';
import NextButton from '../components/buttons/NextButton';
import BackButton from '../components/buttons/BackButton';
import SkipButton from '../components/buttons/SkipButton';
import ReportSummary from '../views/drawer/ReportSummary';
import { useMediaQuery } from '@chakra-ui/react';

export default function Registry() {
    const [ isLargerThan1280, isLargerThan320 ] = useMediaQuery([
        '(min-width: 1280)',
        '(min-width: 320)',
    ]);

    return (
        <Flex height="100%" className=''>
            <Flex className='container'>
                <Flex className='question-card'>
                        <QuestionCard />
                </Flex>
                <Flex className='faq-card'>
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


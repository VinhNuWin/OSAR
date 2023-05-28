import { Flex } from '@chakra-ui/react';
import QuestionCard from '../components/ContentBox/QuestionCard';
import FAQ from '../components/ContentBox/FAQ';
import RegistryResponses from '../components/RegistryResponses';
import NextButton from '../components/buttons/NextButton';
import BackButton from '../components/buttons/BackButton';
import ReportSummary from '../views/drawer/ReportSummary';

export default function Registry() {

    return (
        <Flex height="100%">

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
                    <Flex className='input-card'>
                        <RegistryResponses />
                    </Flex>
                    <Flex className='button2'>
                        <BackButton />
                    </Flex>
                </Flex>
            </Flex>

            <Flex className='icon-container '>
                <ReportSummary />
            </Flex>

        </Flex>
    )
}


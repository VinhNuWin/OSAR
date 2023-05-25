import { Flex } from '@chakra-ui/react';
import QuestionCard from './QuestionCard';
import ContentBox from './ContentBox';
import FAQ from './FAQ';
import AnswerCard from './AnswerCard';

export default function Home() {

    return (
        <Flex
        className='Osar'
        >
            <Flex
            width="80%"
            height="80%"
            className='border'
            marginTop="5%"
            wrap='wrap'
            >
                <Flex
                // position='relative'
                width='66.5%'
                height='49.5%'>
                    <QuestionCard />
                </Flex>
                <Flex
                width='33.5%'
                height='49.5%'>
                    <FAQ />
                </Flex>
                <Flex className='border'
                position='relative'
                width='100%'
                height='49.5%'
                    wrap='wrap'>
                    <AnswerCard />
                </Flex>
            </Flex>


        </Flex>
    )
}


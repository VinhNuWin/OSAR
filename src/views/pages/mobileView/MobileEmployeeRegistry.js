import { Flex, Text, Grid, GridItem, Heading, Stack, HStack, Card, CardBody, Avatar } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import BackButton from '../../../components/buttons/BackButton';
import FinalSubmit from '../../../components/buttons/FinalSubmit';
import NextButton from '../../../components/buttons/NextButton';
import EmployeeAnswers from '../../registryAnswers/EmployeeAnswers';
import EmployeeQuestions from '../../registryQuestions/EmployeeQuestions';
import RegistryComplete from '../RegistryComplete';

export default function MobileEmployeeRegistry() {
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

            <Flex className='panel-one' direction='column'>
            {/* <MissionStatement /> */}
                <Flex className='panel-one-questions' >
                    <EmployeeQuestions/>
                </Flex>
                <Flex className='panel-one-answers'>
                    <EmployeeAnswers />
                </Flex>
                <Flex className='panel-one-buttons'>
                    <BackButton />
                {index===14 ? <FinalSubmit/> : <NextButton/>}       
                </Flex>
</Flex>

            </Flex>
        ) : index === 15 ? (
                <RegistryComplete/>
        ) : null (
            <RegistryComplete />
        )} 
        </Flex>
    )
}


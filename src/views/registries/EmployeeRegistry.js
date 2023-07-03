import { Flex, Text, Grid, GridItem, Heading, Stack, HStack, Card, CardBody, Avatar } from '@chakra-ui/react';
import QuestionCard from '../../components/ContentBox/QuestionCard';
import FAQ from '../../components/ContentBox/FAQ';
import RegistryResponses from '../../components/RegistryResponses';
import NextButton from '../../components/buttons/NextButton';
import BackButton from '../../components/buttons/BackButton';
import SkipButton from '../../components/buttons/SkipButton';
import ReportSummary from '../../components/drawer/ReportSummary';
import { useSelector } from 'react-redux';
import DidYouKnow from '../../components/DidYouKnow';
import EmployeeQuestions from '../registryQuestions/EmployeeQuestions';
import EmployeeAnswers from '../registryAnswers/EmployeeAnswers';
import RegistryComplete from '../pages/RegistryComplete';
import RegistryStepper from '../../components/RegistryStepper';
import FullNameAndTitleModal from '../../components/modals/FullNameAndTitleModal';
import AddressModal from '../../components/modals/AddressModal';
import { EmployeeSummary } from '../../components/summary/EmployeeSummary';
import FinalSubmit from '../../components/buttons/FinalSubmit';
import MissionStatement from '../../components/modals/MissionStatement';

export default function EmployeeRegistry() {
    const { registryType, index, _id, email } = useSelector((state) => {
        return {
            registryType: state.index.registry.registryType,
            index: state.index.index,
            _id: state.index.registry._id,
            email: state.index.registry.email
        }
    })

    console.log(registryType);

    const registrySelected = registryType;

    return (
<Flex>

        { index <= 14 ? (
            <Flex>

            <Flex className='panel-one' direction='column'>
            <MissionStatement />
                <Flex className='panel-one-questions' >
                    <EmployeeQuestions />
                </Flex>
                <Flex className='panel-one-answers'>
                    <EmployeeAnswers />
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


<Flex className='panel-two'>

</Flex>
        </Flex>
    )
}


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
        <div className='wrapper-block'>
        { index <= 14 ? (
            <Grid id='content'
            >
                <div className='one'>
                    <EmployeeSummary />
                </div>
                <div className='two'>
                <RegistryStepper />
                </div>
                <div className='three'>
                <EmployeeQuestions />
                </div>
                <div className='four'>
                {/* <Flex className='answer-block'> */}
                    <div className='four-input-wrapper'>
                        <div className='four-input'>
                            <EmployeeAnswers />
                        </div>
                        <div className='four-input-buttons'>
                        <BackButton />
                        <NextButton />
                        </div>
                    </div>
                {/* </Flex > */}
                </div>

                <div className='five'>
                    <Flex className='did-you-know-block'>
                        <DidYouKnow />
                    </Flex>
                </div>
                <div className='six'>


                <Flex className='profile-card' direction='column'>
            <Flex className='' direction='column'>
            <Text size='lg' fontWeight='500'  >RegistryId:</Text>
            <h3>{_id}</h3>
            </Flex>
            <Flex className='' direction='column'>
              <Text size='lg' fontWeight='500'  >Email:</Text>
              <h3>{email}</h3>
            </Flex>
            <Flex className='' direction='column'>
              <Text size='lg' fontWeight='500'  >Registry Type:</Text>
              <h3>{registryType}</h3>
            </Flex>
            </Flex>
      
                </div>
                <div className='five-header-bubble'>
                <Text fontSize={{ base: '10px', md: '12px', lg: '14px' }} fontWeight='500' color='rgb(157, 150, 139)' >Did you know</Text>
                </div>
                <div className='six-header-bubble'>
                <Text fontSize={{ base: '10px', md: '12px', lg: '14px' }} fontWeight='500' color='rgb(157, 150, 139)'>REGiSTRY</Text>
                </div>
                <div className='one-header-bubble'>
                <Text fontSize={{ base: '10px', md: '12px', lg: '14px' }} fontWeight='500' color='rgb(157, 150, 139)'>SUMMARY</Text>
                </div>
            </Grid>

        ) : (
            <div>
                <RegistryComplete />
            </div>
        )} 
        </div>
    )
}


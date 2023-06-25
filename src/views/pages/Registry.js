import { Flex, Text } from '@chakra-ui/react';
import QuestionCard from '../../components/ContentBox/QuestionCard';
import FAQ from '../../components/ContentBox/FAQ';
import RegistryResponses from '../../components/RegistryResponses';
import NextButton from '../../components/buttons/NextButton';
import BackButton from '../../components/buttons/BackButton';
import SkipButton from '../../components/buttons/SkipButton';
import { useSelector } from 'react-redux';
import SexualAssaultRegistry from '../registries/SexualAssaultRegistry';
import ChildrensRegistry from '../registries/ChildrensRegistry';
import ElderlyRegistry from '../registries/ElderlyRegistry';
import EmployeeRegistry from '../registries/EmployeeRegistry';
import SpouseRegistry from '../registries/SpouseRegistry';


export default function Registry() {
    const { registryType } = useSelector((state) => {
        return {
            registryType: state.index.registry.registryType
        }
    })

    console.log(registryType);

    const registrySelected = registryType;

    return (
        <Flex>
        { registrySelected === 'employee' ? (
             <EmployeeRegistry />
        ) : registrySelected === 'children' ? (
            <ChildrensRegistry />
        ) : registrySelected === 'spouse' ? (
            <SpouseRegistry />
        ) : registrySelected === 'sexual assault' ? (
            <SexualAssaultRegistry />
        ) : registrySelected === 'elderly' ? (
            <ElderlyRegistry />
        ) : null
    }
    </Flex>
    )
}


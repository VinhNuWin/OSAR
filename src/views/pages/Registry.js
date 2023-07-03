import { Flex, useMediaQuery } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import SexualAssaultRegistry from '../registries/SexualAssaultRegistry';
import ChildrensRegistry from '../registries/ChildrensRegistry';
import ElderlyRegistry from '../registries/ElderlyRegistry';
import EmployeeRegistry from '../registries/EmployeeRegistry';
import SpouseRegistry from '../registries/SpouseRegistry';
import MobileEmployeeRegistry from './mobileView/MobileEmployeeRegistry';
import MobileElderlyRegistry from './mobileView/MobileElderlyRegistry';
import MobileChildrensRegistry from './mobileView/MobileChildrensRegistry';
import MobileSpouseRegistry from './mobileView/MobileSpouseRegistry';
import MobileSexualAssaultRegistry from './mobileView/MobileSexualAssaultRegistry';



export default function Registry() {

    const [ isLargerThan568, isLargerThan320 ] = useMediaQuery([
        '(min-width: 568px)',
        '(min-width: 320px)',
    ]);

    const { registryType } = useSelector((state) => {
        return {
            registryType: state.index.registry.registryType
        }
    })

    const registrySelected = registryType;

    return (
        <Flex>
        { registrySelected === 'employees' ? (
            <div>
            { isLargerThan568 ? <EmployeeRegistry /> : <MobileEmployeeRegistry /> }
            </div>
        ) : registrySelected === 'children' ? (
            <div>
            { isLargerThan568 ? <ChildrensRegistry /> : <MobileChildrensRegistry /> }
            </div>
        ) : registrySelected === 'spouse' ? (
            <div>
            { isLargerThan568 ? <SpouseRegistry /> : <MobileSpouseRegistry /> }
            </div>
        ) : registrySelected === 'sexualAssault' ? (
            <div>
            { isLargerThan568 ? <SexualAssaultRegistry /> : <MobileSexualAssaultRegistry /> }
            </div>
        ) : registrySelected === 'elderly' ? (
            <div>
            { isLargerThan568 ? <ElderlyRegistry /> : <MobileElderlyRegistry /> }
            </div>
        ) : null
    }
    </Flex>
    )
}


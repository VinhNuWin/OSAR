import { Flex, useMediaQuery } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import AssaultRegistry from '../registries/AssaultRegistry';
import ChildrensRegistry from '../registries/ChildrensRegistry';
import ElderlyRegistry from '../registries/ElderlyRegistry';
import EmployeeRegistry from '../registries/EmployeeRegistry';
import SpouseRegistry from '../registries/SpouseRegistry';
import MobileEmployeeRegistry from './mobileView/MobileEmployeeRegistry';
import MobileElderlyRegistry from './mobileView/MobileElderlyRegistry';
import MobileChildrensRegistry from './mobileView/MobileChildrensRegistry';
import MobileSpouseRegistry from './mobileView/MobileSpouseRegistry';
import MobileAssaultRegistry from './mobileView/MobileAssaultRegistry';
import GeneralRegistry from '../registries/GeneralRegistry';
import MobileGeneralRegistry from './mobileView/MobileGeneralRegistry';
import { listVariants, itemVariants } from '../../data/containerVariants';
import { AnimatePresence, motion } from 'framer-motion';



export default function Registry() {

    const [ isLargerThan568 ] = useMediaQuery([
        '(min-width: 568px)'
    ]);

    const { registryType, index } = useSelector((state) => {
        return {
            registryType: state.index.registry.registryType,
            index: state.index.index
        }
    })

    const registrySelected = registryType;

    return (

        <motion.div 
        variants={listVariants}
        initial='hidden'
        animate='visible'
        >
            <motion.div
                    >
                    <AnimatePresence>
        { registrySelected === 'employees' ? (
            <motion.div>
            { isLargerThan568 ? <EmployeeRegistry /> : <MobileEmployeeRegistry /> }
            </motion.div>
        ) : registrySelected === 'children' ? (
            <motion.div>
            { isLargerThan568 ? <ChildrensRegistry /> : <MobileChildrensRegistry /> }
            </motion.div>
        ) : registrySelected === 'spouse' ? (
            <motion.div>
            { isLargerThan568 ? <SpouseRegistry /> : <MobileSpouseRegistry /> }
            </motion.div>
        ) : registrySelected === 'assault' ? (
            <motion.div>
            { isLargerThan568 ? <AssaultRegistry /> : <MobileAssaultRegistry /> }
            </motion.div>
        ) : registrySelected === 'elderly' ? (
            <motion.div>
            { isLargerThan568 ? <ElderlyRegistry /> : <MobileElderlyRegistry /> }
            </motion.div>
        ) : registrySelected === 'general' ? (
            <motion.div
            variants={itemVariants}
            initial='hidden'
            animate='visible'
            exit='close'
            >
            { isLargerThan568 ? <GeneralRegistry /> : <MobileGeneralRegistry /> }
            </motion.div>
        ) : (<motion.div>
        { isLargerThan568 ? <GeneralRegistry /> : <MobileGeneralRegistry /> }
        </motion.div>)
    }
    </AnimatePresence>
    </motion.div>
    </motion.div>
    )
}


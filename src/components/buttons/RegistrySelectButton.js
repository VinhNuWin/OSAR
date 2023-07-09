import React from 'react';
import '../../styles.css';
import { useState } from 'react';
import { motion, isValidMotionProp, Variants, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex, addEmployeeId, registrySelect } from '../../store';
import axios from 'axios';
import { FormErrorMessage, Flex, Button, HStack, Stack, Heading, Grid, GridItem, FormLabel, FormHelperText, Input, Spinner, Text, chakra, shouldForwardProp, InputLeftElement, InputGroup } from '@chakra-ui/react';
import { listVariants, itemVariants } from '../../data/containerVariants';
import general from '../../images/general.png';

export const RegistrySelectButton = () => {
    const dispatch = useDispatch()

    const componentButtonArray = [
        <Button name='general' variant='selectButton' onClick={(e)=> dispatch(registrySelect(e.target.name))}>General</Button>,
        <Button name='employees' variant='selectButton' onClick={(e)=> dispatch(registrySelect(e.target.name))}>Employee</Button>,
        <Button name='spouse' variant='selectButton' onClick={(e)=> dispatch(registrySelect(e.target.name))}>Spouse</Button>,
        <Button name='elderly' variant='selectButton' onClick={(e)=> dispatch(registrySelect(e.target.name))}>Elderly</Button>,
        <Button name='assault' variant='selectButton' onClick={(e)=> dispatch(registrySelect(e.target.name))}>Assault</Button>,
        <Button name='children' variant='selectButton' onClick={(e)=> dispatch(registrySelect(e.target.name))}>Children</Button>
    ];

    return (
        <motion.ul
            initial='hidden'
            animate='visible'
            variants={listVariants}
        >
            <motion.div className='selectButtons'>
                {componentButtonArray.map(item => <motion.li variants={itemVariants}>{item}</motion.li>)}
            </motion.div>
        </motion.ul>
    )
}
import React from 'react';
import '../../styles.css';
import { useState } from 'react';
import { motion, isValidMotionProp, Variants, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex, addEmployeeId, registrySelect } from '../../store';
import axios from 'axios';
import { FormErrorMessage, Flex, Button } from '@chakra-ui/react';
import { listVariants, itemVariants, container, item, test } from '../../data/containerVariants';
import general from '../../images/general.png';


export const RegistrySelectButton = () => {
    const dispatch = useDispatch();
    const { registryType } = useSelector((state)=> {
        return {
            registryType: state.index.registryType,
        }
    })

 

    const componentButtonArray = [
        <Button name='general' key='general' className='btn2' onClick={(e)=> dispatch(registrySelect(e.target.name))}>General</Button>,
        <Button name='employees' key='employees' className='btn2' onClick={(e)=> dispatch(registrySelect(e.target.name))}>Employee</Button>,
        <Button name='spouse' key='spouse' className='btn2' onClick={(e)=> dispatch(registrySelect(e.target.name))}>Spouse</Button>,
        <Button name='elderly' key='elderly' className='btn2' onClick={(e)=> dispatch(registrySelect(e.target.name))}>Elderly</Button>,
        <Button name='assault' key='assault' className='btn2' onClick={(e)=> dispatch(registrySelect(e.target.name))}>Assault</Button>,
        <Button name='children' key='children' className='btn2' onClick={(e)=> dispatch(registrySelect(e.target.name))}>Children</Button>
    ];

    return (
        <div>
        <motion.ul
        variants={listVariants}
        initial='hidden'
        animate='visible'
        className='selectButtons'
        >
                    <AnimatePresence mode='wait'>
                { componentButtonArray.map((item, i) => <motion.li key={item[i]} variants={itemVariants} initial='hidden' animate='visible' exit='close'>{item}</motion.li>)}
                        </AnimatePresence>
        </motion.ul>

        </div>
    )
}
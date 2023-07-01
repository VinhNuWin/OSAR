import React from 'react';
import '../../styles.css';
import { useState } from 'react';
import { motion, isValidMotionProp } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex, addEmail, addRegistryId, registrySelect } from '../../store';
import axios from 'axios';
import { Flex, Button, HStack, Stack, Heading, Grid, GridItem, FormLabel, FormHelperText, Input, Spinner, Text, chakra, shouldForwardProp, InputLeftElement, InputGroup } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

export default function SelectYourRegistry() {
const dispatch = useDispatch();
    const { index, _id, employeeRegistry, registryType } = useSelector((state)=> {
        return {
            index: state.index.index,
            _id: state.index.employeeRegistry._id,
            employeeRegistry: state.index.employeeRegistry,
            registryType: state.index.employeeRegistry.registryType,
        }
    })

    const newIndex = index + 1;

    const handleRegistryInputs = async () => {
        const response = await axios.patch(`https://osar-api.onrender.com/registry/${_id}`, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Method': 'GET,PATCH,POST,DELETE',
                },
                employeeRegistry: employeeRegistry,
                registryType: registryType,
                _id: _id
            });
            dispatch(changeIndex(parseInt((newIndex))));
            console.log('index was changed'); 
            console.log(response);
        }

        console.log(registryType);
    return (
<Flex className='dual-panel-wrapper'>
<Flex className='panel-one'
>
<Heading color='black'>
                                   Select a Registry
                         </Heading>
                    <div className='three'>

                    </div>

                         <div className='four'>
                <Stack className=''>
                    <Flex className='answer-block' direction='column'>
                        <HStack>
                            <Button name='employee' variant='selectButton' onClick={(e)=> dispatch(registrySelect(e.target.name))}>Employee</Button>
                            {/* <Button name='spouse' variant='selectButton' onClick={(e)=> dispatch(registrySelect(e.target.name))}>Spouse</Button> */}
                        </HStack>
                        {/* <HStack>
                            <Button name='elderly' variant='selectButton' onClick={(e)=> dispatch(registrySelect(e.target.name))}>Elderly</Button>
                            <Button name='children' variant='selectButton' onClick={(e)=> dispatch(registrySelect(e.target.name))}>Child</Button>
                        </HStack>
                        <HStack>
                            <Button name='sexual assault' variant='selectButton' onClick={(e)=> dispatch(registrySelect(e.target.name))}>Sexual Assault</Button>
                        </HStack> */}
                    <Flex className='answer-element-continue'>
                        <Button onClick={handleRegistryInputs} >
                            Continue
                        </Button>
                    </Flex>
                </Flex>
             </Stack>
             </div>
</Flex>

<Flex className='panel-two'>

</Flex>

</Flex>

        // <Flex className='wrapper-block'>
        //                 <Heading color='black' className='question-block' justifyContent='center'>
        //                           Select a Registry
        //                 </Heading>
        // <Flex className='' >
        //     <Stack >
        //             <Flex className='answer-block' direction='column'>
        //                 <HStack>
        //               <Button name='employee' variant='selectButton' onClick={(e)=> dispatch(registrySelect(e.target.name))}>Employee</Button>
        //               <Button name='spouse' variant='selectButton' onClick={(e)=> dispatch(registrySelect(e.target.name))}>Spouse</Button>
        //              </HStack>
        //              <HStack>
        //               <Button name='elderly' variant='selectButton' onClick={(e)=> dispatch(registrySelect(e.target.name))}>Elderly</Button>
        //               <Button name='children' variant='selectButton' onClick={(e)=> dispatch(registrySelect(e.target.name))}>Child</Button>
        //               </HStack>
        //               <HStack>
        //               <Button name='sexual assault' variant='selectButton' onClick={(e)=> dispatch(registrySelect(e.target.name))}>Sexual Assault</Button>
        //               </HStack>
        //                 <Flex className='answer-element-continue'>
        //                     <Button onClick={handleRegistryInputs} >
        //                         Continue
        //                     </Button>
        //                 </Flex>
        //             </Flex>
                    
        //             <Flex>
        //             </Flex>
        //     </Stack>
        // </Flex>
        // </Flex>
    )
}
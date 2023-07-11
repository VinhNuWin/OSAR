import React from 'react';
import '../../styles.css';
import '../../index.css';
import { useState } from 'react';
import { motion, isValidMotionProp } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex, addEmail, add_Id } from '../../store';
import axios from 'axios';
import { Flex, Button, Stack, FormControl, FormErrorMessage, FormHelperText, Input, Checkbox, Text, chakra, shouldForwardProp, InputLeftElement, InputGroup } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import Loader from '../../components/Loader';
import ThingsToConsider from '../../data/ThingsToConsider';
import cover from '../../images/cover.png';
import logo from '../../images/logo.png';


const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

function SignIn() {
    const dispatch = useDispatch();
    const [ loader, setLoader ] = useState(false);

    const { index, email, registryId } = useSelector((state) => {
        return {
        index: state.index.index,
        email: state.index.registry.email,
        registryId: state.index.registry.registryId
        }
    });

    const isError = email === '';

    const addUser = async () => {
        console.log('adduser clicked');
        setLoader(true);
        try {
        const response = await axios.post('https://osar-api.onrender.com/registry', {
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Method': 'POST',
            },
            email: email,
        });
        const userId = response.data.data._id;
        dispatch(add_Id(userId));
        dispatch(changeIndex(parseInt(index + 1)));
        } catch {
            setLoader(false);
        }
    
    };

    console.log(email);

    return (
        <motion.div
        >
        <Flex className='two-panel-wrapper'>
        <Flex className='panel-one'>
        <Flex className='header'/>
            <Stack className='signin-wrapper'>
            <center>
            <Flex className='header'>
        </Flex>
            <Flex className='signin-h2'>
                <Text textAlign='center' w='full'>
                Follow the promps to submit your report.
                </Text>

            </Flex>

            <Flex className='signin-body'>
            The report takes 2-3 minutes. After review, reports will be added to the Documented Voices database.
            </Flex>

            <Flex className='signin-h1'>
                <Text textAlign='center' w='full'>
                Enter Your Email
                </Text>
            </Flex>
            { loader ? <Loader /> : ''}

                    <Flex className='sign-in-element-email'>
                        <FormControl isInvalid={isError}>
                                <InputGroup>
                                  <InputLeftElement pointerEvents='none'>
                                    <EmailIcon />
                                  </InputLeftElement>
                                <Input 
                                    type='email'
                                    variant='flushed'
                                    value={email}
                                  onChange={(e) => {dispatch(addEmail( e.target.value))}}
                                  />
                                  {!isError ? (
                                    <FormHelperText>

                                    </FormHelperText>
                                  ) : (
                                    <FormErrorMessage>Email is required.</FormErrorMessage>
                                  )}
                                </InputGroup>
                                <Checkbox m={2}>I would like to submit this report anonymously</Checkbox>
                        </FormControl>
                                    <ThingsToConsider />
                    </Flex>
                    <Flex className= 'signin-start-registry' direction='column'>

                        <Text className='signin-body' marginBottom={8}>
                        If you have questions or feedback on the submission experience, email us at info@documentedvoices.com
                        </Text>
                                <Button className="btn" colorScheme='facebook' onClick={addUser} w='50%'>
                                    Start Registry
                                </Button>
                            </Flex>
                </center>
                    </Stack>
        </Flex>

            <Flex className='panel-two'>
                <img src={cover} />
            </Flex>
        </Flex>
        </motion.div>
    )
}

export default SignIn;
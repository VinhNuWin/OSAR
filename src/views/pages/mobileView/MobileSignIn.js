import React from 'react';
import '../../../styles.css';
import '../../../index.css';
import { useState } from 'react';
import { motion, isValidMotionProp } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex, addEmail, add_Id, addRegistryId, registrySelect } from '../../../store';
import axios from 'axios';
import { Flex, Button, HStack, Stack, FormControl, FormLabel, FormHelperText, Input, Spinner, Checkbox, Text, chakra, shouldForwardProp, InputLeftElement, InputGroup, InputRightElement } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import Loader from '../../../components/Loader';
import ThingsToConsider from '../../../data/ThingsToConsider';
import logo from '../../../images/logo.png';
import MissionStatement from '../../../components/modals/MissionStatement';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

const svgVariants = {
    hidden: { rotate: -180 },
    visible: {
        rotate: 0,
    }
};

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(250, 0, 250, 0)"
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgb(97, 202, 146)",
        transition: {
            duration: 4,
            ease: "easeInOut",
        }
    }
};

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

    const addUser = async () => {
        console.log('adduser clicked');
        setLoader(true);
        const response = await axios.post('https://osar-api.onrender.com/registry', {
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Method': 'POST',
            },
            email: email,
        });
        console.log(response);
        const userId = response.data.data._id;
        console.log(userId);

        dispatch(add_Id(userId));
        dispatch(changeIndex(parseInt(index + 1)));
        console.log(registryId)
    };

    console.log(email);

    const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

    return (
        <Flex className='signin-wrapper'>
        <Flex className='' pt={5}>
            <Stack className='signin-wrapper'>
            <center>
                <Flex className='header'>

                </Flex>
            <Flex >
                
                <p className='signin-p'>
                Follow the promps to submit your report.
                </p>

            </Flex>

            <Flex >
                <h3 className='signin-body'>
                The report takes 2-3 minutes.
                </h3>
            </Flex>

            <Flex className='' >
                <h2 className='signin-h1' w='full'>
                Enter Your Email
                </h2>
            </Flex>
            {/* <div className='mt-10 border'>
            { loader ? <Loader /> : ''}
            </div> */}


                    <Flex className='sign-in-element-email'>
                        <FormControl >
                                <InputGroup>
                                  <InputLeftElement pointerEvents='none'>
                                    <EmailIcon color='white' />
                                  </InputLeftElement>
                                <Input 
                                    variant='flushed'
                                    value={email}
                                  onChange={(e) => {dispatch(addEmail( e.target.value))}}
                                  rules={[
                                      {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                      },
                                      {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                      },
                                    ]}
                                  />
                                </InputGroup>
                                <Checkbox m={2} color='rgb(147,154,236)'>I would like to submit this report anonymously</Checkbox>
                        </FormControl>
                                    <ThingsToConsider />
                                    {/* <MissionStatement /> */}
                    </Flex>
                    <Flex className='signin-start-registry' direction='column'>
                        <Text marginBottom={8}>
                        If you have questions or feedback on the submission experience, email us at info@documentedvoices.com
                        </Text>
                                <Button variant='brandPrimary' onClick={addUser} w='90%'>
                                    Start Registry
                                </Button>
                            </Flex>
                </center>
                    </Stack>
        </Flex>
        </Flex>
    )
}

export default SignIn;
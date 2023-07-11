import React from 'react';
import '../../../styles.css';
import '../../../index.css';
import { useState } from 'react';
import { motion, isValidMotionProp } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex, addEmail, add_Id, addRegistryId, registrySelect } from '../../../store';
import axios from 'axios';
import { Flex, Button, HStack, Stack, FormControl, FormLabel, FormHelperText, Input, Spinner, Text, chakra, shouldForwardProp, InputLeftElement, InputGroup, InputRightElement } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import Loader from '../../../components/Loader';
import ThingsToConsider from '../../../data/ThingsToConsider';
import logo from '../../../images/logo.png';

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
        <Flex className='dual-panel-wrapper'>
        <Flex className=''>
            <Stack className='signin-wrapper'>
            <center>
                <Flex className='header-mobile'>
                    <Flex className='header'/>
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
                { loader ? <Loader /> : ''}
            </Flex>
      

                    <Flex className='sign-in-element-email'>
                        <FormControl >
                                <InputGroup>
                                  <InputLeftElement pointerEvents='none'>
                                    <EmailIcon />
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
                            <FormHelperText>I would like to submit this report anonymously</FormHelperText>
                        </FormControl>
                                    <ThingsToConsider />
                    </Flex>
                    <Flex className='signin-start-registry' direction='column'>
                        <Text marginBottom={8}>
                        If you have questions or feedback on the submission experience, email us at info@documentedvoices.com
                        </Text>
                                <Button onClick={addUser} w='50%'>
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
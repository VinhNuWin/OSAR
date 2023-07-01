import React from 'react';
import '../../styles.css';
import '../../index.css';
import { useState } from 'react';
import { motion, isValidMotionProp } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex, addEmail, addRegistryId, registrySelect } from '../../store';
import axios from 'axios';
import { Flex, Button, HStack, Stack, FormControl, FormLabel, FormHelperText, Input, Spinner, Text, chakra, shouldForwardProp, InputLeftElement, InputGroup, InputRightElement } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import Loader from '../../components/Loader';
import ThingsToConsider from '../../data/ThingsToConsider';

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

    const { index, email, registryType } = useSelector((state) => {
        return {
        index: state.index.index,
        email: state.index.employeeRegistry.email,
        registryType: state.index.registry.registryType
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
            email: email
        });
        console.log(response);
        const userId = response.data.data._id;

        dispatch(addRegistryId(userId));
        dispatch(changeIndex(parseInt(index + 1)));
    };

    const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };


    // function sleep(sleepTime) {
    //   return new Promise((resolve) => setTimeout(resolve, sleepTime));
    // }
  
    // const phrases = ['Documented Voices'];
    // const el = document.getElementById("typewriter");

    // let sleepTime = 100;
  
    // let curPhraseIndex = 0;
  
    // const writeLoop = async () => {
    //   while (true) {
    //       let curWord = phrases[curPhraseIndex];
          
    //       for (let i = 0; i < curWord.length; i++){
    //           el.innerText = curWord.substring(0, i + 1);
    //           await sleep(sleepTime);
    //       }
    //       await sleep(10000);
    //   }
    // };
  
    // writeLoop();

    return (
        <Flex className='two-panel-wrapper'>
        <Flex className='panel-one'>
            <Stack className='signin-wrapper'>
            <center>

            <Flex className='signin-h2'>
                Follow the promps to submit your report.
            </Flex>

            <Flex className='signin-body'>
            The report takes 2-3 minutes. After review, reports will be added to the Documented Voices database.
            </Flex>

            <Flex className='signin-h1'>
                Enter Your Email
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
                                  <InputRightElement>
                                  { loader ? <Loader /> : ''}
                                  </InputRightElement>
                                </InputGroup>
                            <FormHelperText>I would like to submit this report anonymously</FormHelperText>
                        </FormControl>
                                    <ThingsToConsider />
                    </Flex>
                    <Flex className='signin-start-registry' direction='column'>
                    If you have questions or feedback on the submission experience, email us at info@documentedvoices.com
                                <Button onClick={addUser}>
                                    Start Registry
                                </Button>
                            </Flex>
                </center>
                    </Stack>
        </Flex>

            <Flex className='panel-two'>
                                    img
            </Flex>
        </Flex>
    )
}

export default SignIn;

{/* <Flex >
<motion.div className=''>
<div className="sign-in-element-typewriter">
<h1><span id="typewriter"></span><span id="cursor">|</span></h1>
      <motion.div
        className="box"
        initial={{ offsetDistance: "0%", scale: 2.5 }}
        animate={{ offsetDistance: "100%", scale: 1 }}
        transition={transition}
      />
    </div>
    { loader ? <Loader /> && 'Starting Registry' : ""}
</motion.div>
</Flex> */}
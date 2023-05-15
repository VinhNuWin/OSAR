import React, { useState } from 'react';
import '../styles.css';
import { motion, isValidMotionProp } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { addUserId, changeIndex } from '../store';
import axios from 'axios';
import { Button, Stack, FormControl, FormLabel, FormHelperText, Input, Box } from '@chakra-ui/react';
import { chakra, shouldForwardProp, Text } from '@chakra-ui/react';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

const svgVariants = {
    hidden: { rotate: -180 },
    visible: {
        rotate: 0,
        // transition: { duration : 1 }
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

const HomePage = () => {
    const dispatch = useDispatch();

    const { index } = useSelector((state) => {
        return {
        index: state.index.index,
        }
    })

    const [email, setEmail] = useState('');

    const addUser = async () => {
        // const response = await axios.post('https://osar-api.onrender.com/users', {
        //     headers: {
        //         'Content-Type' : 'application/json',
        //         'Access-Control-Allow-Origin': '*',
        //         'Access-Control-Allow-Method': 'GET,PUT,POST,DELETE',
        //     },
        //     email: email
        // });
        // console.log(response);
        // const updatedUser = ({
        //     email: email,
        //     _id: response.data.data._id
        // });
        // dispatch(addUserId(updatedUser));
        dispatch(changeIndex(parseInt(index + 1)));
        // console.log(updatedUser);
    };


    return (
        <div className='Osar'>
        <header className='center wrapper bg-color-grey'>
            <Box pt='92px' className='flex-container'>
                <motion.div className='logo-wrapper m-auto'>
                <motion.svg width="373" height="109" viewBox="0 0 373 109" fill="none" xmlns="http://www.w3.org/2000/svg"
                   variants={svgVariants}
                   initial="hidden"
                   animate="visible"
                   >
                    <motion.path d="M41.7568 108C28.6158 108 18.5378 104.789 11.5227 98.367C4.50755 91.8463 1 82.4603 1 70.2091V38.7909C1 26.5397 4.50755 17.2031 11.5227 10.7812C18.5378 4.26039 28.6158 1 41.7568 1C54.8977 1 64.9758 4.26039 71.9909 10.7812C79.006 17.2031 82.5135 26.5397 82.5135 38.7909V70.2091C82.5135 82.4603 79.006 91.8463 71.9909 98.367C64.9758 104.789 54.8977 108 41.7568 108ZM41.7568 99.4044C51.4396 99.4044 58.8499 96.885 63.9877 91.8463C69.2243 86.8075 71.8427 79.5951 71.8427 70.2091V38.7909C71.8427 29.4049 69.2243 22.1925 63.9877 17.1537C58.8499 12.115 51.4396 9.59556 41.7568 9.59556C32.0739 9.59556 24.6142 12.115 19.3776 17.1537C14.2398 22.1925 11.6709 29.4049 11.6709 38.7909V70.2091C11.6709 79.5951 14.2398 86.8075 19.3776 91.8463C24.6142 96.885 32.0739 99.4044 41.7568 99.4044Z" 
                    fill="black"
                    variants={pathVariants}
                    transition={{ delay: 0.2}}/>
                    <motion.path d="M137.452 108C128.362 108 120.853 106.666 114.924 103.999C109.095 101.232 103.71 96.5886 98.7699 90.0679L106.032 83.6953C110.281 89.4257 114.677 93.4764 119.222 95.8476C123.866 98.2188 129.745 99.4044 136.859 99.4044C146.147 99.4044 153.31 97.626 158.349 94.0692C163.487 90.5125 166.056 85.5231 166.056 79.1011C166.056 75.0503 165.117 71.8393 163.24 69.4681C161.362 67.0969 158.052 65.0716 153.31 63.392C148.567 61.6136 141.552 59.7858 132.265 57.9086C122.088 55.9326 114.529 52.6722 109.589 48.1274C104.748 43.5826 102.327 37.5065 102.327 29.8989C102.327 20.9081 105.538 13.8439 111.96 8.70637C118.481 3.56879 127.423 1 138.786 1C146.888 1 153.903 2.43259 159.831 5.29778C165.759 8.06417 170.354 12.1644 173.614 17.5983L166.352 23.5263C163.289 18.9815 159.386 15.5235 154.644 13.1524C150 10.7812 144.615 9.59556 138.489 9.59556C130.684 9.59556 124.459 11.374 119.815 14.9307C115.27 18.4875 112.998 23.2793 112.998 29.3061C112.998 34.6413 115.023 38.8897 119.074 42.0512C123.125 45.114 129.794 47.584 139.082 49.4612C148.864 51.4372 156.422 53.6602 161.758 56.1302C167.192 58.6002 171.045 61.6136 173.318 65.1704C175.59 68.6283 176.726 73.1731 176.726 78.8047C176.726 88.2895 173.367 95.5512 166.648 100.59C159.93 105.53 150.198 108 137.452 108Z" 
                    fill="black"
                    variants={pathVariants}
                    transition={{ delay: 6.2}}/>
                    <motion.path d="M254.446 73.0249H207.612L197.386 106.37H186.715L213.541 19.6731C215.714 12.6584 218.036 7.81717 220.506 5.14958C223.075 2.38319 226.583 1 231.029 1C235.475 1 238.983 2.38319 241.552 5.14958C244.121 7.81717 246.492 12.6584 248.666 19.6731L275.491 106.37H264.672L254.446 73.0249ZM251.926 64.7258L238.143 19.8213C237.056 16.4621 236.019 14.1403 235.031 12.856C234.043 11.5716 232.709 10.9294 231.029 10.9294C229.448 10.9294 228.164 11.5716 227.176 12.856C226.188 14.1403 225.15 16.4621 224.063 19.8213L210.28 64.7258H251.926Z" 
                    fill="black"
                    variants={pathVariants}/>
                    <motion.path d="M372 106.37H360.588L353.474 79.6939C352.091 74.5563 350.51 70.5549 348.732 67.6897C346.953 64.8246 344.483 62.7498 341.321 61.4654C338.258 60.0822 334.059 59.3906 328.724 59.3906H304.714V106.37H294.043V2.63019H338.505C348.188 2.63019 355.549 5.05078 360.588 9.89197C365.726 14.7331 368.295 21.5503 368.295 30.3435C368.295 37.7535 366.516 43.6814 362.959 48.1274C359.501 52.4746 354.561 55.1916 348.139 56.2784C352.486 57.8592 355.845 60.4774 358.217 64.133C360.687 67.7885 362.861 72.9755 364.738 79.6939L372 106.37ZM337.32 50.795C343.742 50.795 348.732 49.066 352.289 45.608C355.845 42.15 357.624 37.3089 357.624 31.0845C357.624 24.7613 355.845 19.8707 352.289 16.4127C348.732 12.9548 343.742 11.2258 337.32 11.2258H304.714V50.795H337.32Z" 
                    fill="black"
                    variants={pathVariants}/>
                    <motion.path d="M41.7568 108C28.6158 108 18.5378 104.789 11.5227 98.367C4.50755 91.8463 1 82.4603 1 70.2091V38.7909C1 26.5397 4.50755 17.2031 11.5227 10.7812C18.5378 4.26039 28.6158 1 41.7568 1C54.8977 1 64.9758 4.26039 71.9909 10.7812C79.006 17.2031 82.5135 26.5397 82.5135 38.7909V70.2091C82.5135 82.4603 79.006 91.8463 71.9909 98.367C64.9758 104.789 54.8977 108 41.7568 108ZM41.7568 99.4044C51.4396 99.4044 58.8499 96.885 63.9877 91.8463C69.2243 86.8075 71.8427 79.5951 71.8427 70.2091V38.7909C71.8427 29.4049 69.2243 22.1925 63.9877 17.1537C58.8499 12.115 51.4396 9.59556 41.7568 9.59556C32.0739 9.59556 24.6142 12.115 19.3776 17.1537C14.2398 22.1925 11.6709 29.4049 11.6709 38.7909V70.2091C11.6709 79.5951 14.2398 86.8075 19.3776 91.8463C24.6142 96.885 32.0739 99.4044 41.7568 99.4044Z" 
                    stroke="black"
                    variants={pathVariants}/>
                    <motion.path d="M137.452 108C128.362 108 120.853 106.666 114.924 103.999C109.095 101.232 103.71 96.5886 98.7699 90.0679L106.032 83.6953C110.281 89.4257 114.677 93.4764 119.222 95.8476C123.866 98.2188 129.745 99.4044 136.859 99.4044C146.147 99.4044 153.31 97.626 158.349 94.0692C163.487 90.5125 166.056 85.5231 166.056 79.1011C166.056 75.0503 165.117 71.8393 163.24 69.4681C161.362 67.0969 158.052 65.0716 153.31 63.392C148.567 61.6136 141.552 59.7858 132.265 57.9086C122.088 55.9326 114.529 52.6722 109.589 48.1274C104.748 43.5826 102.327 37.5065 102.327 29.8989C102.327 20.9081 105.538 13.8439 111.96 8.70637C118.481 3.56879 127.423 1 138.786 1C146.888 1 153.903 2.43259 159.831 5.29778C165.759 8.06417 170.354 12.1644 173.614 17.5983L166.352 23.5263C163.289 18.9815 159.386 15.5235 154.644 13.1524C150 10.7812 144.615 9.59556 138.489 9.59556C130.684 9.59556 124.459 11.374 119.815 14.9307C115.27 18.4875 112.998 23.2793 112.998 29.3061C112.998 34.6413 115.023 38.8897 119.074 42.0512C123.125 45.114 129.794 47.584 139.082 49.4612C148.864 51.4372 156.422 53.6602 161.758 56.1302C167.192 58.6002 171.045 61.6136 173.318 65.1704C175.59 68.6283 176.726 73.1731 176.726 78.8047C176.726 88.2895 173.367 95.5512 166.648 100.59C159.93 105.53 150.198 108 137.452 108Z" 
                    stroke="black"
                    variants={pathVariants}/>
                    <motion.path d="M254.446 73.0249H207.612L197.386 106.37H186.715L213.541 19.6731C215.714 12.6584 218.036 7.81717 220.506 5.14958C223.075 2.38319 226.583 1 231.029 1C235.475 1 238.983 2.38319 241.552 5.14958C244.121 7.81717 246.492 12.6584 248.666 19.6731L275.491 106.37H264.672L254.446 73.0249ZM251.926 64.7258L238.143 19.8213C237.056 16.4621 236.019 14.1403 235.031 12.856C234.043 11.5716 232.709 10.9294 231.029 10.9294C229.448 10.9294 228.164 11.5716 227.176 12.856C226.188 14.1403 225.15 16.4621 224.063 19.8213L210.28 64.7258H251.926Z" 
                    stroke="black"
                    variants={pathVariants}/>
                    <motion.path d="M372 106.37H360.588L353.474 79.6939C352.091 74.5563 350.51 70.5549 348.732 67.6897C346.953 64.8246 344.483 62.7498 341.321 61.4654C338.258 60.0822 334.059 59.3906 328.724 59.3906H304.714V106.37H294.043V2.63019H338.505C348.188 2.63019 355.549 5.05078 360.588 9.89197C365.726 14.7331 368.295 21.5503 368.295 30.3435C368.295 37.7535 366.516 43.6814 362.959 48.1274C359.501 52.4746 354.561 55.1916 348.139 56.2784C352.486 57.8592 355.845 60.4774 358.217 64.133C360.687 67.7885 362.861 72.9755 364.738 79.6939L372 106.37ZM337.32 50.795C343.742 50.795 348.732 49.066 352.289 45.608C355.845 42.15 357.624 37.3089 357.624 31.0845C357.624 24.7613 355.845 19.8707 352.289 16.4127C348.732 12.9548 343.742 11.2258 337.32 11.2258H304.714V50.795H337.32Z" 
                    stroke="black"
                    variants={pathVariants}/>
                    </motion.svg>
                </motion.div>
            </Box>
                <Stack >
                    <div className='text-center mt-10'>
                        <Text fontSize='20px' color='white'>Anonymous Assault Registry</Text>
                    </div>
                    <Box pl='' pt='10' w='100%' className=''>
                        <FormControl >
                          <FormLabel color='rgb(97, 202, 146)'>Email address</FormLabel>
                          <Input 
                            value={email}
                            bg='white'
                            onChange={(e) => {setEmail(e.target.value)}}
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
                          <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>
                            <Box pos='center' className='button-container pt-40'>
                                <div className='button-center'>
                                <Button 
                                className=''
                                color='rgb(97, 202, 146)'
                                onClick={addUser}
                                >
                                    Create Registry
                                </Button>
                                </div>
                            </Box>
                    </Box>
                </Stack>
        </header>
        </div>
    )
}

export default HomePage;
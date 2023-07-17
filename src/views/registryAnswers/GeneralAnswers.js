import { AnimatePresence, motion, isValidMotionProp } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { addFeedBack, updateRegistry } from '../../store';
import { Form } from 'antd';
import { Input, Flex, FormControl, FormLabel, Text, chakra, shouldForwardProp } from '@chakra-ui/react';
import { BooleanYesNo, DateAndTime, Address, FormInput } from '../../components/buttons/RegistryResponseComponents.js';
import { listVariants, itemVariants } from '../../data/containerVariants';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });



function GeneralAnswers() {
    const { index, registry, registryReport } = useSelector((state) => {
        return {
            index: state.index.index,
            registry: state.index.registry,
            registryReport: state.index.registry.registryReport,
        };
    });

    const dispatch = useDispatch();
    const questionIndex = index;
    const TextArea = Input;

    console.log(registry.registryReport);
    console.log(index);


    return (
        <ChakraBox className=''>
                            <ChakraBox>
                            <AnimatePresence mode='wait' >
            { questionIndex === 2 ? ( //Are you in immediate danger or in need of medical attention?
            <ChakraBox key={index} 
                variants={itemVariants}
                initial='hidden'
                animate='visible'
                exit='close'
            >
                    <BooleanYesNo name='immediateDangerOrMedicalAttention' />
            </ChakraBox>
            ) : questionIndex === 3 ? ( // When did the incident happen?
            <ChakraBox key={index} 
                variants={itemVariants}
                initial='hidden'
                animate='visible'
                exit='close'
            >
                    <DateAndTime />
            </ChakraBox>
            ) : questionIndex === 4 ? ( //Where did the incident occur?
            <ChakraBox key={index} 
                variants={itemVariants}
                initial='hidden'
                animate='visible'
                exit='close'
            >
                    <Address />
            </ChakraBox>
            ) : questionIndex === 5 ? ( // Can you provide a detailed account of the incident(s)? What happened?
            <ChakraBox key={index} 
                variants={itemVariants}
                initial='hidden'
                animate='visible'
                exit='close'
            >
                    <FormInput name='detailsOfIncident' />
                </ChakraBox>
            ) : questionIndex === 6 ? ( // Name of person responsible for incident?
            <ChakraBox key={index} 
                variants={itemVariants}
                initial='hidden'
                animate='visible'
                exit='close'
            >
                    <FormControl>
                        <FormLabel color='rgb(147,154,236)' >Desciption of what happened</FormLabel>
                            <Input 
                                type='text'
                                name='peopleInvolved'
                                h={20}
                                width={{ base: '20em', md: '18em', lg: '24em' }} 
                                onChange={e => dispatch(updateRegistry({...registryReport, [e.target.name]: e.target.value}))}
                                placeholder="Brief description"
                            />
                    </FormControl>
                </ChakraBox>
            ) : questionIndex === 7 ? ( // Are there any witnesses who saw the incident
            <ChakraBox key={index} 
                variants={itemVariants}
                initial='hidden'
                animate='visible'
                exit='close'
            >
                    <FormControl>
                        <FormLabel color='rgb(147,154,236)' >List Individuals Who Physically Witnessed Event</FormLabel>
                            <Input 
                              type='text'
                              name='witnesses'
                                h={20}
                                width={{ base: '20em', md: '20em', lg: '26em' }} 
                                onChange={e => dispatch(updateRegistry({...registryReport, [e.target.name]: e.target.value}))}
                                placeholder="Name1, name2, name3.."
                            />
                    </FormControl>
                </ChakraBox>

            ) : questionIndex === 8 ? ( // Is there any additional information or comments you would like to add?
            <ChakraBox key={index} 
                variants={itemVariants}
                initial='hidden'
                animate='visible'
                exit='close'
                >
                        <Form>
                            <div>
                            <Form.Item>
                            <TextArea
                                maxLength={100}
                                style={{
                                  height: 120,
                                  marginBottom: 24,
                                  width: 300,
                                }}
                                type='text'
                                name='additionalComments'
                                onChange={e => dispatch(updateRegistry({...registryReport, [e.target.name]: e.target.value}))}
                                placeholder="Person1, Person2, etc..."
                                />
                            </Form.Item>
                            </div>
                        </Form>
                </ChakraBox>    
            ) : questionIndex === 10 ? ( //a timestamped copy will be sent to the the email provided'
            <ChakraBox key={index} 
                variants={itemVariants}
                initial='hidden'
                animate='visible'
                exit='close'
            >
                            <Form.Item>
                            <TextArea
                                maxLength={100}
                                style={{
                                  height: 120,
                                  marginBottom: 24,
                                  width: 300,
                                }}
                                type='text'
                                name='feedback'
                                onChange={e => dispatch(addFeedBack({ feedback: e.target.value }))}
                                placeholder="Person1, Person2, etc..."
                                />
                            </Form.Item>
                </ChakraBox>
            ) : questionIndex === 11 ? (
                <div>Complete</div>
            ) : null
                }
                        </AnimatePresence>
        </ChakraBox>
        </ChakraBox>
    )
}

export default GeneralAnswers;

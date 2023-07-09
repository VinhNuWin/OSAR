import { AnimatePresence, motion, isValidMotionProp } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { updateRegistry } from '../../store';
import { Form } from 'antd';
import { Input, Flex, FormControl, FormLabel, Text, chakra, shouldForwardProp } from '@chakra-ui/react';
import { BooleanYesNo, DateAndTime, Address } from '../../components/buttons/RegistryResponseComponents.js';
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
    const questionIndex = index - 1;
    const TextArea = Input;

    console.log(registry.registryReport);
    console.log(index);


    return (
        <AnimatePresence >
        <ChakraBox 
        initial='hidden'
        animate='visible'
        variants={listVariants}>
                            <ChakraBox variants={itemVariants}>
            { questionIndex === 1 ? ( //Are you in immediate danger or in need of medical attention?
            <ChakraBox variants={itemVariants}  key={index} >
                    <BooleanYesNo name='immediateDangerOrMedicalAttention' />
            </ChakraBox>
            ) : questionIndex === 2 ? ( // When did the incident happen?
            <ChakraBox variants={itemVariants}  key={index} >
                <motion.div >
                    <DateAndTime />
                </motion.div>
            </ChakraBox>
            ) : questionIndex === 3 ? ( //Where did the incident occur?
                <motion.div variants={itemVariants}  key={index}  >
                    <Address />
                </motion.div>
            ) : questionIndex === 4 ? ( // Can you provide a detailed account of the incident(s)? What happened?
                <ChakraBox variants={itemVariants}  key={index}  >
                    <FormControl>
                        <FormLabel >Desciption of what happened</FormLabel>
                            <Input 
                                type='text'
                                name='detailsOfIncident'
                                h={20}
                                width={{ base: '12em', md: '14em', lg: '20em' }} 
                                onChange={e => dispatch(updateRegistry({...registryReport, [e.target.name]: e.target.value}))}
                                placeholder="Brief description"
                            />
                    </FormControl>
                </ChakraBox>
            ) : questionIndex === 5 ? ( // Name of person responsible for incident?
                <ChakraBox variants={itemVariants}  key={index}  >
                    <FormControl>
                        <FormLabel >Desciption of what happened</FormLabel>
                            <Input 
                                type='text'
                                name='detailsOfIncident'
                                h={20}
                                width={{ base: '12em', md: '14em', lg: '20em' }} 
                                onChange={e => dispatch(updateRegistry({...registryReport, [e.target.name]: e.target.value}))}
                                placeholder="Brief description"
                            />
                    </FormControl>
                </ChakraBox>
            ) : questionIndex === 6 ? ( // Are there any witnesses who saw the incident
                <ChakraBox variants={itemVariants}  key={index}  >
                    <FormControl>
                        <FormLabel >List Individuals Who Physically Witnessed Event</FormLabel>
                            <Input 
                              type='text'
                              name='witnesses'
                                h={20}
                                width={{ base: '12em', md: '14em', lg: '24em' }} 
                                onChange={e => dispatch(updateRegistry({...registryReport, [e.target.name]: e.target.value}))}
                                placeholder="Name1, name2, name3.."
                            />
                    </FormControl>
                </ChakraBox>

            ) : questionIndex === 7 ? ( // Is there any additional information or comments you would like to add?
                <ChakraBox variants={itemVariants}  key={index}  >
                        <Form>
                            <div>
                            <Form.Item>
                            <TextArea
                                showCount
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
            ) : questionIndex === 8 ? ( // Your registry has been reported, a timestamped copy will be sent to the the email provided'
                <ChakraBox variants={itemVariants}  key={index}  >
                    <Text>
                        If you are in need of help, respond to the email for further assistance and support.
                    </Text>
                </ChakraBox>
            ) : questionIndex === null (

            )
                }
        </ChakraBox>
        </ChakraBox>
        </AnimatePresence>
    )
}

export default GeneralAnswers;

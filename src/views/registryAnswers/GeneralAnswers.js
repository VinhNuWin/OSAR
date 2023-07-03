import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { updateRegistry } from '../../store';
import { Form } from 'antd';
import { Input, Flex, FormControl, FormLabel, Text } from '@chakra-ui/react';
import { BooleanYesNo, DateAndTime, Address } from '../../components/buttons/RegistryResponseComponents.js';


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
        <Flex >
            { questionIndex === 1 ? ( //Are you in immediate danger or in need of medical attention?
            <Flex >
                <div>
                    <BooleanYesNo name='immediateDangerOrMedicalAttention' />
                </div>
            </Flex>
            ) : questionIndex === 2 ? ( // When did the incident happen?
            <Flex >
                <motion.div  >
                    <DateAndTime />
                </motion.div>
            </Flex>
            ) : questionIndex === 3 ? ( //Where did the incident occur?
                <motion.div  >
                    <Address />
                </motion.div>
            ) : questionIndex === 4 ? ( // Can you provide a detailed account of the incident(s)? What happened?
            <motion.div className='' >
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
        </motion.div>
            ) : questionIndex === 5 ? ( // Name of person responsible for incident?
            <motion.div className='' >
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
        </motion.div>
            ) : questionIndex === 6 ? ( // Are there any witnesses who saw the incident
            <motion.div className='' >
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
        </motion.div>

            ) : questionIndex === 7 ? ( // Is there any additional information or comments you would like to add?
                <motion.div className='flex-box'>
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
                    </motion.div>            
            ) : questionIndex === 8 ? ( // Your registry has been reported, a timestamped copy will be sent to the the email provided'
                <motion.div className='flex-box'>
                    <Text>
                        If you are in need of help, respond to the email for further assistance and support.
                    </Text>
                </motion.div>
            ) : questionIndex === null (

            )
                }
        </Flex>
    )
}

export default GeneralAnswers;

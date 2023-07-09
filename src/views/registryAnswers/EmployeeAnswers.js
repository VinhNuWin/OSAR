import { AnimatePresence, motion, isValidMotionProp } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { updateIncident, updateAssailant, addSurvivor, updateRegistry } from '../../store';
import { Form } from 'antd';
import { Button, Text, Select, Input, Flex, chakra, shouldForwardProp, FormControl, FormLabel } from '@chakra-ui/react';
import AddressModal from '../../components/modals/AddressModal';
import { CloseIcon, CheckIcon } from '@chakra-ui/icons';
import { BooleanYesNo, BooleanIfYesName, DateAndTime, Address, FullNameAndTitle } from '../../components/buttons/RegistryResponseComponents.js';
import BackButton from '../../components/buttons/BackButton';
import RegistryComplete from '../pages/RegistryComplete';
// import FullNameAndTitle from '../../components/buttons/RegistryResponseComponents/FullNameAndTitle';
import NextButton from '../../components/buttons/NextButton';
import NameModal from '../../components/modals/NameModal';
import { listVariants, itemVariants } from '../../data/containerVariants';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });


function EmployeeAnswers() {
    const { index, registry, registryReport, registryType, location, date, streetAddress, city, state, zipcode, fullName, title, detailsOfIncident, peopleInvolved, witnesses, incidentOutcome, abilitiesAffected, seekedMedicalAttention, reportedToHigherPersonel, personalAffect, actionsTakenSinceIncident, additionalComments } = useSelector((state) => {
        return {
            index: state.index.index,
            _id: state.index.registry._id,
            registry: state.index.registry,
            registryReport: state.index.registry.registryReport,
        };
    });

    const dispatch = useDispatch();
    const questionIndex = index - 1;
    const TextArea = Input;

    const inputsArray = [
        <Input variant='flushed' name='fullName' placeholder="Full Name" width={{ base: '12em', md: '14em', lg: '20em' }}  onChange={(e)=> dispatch(updateRegistry({ ...registryReport, [e.target.name]: e.target.value}))} />,
        <Input variant='flushed'  name='title' placeholder='Job Title' onChange={(e) => dispatch(updateRegistry({ ...registryReport, [e.target.name]: e.target.value}))} />
    ];

    console.log(registry.registryReport);
    console.log(index);


    return (
        <AnimatePresence >
        <ChakraBox 
        initial='hidden'
        animate='visible'
        variants={listVariants}>
                            <ChakraBox variants={itemVariants}>
            { questionIndex === 1 ? ( //Can you provide your full name and your job title
                <ChakraBox variants={itemVariants}>
                        <FormControl>
                            <Input variant='flushed' name='fullName' placeholder="Full Name" width={{ base: '12em', md: '14em', lg: '20em' }}  onChange={(e)=> dispatch(updateRegistry({ ...registryReport, [e.target.name]: e.target.value}))} />
                        </FormControl>
    
                    <FormControl mt={3}>
                            <Input variant='flushed'  name='title' placeholder='Job Title' onChange={(e) => dispatch(updateRegistry({ ...registryReport, [e.target.name]: e.target.value}))} />
                    </FormControl>

                </ChakraBox>
            ) : questionIndex === 2 ? ( //What is the date and approximate time of the incident
                <ChakraBox variants={itemVariants}>
                    <DateAndTime />
                </ChakraBox>
            ) : questionIndex === 3 ? ( // Where did the incident take place
                         <ChakraBox variants={itemVariants}>
                                <Address />
                       </ChakraBox>
            ) : questionIndex === 4 ? ( // Who were the people involved in the incident
         <ChakraBox variants={itemVariants}>
                <FormControl>
                    <FormLabel >List Individuals Directly Involved</FormLabel>
                        <Input 
                            type='text'
                            name='peopleInvolved'
                            h={20}
                            width={{ base: '12em', md: '14em', lg: '20em' }} 
                            onChange={e => dispatch(updateRegistry({...registryReport, [e.target.name]: e.target.value}))}
                            placeholder="Name1, Name2, etc..."
                        />
                </FormControl>
       </ChakraBox>

            ) : questionIndex === 5 ? ( // Can you describe the incident in as much detail as possible
            <motion.div className='flex-box'>
                <ChakraBox variants={itemVariants}>
                    <Form>
                          <div>
                          <Form.Item>
                            <FormLabel>Description</FormLabel>
                          <TextArea
                              showCount
                              maxLength={200}
                              style={{
                                height: 100,
                                marginBottom: 24,
                                width: 400,
                              }}
                              type='text'
                              name='detailsOfIncident'
                              onChange={e => dispatch(updateRegistry({...registryReport, [e.target.name]: e.target.value}))}
                              placeholder="Bullet Point of events"
                              />
                          </Form.Item>
                          </div>
                      </Form>
                    </ChakraBox> 
      </motion.div>
            ) : questionIndex === 6 ? ( // Were there any witnesses to the incident? If yes, who were they
                <ChakraBox variants={itemVariants}>
                    <FormControl>
                        <FormLabel >List Individuals Who Physically Witnessed Event</FormLabel>
                            <Input 
                              type='text'
                              name='witnesses'
                                h={20}
                                width={{ base: '12em', md: '14em', lg: '24em' }} 
                                onChange={e => dispatch(updateRegistry({...registryReport, [e.target.name]: e.target.value}))}
                                placeholder="Name1, Name2, etc..."
                            />
                    </FormControl>
                </ChakraBox>
            ) : questionIndex === 7 ? ( // What was the immediate outcome of the incident
            <ChakraBox variants={itemVariants}>
                <FormControl>
                    <FormLabel >Brief description of direct outcome of incident</FormLabel>
                        <Input 
                          type='text'
                            h={20}
                            width={{ base: '12em', md: '14em', lg: '24em' }} 
                            name='incidentOutcome'
                            onChange={e => dispatch(updateRegistry({...registryReport, [e.target.name]: e.target.value}))}
                            placeholder="What happened from this incident.."
                        />
                    </FormControl>
            </ChakraBox>
            ) : questionIndex === 8 ? ( // Did the incident affect your ability to perform your job? If so, how
                <ChakraBox variants={itemVariants}>
                    <FormControl>
                        <FormLabel>How did the incident effect your work</FormLabel>
                            <Input 
                              type='text'
                                h={20}
                                width={{ base: '12em', md: '14em', lg: '24em' }} 
                                            name='abilitiesAffected'
                                            onChange={e => dispatch(updateRegistry({...registryReport, [e.target.name]: e.target.value}))}
                                            placeholder="Brief description.."
                                            />
                                    </FormControl>
                </ChakraBox>
            ) : questionIndex === 9 ? ( // Did you seek medical attention as a result of the incident
                <ChakraBox variants={itemVariants}>
                    <BooleanYesNo name={'seekedMedicalAttention'}/>
                </ChakraBox>
            ) : questionIndex === 10 ? ( // Have you reported the incident to your direct supervisor or manager
                <ChakraBox variants={itemVariants}>
                <BooleanYesNo name={'reportedToHigherPersonel'} />
                </ChakraBox>
            ) : questionIndex === 11 ? ( // Has any action been taken since the incident
                <ChakraBox variants={itemVariants}>
                <BooleanYesNo name={'actionsTakenSinceIncident'} />
                </ChakraBox>
            ) : questionIndex === 12 ? ( // How has the incident impacted you personally
                <ChakraBox variants={itemVariants}>
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
                                    name='personalAffect'
                                    onChange={e => dispatch(updateRegistry({...registryReport, [e.target.name]: e.target.value}))}
                                    placeholder="Person1, Person2, etc..."
                                    />
                                </Form.Item>
                                </div>
                            </Form>
                </ChakraBox>    
            ) : questionIndex === 13 ? ( // Is there any additional information or comments you would like to add
                <ChakraBox variants={itemVariants}>
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
            ) : questionIndex === 14 ? ( // Would you like information or support services available to you, such as senior services, legal advice, or counseling?
            <motion.div className='flex-box'>
                <Text>
                    If you are in need of help, respond to the email for further assistance and support.
                </Text>
            </motion.div>
            ) : questionIndex === null (
                
            )
                }

        </ChakraBox>
        </ChakraBox>
        </AnimatePresence>
    )
}

export default EmployeeAnswers;

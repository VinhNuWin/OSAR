import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { updateIncident, updateAssailant, addSurvivor, updateRegistry } from '../../store';
import { Form } from 'antd';
import { Button, Text, Select, Input, Flex, Card, CardHeader, FormControl, FormLabel } from '@chakra-ui/react';
import AssailantNameModal from '../../components/modals/FullNameAndTitleModal';
import AddressModal from '../../components/modals/AddressModal';
import { CloseIcon, CheckIcon } from '@chakra-ui/icons';
import { BooleanYesNo, BooleanIfYesName, DateAndTime, Address, FullNameAndTitle } from '../../components/buttons/RegistryResponseComponents.js';
import BackButton from '../../components/buttons/BackButton';
import RegistryComplete from '../pages/RegistryComplete';
// import FullNameAndTitle from '../../components/buttons/RegistryResponseComponents/FullNameAndTitle';
import NextButton from '../../components/buttons/NextButton';
import NameModal from '../../components/modals/NameModal';

function EmployeeAnswers() {
    const { index, _id, employeeRegistry, registryType, location, date, streetAddress, city, state, zipcode, fullName, title, detailsOfIncident, peopleInvolved, witnesses, incidentOutcome, abilitiesAffected, seekedMedicalAttention, reportedToHigherPersonel, personalAffect, actionsTakenSinceIncident, additionalComments } = useSelector((state) => {
        return {
            index: state.index.index,
            _id: state.index.employeeRegistry._id,
            employeeRegistry: state.index.employeeRegistry,
            date: state.index.employeeRegistry.date,
            streetAddress: state.index.employeeRegistry.address.streetAddress,
            fullName: state.index.employeeRegistry.fullName,
            title: state.index.employeeRegistry.title,
            city: state.index.employeeRegistry.address.city,
            state: state.index.employeeRegistry.address.state,
            zipcode: state.index.employeeRegistry.address.zipcode,
            detailsOfIncident: state.index.employeeRegistry.detailsOfIncident,
            peopleInvolved: state.index.employeeRegistry.peopleInvolved,
            witnesses: state.index.employeeRegistry.witnesses,
            incidentOutcome: state.index.employeeRegistry.incidentOutcome,
            abilitiesAffected: state.index.employeeRegistry.abilitiesAffected,
            seekedMedicalAttention: state.index.employeeRegistry.seekedMedicalAttention,
            reportedToHigherPersonel: state.index.employeeRegistry.reportedToHigherPersonel,
            personalAffect: state.index.employeeRegistry.personalAffect,
            actionsTakenSinceIncident: state.index.employeeRegistry.actionsTakenSinceIncident,
            additionalComments: state.index.employeeRegistry.additionalComments
        };
    });

    const dispatch = useDispatch();
    const questionIndex = index - 1;
    const TextArea = Input;

    console.log(employeeRegistry);
    console.log(index);


    return (
        <Flex >
            { questionIndex === 1 ? ( //Can you provide your full name and your job title
            <Flex >
                    <FullNameAndTitle />
            </Flex>
            ) : questionIndex === 2 ? ( //What is the date and approximate time of the incident
                    <motion.div >
                        <DateAndTime />
                    </motion.div>
            ) : questionIndex === 3 ? ( // Where did the incident take place
                <motion.div  >
                    <Address />
                </motion.div>
            ) : questionIndex === 4 ? ( // Who were the people involved in the incident
            <motion.div className='' >
                <FormControl>
                    <FormLabel >List Individuals Directly Involved</FormLabel>
                        <Input 
                            type='text'
                            name='peopleInvolved'
                            h={20}
                            width={{ base: '12em', md: '14em', lg: '20em' }} 
                            onChange={e => dispatch(updateRegistry({...employeeRegistry, [e.target.name]: e.target.value}))}
                            placeholder="Name1, Name2, etc..."
                        />
                </FormControl>
            </motion.div>

            ) : questionIndex === 5 ? ( // Can you describe the incident in as much detail as possible
            <motion.div className='flex-box'>
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
                              onChange={e => dispatch(updateRegistry({...employeeRegistry, [e.target.name]: e.target.value}))}
                              placeholder="Bullet Point of events"
                              />
                          </Form.Item>
                          </div>
                      </Form>
      </motion.div>
            ) : questionIndex === 6 ? ( // Were there any witnesses to the incident? If yes, who were they
            <motion.div className='' >
            <FormControl>
                <FormLabel >List Individuals Who Physically Witnessed Event</FormLabel>
                    <Input 
                      type='text'
                      name='witnesses'
                        h={20}
                        width={{ base: '12em', md: '14em', lg: '24em' }} 
                        onChange={e => dispatch(updateRegistry({...employeeRegistry, [e.target.name]: e.target.value}))}
                        placeholder="Name1, Name2, etc..."
                    />
            </FormControl>
        </motion.div>
            ) : questionIndex === 7 ? ( // What was the immediate outcome of the incident
            <motion.div className='' >
            <FormControl>
                <FormLabel >Brief description of direct outcome of incident</FormLabel>
                    <Input 
                      type='text'
                        h={20}
                        width={{ base: '12em', md: '14em', lg: '24em' }} 
                        name='incidentOutcome'
                        onChange={e => dispatch(updateRegistry({...employeeRegistry, [e.target.name]: e.target.value}))}
                        placeholder="What happened from this incident.."
                    />
            </FormControl>
        </motion.div>
            ) : questionIndex === 8 ? ( // Did the incident affect your ability to perform your job? If so, how
            <motion.div className='' >
            <FormControl>
                <FormLabel>How did the incident effect your work</FormLabel>
                    <Input 
                      type='text'
                        h={20}
                        width={{ base: '12em', md: '14em', lg: '24em' }} 
                                    name='abilitiesAffected'
                                    onChange={e => dispatch(updateRegistry({...employeeRegistry, [e.target.name]: e.target.value}))}
                                    placeholder="Brief description.."
                                    />
                            </FormControl>
                        </motion.div>
            ) : questionIndex === 9 ? ( // Did you seek medical attention as a result of the incident
            <motion.div>
                <BooleanYesNo name={'seekedMedicalAttention'}/>
            </motion.div>
            ) : questionIndex === 10 ? ( // Have you reported the incident to your direct supervisor or manager
            <motion.div className='flex-box'>
                <BooleanYesNo name={'reportedToHigherPersonel'} />
            </motion.div>
            ) : questionIndex === 11 ? ( // Has any action been taken since the incident
            <motion.div className='flex-box'>
                <BooleanYesNo name={'actionsTakenSinceIncident'} />
            </motion.div>
            ) : questionIndex === 12 ? ( // How has the incident impacted you personally
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
                                    name='personalAffect'
                                    onChange={e => dispatch(updateRegistry({...employeeRegistry, [e.target.name]: e.target.value}))}
                                    placeholder="Person1, Person2, etc..."
                                    />
                                </Form.Item>
                                </div>
                            </Form>
            </motion.div>      
            ) : questionIndex === 13 ? ( // Is there any additional information or comments you would like to add
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
                                    onChange={e => dispatch(updateRegistry({...employeeRegistry, [e.target.name]: e.target.value}))}
                                    placeholder="Person1, Person2, etc..."
                                    />
                                </Form.Item>
                                </div>
                            </Form>
            </motion.div>            
            ) : questionIndex === 15 ? (
                <div>
                    <RegistryComplete />
                </div>  
            ) : questionIndex === null (
                
            )
                }
        </Flex>
    )
}

export default EmployeeAnswers;

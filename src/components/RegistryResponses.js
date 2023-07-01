import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { updateRegistry } from '../store';
import { Form } from 'antd';
import { Button, Text, Select, Input, Flex, Stack, Card, CardHeader } from '@chakra-ui/react';
import FullNameAndTitleModal from './modals/FullNameAndTitleModal';
import AddressModal from './modals/AddressModal';
import { CloseIcon, CheckIcon } from '@chakra-ui/icons';

function RegistryResponses() {
    const { index, employeeRegistry, registry } = useSelector((state) => {
        return {
            store: state,
            index: state.index.index,
            _id: state.form.user._id,
            employeeRegistry: state.index.employeeRegistry,
            registry: state.index.registry
        };
    });

    const dispatch = useDispatch();
    const questionIndex = index;
    const TextArea = Input;

    return (
        <div className=''>
            <AnimatePresence>
            { questionIndex === 1 ? ( //when did the incident occur "date"
                <div>    
                    <Input
                         placeholder="Select Date and Time"
                         size="md"
                         type="datetime-local"
                         onChange={(datetime) => dispatch(employeeRegistry({...employeeRegistry, date: datetime.target.value}))}
                        />
                </div>
            ) : questionIndex === 2 ? ( // do you remember where the incident occured? "incidentLocation"
                    <motion.div className='flex-box'>
                        <AddressModal />
   
                    </motion.div>
            ) : questionIndex === 3 ? ( // Was Alcohol Involved "alcoholInvolved"
                <motion.div className='flex-box'>
                        <Button variant='booleanButton' onClick={() => dispatch(employeeRegistry({...employeeRegistry, wasAlcoholInvolved: true}))}>
                        <CheckIcon w={8} boxSize={5} color='green.500' m='1%' />
                            Yes
                        </Button>
                        <Button variant='booleanButton' onClick={() => dispatch(employeeRegistry({...employeeRegistry, wasAlcoholInvolved: false}))}>
                        <CloseIcon w={8} boxSize={4} color='red.500' m='1%' />
                            No
                        </Button>
                </motion.div>
            ) : questionIndex === 4 ? ( // Were Drugs Involved "drugsInvolved"    
                <div className='flex-box'>       
                        <Button variant='booleanButton' onClick={() => dispatch(employeeRegistry({...employeeRegistry, wereDrugsInvolved: true}))}>
                            <CheckIcon w={8} boxSize={5} color='green.500' m='1%' />
                              Yes
                        </Button>    
                        <Button variant='booleanButton' onClick={() => dispatch(employeeRegistry({...employeeRegistry, wereDrugsInvolved: false}))}>
                            <CloseIcon w={8} boxSize={4} color='red.500' m='1%' />
                              No
                        </Button>
                    </div>
            ) : questionIndex === 5 ? ( // Was Survivor Asleep at time of Incident "survivorAsleep"
                <div className='flex-box'>  
                    <Button variant='booleanButton' onClick={() => dispatch(employeeRegistry({...employeeRegistry, wasSurvivorAsleepTimeOfIncident: true}))}>
                        <CheckIcon w={8} boxSize={5} color='green.500' m='1%' />
                              Yes
                    </Button>           
                    <Button variant='booleanButton' onClick={() => dispatch(employeeRegistry({...employeeRegistry, wasSurvivorAsleepTimeOfIncident: false}))}>
                        <CloseIcon w={8} boxSize={4} color='red.500' m='1%' />
                              No
                    </Button>            
                </div>   
            ) : questionIndex === 6 ? ( // Were there verbal threats to the survivor
                <div className='flex-box'>
                    <Button variant='booleanButton' onClick={() => dispatch(employeeRegistry({...employeeRegistry, verbalThreatsToSurvivor: true}))}>
                        <CheckIcon w={8} boxSize={5} color='green.500' m='1%' />
                              Yes
                    </Button>  
                    <Button variant='booleanButton' onClick={() => dispatch(employeeRegistry({...employeeRegistry, verbalThreatsToSurvivor: false}))}>
                        <CloseIcon w={8} boxSize={4} color='red.500' m='1%' />    
                              No
                    </Button>
                </div>   
            ) : questionIndex === 7 ? ( // Was resistance offered by survivor
                <div className='flex-box'>
                    <Button variant='booleanButton' onClick={() => dispatch(employeeRegistry({...employeeRegistry, resistanceOfferedBySurvivor: true}))}>
                        <CheckIcon w={8} boxSize={5} color='green.500' m='1%' />
                              Yes
                    </Button>       
                    <Button variant='booleanButton' onClick={() => dispatch(employeeRegistry({...employeeRegistry, resistanceOfferedBySurvivor: false}))}>
                        <CloseIcon w={8} boxSize={4} color='red.500' m='1%' />
                              No
                    </Button>
                    </div>
            ) : questionIndex === 8 ? ( // Details of the assault
                    <div className=''>
                            <Form>
                                <div>
                                <Form.Item>
                                <TextArea
                                    showCount
                                    maxLength={100}
                                    style={{
                                      height: 120,
                                      marginBottom: 24,
                                    }}
                                    type='text'
                                    name='detailsOfTheAssault'
                                    onChange={e => dispatch(employeeRegistry({...employeeRegistry, [e.target.name]: e.target.value}))}
                                    placeholder="In your own words a brief description of the event"
                                    />
                                </Form.Item>
                                </div>
                            </Form>
                        </div>
            ) : questionIndex === 9 ? ( // Areas assaulted ** add staggered button selections
            <div className=''>
                <Form>
                    <div>
                    <Form.Item>
                    <TextArea
                        showCount
                        maxLength={100}
                        style={{
                          height: 120,
                          marginBottom: 24,
                        }}
                        type='text'
                        name='areasAssaulted'
                        onChange={e => dispatch(employeeRegistry({...employeeRegistry, [e.target.name]: e.target.value}))}
                        placeholder="List areas assaulted ie. 'face, arms, groin, etc...' "
                        />
                    </Form.Item>
                    </div>
                </Form>
            </div>
            ) : questionIndex === 10 ? ( // Use of weapons
                <div>
                    <Button variant='booleanButton' onClick={() => dispatch(employeeRegistry({...employeeRegistry, useOfWeaponsFromAssailant: true}))}>
                        <CheckIcon w={8} boxSize={5} color='green.500' m='1%' />
                              Yes
                    </Button>  
                    <Button variant='booleanButton' onClick={() => dispatch(employeeRegistry({...employeeRegistry, useOfWeaponsFromAssailant: false}))}>
                        <CloseIcon w={8} boxSize={4} color='red.500' m='1%' />
                              No
                    </Button>
                </div>                        
            ) : questionIndex === 11 ? ( // Use of Restraints 
                <div>
                    <Button variant='booleanButton' onClick={() => dispatch(employeeRegistry({...employeeRegistry, useOfRestraintFromAssailant: true}))}>
                        <CheckIcon w={8} boxSize={5} color='green.500' m='1%' />
                              Yes
                    </Button> 
                    <Button variant='booleanButton' onClick={() => dispatch(employeeRegistry({...employeeRegistry, useOfRestraintFromAssailant: false}))}>
                        <CloseIcon w={8} boxSize={4} color='red.500' m='1%' />
                              No
                    </Button>
                </div>        
            ) : questionIndex === 12 ? ( // Assailants Gender
                <motion.div>
                    <Button variant='selectButton' onChange={() => dispatch(employeeRegistry({...employeeRegistry, gender: 'male'}))}>
                              Male
                    </Button>
                    <Button variant='selectButton' onChange={() => dispatch(employeeRegistry({...employeeRegistry, gender: 'female'}))}>
                              Female
                    </Button>
                    <Button variant='selectButton' onChange={() => dispatch(employeeRegistry({...employeeRegistry, gender: 'non-binary'}))}>
                              Non-Binary
                    </Button>  
                    <Button variant='selectButton' onChange={() => dispatch(employeeRegistry({...employeeRegistry, gender: 'unknown'}))}>
                              Unknown
                    </Button> 
                </motion.div>                     
            ) : questionIndex === 13 ? ( // Assailants Race/Ethnicity
                <div className=''>  
                            <Card>
                                <CardHeader size='sm'> 
     
                                <Select
                                    placeholder='Ethnicity'
                                    name='raceEthnicity'
                                    onChange={(e) => dispatch(employeeRegistry({ ...employeeRegistry, raceEthnicity: e.target.value}))}
                                    >
                                    <option value='white'>White</option>
                                    <option value='black/african'>Black or African American</option>
                                    <option value='americanIndian/alaskanNative'>American Indian or Alaskan Native</option>
                                    <option value='hawaiian/pacificIslander'>Native Hawaiian or Pacific Islander</option>
                                    <option value='asian'>Asian</option>
                                    <option value='hispanic/latino'>Hispanic or Latino</option>
                                </Select>  
                                </CardHeader>     
                            </Card>     
                </div>
            ) : questionIndex === 14 ? ( // Do you know the assailants name?
                <div>
                    <FullNameAndTitleModal />
                    <motion.div>
                        <Button variant='booleanButton'>
                        <CloseIcon w={8} boxSize={4} color='red.500' m='1%'/>
                          No
                        </Button>  
                    </motion.div>
                </div>                
            ) : questionIndex === 15 ? ( // Name of Survivor
                <div className=''>                        
                    <Form className='input-card'>
                        <Form.Item>                 
                            <Input 
                               placeholder="Name of Survivor"
                               name='survivor'
                               onChange={(e) => dispatch(employeeRegistry({ [e.target.name]: e.target.value}))} />
                            </Form.Item>     
                    </Form> 
                </div>
            ) : questionIndex === 16 ? ( // Assailants Gender
                <motion.div>
                    <Button variant='selectButton' onChange={() => dispatch(employeeRegistry({...employeeRegistry, genderSurvivor: 'male'}))}>
                              Male
                    </Button>
                    <Button variant='selectButton' onChange={() => dispatch(updateRegistry({...employeeRegistry, genderSurvivor: 'female'}))}>
                              Female
                    </Button>
                    <Button variant='selectButton' onChange={() => dispatch(updateRegistry({...employeeRegistry, genderSurvivor: 'non-binary'}))}>
                              Non-Binary
                    </Button>  
                    <Button variant='selectButton' onChange={() => dispatch(updateRegistry({...employeeRegistry, genderSurvivor: 'unknown'}))}>
                              Unknown
                    </Button> 
                </motion.div>  
            ) : questionIndex === null (
                
            )
                }
                </AnimatePresence>
                </div>
    )
}

export default RegistryResponses;

 
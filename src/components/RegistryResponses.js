import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { updateIncident, updateAssailant, addSurvivor, updateRegistry } from '../store';
import { Form } from 'antd';
import { Button, Text, Select, Input, Flex, Stack, Card, CardHeader } from '@chakra-ui/react';
import AssailantNameModal from '../views/modals/AssailantNameModal';
import AddressModal from '../views/modals/AddressModal';
import { CloseIcon, CheckIcon } from '@chakra-ui/icons';

function RegistryResponses() {
    const { index, incident, assailant, registry } = useSelector((state) => {
        return {
            store: state,
            index: state.index.index,
            _id: state.form.user._id,
            incident: state.index.registry.incident,
            assailant: state.index.registry.assailant,
            registry: state.index.registry
        };
    });

    const dispatch = useDispatch();
    const questionIndex = index;
    const TextArea = Input;

    console.log(incident);
    console.log(assailant);
    // console.log(survivor);



    return (
        <div className=''>
            <AnimatePresence>
            { questionIndex === 1 ? ( //when did the incident occur "date"
                <div>    
                    <Input
                         placeholder="Select Date and Time"
                         size="md"
                         type="datetime-local"
                         onChange={(datetime) => dispatch(updateIncident({...incident, date: datetime.target.value}))}
                        />
                </div>
            ) : questionIndex === 2 ? ( // do you remember where the incident occured? "incidentLocation"
                    <motion.div className='flex-box'>
                        <AddressModal />
                        <Button variant='booleanButton'>
                            <CloseIcon w={8} boxSize={4} color='red.500' m='1%' />
                            <Text>No</Text>
                        </Button>
                    </motion.div>
            ) : questionIndex === 3 ? ( // Was Alcohol Involved "alcoholInvolved"
                <motion.div className='flex-box'>
                        <Button variant='booleanButton' onClick={() => dispatch(updateIncident({...incident, wasAlcoholInvolved: true}))}>
                        <CheckIcon w={8} boxSize={5} color='green.500' m='1%' />
                            Yes
                        </Button>
                        <Button variant='booleanButton' onClick={() => dispatch(updateIncident({...incident, wasAlcoholInvolved: false}))}>
                        <CloseIcon w={8} boxSize={4} color='red.500' m='1%' />
                            No
                        </Button>
                </motion.div>
            ) : questionIndex === 4 ? ( // Were Drugs Involved "drugsInvolved"    
                <div className='flex-box'>       
                        <Button variant='booleanButton' onClick={() => dispatch(updateIncident({...incident, wereDrugsInvolved: true}))}>
                            <CheckIcon w={8} boxSize={5} color='green.500' m='1%' />
                              Yes
                        </Button>    
                        <Button variant='booleanButton' onClick={() => dispatch(updateIncident({...incident, wereDrugsInvolved: false}))}>
                            <CloseIcon w={8} boxSize={4} color='red.500' m='1%' />
                              No
                        </Button>
                    </div>
            ) : questionIndex === 5 ? ( // Was Survivor Asleep at time of Incident "survivorAsleep"
                <div className='flex-box'>  
                    <Button variant='booleanButton' onClick={() => dispatch(updateIncident({...incident, wasSurvivorAsleepTimeOfIncident: true}))}>
                        <CheckIcon w={8} boxSize={5} color='green.500' m='1%' />
                              Yes
                    </Button>           
                    <Button variant='booleanButton' onClick={() => dispatch(updateIncident({...incident, wasSurvivorAsleepTimeOfIncident: false}))}>
                        <CloseIcon w={8} boxSize={4} color='red.500' m='1%' />
                              No
                    </Button>            
                </div>   
            ) : questionIndex === 6 ? ( // Were there verbal threats to the survivor
                <div className='flex-box'>
                    <Button variant='booleanButton' onClick={() => dispatch(updateIncident({...incident, verbalThreatsToSurvivor: true}))}>
                        <CheckIcon w={8} boxSize={5} color='green.500' m='1%' />
                              Yes
                    </Button>  
                    <Button variant='booleanButton' onClick={() => dispatch(updateIncident({...incident, verbalThreatsToSurvivor: false}))}>
                        <CloseIcon w={8} boxSize={4} color='red.500' m='1%' />    
                              No
                    </Button>
                </div>   
            ) : questionIndex === 7 ? ( // Was resistance offered by survivor
                <div className='flex-box'>
                    <Button variant='booleanButton' onClick={() => dispatch(updateIncident({...incident, resistanceOfferedBySurvivor: true}))}>
                        <CheckIcon w={8} boxSize={5} color='green.500' m='1%' />
                              Yes
                    </Button>       
                    <Button variant='booleanButton' onClick={() => dispatch(updateIncident({...incident, resistanceOfferedBySurvivor: false}))}>
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
                                    onChange={e => dispatch(updateIncident({...incident, [e.target.name]: e.target.value}))}
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
                        onChange={e => dispatch(updateIncident({...incident, [e.target.name]: e.target.value}))}
                        placeholder="List areas assaulted ie. 'face, arms, groin, etc...' "
                        />
                    </Form.Item>
                    </div>
                </Form>
            </div>
            ) : questionIndex === 10 ? ( // Use of weapons
                <div>
                    <Button variant='booleanButton' onClick={() => dispatch(updateIncident({...incident, useOfWeaponsFromAssailant: true}))}>
                        <CheckIcon w={8} boxSize={5} color='green.500' m='1%' />
                              Yes
                    </Button>  
                    <Button variant='booleanButton' onClick={() => dispatch(updateIncident({...incident, useOfWeaponsFromAssailant: false}))}>
                        <CloseIcon w={8} boxSize={4} color='red.500' m='1%' />
                              No
                    </Button>
                </div>                        
            ) : questionIndex === 11 ? ( // Use of Restraints 
                <div>
                    <Button variant='booleanButton' onClick={() => dispatch(updateIncident({...incident, useOfRestraintFromAssailant: true}))}>
                        <CheckIcon w={8} boxSize={5} color='green.500' m='1%' />
                              Yes
                    </Button> 
                    <Button variant='booleanButton' onClick={() => dispatch(updateIncident({...incident, useOfRestraintFromAssailant: false}))}>
                        <CloseIcon w={8} boxSize={4} color='red.500' m='1%' />
                              No
                    </Button>
                </div>        
            ) : questionIndex === 12 ? ( // Assailants Gender
                <motion.div>
                    <Button variant='selectButton' onChange={() => dispatch(updateAssailant({...assailant, gender: 'male'}))}>
                              Male
                    </Button>
                    <Button variant='selectButton' onChange={() => dispatch(updateAssailant({...assailant, gender: 'female'}))}>
                              Female
                    </Button>
                    <Button variant='selectButton' onChange={() => dispatch(updateAssailant({...assailant, gender: 'non-binary'}))}>
                              Non-Binary
                    </Button>  
                    <Button variant='selectButton' onChange={() => dispatch(updateAssailant({...assailant, gender: 'unknown'}))}>
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
                                    onChange={(e) => dispatch(updateAssailant({ ...assailant, raceEthnicity: e.target.value}))}
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
                    <AssailantNameModal />
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
                               onChange={(e) => dispatch(addSurvivor({ [e.target.name]: e.target.value}))} />
                            </Form.Item>     
                    </Form> 
                </div>
            ) : questionIndex === 16 ? ( // Assailants Gender
                <motion.div>
                    <Button variant='selectButton' onChange={() => dispatch(updateRegistry({...registry, genderSurvivor: 'male'}))}>
                              Male
                    </Button>
                    <Button variant='selectButton' onChange={() => dispatch(updateRegistry({...registry, genderSurvivor: 'female'}))}>
                              Female
                    </Button>
                    <Button variant='selectButton' onChange={() => dispatch(updateRegistry({...registry, genderSurvivor: 'non-binary'}))}>
                              Non-Binary
                    </Button>  
                    <Button variant='selectButton' onChange={() => dispatch(updateRegistry({...registry, genderSurvivor: 'unknown'}))}>
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

 
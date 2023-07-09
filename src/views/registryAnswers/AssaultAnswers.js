import { AnimatePresence, motion, isValidMotionProp } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { updateRegistry } from '../../store';
import { Input, chakra, shouldForwardProp, Flex, FormControl, FormLabel, Button, Text, Card, CardHeader, Select} from '@chakra-ui/react';
import { BooleanYesNo, DateAndTime, Address } from '../../components/buttons/RegistryResponseComponents.js';
import RegistryComplete from '../pages/RegistryComplete';
import { listVariants, itemVariants } from '../../data/containerVariants';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });


function AssaultAnswers() {
    const { index, registryReport } = useSelector((state) => {
        return {
            index: state.index.index,
            registryReport: state.index.registry.registryReport,
        };
    });

    const dispatch = useDispatch();
    const questionIndex = index - 1;

    console.log(index);


    return (
        <AnimatePresence >
        <ChakraBox 
        initial='hidden'
        animate='visible'
        variants={listVariants}>
                            <ChakraBox variants={itemVariants}>
            { questionIndex === 1 ? ( //Can you please provide your full name?
             <div>
                <FormControl>
                    <Input variant='flushed' name='fullName' placeholder="Full Name" width={{ base: '12em', md: '14em', lg: '20em' }}  onChange={(e)=> dispatch(updateRegistry({ ...registryReport, [e.target.name]: e.target.value}))} />
                </FormControl>
            </div>
            ) : questionIndex === 2 ? ( //'When did the incident occur?
            <Flex >
                <div>
                <motion.div  >
                    <DateAndTime />
                </motion.div>
                </div>
            </Flex>
            ) : questionIndex === 3 ? ( // Do you remember where the incident occurred
                <motion.div  >
                    <Address />
                </motion.div>
            ) : questionIndex === 4 ? ( // Was Alcohol Involved
                <div>
                    <BooleanYesNo name='alcoholInvolved' />
                </div>
            ) : questionIndex === 5 ? ( // Were Drugs Involved
                <div>
                    <BooleanYesNo name='drugsInvolved' />
                </div>
            ) : questionIndex === 6 ? ( // Was Survivor Asleep at time of Incident
                <div>
                    <BooleanYesNo name='wasSurvivorAsleep' />
                </div>
            ) : questionIndex === 7 ? ( // Were there verbal threats to the survivor
                <div>
                    <BooleanYesNo name='verbalThreats' />
                </div>
            ) : questionIndex === 8 ? ( // Was resistance offered by survivor
                <div>
                    <BooleanYesNo name='resistanceOffered' />
                </div>
            ) : questionIndex === 9 ? ( // Details of the assault
            <motion.div className='' >
                <FormControl>
                    <FormLabel >Details of the assault</FormLabel>
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
            ) : questionIndex === 10 ? ( // Areas assaulted
          <div>

          </div>
            ) : questionIndex === 11 ? ( // Do you have any evidence of the abuse (like photographs of injuries, written communication, etc)?
            <motion.div>
                <BooleanYesNo name={'evidence'}/>
            </motion.div>
            ) : questionIndex === 12 ? ( // Use of weapons
            <motion.div className='flex-box'>
                <BooleanYesNo name={'useOfWeapons'} />
            </motion.div>
            ) : questionIndex === 13 ? ( // Use of Restraints
            <motion.div className='flex-box'>
                <BooleanYesNo name={'useOfRestraints'} />
            </motion.div>
            ) : questionIndex === 14 ? ( // Assailants Gender
                <motion.div>
                    <Button variant='selectButton' onChange={() => dispatch(updateRegistry({...registryReport, assailantGender: 'male'}))}>
                              Male
                    </Button>
                    <Button variant='selectButton' onChange={() => dispatch(updateRegistry({...registryReport, assailantGender: 'female'}))}>
                              Female
                    </Button>
                    <Button variant='selectButton' onChange={() => dispatch(updateRegistry({...registryReport, assailantGender: 'non-binary'}))}>
                              Non-Binary
                    </Button>  
                    <Button variant='selectButton' onChange={() => dispatch(updateRegistry({...registryReport, assailantGender: 'unknown'}))}>
                              Unknown
                    </Button> 
                </motion.div>    
            ) : questionIndex === 15 ? ( // Assailants Race/Ethnicity
                <div className=''>  
                    <Card>
                        <CardHeader size='sm'> 
                        <Select
                            placeholder='Ethnicity'
                            name='raceEthnicity'
                            onChange={(e) => dispatch(updateRegistry({ ...registryReport, raceEthnicity: e.target.value}))}
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
            ) : questionIndex === 16 ? ( // Do you know the assailants name?
            <div>
                <FormControl>
                    <Input variant='flushed' name='assailantsFullName' placeholder="Full Name" width={{ base: '12em', md: '14em', lg: '20em' }}  onChange={(e)=> dispatch(updateRegistry({ ...registryReport, [e.target.name]: e.target.value}))} />
                </FormControl>
            </div>
           ) : questionIndex === 17 ? ( // Name of Survivor
           <div>
           <FormControl>
               <Input variant='flushed' name='survivorsFullName' placeholder="Full Name" width={{ base: '12em', md: '14em', lg: '20em' }}  onChange={(e)=> dispatch(updateRegistry({ ...registryReport, [e.target.name]: e.target.value}))} />
           </FormControl>
       </div>
           ) : questionIndex === 18 ? ( //Survivor Gender
            <motion.div>
                    <Button variant='selectButton' onChange={() => dispatch(updateRegistry({...registryReport, survivorGender: 'male'}))}>
                              Male
                    </Button>
                    <Button variant='selectButton' onChange={() => dispatch(updateRegistry({...registryReport, survivorGender: 'female'}))}>
                              Female
                    </Button>
                    <Button variant='selectButton' onChange={() => dispatch(updateRegistry({...registryReport, survivorGender: 'non-binary'}))}>
                              Non-Binary
                    </Button>  
                    <Button variant='selectButton' onChange={() => dispatch(updateRegistry({...registryReport, survivorGender: 'unknown'}))}>
                              Unknown
                    </Button> 
                </motion.div>       
            ) : questionIndex === 19 ? ( // Would you like information or support services available to you, such as senior services, legal advice, or counseling?
            <motion.div className='flex-box'>
                <Text>
                    If you are in need of help, respond to the email for further assistance and support.
                </Text>
            </motion.div>             
            ) : questionIndex === null (
                <RegistryComplete />
            )
                }
        </ChakraBox>
        </ChakraBox>
        </AnimatePresence>
    )
}

export default AssaultAnswers;

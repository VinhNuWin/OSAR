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
            <ChakraBox variants={itemVariants}  key={index}>
                <FormControl>
                    <Input variant='flushed' name='fullName' placeholder="Full Name" width={{ base: '12em', md: '14em', lg: '20em' }}  onChange={(e)=> dispatch(updateRegistry({ ...registryReport, [e.target.name]: e.target.value}))} />
                </FormControl>
            </ChakraBox>
            ) : questionIndex === 2 ? ( //'When did the incident occur?
            <ChakraBox variants={itemVariants}  key={index}>
                <motion.div  >
                    <DateAndTime />
                </motion.div>
            </ChakraBox>
            ) : questionIndex === 3 ? ( // Do you remember where the incident occurred
            <ChakraBox variants={itemVariants}  key={index}>
                    <Address />
            </ChakraBox>
            ) : questionIndex === 4 ? ( // Was Alcohol Involved
            <ChakraBox variants={itemVariants}  key={index}>
                    <BooleanYesNo name='alcoholInvolved' />
            </ChakraBox>
            ) : questionIndex === 5 ? ( // Were Drugs Involved
            <ChakraBox variants={itemVariants}  key={index}>
                    <BooleanYesNo name='drugsInvolved' />
            </ChakraBox>
            ) : questionIndex === 6 ? ( // Was Survivor Asleep at time of Incident
                <ChakraBox variants={itemVariants}  key={index}>
                    <BooleanYesNo name='wasSurvivorAsleep' />
                </ChakraBox>
            ) : questionIndex === 7 ? ( // Were there verbal threats to the survivor
                <ChakraBox variants={itemVariants}  key={index}>
                    <BooleanYesNo name='verbalThreats' />
                </ChakraBox>
            ) : questionIndex === 8 ? ( // Was resistance offered by survivor
                <ChakraBox variants={itemVariants}  key={index}>
                    <BooleanYesNo name='resistanceOffered' />
                </ChakraBox>
            ) : questionIndex === 9 ? ( // Details of the assault
            <ChakraBox variants={itemVariants}  key={index}>
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
            </ChakraBox>
            ) : questionIndex === 10 ? ( // Areas assaulted
            <ChakraBox variants={itemVariants}  key={index}>

            </ChakraBox>
            ) : questionIndex === 11 ? ( // Do you have any evidence of the abuse (like photographs of injuries, written communication, etc)?
            <ChakraBox variants={itemVariants}  key={index}>
                <BooleanYesNo name={'evidence'}/>
            </ChakraBox>
            ) : questionIndex === 12 ? ( // Use of weapons
                <ChakraBox variants={itemVariants}  key={index}>
                <BooleanYesNo name={'useOfWeapons'} />
                </ChakraBox>
            ) : questionIndex === 13 ? ( // Use of Restraints
                <ChakraBox variants={itemVariants}  key={index}>
                    <BooleanYesNo name={'useOfRestraints'} />
                </ChakraBox>
            ) : questionIndex === 14 ? ( // Assailants Gender
                <ChakraBox variants={itemVariants}  key={index}>
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
                </ChakraBox>
            ) : questionIndex === 15 ? ( // Assailants Race/Ethnicity
                <ChakraBox variants={itemVariants}  key={index}>
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
                </ChakraBox>
            ) : questionIndex === 16 ? ( // Do you know the assailants name?
            <ChakraBox variants={itemVariants}  key={index}>
                <FormControl>
                    <Input variant='flushed' name='assailantsFullName' placeholder="Full Name" width={{ base: '12em', md: '14em', lg: '20em' }}  onChange={(e)=> dispatch(updateRegistry({ ...registryReport, [e.target.name]: e.target.value}))} />
                </FormControl>
            </ChakraBox>
           ) : questionIndex === 17 ? ( // Name of Survivor
            <ChakraBox variants={itemVariants}  key={index}>
                <FormControl>
                    <Input variant='flushed' name='survivorsFullName' placeholder="Full Name" width={{ base: '12em', md: '14em', lg: '20em' }}  onChange={(e)=> dispatch(updateRegistry({ ...registryReport, [e.target.name]: e.target.value}))} />
                </FormControl>
            </ChakraBox>
           ) : questionIndex === 18 ? ( //Survivor Gender
                <ChakraBox variants={itemVariants}  key={index}>
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
                </ChakraBox>     
            ) : questionIndex === 19 ? ( // Would you like information or support services available to you, such as senior services, legal advice, or counseling?
            <ChakraBox variants={itemVariants}  key={index}>
                <Text>
                    If you are in need of help, respond to the email for further assistance and support.
                </Text>
            </ChakraBox>
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

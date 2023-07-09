import { AnimatePresence, motion, isValidMotionProp } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { updateRegistry } from '../../store';
import { Form } from 'antd';
import { Input, FormControl, FormLabel, Text, chakra, shouldForwardProp } from '@chakra-ui/react';
import { BooleanYesNo, DateAndTime, Address } from '../../components/buttons/RegistryResponseComponents.js';
import RegistryComplete from '../pages/RegistryComplete';
import { listVariants, itemVariants } from '../../data/containerVariants';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });



function SpouseAnswers() {
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
            <ChakraBox variants={itemVariants}  key={index}>
                <div>
                    <BooleanYesNo name='immediateDangerOrMedicalAttention' />
                </div>
            </ChakraBox>
            ) : questionIndex === 2 ? ( //'Who is the person responsible for the abuse?'
            <ChakraBox variants={itemVariants}  key={index}>
                <div>
                    <FormControl>
                        <Input variant='flushed' name='fullName' placeholder="Full Name" width={{ base: '12em', md: '14em', lg: '20em' }}  onChange={(e)=> dispatch(updateRegistry({ ...registryReport, [e.target.name]: e.target.value}))} />
                    </FormControl>
                </div>
            </ChakraBox>
            ) : questionIndex === 3 ? ( // When did the incident happen?'
            <ChakraBox variants={itemVariants}  key={index}>
                    <DateAndTime />
            </ChakraBox>
            ) : questionIndex === 4 ? ( // Where did the incident occur?
            <ChakraBox variants={itemVariants}  key={index}>
                <Address />
            </ChakraBox>
            ) : questionIndex === 5 ? ( // Can you provide a detailed account of the incident(s)? What happened?
            <ChakraBox variants={itemVariants}  key={index}>
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
            ) : questionIndex === 6 ? ( // Were there any specific threats made? If yes, what were they?
            <ChakraBox variants={itemVariants}  key={index}>
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

            ) : questionIndex === 7 ? ( // Are there any witnesses who can corroborate the incident?
            <ChakraBox variants={itemVariants}  key={index}>
                <Form>
                          <div>
                          <Form.Item>
                            <FormLabel>Relationship</FormLabel>
                          <TextArea
                              maxLength={200}
                              style={{
                                height: 100,
                                marginBottom: 24,
                                width: 400,
                              }}
                              type='text'
                              name='relationshipToReporter'
                              onChange={e => dispatch(updateRegistry({...registryReport, [e.target.name]: e.target.value}))}
                              placeholder="ie: caregiver, family member, acquaintance.."
                              />
                          </Form.Item>
                          </div>
                      </Form>
            </ChakraBox>
            ) : questionIndex === 8 ? ( // Has this occured before? If so, have you reported it in the past?
            <ChakraBox variants={itemVariants}  key={index}>
            <FormControl>
                <FormLabel >Please list specific threats or actions that concern you </FormLabel>
                    <Input 
                      type='text'
                      name='concerningThreatsOrActions'
                        h={20}
                        width={{ base: '12em', md: '14em', lg: '24em' }} 
                        onChange={e => dispatch(updateRegistry({...registryReport, [e.target.name]: e.target.value}))}
                        placeholder="Your concerns regarding the person in question"
                    />
            </FormControl>
            </ChakraBox>
            ) : questionIndex === 9 ? ( // Do you have any physical, digital, or other types of evidence of the abuse (like photographs, emails, text messages, etc.)?
            <ChakraBox variants={itemVariants}  key={index}>
            <FormControl>
                <FormLabel >List any additional incidents</FormLabel>
                    <Input 
                      type='text'
                        h={20}
                        width={{ base: '12em', md: '14em', lg: '24em' }} 
                        name='additionalIncidentsOfAbuse'
                        onChange={e => dispatch(updateRegistry({...registryReport, [e.target.name]: e.target.value}))}
                        placeholder="List additional incidents of abuse.."
                    />
            </FormControl>
            </ChakraBox>
            ) : questionIndex === 10 ? ( // Are there any children or other dependents in the household? Are they in immediate danger?
            <ChakraBox variants={itemVariants}  key={index}>
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
            ) : questionIndex === 11 ? ( // Are there any weapons in the house?
            <ChakraBox variants={itemVariants}  key={index}>
                <BooleanYesNo name={'evidence'}/>
            </ChakraBox>
            ) : questionIndex === 12 ? ( // Do you have a safe place to stay after reporting this incident?
            <ChakraBox variants={itemVariants}  key={index}>
                <BooleanYesNo name={'otherPeopleAtRisk'} />
            </ChakraBox>
            ) : questionIndex === 13 ? ( // Do you feel safe in your current living situation?
            <ChakraBox variants={itemVariants}  key={index}>
                <BooleanYesNo name={'currentLivingSituationSafe'} />
            </ChakraBox>
            ) : questionIndex === 14 ? ( // Would you like to be referred to local support services for victims of domestic abuse?
            <ChakraBox variants={itemVariants}  key={index}>
                <BooleanYesNo name={'additionalSupportNeeded'} />
            </ChakraBox>
            ) : questionIndex === 15 ? ( // Would you like information or support services available to you, such as senior services, legal advice, or counseling?
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

export default SpouseAnswers;

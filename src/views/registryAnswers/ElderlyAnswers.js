import { AnimatePresence, motion, isValidMotionProp } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { updateRegistry } from '../../store';
import { Form } from 'antd';
import { Input, Flex, FormControl, FormLabel, Text, chakra, shouldForwardProp } from '@chakra-ui/react';
import { BooleanYesNo, DateAndTime, Address } from '../../components/buttons/RegistryResponseComponents.js';
import RegistryComplete from '../pages/RegistryComplete';
import { listVariants, itemVariants } from '../../data/containerVariants';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });



function ElderlyAnswers() {
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
            ) : questionIndex === 2 ? ( //'Can you please tell me your full name?
            <ChakraBox variants={itemVariants}  key={index}>
                <div>
                    <FormControl>
                        <Input variant='flushed' name='fullName' placeholder="Full Name" width={{ base: '12em', md: '14em', lg: '20em' }}  onChange={(e)=> dispatch(updateRegistry({ ...registryReport, [e.target.name]: e.target.value}))} />
                    </FormControl>
                </div>
            </ChakraBox>
            ) : questionIndex === 3 ? ( // When did the incident occur?
            <ChakraBox variants={itemVariants}  key={index}>
                    <DateAndTime />
            </ChakraBox>
            ) : questionIndex === 4 ? ( // Where did the incident occur?
            <ChakraBox variants={itemVariants}  key={index}>
                <Address />
            </ChakraBox>
            ) : questionIndex === 5 ? ( // Can you describe what happened in detail?
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
            ) : questionIndex === 6 ? ( // Who is the person involved in the abusive behavior?
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

            ) : questionIndex === 7 ? ( // Is this person your caregiver, family member, or someone else? What is their relationship to you?
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
            ) : questionIndex === 8 ? ( // Were there any specific threats or actions that were particularly concerning?
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
            ) : questionIndex === 9 ? ( // Have there been other instances of this abuse?
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
            ) : questionIndex === 10 ? ( // Were there any witnesses to the incident or previous incidents
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
            ) : questionIndex === 11 ? ( // Do you have any evidence of the abuse (like photographs of injuries, written communication, etc)?
            <ChakraBox variants={itemVariants}  key={index}>
                <BooleanYesNo name={'evidence'}/>
            </ChakraBox>
            ) : questionIndex === 12 ? ( // Are there any other people living with you or who could be at risk because of this person?
            <ChakraBox variants={itemVariants}  key={index}>
                <BooleanYesNo name={'otherPeopleAtRisk'} />
            </ChakraBox>
            ) : questionIndex === 13 ? ( // Do you feel safe in your current living situation?
            <ChakraBox variants={itemVariants}  key={index}>
                <BooleanYesNo name={'currentLivingSituationSafe'} />
            </ChakraBox>
            ) : questionIndex === 14 ? ( // Would you like information or support services available to you, such as senior services, legal advice, or counseling?
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

export default ElderlyAnswers;

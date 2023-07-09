import { AnimatePresence, motion, isValidMotionProp } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { updateRegistry } from '../../store';
import { Form } from 'antd';
import { Input, Flex, FormControl, FormLabel, Text, shouldForwardProp, chakra } from '@chakra-ui/react';
import { BooleanYesNo, DateAndTime, Address } from '../../components/buttons/RegistryResponseComponents.js';
import RegistryComplete from '../pages/RegistryComplete';
import { listVariants, itemVariants } from '../../data/containerVariants';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

function ChildrensAnswers() {
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
        variants={listVariants}
        >
            <ChakraBox
            variants={itemVariants}>
            { questionIndex === 1 ? ( //Are you in immediate danger or in need of medical attention?
            <Flex >
                <div>
                    <BooleanYesNo name='immediateDangerOrMedicalAttention' />
                </div>
            </Flex>
            ) : questionIndex === 2 ? ( //'How old are you?
            <Flex >
                <div>
                    <FormControl>
                        <Input variant='flushed' name='fullName' placeholder="Full Name" width={{ base: '12em', md: '14em', lg: '20em' }}  onChange={(e)=> dispatch(updateRegistry({ ...registryReport, [e.target.name]: e.target.value}))} />
                    </FormControl>
                </div>
            </Flex>
            ) : questionIndex === 3 ? ( //Do you require medical assistance?
                <motion.div  >
                    <DateAndTime />
                </motion.div>
            ) : questionIndex === 4 ? ( // Can you tell us what happened?
            <motion.div  >
                <Address />
            </motion.div>
            ) : questionIndex === 5 ? ( // Where did it happen?
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
            ) : questionIndex === 6 ? ( // Who is the person responsible for the abusive ?
            <motion.div className='' >
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
            </motion.div>

            ) : questionIndex === 7 ? ( // Were there any  specific threats made?, if yes, what were they?
            <motion.div className='flex-box'>
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
      </motion.div>
            ) : questionIndex === 8 ? ( // Are there any witnesses who saw the incident?'
            <motion.div className='' >
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
        </motion.div>
            ) : questionIndex === 9 ? ( // Has this occured before? If so, have you reported it in the past?
            <motion.div className='' >
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
        </motion.div>
            ) : questionIndex === 10 ? ( // Do you have any visible bruises and/or marks?
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
            ) : questionIndex === 11 ? ( // Are there any children or other dependents in the household? Are they in immediate danger?
            <motion.div>
                <BooleanYesNo name={'evidence'}/>
            </motion.div>
            ) : questionIndex === 12 ? ( // Are there any weapons in the house?
            <motion.div className='flex-box'>
                <BooleanYesNo name={'otherPeopleAtRisk'} />
            </motion.div>
            ) : questionIndex === 13 ? ( // Do you feel safe in your current living situation?
            <motion.div className='flex-box'>
                <BooleanYesNo name={'currentLivingSituationSafe'} />
            </motion.div>
            ) : questionIndex === 14 ? ( // Would you like information or support services available to you, such as senior services, legal advice, or counseling?
            <motion.div className='flex-box'>
                <BooleanYesNo name={'additionalSupportNeeded'} />
            </motion.div>
            ) : questionIndex === 15 ? ( // Would you like information or support services available to you, such as senior services, legal advice, or counseling?
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

export default ChildrensAnswers;

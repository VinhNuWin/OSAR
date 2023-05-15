import { useState, setCheck } from 'react';
import '../styles.css';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex, backIndex } from '../store';
import { containerVariants, dropUpVariants } from './containerVariants';
import { 
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
} from 'antd';
import axios from 'axios';
import Example from './RadioCard';
import { Button, Box, InputGroup, InputLeftElement } from '@chakra-ui/react';

function AnswerCard() {
    const { store, index, _id, } = useSelector((state) => {
        return {
            store: state,
            index: state.index.index,
            _id: state.form.user._id
        };
    });

    const dispatch = useDispatch();
    const [ visible, setVisible ] = useState(false);
    const [ incident, setIncident ] = useState({
        userId: _id,
        date: '',
        location: '',
        streetAddress: '',
        city: '',
        state: '',
        postal: 0,
        wasAlcoholInvolved: false,
        wereDrugsInvolved: false,
        wasSurvivorAsleepTimeOfIncident: false,
        verbalThreatsToSurvivor: false,
        resistanceOfferedBySurvivor: false,
        detailsOfTheAssault: '',
        areasOfSexualContact: '',
        useOfWeaponsFromAssailant: false,
        useOfRestraintFromAssailant: false,
    });

    // console.log(incident);

    const [ assailant, setAssailant ] = useState({
        userId: _id,
        gender: '',
        raceEthnicity: '',
        firstName: '',
        lastName:'',
        streetAddress: '',
        work: '',
        city: '',
        state: '',
        streetAddressWork: '',
        cityWork: '',
        stateWork: '',
        zipcodeWork: 0,
        phone: 0,
        email: '',
        definingCharacteristics: '',
    });

    // console.log(assailant);

    const [survivor, setSurvivor] = useState({
        userId: _id,
        survivor: '',
    });

    // console.log(survivor);

const questionIndex = index;

    const incrementIndex = (e) => {
        console.log('default prevented');
        e.preventDefault();

        dispatch(changeIndex(parseInt(index + 1)));
        setVisible(false);
        setValue('');
    };

    const decrementIndex = (e) => {
        dispatch(backIndex(parseInt(index - 1)));

        if(index <= 0) {
            return (
                dispatch(changeIndex(parseInt(0)))
            )
        };
    };

    const addIncident = async () => {
        const response = await axios.post(`https://osar-api.org.onrender.com/incidents`, {
            headers: {
                'Content-Type': 'application/json'
            },
            incident: incident
        });
        console.log(response); 
        dispatch(changeIndex(parseInt(index + 1)));
    };

    const addAssailant = async () => {
        const response = await axios.post('https://osar-api.org.onrender.com/assailants', {
            headers: {
                'Content-Type': 'application/json'
            },
            assailant: assailant
        });
        console.log(response);
        dispatch(changeIndex(parseInt(index + 1)));
    }

    const [ value, setValue ] = useState(false);

    const ethnicities = [
        { label: 'White', value: 'White' },
        { label: 'Black or African American', value: 'Black or African American' },
        { label: 'American Indian or Alaskan Native', value: 'American Indian or Alaskan Native' },
        { label: 'Asian', value: 'Asian' },
        { label: 'Native Hawaiian or Other Pacific Islander', value: 'Native Hawaiian or Other Pacific Islander' },
        { label: 'Hispanic or Latino', value: 'Hispanic or Latino' },
    ];

    const states = [
        { label: 'AL', value: 'Alabama' },
        { label: 'AR', value: 'Arkansas' },
        { label: 'AZ', value: 'Arizona' },
        { label: 'CA', value: 'California' },
        { label: 'DE', value: 'Delaware' },
    ];

    const TextArea = Input;

    return (
        <center>
        <div className='pt-10 h-96 center'>
            <AnimatePresence>
            { questionIndex === 1  ? ( //when did the incident occur "date"
            <div>
                <div>    
                        <DatePicker className='center'
                            showTime 
                            onChange={(DatePicker) => setIncident({...incident, date: DatePicker.$d})}
                            />
                </div>
            </div>
            ) : questionIndex === 2 ? ( // do you remember where the incident occured? "incidentLocation"
            <div>
                    <motion.div>
                        <Button variant='brandPrimary' onClick={() => setVisible(false)}>
                          No
                        </Button>
                        <Button className='mt-4' variant='brandPrimary' onClick={() => setVisible(true)}>
                          Yes
                        </Button>
                            <div className='h-320 w-200 pt-4'>
                                {visible && 
                                <motion.div                 
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exitAnimation"
                                >
                                    <Form
                                        className='row p-5'
                                        labelCol={{ span: 140, }}
                                        wrapperCol={{ span: 140, }}
                                        layout="horizontal"
                                        style={{ maxWidth: 600, }}
                                        >   
                                        <motion.Box as='motion.div' variants={dropUpVariants} >    
                                            <Form.Item label="Address Line">
                                                <Input 
                                                    width='250px'
                                                    size="large"
                                                    className='block w-full text-sm text-slate-500'
                                                    type='text'
                                                    name='streetAddress'
                                                    onChange={(e) => setIncident({...incident, [e.target.name]: e.target.value})}
                                                    />
                                            </Form.Item>
                                        </motion.Box>
                                        <motion.Box as='motion.div' variants={dropUpVariants} >         
                                            <Form.Item label="City">
                                                <Input 
                                                    type='text'
                                                    name='city'
                                                    onChange={(e) => setIncident({...incident, [e.target.name]: e.target.value})}
                                                    />
                                            </Form.Item>
                                        </motion.Box>
                                        <motion.Box as='motion.div' variants={dropUpVariants} >    
                                            <Form.Item label="State">
                                                <Select
                                                    name='state'
                                                    onChange={state => setIncident({ ...incident, state: state})}
                                                    >
                                                    <Select.Option options={states} value={value}>Al</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        </motion.Box>
                                        <motion.Box as='motion.div' variants={dropUpVariants} > 
                                            <Form.Item label="Postal Code">
                                                <InputNumber 
                                                value={value}
                                                name='zipcode'
                                                onChange={e => setIncident({...incident, [e.target.name]: e.target.value})}
                                                />
                                            </Form.Item>
                                        </motion.Box>
                                    </Form>
                                    </motion.div>}
                            </div>            
                        </motion.div>
                        </div>
            ) : questionIndex === 3 ? ( // Was Alcohol Involved "alcoholInvolved"
                <motion.div>
                    <div>                
                        <Button variant='brandPrimary' onClick={() => setIncident({...incident, wasAlcoholInvolved: false})}>
                          No
                        </Button>
                        <Button className='mt-4' variant='brandPrimary' onClick={() => setIncident({...incident, wasAlcoholInvolved: true})}>
                          Yes
                        </Button>
                    </div>
                </motion.div>
            ) : questionIndex === 4 ? ( // Were Drugs Involved "drugsInvolved"    
                    <div>              
                        <Button variant='brandPrimary' onClick={() => setIncident({...incident, wereDrugsInvolved: false})}>
                              No
                        </Button>
                        <Button className='mt-4' variant='brandPrimary' onClick={() => setIncident({...incident, wereDrugsInvolved: true})}>
                              Yes
                        </Button>    
                    </div>
            ) : questionIndex === 5 ? ( // Was Survivor Asleep at time of Incident "survivorAsleep"
                <div className=''>          
                    <Button variant='brandPrimary' onClick={() => setIncident({...incident, wasSurvivorAsleepTimeOfIncident: false})}>
                              No
                    </Button>
                    <Button className='mt-4' variant='brandPrimary' onClick={() => setIncident({...incident, wasSurvivorAsleepTimeOfIncident: true})}>
                              Yes
                    </Button>               
                </div>   
            ) : questionIndex === 6 ? ( // Were there verbal threats to the survivor
                <div>
                    <Button variant='brandPrimary' onClick={() => setIncident({...incident, verbalThreatsToSurvivor: false})}>
                              No
                    </Button>
                    <Button className='mt-4' variant='brandPrimary' onClick={() => setIncident({...incident, verbalThreatsToSurvivor: true})}>
                              Yes
                    </Button>                                
                </div>   
            ) : questionIndex === 7 ? ( // Was resistance offered by survivor
                <div>
                    <Button variant='brandPrimary' onClick={() => setIncident({...incident, resistanceOfferedBySurvivor: false})}>
                              No
                    </Button>
                    <Button className='mt-4' variant='brandPrimary' onClick={() => setIncident({...incident, resistanceOfferedBySurvivor: true})}>
                              Yes
                    </Button>          
                    </div>
            ) : questionIndex === 8 ? ( // Details of the assault
                <div className=''>
                    <Button variant='brandPrimary' onClick={() => setVisible(false)}>
                              No
                    </Button>
                    <Button className='mt-4' variant='brandPrimary' onClick={() => setVisible(true)}>
                              Yes
                    </Button>     
                    <div className=''>
                        {visible && 
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
                                    onChange={e => setIncident({...incident, [e.target.name]: e.target.value})}
                                    placeholder="In your own words a brief description of the event"
                                    />
                                </Form.Item>
                                </div>
                                </Form>}
                        </div>
                    </div>
            ) : questionIndex === 9 ? ( // Areas of sexual contact ** add staggered button selections
                <div>
                    <div className=''>
                    </div>
                </div>
            ) : questionIndex === 10 ? ( // Did the survivor receive a Sexual Assault Evidence Kit(i.e Rape Kit) 
                <div>
                    <Button variant='brandPrimary' onClick={() => setIncident({...incident, rapeKit: false})}>
                              No
                    </Button>
                    <Button className='mt-4' variant='brandPrimary' onClick={() => setIncident({...incident, rapeKit: true})}>
                              Yes
                    </Button>         
                </div>
            ) : questionIndex === 11 ? ( // Use of weapons
                <div>
                    <Button variant='brandPrimary' onClick={() => setIncident({...incident, useOfWeaponsFromAssailant: false})}>
                              No
                    </Button>
                    <Button className='mt-4' variant='brandPrimary' onClick={() => setIncident({...incident, useOfWeaponsFromAssailant: true})}>
                              Yes
                    </Button>   
                </div>                        
            ) : questionIndex === 12 ? ( // Use of Restraints 
                <div>
                    <Button variant='brandPrimary' onClick={() => setIncident({...incident, useOfRestraintFromAssailant: false})}>
                              No
                    </Button>
                    <Button className='mt-4' variant='brandPrimary' onClick={() => setIncident({...incident, useOfRestraintFromAssailant: true})}>
                              Yes
                    </Button> 
                </div>        
            ) : questionIndex === 13 ? ( // Assailants Gender
                <div>
                    <Button variant='brandPrimary' onChange={() => setAssailant({...assailant, gender: 'female'})}>
                              Female
                    </Button>
                    <Button className='mt-4' variant='brandPrimary' onChange={() => setAssailant({...assailant, gender: 'male'})}>
                              Male
                    </Button> 
                </div>                     
            ) : questionIndex === 14 ? ( // Assailants Race/Ethnicity
                <div className='input-style'>                        
                     <Form>
                        <div className='input-card'>
                            <Form.Item label="Ethnicity">
                                <Select
                                    name='ethnicity'
                                    onChange={ethnicity => setAssailant({ ...assailant, raceEthnicity: ethnicity})}
                                    >
                                    <Select.Option options={ethnicities} value={value}>White</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            ) : questionIndex === 15 ? ( // Do you know the assailants name?
                <div>
                    <motion.div>
                        <Button variant='brandPrimary' onClick={() => setVisible(false)}>
                          No
                        </Button>
                        <Button className='mt-4' variant='brandPrimary' onClick={() => setVisible(true)}>
                          Yes
                        </Button>
                            <div className='h-320 w-200 pt-4'>
                                {visible && 
                                <motion.div                 
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exitAnimation"
                                >
                                    <Form
                                        className='row p-5'
                                        labelCol={{ span: 140, }}
                                        wrapperCol={{ span: 140, }}
                                        layout="horizontal"
                                        style={{ maxWidth: 600, }}
                                        >   
                                        <motion.Box as='motion.div' variants={dropUpVariants} >    
                                            <Form.Item label="First Name">
                                                <Input 
                                                    width='250px'
                                                    size="large"
                                                    className='block w-full text-sm text-slate-500'
                                                    type='text'
                                                    name='firstName'
                                                    onChange={(e) => setAssailant({ ...assailant, fullName: e.target.value})}
                                                    />
                                            </Form.Item>
                                        </motion.Box>
                                        <motion.Box as='motion.div' variants={dropUpVariants} >    
                                            <Form.Item label="Last Name">
                                                <Input 
                                                    width='250px'
                                                    size="large"
                                                    className='block w-full text-sm text-slate-500'
                                                    type='text'
                                                    name='lastName'
                                                    onChange={(e) => setAssailant({ ...assailant, lastName: e.target.value})}
                                                    />
                                            </Form.Item>
                                        </motion.Box>
                                    </Form>
                                    </motion.div>}
                            </div>            
                        </motion.div>
                </div>                
            ) : questionIndex === 16 ? ( // Do you know the assailants address?
            <div>
                <motion.div>
                    <Button variant='brandPrimary' onClick={() => setVisible(false)}>
                      No
                    </Button>
                    <Button className='mt-4' variant='brandPrimary' onClick={() => setVisible(true)}>
                      Yes
                    </Button>
                        <div className='h-320 w-200'>
                            {visible && 
                            <motion.div                 
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exitAnimation"
                            >
                                <Form
                                    className='row p-5'
                                    labelCol={{ span: 140, }}
                                    wrapperCol={{ span: 140, }}
                                    layout="horizontal"
                                    >   
                                    <motion.Box as='motion.div' variants={dropUpVariants} >    
                                        <Form.Item label="Address Line">
                                            <Input 
                                                width='250px'
                                                size="large"
                                                className='block w-full text-sm text-slate-500'
                                                type='text'
                                                name='streetAddress'
                                                onChange={(e) => setAssailant({...assailant, [e.target.name]: e.target.value})}
                                                />
                                        </Form.Item>
                                    </motion.Box>
                                    <motion.Box as='motion.div' variants={dropUpVariants} >         
                                        <Form.Item label="City">
                                            <Input 
                                                type='text'
                                                name='city'
                                                onChange={(e) => setAssailant({...assailant, [e.target.name]: e.target.value})}
                                                />
                                        </Form.Item>
                                    </motion.Box>
                                    <motion.Box as='motion.div' variants={dropUpVariants} >    
                                        <Form.Item label="State">
                                            <Select
                                                name='state'
                                                onChange={state => setAssailant({ ...assailant, state: state})}
                                                >
                                                <Select.Option options={states} value={value}>Al</Select.Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item label="Postal Code">
                                            <InputNumber 
                                                value={value}
                                                name='zipcode'
                                                onChange={e => setAssailant({...assailant, [e.target.name]: e.target.value})}
                                                />
                                        </Form.Item>
                                    </motion.Box>
                                </Form>
                            </motion.div>}
                    </div>            
                </motion.div>
                    </div>
            ) : questionIndex === 17 ? ( // Do you know the assailants phone number?
                <div>
                    <motion.div>
                        <Button variant='brandPrimary' onClick={() => setVisible(false)}>
                          No
                        </Button>
                        <Button className='mt-4' variant='brandPrimary' onClick={() => setVisible(true)}>
                          Yes
                        </Button>
                                {visible && 
                                <motion.div                 
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exitAnimation"
                                    >
                                    <motion.Box as='motion.div' variants={dropUpVariants} >    
                                    <InputGroup className='pt-5'>
                                        <InputLeftElement pointerEvents='none'>
                                            {/* <PhoneIcon color='gray.300' /> */}
                                        </InputLeftElement>
                                    <Input type='tel' placeholder='Phone number' onChange={(event) => setAssailant({...assailant, phone: event.target.value})} />
                                    </InputGroup>
                                </motion.Box>
                                </motion.div>}
                                </motion.div>
                            </div>   
            ) : questionIndex === 18 ? ( // Do you know the assailants place of work?
            <div>
            <motion.div>
                <Button variant='brandPrimary' onClick={() => setVisible(false)}>
                  No
                </Button>
                <Button className='mt-4' variant='brandPrimary' onClick={() => setVisible(true)}>
                  Yes
                </Button>
                    <div className='h-320 w-200'>
                        {visible && 
                        <motion.div                 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exitAnimation"
                        >
                            <Form
                                className='row p-5'
                                labelCol={{ span: 140, }}
                                wrapperCol={{ span: 140, }}
                                layout="horizontal"
                                >   
                                <motion.Box as='motion.div' variants={dropUpVariants} >    
                                    <Form.Item label="Address Line">
                                        <Input 
                                            width='250px'
                                            size="large"
                                            className='block w-full text-sm text-slate-500'
                                            type='text'
                                            name='streetAddressWork'
                                            onChange={(e) => setAssailant({...assailant, [e.target.name]: e.target.value})}
                                            />
                                    </Form.Item>
                                </motion.Box>
                                <motion.Box as='motion.div' variants={dropUpVariants} >         
                                    <Form.Item label="City">
                                        <Input 
                                            type='text'
                                            name='cityWork'
                                            onChange={(e) => setAssailant({...assailant, [e.target.name]: e.target.value})}
                                            />
                                    </Form.Item>
                                </motion.Box>
                                <motion.Box as='motion.div' variants={dropUpVariants} >    
                                    <Form.Item label="State">
                                        <Select
                                            name='stateWork'
                                            onChange={state => setAssailant({ ...assailant, stateWork: state})}
                                            >
                                            <Select.Option options={states} value={value}>Al</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label="Postal Code">
                                        <InputNumber 
                                            value={value}
                                            name='zipcodeWork'
                                            onChange={e => setAssailant({...assailant, [e.target.name]: e.target.value})}
                                            />
                                    </Form.Item>
                                </motion.Box>
                            </Form>
                        </motion.div>}
                </div>            
            </motion.div>
        </div>
            ) : questionIndex === 19 ? ( // Do you know the assailants email?
            <div>
                    <motion.div>
                        <Button variant='brandPrimary' onClick={() => setVisible(false)}>
                          No
                        </Button>
                        <Button className='mt-4' variant='brandPrimary' onClick={() => setVisible(true)}>
                          Yes
                        </Button>
                                {visible && 
                                <motion.div                 
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exitAnimation"
                                    >
                                    <motion.Box as='motion.div' variants={dropUpVariants} >    
                                    <InputGroup className='pt-5'>
                                        <InputLeftElement pointerEvents='none'>
                                            {/* <PhoneIcon color='gray.300' /> */}
                                        </InputLeftElement>
                                    <Input type='email' placeholder='Email' onChange={(event) => setAssailant({...assailant, email: event.target.value})} />
                                    </InputGroup>
                                </motion.Box>
                            </motion.div>}
                        </motion.div>
                    </div>   
            ) : questionIndex === 20 ? ( // Assailants Defining Characteristics (i.e. tattoos, scars, physical disabilities, etc.) **
                <div>
                    <div className='input-card m-auto'>                            
                        <Button variant='brandPrimary' onClick={() => setVisible(false)}>
                          No
                        </Button>
                        <Button className='mt-4' variant='brandPrimary' onClick={() => setVisible(true)}>
                          Yes
                        </Button>
                            <div className=''>
                                {visible && 
                                    <Form
                                    className='center'
                                    labelCol={{ span: 140, }}
                                    wrapperCol={{ span: 140, }}
                                    layout="horizontal"
                                    style={{ maxWidth: 600, }}
                                    >
                                    <div className=''>
                                    <Form.Item>
                                       <Input 
                                       placeholder="Please input defining characteristics"
                                       onChange={(event) => setAssailant({...assailant, definingCharacteristics: event.target.value})} />
                                    </Form.Item>
                                </div>
                            </Form>}
                        </div>
                    </div>
                </div>      
            ) : questionIndex === 21 ? ( // Name of Survivor
                <div className='input-style'>                        
                    <Form className='input-card center'>
                        <Form.Item label='Survivor'>                 
                            <Input 
                               value={survivor.value}
                               placeholder="Name of Survivor"
                               name='survivor'
                               onChange={(e) => setSurvivor({ userId: _id, survivor: e.target.value})} />
                            </Form.Item>     
                    </Form> 
                </div>
            ) : questionIndex === 22 ? ( // Submit Registry
                    <div>
                        <h2>Thank you for your submission, Your registry has been filed and a timestamped copy will be sent to the the email provided.</h2>
                    </div>  
            ) : index === null (
                <div>
                An error has accord
                </div>
            )
                }
                </AnimatePresence>
                </div>
                </center>
    )
}

export default AnswerCard;

 
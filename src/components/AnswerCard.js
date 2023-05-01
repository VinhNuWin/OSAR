import { useState, setCheck } from 'react';
import '../styles.css';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex, backIndex } from '../store';
import { 
    Radio,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
} from 'antd';
import axios from 'axios';
import { Button, ButtonGroup } from '@chakra-ui/react';

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

    console.log(incident);

    const [ assailant, setAssailant ] = useState({
        userId: _id,
        gender: '',
        raceEthnicity: '',
        fullName: '',
        streetAddress: '',
        work: '',
        city: '',
        state: '',
        zipcode: 0,
        phone: 0,
        email: '',
        definingCharacteristics: '',
    });

    console.log(assailant);

    const [survivor, setSurvivor] = useState({
        userId: _id,
        survivor: '',
    });

    console.log(survivor);

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

    const [ value, setValue ] = useState('');

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
    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0.1, type: 'spring', stiffness: 5 }
        },
        exit: {
            x: '-100vw',
            transition: { ease: 'easeInOut' }
        }
        };



    return (
        <div>
            {index === 0 ? ( //when did the incident occur "date"
                <div className=''>
                        <DatePicker className='flex justify-center center'
                            showTime 
                            onChange={(DatePicker) => setIncident({...incident, date: DatePicker.$d})}
                            />
                </div>
            ) : index === 1 ? ( // do you remember where the incident occured? "incidentLocation"
                <div className=''>
                    <div className=''>                            
                        <Radio.Group className='' size="large" >
                            <Radio.Button value="No"
                                onClick={() => setVisible(false)}>No</Radio.Button>
                            <Radio.Button value="Yes" 
                                onClick={() => setVisible(true)} >Yes</Radio.Button>                        
                        </Radio.Group>
                            <div>
                                {visible && 
                                    <Form
                                        className='row'
                                        labelCol={{ span: 140, }}
                                        wrapperCol={{ span: 140, }}
                                        layout="horizontal"
                                        style={{ maxWidth: 600, }}
                                        >            
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
                                            <Form.Item label="City">
                                                <Input 
                                                    type='text'
                                                    name='city'
                                                    onChange={(e) => setIncident({...incident, [e.target.name]: e.target.value})}
                                                    />
                                            </Form.Item>
                                            <Form.Item label="State">
                                                <Select
                                                    name='state'
                                                    onChange={state => setIncident({ ...incident, state: state})}
                                                    >
                                                    <Select.Option options={states} value={value}>Al</Select.Option>
                                                </Select>
                                            </Form.Item>
                                    </Form>}
                            </div>
                        </div>
                        {/* <motion.div className='button'
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            key={index}
                            exit="exit"
                            >
                            <ButtonGroup
                            className=''
                            colorScheme='teal'
                            size='lg'>
                                <Button 
                                    onClick={decrementIndex}
                                    >Back
                                </Button>
                                <Button 
                                    onClick={incrementIndex}
                                    >Next
                                </Button>
                            </ButtonGroup>
                        </motion.div> */}
                </div>
            ) : index === 2 ? ( // Was Alcohol Involved "alcoholInvolved"
                <div>
                    <div>                            
                        <Radio.Group className='row' size="large" >
                            <Radio.Button 
                                onClick={() => setIncident({...incident, wasAlcoholInvolved: false})}>No</Radio.Button>
                            <Radio.Button 
                                onClick={() => setIncident({...incident, wasAlcoholInvolved: true})}>Yes</Radio.Button>                        
                        </Radio.Group>
                    </div>
                    {/* <div>
                        <motion.div className='button'
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            key={index}
                            exit="exit"
                            >
                            <ButtonGroup
                            className=''
                            colorScheme='teal'
                            size='lg'>
                                <Button 
                                    onClick={decrementIndex}
                                    >Back
                                </Button>
                                <Button 
                                    onClick={incrementIndex}
                                    >Next
                                </Button>
                            </ButtonGroup>
                        </motion.div>
                    </div> */}
                </div>
            ) : index === 3 ? ( // Were Drugs Involved "drugsInvolved"
                <div className=''>      
                    <div>                  
                        <Radio.Group className='row' size="large" >
                            <Radio.Button 
                                onClick={() => setIncident({...incident, wereDrugsInvolved: false})}>No</Radio.Button>
                            <Radio.Button 
                                onClick={() => setIncident({...incident, wereDrugsInvolved: true})}>Yes</Radio.Button>                        
                        </Radio.Group>
                    </div>
                    {/* <motion.div className='button'
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            key={index}
                            exit="exit"
                            >
                        <ButtonGroup
                        className=''
                        colorScheme='teal'
                        size='lg'>
                            <Button 
                                onClick={decrementIndex}
                                >Back
                            </Button>
                            <Button 
                                onClick={incrementIndex}
                                >Next
                            </Button>
                        </ButtonGroup>
                    </motion.div> */}
                </div>   
            ) : index === 4 ? ( // Was Survivor Asleep at time of Incident "survivorAsleep"
                <div className=''>      
                    <div className="input-card flex justify-center">                  
                        <Radio.Group className='row' size="large" >
                            <Radio.Button 
                                onClick={() => setIncident({...incident, wasSurvivorAsleepTimeOfIncident: false})}>No</Radio.Button>
                            <Radio.Button 
                                onClick={() => setIncident({...incident, wasSurvivorAsleepTimeOfIncident: true})}>Yes</Radio.Button>                        
                        </Radio.Group>
                    </div>
                    {/* <motion.div className='button'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={index}
                        exit="exit"
                        >
                        <ButtonGroup
                        className=''
                        colorScheme='teal'
                        size='lg'>
                            <Button 
                                onClick={decrementIndex}
                                >Back
                            </Button>
                            <Button 
                                onClick={incrementIndex}
                                >Next
                            </Button>
                        </ButtonGroup>
                    </motion.div> */}
                </div>   
            ) : index === 5 ? ( // Were there verbal threats to the survivor
                <div>      
                    <div className="input-card flex justify-center">                          
                        <Radio.Group className='row' size="large" >
                            <Radio.Button 
                                onClick={() => setIncident({...incident, verbalThreatsToSurvivor: false})}>No</Radio.Button>
                            <Radio.Button 
                                onClick={() => setIncident({...incident, verbalThreatsToSurvivor: true})}>Yes</Radio.Button>                        
                        </Radio.Group>
                    </div>
                    {/* <motion.div className='button'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={index}
                        exit="exit"
                        >
                        <ButtonGroup
                        className=''
                        colorScheme='teal'
                        size='lg'>
                            <Button 
                                onClick={decrementIndex}
                                >Back
                            </Button>
                            <Button 
                                onClick={incrementIndex}
                                >Next
                            </Button>
                        </ButtonGroup>
                    </motion.div> */}
                </div>   
            ) : index === 6 ? ( // Was resistance offered by survivor
                <div>      
                    <div className="input-card flex justify-center">                          
                        <Radio.Group className='row' size="large" >
                            <Radio.Button 
                                onClick={() => setIncident({...incident, resistanceOfferedBySurvivor: false})}>No</Radio.Button>
                            <Radio.Button 
                                onClick={() => setIncident({...incident, resistanceOfferedBySurvivor: true})}>Yes</Radio.Button>                        
                        </Radio.Group>
                    </div>
                    {/* <motion.div className='button'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={index}
                        exit="exit"
                        >
                        <ButtonGroup
                        className=''
                        colorScheme='teal'
                        size='lg'>
                            <Button 
                                onClick={decrementIndex}
                                >Back
                            </Button>
                            <Button 
                                onClick={incrementIndex}
                                >Next
                            </Button>
                        </ButtonGroup>
                    </motion.div> */}
                </div>   
            ) : index === 7 ? ( // Details of the assault
                <div className=''>
                    <Radio.Group className='row' size="large" >
                        <Radio.Button value="No"
                            onClick={() => setVisible(false)}>No</Radio.Button>
                        <Radio.Button value="Yes" 
                            onClick={() => setVisible(true)} >Yes</Radio.Button>                        
                    </Radio.Group>
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
                                    placeholder="In your own words a brief description"
                                    />
                                </Form.Item>
                                </div>
                                </Form>}
                                {/* <motion.div className='button'
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                key={index}
                                exit="exit"
                                >
                                    <ButtonGroup
                                    className=''
                                    colorScheme='teal'
                                    size='lg'>
                                        <Button 
                                            onClick={decrementIndex}
                                            >Back
                                        </Button>
                                        <Button 
                                            onClick={incrementIndex}
                                            >Next
                                        </Button>
                                    </ButtonGroup>
                                </motion.div> */}
                        </div>
                    </div>
            ) : index === 8 ? ( // Areas of sexual contact **
                <div>
                    <Radio.Group className='row' size="large" >
                        <Radio.Button value="No"
                            onClick={() => setVisible(false)}>No</Radio.Button>
                        <Radio.Button value="Yes" 
                            onClick={() => setVisible(true)} >Yes</Radio.Button>                        
                    </Radio.Group>
                    <div className=''>
                        {visible && 
                            <Form
                                className='center m-9'
                                labelCol={{ span: 140, }}
                                wrapperCol={{ span: 140, }}
                                layout="horizontal"
                                style={{ maxWidth: 600, }}
                                >
                                <div className=''>
                                    <Form.Item label="List the personal areas involved in the assault">
                                        <Input 
                                            width='100%'
                                            size="large"
                                            className='block w-full text-sm text-slate-500'
                                            type='text'
                                            name='areasOfSexualContact'
                                            onChange={(e) => setIncident({...incident, [e.target.name]: e.target.value})}
                                            />
                                    </Form.Item>
                                </div>
                            </Form>}
                    </div>
                    {/* <motion.div className='button'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={index}
                        exit="exit"
                        >
                        <ButtonGroup
                        className=''
                        colorScheme='teal'
                        size='lg'>
                            <Button 
                                onClick={decrementIndex}
                                >Back
                            </Button>
                            <Button 
                                onClick={incrementIndex}
                                >Next
                            </Button>
                        </ButtonGroup>
                    </motion.div> */}
                </div>
            ) : index === 9 ? ( // Did the survivor receive a Sexual Assault Evidence Kit(i.e Rape Kit) 
                <div>
                    <div className='input-card flex justify-center'>       
                        <Radio.Group className='row' size="large" >
                            <Radio.Button 
                                onClick={() => setIncident({...incident, rapeKit: false})}>No</Radio.Button>
                            <Radio.Button 
                                onClick={() => setIncident({...incident, rapeKit: true})}>Yes</Radio.Button>                        
                        </Radio.Group>
                        </div>
                        {/* <motion.div 
                        className='button'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={index}
                        exit="exit"
                        >
                            <ButtonGroup
                            className=''
                            colorScheme='teal'
                            size='lg'>
                                <Button 
                                    onClick={decrementIndex}
                                    >Back
                                </Button>
                                <Button 
                                    onClick={incrementIndex}
                                    >Next
                                </Button>
                            </ButtonGroup>
                        </motion.div> */}
                </div>
            ) : index === 10 ? ( // Use of weapons
                <div>
                    <div className="input-card flex justify-center">
                        <Radio.Group className='row' size="large" >
                            <Radio.Button 
                                onClick={() => setIncident({...incident, useOfWeaponsFromAssailant: false})}>No</Radio.Button>
                            <Radio.Button 
                                onClick={() => setIncident({...incident, useOfWeaponsFromAssailant: true})}>Yes</Radio.Button>                        
                        </Radio.Group>
                    </div>
                    {/* <motion.div 
                        className='button'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={index}
                        exit="exit"
                        >
                            <ButtonGroup
                            className=''
                            colorScheme='teal'
                            size='lg'>
                                <Button 
                                    onClick={decrementIndex}
                                    >Back
                                </Button>
                                <Button 
                                    onClick={incrementIndex}
                                    >Next
                                </Button>
                            </ButtonGroup>
                        </motion.div> */}
                </div>                                       
            ) : index === 11 ? ( // Use of Restraints 
                <div>
                    <div className="input-card flex justify-center">
                        <Radio.Group className='row' size="large" >
                            <Radio.Button 
                                onClick={() => setIncident({...incident, useOfRestraintFromAssailant: false})}>No</Radio.Button>
                            <Radio.Button 
                                onClick={() => setIncident({...incident, useOfRestraintFromAssailant: true})}>Yes</Radio.Button>                        
                        </Radio.Group>
                    </div>
                    {/* <motion.div 
                        className='button'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={index}
                        exit="exit"
                        >
                            <ButtonGroup
                            className=''
                            colorScheme='teal'
                            size='lg'>
                                <Button 
                                    onClick={decrementIndex}
                                    >Back
                                </Button>
                                <Button 
                                    onClick={incrementIndex}
                                    >Next
                                </Button>
                            </ButtonGroup>
                        </motion.div> */}
            </div>           
            ) : index === 12 ? ( // Assailants Gender
                <div>
                    <div className="input-card flex justify-center">
                        <Radio.Group size="large">
                            <Radio.Button 
                            onChange={() => setAssailant({...assailant, gender: 'female'})}>Female</Radio.Button>
                            <Radio.Button 
                            onChange={() => setAssailant({...assailant, gender: 'male'})}>Male</Radio.Button>
                        </Radio.Group>
                    </div>
                    {/* <motion.div 
                        className='button'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={index}
                        exit="exit"
                        >
                            <ButtonGroup
                            className=''
                            colorScheme='teal'
                            size='lg'>
                                <Button 
                                    onClick={decrementIndex}
                                    >Back
                                </Button>
                                <Button 
                                    onClick={incrementIndex}
                                    >Next
                                </Button>
                            </ButtonGroup>
                        </motion.div> */}
                </div>                           
            ) : index === 13 ? ( // Assailants Race/Ethnicity
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
                            {/* <motion.div 
                            className='button'
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            key={index}
                            exit="exit"
                            >
                                <ButtonGroup
                                className=''
                                colorScheme='teal'
                                size='lg'>
                                    <Button 
                                        onClick={decrementIndex}
                                        >Back
                                    </Button>
                                    <Button 
                                        onClick={incrementIndex}
                                        >Next
                                    </Button>
                                </ButtonGroup>
                            </motion.div> */}
                    </Form>
                </div>
            ) : index === 14 ? ( // Do you know the assailants name?
                <div>
                    <div className='input-card m-auto'>                            
                        <Radio.Group className='row' size="large">
                            <Radio.Button className='' value="No"
                                onClick={() => setVisible(false)}>No</Radio.Button>
                            <Radio.Button value="Yes" 
                                onClick={() => setVisible(true)} >Yes</Radio.Button>
                        </Radio.Group>
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
                                       placeholder="Please input assailants name"
                                       onChange={(event) => setAssailant({ ...assailant, fullName: event.target.value})} />
                                    </Form.Item>
                                    </div>
                                </Form>}
                            </div>
                        </div>
                        {/* <motion.div 
                            className='button'
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            key={index}
                            exit="exit"
                            >
                                <ButtonGroup
                                className=''
                                colorScheme='teal'
                                size='lg'>
                                    <Button 
                                        onClick={decrementIndex}
                                        >Back
                                    </Button>
                                    <Button 
                                        onClick={incrementIndex}
                                        >Next
                                    </Button>
                                </ButtonGroup>
                            </motion.div> */}
                </div>                
            ) : index === 15 ? ( // Do you know the assailants address?
                <div>
                    <div className='input-card m-auto'>                            
                        <Radio.Group className='row' size="large">
                            <Radio.Button value="No"
                                onClick={() => setVisible(false)}>No</Radio.Button>
                            <Radio.Button value="Yes" 
                                onClick={() => setVisible(true)} >Yes</Radio.Button> 
                        </Radio.Group>
                            <div>
                                {visible && 
                                    <Form
                                    className='center'
                                    labelCol={{ span: 140, }}
                                    wrapperCol={{ span: 140, }}
                                    layout="horizontal"
                                    style={{ maxWidth: 600, }}
                                    >
                                    <div className=''>
                                        <Form.Item label="Address Line">
                                            <Input 
                                                width='100%'
                                                size="large"
                                                className='block w-full text-sm text-slate-500'
                                                type='text'
                                                value={value}
                                                name='streetAddress'
                                                onChange={e => setAssailant({ ...assailant, [e.target.name]: e.target.value})}
                                                />
                                        </Form.Item>
                                        <Form.Item label="City">
                                            <Input 
                                                name='city'
                                                type='text'
                                                value={value}
                                                onChange={e => setAssailant({ ...assailant, [e.target.name]: e.target.value})}
                                                />
                                        </Form.Item>
                                        <Form.Item label="state">
                                            <Select
                                                onChange={state => setAssailant({...assailant, state: {state}})}
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
                                    </div>
                                </Form>}
                            </div>
                        </div>
                        {/* <motion.div 
                            className='button'
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            key={index}
                            exit="exit"
                            >
                                <ButtonGroup
                                className=''
                                colorScheme='teal'
                                size='lg'>
                                    <Button 
                                        onClick={decrementIndex}
                                        >Back
                                    </Button>
                                    <Button 
                                        onClick={incrementIndex}
                                        >Next
                                    </Button>
                                </ButtonGroup>
                            </motion.div> */}
                    </div>
            ) : index === 16 ? ( // Do you know the assailants phone number?
                <div>
                    <div className='input-card m-auto'>                        
                        <Radio.Group className='row' size="large">
                            <Radio.Button value="No"
                                onClick={() => setVisible(false)}>No</Radio.Button>
                            <Radio.Button value="Yes" 
                                onClick={() => setVisible(true)} >Yes</Radio.Button>
                        </Radio.Group>
                            <div className=''>
                                {visible && 
                                    <Form
                                    className='center'
                                    labelCol={{ span: 140, }}
                                    wrapperCol={{ span: 140, }}
                                    layout="horizontal"
                                    style={{ maxWidth: 600, }}
                                    >
                                    <div className='m-9'>
                                        <Form.Item>
                                           <Input 
                                           placeholder="Please input assailants phone number"
                                           onChange={(event) => setAssailant({...assailant, phone: event.target.value})} />
                                        </Form.Item>
                                    </div>
                                </Form>}
                            </div>   
                        </div>                
                        {/* <motion.div 
                            className='button'
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            key={index}
                            exit="exit"
                            >
                            <ButtonGroup
                            className=''
                            colorScheme='teal'
                            size='lg'>
                                <Button 
                                    onClick={decrementIndex}
                                    >Back
                                </Button>
                                <Button 
                                    onClick={incrementIndex}
                                    >Next
                                </Button>
                            </ButtonGroup>
                        </motion.div> */}
                    </div>   
            ) : index === 17 ? ( // Do you know the assailants place of work?
                <div>
                    <div className='input-card m-auto'>                        
                        <Radio.Group className='row' size="large" >
                            <Radio.Button value="false"
                                onClick={() => setVisible(false)}>No</Radio.Button>
                            <Radio.Button value="True" 
                                onClick={() => setVisible(true)} >Yes</Radio.Button>
                        </Radio.Group>
                            <div className=''>
                                    {visible && 
                                        <Form
                                        className='center'
                                        labelCol={{ span: 140, }}
                                        wrapperCol={{ span: 140, }}
                                        layout="horizontal"
                                        style={{ maxWidth: 600, }}
                                        >
                                        <div className='m-9'>
                                            <Form.Item>
                                               <Input 
                                               placeholder="Please input assailants place of work"
                                               onChange={(event) => setAssailant({...assailant, assailantsWork: event.target.value})} />
                                            </Form.Item>
                                        </div>
                                    </Form>}
                                </div>
                            </div>   
                            {/* <motion.div 
                                className='button'
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                key={index}
                                exit="exit"
                                >
                                <ButtonGroup
                                className=''
                                colorScheme='teal'
                                size='lg'>
                                    <Button 
                                        onClick={decrementIndex}
                                        >Back
                                    </Button>
                                    <Button 
                                        onClick={incrementIndex}
                                        >Next
                                    </Button>
                                </ButtonGroup>
                            </motion.div> */}
                    </div> 
            ) : index === 18 ? ( // Do you know the assailants email?
                <div>
                    <div className='input-card m-auto'>                        
                        <Radio.Group className='row' size="large">
                            <Radio.Button value="No"
                                onClick={() => setVisible(false)}>No</Radio.Button>
                            <Radio.Button value="Yes" 
                                onClick={() => setVisible(true)} >Yes</Radio.Button>
                        </Radio.Group>
                            <div className='m-12'>
                                {visible && 
                                    <Form>
                                        <Form.Item
                                           name="email"
                                           label="E-mail"
                                           onChange={(event) => setAssailant({...assailant, email: event.target.value})}
                                           >
                                           <Input />
                                       </Form.Item>
                                    </Form>}
                            </div>
                        </div>   
                        {/* <motion.div 
                            className='button'
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            key={index}
                            exit="exit"
                            >
                            <ButtonGroup
                            className=''
                            colorScheme='teal'
                            size='lg'>
                                <Button 
                                    onClick={decrementIndex}
                                    >Back
                                </Button>
                                <Button 
                                    onClick={incrementIndex}
                                    >Next
                                </Button>
                            </ButtonGroup>
                        </motion.div> */}
                </div>
            ) : index === 19 ? ( // Assailants Defining Characteristics (i.e. tattoos, scars, physical disabilities, etc.) **
                <div>
                    <div className='input-card m-auto'>                            
                        <Radio.Group className='row' size="large">
                            <Radio.Button className='' value="false"
                                onClick={() => setVisible(false)}>No</Radio.Button>
                            <Radio.Button value="true" 
                                onClick={() => setVisible(true)} >Yes</Radio.Button>
                        </Radio.Group>
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
                    {/* <motion.div 
                            className='button'
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            key={index}
                            exit="exit"
                            >
                            <ButtonGroup
                            className=''
                            colorScheme='teal'
                            size='lg'>
                                <Button 
                                    onClick={decrementIndex}
                                    >Back
                                </Button>
                                <Button 
                                    onClick={incrementIndex}
                                    >Next
                                </Button>
                            </ButtonGroup>
                        </motion.div> */}
                </div>      
            ) : index === 20 ? ( // Name of Survivor
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
                    {/* <motion.div 
                            className='button'
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            key={index}
                            exit="exit"
                            >
                            <ButtonGroup
                            className=''
                            colorScheme='teal'
                            size='lg'>
                                <Button 
                                    onClick={decrementIndex}
                                    >Back
                                </Button>
                                <Button 
                                    onClick={incrementIndex}
                                    >Next
                                </Button>
                            </ButtonGroup>
                        </motion.div> */}
                </div>
            ) : index === 21 ? ( // Submit Registry
                    <div>
                        <h2>Thank you for your submission, Your registry has been filed and a timestamped copy will be sent to the the email provided.</h2>
                    </div>  
            ) : index === null (
                <div>
                An error has accord
                </div>
            )
                }
                </div>
    )
}

export default AnswerCard;

 
import { useState, setCheck } from 'react';
import '../styles.css';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer, addAnswers, changeIndex, backIndex, removeAnswer, changeDate } from '../store';
import { 
    Radio,
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
    Space,
} from 'antd';
import axios from 'axios';

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
        wasAlcoholInvolved: '',
        wereDrugsInvolved: '',
        wasSurvivorAsleepTimeOfIncident: '',
        verbalThreatsToSurvivor: '',
        resistanceOfferedBySurvivor: '',
        detailsOfTheAssault: '',
        areasOfSexualContact: '',
        useOfWeaponsFromAssailant: '',
        useOfRestraintFromAssailant: '',
    });
    const [ assailant, setAssailant ] = useState({
        userId: _id,
        assailantsGender: '',
        assailantsRaceEthnicity: '',
        assailantsName: '',
        streetAddress: '',
        assailantsWork: '',
        city: '',
        state: '',
        zipcode: 0,
        assailantPhone: 0,
        assailantsEmail: '',
        assailantsDefiningCharacteristics: '',
    });

    const [survivor, setSurvivor] = useState('');

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
        const response = await axios.post(`http://localhost:3001/incidents`, {
            headers: {
                'Content-Type': 'application/json'
            },
            incident: incident
        });
        console.log(response); 
        dispatch(changeIndex(parseInt(index + 1)));
    };

    const addAssailant = async () => {
        const response = await axios.post('http://localhost:3001/assailants', {
            headers: {
                'Content-Type': 'application/json'
            },
            assailant: assailant
        });
        console.log(response);
        dispatch(changeIndex(parseInt(index + 1)));
    }

    const [ value, setValue ] = useState('');

    const [ address, setAddress ] = useState({ 
        streetAddress: '',
        city: '',
        state: '',
        postal: '',
        country: ''
    });

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

    console.log(incident);

    return (
        <div>
        {index === 0 ? ( //when did the incident occur "date"
        <div className=''>
        <div className='input-card'>
        <Form.Item valuePropName={'date'}>
        <DatePicker className='flex justify-center center'
            showTime 
            onChange={(DatePicker) => setIncident({...incident, date: DatePicker.$d})}
            />
        </Form.Item>    
        </div>
            <motion.div className='flex justify-center'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={index}
                exit="exit"
                >
                <Button 
                    className="btn m-2"
                    type="default"
                    size="large"
                    onClick={decrementIndex}
                    >Back
                </Button>
                <Button 
                    className="btn m-2"
                    size="large"
                    onClick={incrementIndex}
                    >Next
                </Button>
            </motion.div>
    </div>
        ) : index === 1 ? ( // do you remember where the incident occured? "incidentLocation"
        <div className=''>
        <div className='input-card m-auto'>                            
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
                                <Form.Item label="Address Line">
                                    <Input 
                                        width='100%'
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
                            </div>
                        </Form>}
                </div>
            </div>
            <motion.div className='btn-card'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={index}
                exit="exit"
                >
                <Button 
                    className="btn m-2 h-16rem"
                    type="default"
                    size="large"
                    onClick={decrementIndex}
                    >Back
                </Button>
                <Button 
                    className="btn m-2"
                    size="large"
                    onClick={incrementIndex}
                    >Next
                </Button>
            </motion.div>
    </div>
            ) : index === 2 ? ( // Was Alcohol Involved "alcoholInvolved"
                <div className='flex flex-col'>
                    <div className='input-card flex justify-center'>                            
                        {/* <input 
                        type="radio"
                        name='wasAlcoholInvolved'
                        value='No'
                        onClick={() => setIncident({...incident, wasAlcoholInvolved: 'Yes'})}
                        />
                        <input 
                        type="radio"
                        name='wasAlcoholInvolved'
                        value='Yes'
                        onClick={() => setIncident({...incident, wasAlcoholInvolved: 'No'})}
                        /> */}
                        <Radio.Group className='row' size="large" >
                            <Radio.Button 
                                onClick={() => setIncident({...incident, wasAlcoholInvolved: false})}>No</Radio.Button>
                            <Radio.Button 
                                onClick={() => setIncident({...incident, wasAlcoholInvolved: true})}>Yes</Radio.Button>                        
                        </Radio.Group>
                    </div>
                <div>
                        <motion.div className='justify-center'
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            key={index}
                            exit="exit"
                            >
                            <Button 
                                className="btn m-2"
                                type="default"
                                size="large"
                                onClick={decrementIndex}
                                >Back
                            </Button>
                            <Button 
                                className="btn m-2"
                                size="large"
                                onClick={incrementIndex}
                                >Next
                            </Button>
                        </motion.div>
                        </div>
                    </div>
                    ) : index === 3 ? ( // Were Drugs Involved "drugsInvolved"
                    <div className=''>      
                        <div className="input-card flex justify-center">                  
                        <Radio.Group className='row' size="large" >
                            <Radio.Button 
                                onClick={() => setIncident({...incident, wereDrugsInvolved: false})}>No</Radio.Button>
                            <Radio.Button 
                                onClick={() => setIncident({...incident, wereDrugsInvolved: true})}>Yes</Radio.Button>                        
                        </Radio.Group>
                        </div>
                                <motion.div className='flex justify-center'
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    key={index}
                                    exit="exit"
                                    >
                                        <Button 
                                        className="btn m-2"
                                        type="default"
                                        size="large"
                                        onClick={decrementIndex}
                                        >Back
                                        </Button>
                                        <Button 
                                        className="btn m-2"
                                        size="large"
                                        onClick={incrementIndex}
                                        >Next
                                        </Button>
                                </motion.div>
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
                            <motion.div className='flex justify-center'
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                key={index}
                                exit="exit"
                                >
                                    <Button 
                                    className="btn m-2"
                                    type="default"
                                    size="large"
                                    onClick={decrementIndex}
                                    >Back
                                    </Button>
                                    <Button 
                                    className="btn m-2"
                                    size="large"
                                    onClick={incrementIndex}
                                    >Next
                                    </Button>
                            </motion.div>
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
                            <motion.div className='flex justify-center'
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                key={index}
                                exit="exit"
                                >
                                    <Button 
                                    className="btn m-2"
                                    type="default"
                                    size="large"
                                    onClick={decrementIndex}
                                    >Back
                                    </Button>
                                    <Button 
                                    className="btn m-2"
                                    size="large"
                                    onClick={incrementIndex}
                                    >Next
                                    </Button>
                            </motion.div>
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
                        <motion.div className='flex justify-center'
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            key={index}
                            exit="exit"
                            >
                                <Button 
                                className="btn m-2"
                                type="default"
                                size="large"
                                onClick={decrementIndex}
                                >Back
                                </Button>
                                <Button 
                                className="btn m-2"
                                size="large"
                                onClick={incrementIndex}
                                >Next
                                </Button>
                        </motion.div>
                    </div>   
                    ) : index === 7 ? ( // Details of the assault
                    <div className=''>                                        
                        <Form className=''>
                        <div className='input-card'> 
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
                                {/* <Input 
                                    id='details'
                                    label='In your own words'
                                    type='text'
                                    value={incident.shortDescription}
                                    onChange={e => setValue({ shortDescription: e.target.value})}
                                    /> */}
                            </Form.Item>
                            </div>
                                <motion.div className='flex justify-center'
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    key={index}
                                    exit="exit"
                                    >
                                    <Button 
                                        className="btn m-2"
                                        type="default"
                                        size="large"
                                        onClick={decrementIndex}
                                        >Back
                                    </Button>
                                    <Button 
                                        className="btn m-2"
                                        size="large"
                                        onClick={incrementIndex}
                                        >Next
                                    </Button>
                                </motion.div>
                        </Form>
                    </div>       
                    ) : index === 8 ? ( // Areas of sexual contact **
                            <div>
                                <div className='input-card'>
                                <Form>
                                </Form>
                                </div>
                                <motion.div className='flex justify-center'
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    key={index}
                                    exit="exit"
                                    >
                                    <Button 
                                        className="btn m-2"
                                        type="default"
                                        size="large"
                                        onClick={decrementIndex}
                                        >Back
                                    </Button>
                                    <Button 
                                        className="btn m-2"
                                        size="large"
                                        onClick={incrementIndex}
                                        >Next
                                    </Button>
                                </motion.div>
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
                                    <motion.div className='flex justify-center'
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        key={index}
                                        exit="exit"
                                        >
                                        <Button 
                                            className="btn m-2"
                                            type="default"
                                            size="large"
                                            onClick={decrementIndex}
                                            >Back
                                        </Button>
                                        <Button 
                                            className="btn m-2"
                                            size="large"
                                            onClick={incrementIndex}
                                            >Next
                                        </Button>
                                    </motion.div>
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
                                <motion.div className='flex justify-center'
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    key={index}
                                    exit="exit"
                                    >
                                    <Button 
                                        className="btn m-2"
                                        type="default"
                                        size="large"
                                        onClick={decrementIndex}
                                        >Back
                                    </Button>
                                    <Button 
                                        className="btn m-2"
                                        size="large"
                                        onClick={incrementIndex}
                                        >Next
                                    </Button>
                                </motion.div>
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
                    <motion.div className='flex justify-center'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={index}
                        exit="exit"
                        >
                        <Button 
                            className="btn m-2"
                            type="default"
                            size="large"
                            onClick={decrementIndex}
                            >Back
                        </Button>
                        <Button 
                            className="btn m-2"
                            size="large"
                            onClick={addIncident}
                            >Next
                        </Button>
                    </motion.div>
                    </div>           
                    ) : index === 12 ? ( // Assailants Gender
                    <div>
                        <div className="input-card flex justify-center">
                            <Radio.Group defaultValue="" size="large" onChange={(event) => setAssailant({ assailantsGender: event.target.value})}>
                                <Radio.Button value="Female">Female</Radio.Button>
                                <Radio.Button value="Male">Male</Radio.Button>
                            </Radio.Group>
                        </div>
                            <motion.div className='flex justify-center'
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                key={index}
                                exit="exit"
                                >
                                <Button 
                                    className="btn m-2"
                                    type="default"
                                    size="large"
                                    onClick={decrementIndex}
                                    >Back
                                </Button>
                                <Button 
                                    className="btn m-2"
                                    size="large"
                                    onClick={addAssailant}
                                    >Next
                                </Button>
                            </motion.div>
                    </div>                           
                    ) : index === 13 ? ( // Assailants Race/Ethnicity
                        <div className='input-style'>                        
                         <Form>
                            <div className='input-card'>
                            <Form.Item label="Ethnicity">
                                  <Select
                                    value={value}
                                    onChange={e => setAssailant({ assailantsRaceEthnicity: {value}})}
                                    >
                                    <Select.Option value="White">White</Select.Option>
                                    <Select.Option value="Black or African American">Black or African American</Select.Option>
                                    <Select.Option value="American Indian or Alaskan Native">American Indian or Alaskan Native</Select.Option>
                                    <Select.Option value="Asian">Asian</Select.Option>
                                    <Select.Option value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</Select.Option>
                                    <Select.Option value="Hispanic or Latino">Hispanic or Latino</Select.Option>
                                    </Select>
                                </Form.Item>
                                </div>
                                <motion.div className='flex justify-center'
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    key={index}
                                    exit="exit"
                                    >
                                    <Button 
                                        className="btn m-2"
                                        type="default"
                                        size="large"
                                        onClick={decrementIndex}
                                        >Back
                                    </Button>
                                    <Button 
                                        className="btn m-2"
                                        size="large"
                                        onClick={incrementIndex}
                                        >Next
                                    </Button>
                                </motion.div>
                            </Form>
                        </div>
                    ) : index === 14 ? ( // Do you know the assailants name?
                    <div>
                        <div className='input-card m-auto'>                            
                            <Radio.Group className='row' size="large" onChange={(event) => setAssailant({ wasAlcoholInvolved: event.target.value})}>
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
                                           onChange={(event) => setAssailant({ assailantsName: event.target.value})} />
                                        </Form.Item>
                                        </div>
                                    </Form>}
                                </div>
                            </div>
                            <motion.div className='btn-card'
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                key={index}
                                exit="exit"
                                >
                                <Button 
                                    className="btn m-2 h-16rem"
                                    type="default"
                                    size="large"
                                    onClick={decrementIndex}
                                    >Back
                                </Button>
                                <Button 
                                    className="btn m-2"
                                    size="large"
                                    onClick={incrementIndex}
                                    >Next
                                </Button>
                            </motion.div>
                    </div>                
                    ) : index === 15 ? ( // Do you know the assailants address?
                    <div>
                        <div className='input-card m-auto'>                            
                            <Radio.Group className='row' size="large" 
                            onChange={(event) => setValue({assailantAddress: event.target.value})}>
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
                                                    value={assailant.streetAddress}
                                                    name='streetAddress'
                                                    onChange={e => setAssailant({ [e.target.name]: e.target.value})}
                                                    />
                                            </Form.Item>
                                            <Form.Item label="City">
                                                <Input 
                                                    name='city'
                                                    type='text'
                                                    value={incident.city}
                                                    onChange={e => setAssailant({ [e.target.name]: e.target.value})}
                                                    />
                                            </Form.Item>
                                            <Form.Item label="state">
                                                <Select
                                                    onChange={state => setAssailant({ state: {state}})}
                                                    >
                                                    <Select.Option options={states} value={value}>Al</Select.Option>
                                                </Select>
                                            </Form.Item>
                                            <Form.Item label="Postal Code">
                                                <InputNumber 
                                                    value={assailant.zipcode}
                                                    name='zipcode'
                                                    onChange={e => setAssailant({ [e.target.name]: e.target.value})}
                                                    />
                                            </Form.Item>
                                        </div>
                                    </Form>}
                                </div>
                            </div>
                                    <motion.div className='btn-card'
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        key={index}
                                        exit="exit"
                                        >
                                        <Button 
                                            className="btn m-2"
                                            type="default"
                                            size="large"
                                            onClick={decrementIndex}
                                            >Back
                                        </Button>
                                        <Button 
                                            className="btn m-2"
                                            size="large"
                                            onClick={incrementIndex}
                                            >Next
                                        </Button>
                                    </motion.div>
                        </div>
                    ) : index === 16 ? ( // Do you know the assailants phone number?
                        <div>
                            <div className='input-card m-auto'>                        
                                <Radio.Group className='row' size="large" onChange={(event) => setValue({ assailantsPhoneNumber: event.target.value})}>
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
                                                       onChange={(event) => setAssailant({ assailantPhone: event.target.value})} />
                                                    </Form.Item>
                                                </div>
                                            </Form>}
                                        </div>   
                                </div>                
                                    <motion.div className='btn-card'
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    key={index}
                                    exit="exit"
                                    >
                                    <Button 
                                        className="btn m-2"
                                        type="default"
                                        size="large"
                                        onClick={decrementIndex}
                                        >Back
                                    </Button>
                                    <Button 
                                        className="btn m-2"
                                        size="large"
                                        onClick={incrementIndex}
                                        >Next
                                    </Button>
                                </motion.div>
                            </div>   
                    ) : index === 17 ? ( // Do you know the assailants place of work?
                        <div>
                            <div className='input-card m-auto'>                        
                                <Radio.Group className='row' size="large" onChange={(event) => setValue({ assailantsPhoneNumber: event.target.value})}>
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
                                                       placeholder="Please input assailants place of work"
                                                       onChange={(event) => setAssailant({ assailantsWork: event.target.value})} />
                                                    </Form.Item>
                                                </div>
                                            </Form>}
                                        </div>
                                    </div>   
                                <motion.div className='btn-card'
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        key={index}
                                        exit="exit"
                                        >
                                        <Button 
                                            className="btn m-2"
                                            type="default"
                                            size="large"
                                            onClick={decrementIndex}
                                            >Back
                                        </Button>
                                        <Button 
                                            className="btn m-2"
                                            size="large"
                                            onClick={incrementIndex}
                                            >Next
                                        </Button>
                                </motion.div>
                            </div> 
                    ) : index === 18 ? ( // Do you know the assailants email?
                    <div>
                        <div className='input-card m-auto'>                        
                            <Radio.Group className='row' size="large" onChange={(event) => setValue({   assailantsPhoneNumber: event.target.value})}>
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
                                               rules={[
                                                 {
                                                   type: 'email',
                                                   message: 'The input is not valid E-mail!',
                                                 },
                                                 {
                                                   required: true,
                                                   message: 'Please input your E-mail!',
                                                 },
                                               ]}
                                               onChange={(event) => setAssailant({ assailantsEmail: event.target.value})}
                                               >
                                               <Input />
                                           </Form.Item>
                                        </Form>}
                                </div>
                                </div>   
                            <motion.div className='btn-card'
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    key={index}
                                    exit="exit"
                                    >
                                    <Button 
                                        className="btn m-2"
                                        type="default"
                                        size="large"
                                        onClick={decrementIndex}
                                        >Back
                                    </Button>
                                    <Button 
                                        className="btn m-2"
                                        size="large"
                                        onClick={incrementIndex}
                                        >Next
                                    </Button>
                            </motion.div>
                        </div>
                    ) : index === 19 ? ( // Assailants Defining Characteristics (i.e. tattoos, scars, physical disabilities, etc.) **
                    <div>
                    <div className='input-card m-auto'>                            
                        <Radio.Group className='row' size="large" onChange={(event) => setValue({   wasAlcoholInvolved: event.target.value})}>
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
                                       placeholder="Please input defining characteristics"
                                       onChange={(event) => setAssailant({ assailantsDefiningCharacteristics: event.target.value})} />
                                    </Form.Item>
                                    </div>
                                </Form>}
                            </div>
                        </div>
                        <motion.div className='btn-card'
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            key={index}
                            exit="exit"
                            >
                            <Button 
                                className="btn m-2 h-16rem"
                                type="default"
                                size="large"
                                onClick={decrementIndex}
                                >Back
                            </Button>
                            <Button 
                                className="btn m-2"
                                size="large"
                                onClick={incrementIndex}
                                >Next
                            </Button>
                        </motion.div>
                    </div>      
                    ) : index === 20 ? ( // Name of Survivor
                        <div className='input-style'>                        
                            <Form className='input-card center'>                      
                                <Form.Item>
                                    <Input 
                                       value={value}
                                       placeholder="Name of Survivor"
                                       onChange={(event) => setSurvivor({ survivor: event.target.value})} />
                                </Form.Item>
                            </Form> 
                                <motion.div className='btn-card'
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    key={index}
                                    exit="exit"
                                    >
                                    <Button 
                                        className="btn m-2 h-16rem"
                                        type="default"
                                        size="large"
                                        onClick={decrementIndex}
                                        >Back
                                    </Button>
                                    <Button 
                                        className="btn m-2"
                                        size="large"
                                        onClick={incrementIndex}
                                        >Next
                                    </Button>
                                </motion.div>
                        </div>
                    ) : index === 21 ? ( // Email of Survivor 
                        <div>
                            <Form className='input-card'>
                             <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                  {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                  },
                                  {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                  },
                                ]}
                                onChange={(event) => setValue({ survivorEmail: event.target.value})}
                                >
                                <Input />
                            </Form.Item>
                            </Form>
                                <motion.div className='btn-card'
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        key={index}
                                        exit="exit"
                                        >
                                    <Button 
                                        className="btn m-2 h-16rem"
                                        type="default"
                                        size="large"
                                        onClick={decrementIndex}
                                        >Back
                                    </Button>
                                    <Button 
                                        className="btn m-2"
                                        size="large"
                                        onClick={incrementIndex}
                                        >Next
                                    </Button>
                                </motion.div>
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

 
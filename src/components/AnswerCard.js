import { useState, setCheck } from 'react';
import '../styles.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer, changeIndex, backIndex, removeAnswer } from '../store';
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
;

function AnswerForm() {
    const dispatch = useDispatch();
    const [ visible, setVisible ] = useState(false);
    const { TextArea } = Input;

    const { index, incident, registry, assailant, survivor } = useSelector((state) => {
        return {
            index: state.index.index,
            registry: state.registry,
            incident: state.registry,
            assailant: state.registry,
            survivor: state.registry
        };
    });

    console.log(registry);


    const incrementIndex = (e) => {
        console.log('default prevented');
        e.preventDefault();

        dispatch(changeIndex(parseInt(index + 1)));
        dispatch(addAnswer(value));
        setVisible(false);
        setValue('');
    };

    console.log();

    const decrementIndex = (e) => {
        dispatch(backIndex(parseInt(index - 1)));

        dispatch(removeAnswer(value))
        if(index <= 0) {
            return (
                dispatch(changeIndex(parseInt(0)))
            )
        };
    };


    const [ value, setValue ] = useState();
    console.log(value);

    const [ address, setAddress ] = useState({ 
        streetAddress: '',
        city: '',
        state: '',
        postal: '',
        country: ''
    });

    const states = [
        { label: 'AL', value: 'Alabama' },
        { label: 'AL', value: 'Alabama' },
        { label: 'AL', value: 'Alabama' },
        { label: 'CA', value: 'California' },
        { label: 'DE', value: 'Delaware' },
    ];

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: '100vw'
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'tween',
                duration: 2
            },
            exit: {
                x: '-100vw',
                transition: { ease: 'easeInOut' }
            }
        }
    };

    return (
        <div className="" >
                {index === 0 ? ( //when did the incident occur
                    <div className=''>
                        <div className='input-card'>
                        <motion.Space direction="vertical" size={12}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 5}}>
                        <DatePicker className='flex justify-center center'
                            showTime 
                            value={incident.value}
                            onChange={(DatePicker) => setValue({date: DatePicker.$d})}/>
                        </motion.Space>
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
            ) : index === 1 ? ( // do you remember where the incident occured?
            <div className=''>
                    <div className='input-card m-auto'>                            
                        <Radio.Group className='row' size="large" onChange={(event) => setValue({ incidentLocation: event.target.value})}>
                            <Radio.Button className='' value="No"
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
                                                value={incident.streetAddress}
                                                onChange={e => setValue({ streetAddress: e.target.value})}
                                                />
                                        </Form.Item>
                                        <Form.Item label="City">
                                            <Input 
                                                id='city'
                                                type='text'
                                                value={incident.city}
                                                onChange={e => setValue({ ...value, city: e.target.value})}
                                                />
                                        </Form.Item>
                                        <Form.Item label="State">
                                            <Select
                                                onChange={state => setValue({ ...value, state: {state}})}
                                                >
                                                <Select.Option options={states} value={address.value}>Al</Select.Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item label="Postal Code">
                                            <InputNumber 
                                                value={address.postal}
                                                onChange={e => setValue({ ...value, postal: e.target.value})}
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
            ) : index === 2 ? ( // Was Alcohol Involved 
                <div className='flex flex-col'>
                    <div className='input-card flex justify-center'>                            
                        <Radio.Group size="large" onChange={(event) => setValue({ wasAlcoholInvolved: event.target.value})}>
                            <Radio.Button value="No"
                                onClick={() => setVisible(false)}>No</Radio.Button>
                            <Radio.Button value="Yes" 
                                onClick={() => setVisible(true)} >Yes</Radio.Button>                        
                        </Radio.Group>
                    </div>
                <div>
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
                    </div>   
            ) : index === 3 ? ( // Were Drugs Involved 
            <div className=''>      
                <div className="input-card flex justify-center">                  
                    <Radio.Group className="h-16" size="large" onChange={(event) => setValue({ wereDrugsInvolved: event.target.value})}>
                        <Radio.Button value="Yes">Yes</Radio.Button>
                        <Radio.Button value="No" >No</Radio.Button>
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
            ) : index === 4 ? ( // Was Survivor Asleep at time of Incident
            <div className=''>      
            <div className="input-card flex justify-center">                  
                <Radio.Group className="h-16" size="large" onChange={(event) => setValue({ survivorAsleep: event.target.value})}>
                    <Radio.Button value="Yes">Yes</Radio.Button>
                    <Radio.Button value="No" >No</Radio.Button>
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
                    <Radio.Group className="h-16" size="large" onChange={(event) => setValue({ verbalThreats: event.target.value})}>
                        <Radio.Button value="Yes">Yes</Radio.Button>
                        <Radio.Button value="No" >No</Radio.Button>
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
                <Radio.Group className="h-16" size="large" onChange={(event) => setValue({ resistanceOffered: event.target.value})}>
                    <Radio.Button value="Yes">Yes</Radio.Button>
                    <Radio.Button value="No" >No</Radio.Button>
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
                        value={incident.shortDescription}
                        onChange={e => setValue({ shortDescription: e.target.value})}
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
                            <Radio.Group size="large" onChange={(event) => setValue({ rapeKit:  event.target.value})}>
                                <Radio.Button value="No"
                                    onClick={() => setVisible(false)}>No</Radio.Button>
                                <Radio.Button value="Yes" 
                                    onClick={() => setVisible(true)} >Yes</Radio.Button>
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
                            <Radio.Group size="large" onChange={(event) => setValue({ useOfWeapons: event.target.value})}>
                                <Radio.Button value="Yes">Yes</Radio.Button>
                                <Radio.Button value="No">No</Radio.Button>
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
                <Radio.Group defaultValue="" size="large" onChange={(event) => setValue({ useOfRestraints: event.target.value})}>
                    <Radio.Button value="No">No</Radio.Button>
                    <Radio.Button value="Yes">Yes</Radio.Button>
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
            ) : index === 12 ? ( // Assailants Gender
            <div>
                <div className="input-card flex justify-center">
                    <Radio.Group defaultValue="" size="large" onChange={(event) => setValue({ gender: event.target.value})}>
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
                            onClick={incrementIndex}
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
                            value={assailant.value}
                            onChange={e => setValue({ race: {value}})}
                            >
                            <Select.Option value="White">White</Select.Option>
                            <Select.Option value="Black or African American">Black or African American</Select.Option>
                            <Select.Option value="American Indian or Alaskan Native">American Indian or Alaskan Native</Select.Option>
                            </Select>
                            <Select.Option value="Asian">Asian</Select.Option>
                            <Select.Option value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</Select.Option>
                            <Select.Option value="Hispanic or Latino">Hispanic or Latino</Select.Option>
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
                                   placeholder="Please input assailants name"
                                   onChange={(event) => setValue({ assailantsName: event.   target.value})} />
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
                    onChange={(event) => setValue({  assailantAddress: event.target.value})}>
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
                                            value={incident.streetAddress}
                                            onChange={e => setValue({ streetAddress: e.target.  value})}
                                            />
                                    </Form.Item>
                                    <Form.Item label="City">
                                        <Input 
                                            id='city'
                                            type='text'
                                            value={incident.city}
                                            onChange={e => setValue({ ...value, city: e.target. value})}
                                            />
                                    </Form.Item>
                                    <Form.Item label="State">
                                        <Select
                                            onChange={state => setValue({ ...value, state:  {state}})}
                                            >
                                            <Select.Option options={states} value={address. value}>Al</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label="Postal Code">
                                        <InputNumber 
                                            value={address.postal}
                                            onChange={e => setValue({ ...value, postal: e.  target.value})}
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
                                               onChange={(event) => setValue({ assailantPhone: event.  target.value})} />
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
                                               onChange={(event) => setValue({ assailantWorkPlace: event.target.value})} />
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
                                       onChange={(event) => setValue(event.target.value)}
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
                               onChange={(event) => setValue({ assailantsName: event.   target.value})} />
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
                               value={survivor.value}
                               placeholder="Name of Survivor"
                               onChange={(event) => setValue({ survivor: event.target.value})} />
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

export default AnswerForm;
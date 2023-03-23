import { useState, setCheck } from 'react';
import '../styles.css';
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

    return (
        <div className="w-full text-center border border-red-400" >
                {index === 0 ? ( //when did the incident occur
                    <div>
                      <Space direction="vertical" size={12}>
                          <DatePicker showTime value={incident.value}
                          onChange={(DatePicker) => setValue({date: DatePicker.$d})}/>
                      </Space>
                    <div>
                        <Button 
                            className="button is-link"
                            onClick={decrementIndex}
                            >Back
                        </Button>
                        <Button 
                            className="button is-link"
                            onClick={(incrementIndex)}
                            >Next
                        </Button>
                    </div>
                </div>
            ) : index === 1 ? ( // Where did the incident occur?
                <div>      
                    <Form
                        labelCol={{ span: 140, }}
                        wrapperCol={{ span: 140, }}
                        layout="horizontal"
                        style={{ maxWidth: 600, }}
                        >
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
                    <Button 
                        className="button is-link"
                        onClick={decrementIndex}
                        >Back
                        </Button>
                        <Button 
                            className="button is-link"
                            onClick={incrementIndex}
                            >Next
                        </Button>
                    </Form>
                </div>  
            ) : index === 2 ? ( // Was Alcohol Involved 
                <div>                        
                    <Radio.Group defaultValue="" size="large" onChange={(event) => setValue({ wasAlcoholInvolved: event.target.value})}>
                        <Radio.Button value="Yes" 
                        onClick={() => setVisible(true)} >Yes</Radio.Button>
                        <Radio.Button value="No"
                        onClick={() => setVisible(false)}>No</Radio.Button>                        
                    </Radio.Group>
                <div>
                {visible && 
                                    <Form>                      
                                    <Form.Item>
                                       <Input 
                                       placeholder="Please input assailants name"
                                       onChange={(event) => setValue({ assailant: event.target.value})} />
                                    </Form.Item>
                                    </Form>}
                    <Button 
                        className="button is-link"
                        onClick={decrementIndex}
                        >Back
                    </Button>
                    <Button 
                        className="button is-link"
                        onClick={(incrementIndex)}
                        >Next
                    </Button>
                    </div>
                </div>   
            ) : index === 3 ? ( // Were Drugs Involved 
            <div>                        
                <Radio.Group defaultValue="" size="large" onChange={(event) => setValue({ wereDrugsInvolved: event.target.value})}>
                    <Radio.Button value="Yes">Yes</Radio.Button>
                    <Radio.Button value="No" >No</Radio.Button>
                </Radio.Group>
            <div>
                <Button 
                    className="button is-link"
                    onClick={decrementIndex}
                    >Back
                </Button>
                <Button 
                    className="button is-link"
                    onClick={(incrementIndex)}
                    >Next
                </Button>
            </div>
            </div>   
            ) : index === 4 ? ( // Was Survivor Asleep at time of Incident
            <div>                        
                <Radio.Group defaultValue="" size="large" onChange={(event) => setValue({ survivorAsleep: event.target.value})}>
                    <Radio.Button value="Yes">Yes</Radio.Button>
                    <Radio.Button value="No">No</Radio.Button>
                </Radio.Group>
                <div>
                    <Button 
                        className="button is-link"
                        onClick={decrementIndex}
                        >Back
                    </Button>
                    <Button 
                        className="button is-link"
                        onClick={(incrementIndex)}
                        >Next
                    </Button>
                </div>
            </div>   
            ) : index === 5 ? ( // Were there verbal threats to the survivor
                <div>                        
                    <Radio.Group defaultValue="" size="large" onChange={(event) => setValue({ verbalThreats: event.target.value})}>
                        <Radio.Button value="Yes">Yes</Radio.Button>
                        <Radio.Button value="No">No</Radio.Button>
                    </Radio.Group>
                <div>
                    <Button 
                        className="button is-link"
                        onClick={decrementIndex}
                        >Back
                    </Button>
                    <Button 
                        className="button is-link"
                        onClick={(incrementIndex)}
                        >Next
                    </Button>
                </div>
                </div>   
            ) : index === 6 ? ( // Was resistance offered by survivor
                    <div>
                        <Radio.Group defaultValue="" size="large" onChange={(event) => setValue({ resistanceOffered: event.target.value})}>
                            <Radio.Button value="Yes">Yes</Radio.Button>
                            <Radio.Button value="No">No</Radio.Button>
                        </Radio.Group>
                    <div>
                        <Button 
                            className="button is-link"
                            onClick={decrementIndex}
                            >Back
                        </Button>
                        <Button 
                            className="button is-link"
                            onClick={(incrementIndex)}
                            >Next
                        </Button>
                    </div>  
                </div>
            ) : index === 7 ? ( // Details of the assault
            <div>                        
                <Form>
                    <Form.Item>
                    <Input 
                            id='details'
                            type='text'
                            value={incident.shortDescription}
                            onChange={e => setValue({ shortDescription: e.target.value})}
                            />
                    </Form.Item>
                    <div>
                        <Button 
                            className="button is-link"
                            onClick={decrementIndex}
                            >Back
                        </Button>
                        <Button 
                            className="button is-link"
                            onClick={(incrementIndex)}
                            >Next
                        </Button>
                    </div>
                </Form>
            </div>       
            ) : index === 8 ? ( // Areas of sexual contact **
                    <div>
                        <Form>
                        </Form>
                    <div>
                        <Button 
                            className="button is-link"
                            onClick={decrementIndex}
                            >Back
                        </Button>
                        <Button 
                            className="button is-link"
                            onClick={(incrementIndex)}
                            >Next
                        </Button>
                    </div>
                </div>
            ) : index === 9 ? ( // Did the survivor receive a Sexual Assault Evidence Kit(i.e Rape Kit) 
                    <div>
                        <Radio.Group defaultValue="" size="large" onChange={(event) => setValue({ rapeKit: event.target.value})}>
                            <Radio.Button value="Yes">Yes</Radio.Button>
                            <Radio.Button value="No">No</Radio.Button>
                        </Radio.Group>
                        <div>
                            <Button 
                                className="button is-link"
                                onClick={decrementIndex}
                                >Back
                            </Button>
                            <Button 
                                className="button is-link"
                                onClick={(incrementIndex)}
                                >Next
                            </Button>
                        </div>
                    </div>
            ) : index === 10 ? ( // Use of weapons
                    <div>
                        <Radio.Group defaultValue="" size="large" onChange={(event) => setValue({ useOfWeapons: event.target.value})}>
                            <Radio.Button value="Yes">Yes</Radio.Button>
                            <Radio.Button value="No">No</Radio.Button>
                        </Radio.Group>
                        <div>
                            <Button 
                                className="button is-link"
                                onClick={decrementIndex}
                                >Back
                            </Button>
                            <Button 
                                className="button is-link"
                                onClick={(incrementIndex)}
                                >Next
                            </Button>
                        </div>
                    </div>                                       
            ) : index === 11 ? ( // Use of Restraints 
                    <div>                        
                        <Radio.Group defaultValue="" size="large" onChange={(event) => setValue({ useOfRestraints: event.target.value})}>
                            <Radio.Button value="Yes">Yes</Radio.Button>
                            <Radio.Button value="No">No</Radio.Button>
                        </Radio.Group>
                        <div>
                            <Button 
                                className="button is-link"
                                onClick={decrementIndex}
                                >Back
                            </Button>
                            <Button 
                                className="button is-link"
                                onClick={(incrementIndex)}
                                >Next
                            </Button>
                        </div>
                    </div>    
            ) : index === 12 ? ( // Assailants Gender
                <div>                        
                    <Radio.Group defaultValue="" size="large" onChange={(event) => setValue({gender: event.target.value})}>
                        <Radio.Button value="Male">Male</Radio.Button>
                        <Radio.Button value="Female">Female</Radio.Button>
                    </Radio.Group>
                    <div>
                        <Button 
                            className="button is-link"
                            onClick={decrementIndex}
                            >Back
                        </Button>
                        <Button 
                            className="button is-link"
                            onClick={(incrementIndex)}
                            >Next
                        </Button>
                    </div>
                </div>                
            ) : index === 13 ? ( // Assailants Race/Ethnicity
                <div>                        
                 <Form>
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
                    <div>
                        <Button 
                            className="button is-link"
                            onClick={decrementIndex}
                            >Back
                        </Button>
                        <Button 
                            className="button is-link"
                            onClick={(incrementIndex)}
                            >Next
                        </Button>
                    </div>
                    </Form>
                </div>
            ) : index === 14 ? ( // Do you know the assailants name? **onClick Visible**
                <div>
                    <div>
                        <Radio.Group defaultValue="" size="large" onChange={(event) => setValue(event.target.value)}>
                            <Radio.Button value="Yes"
                            onClick={() => setVisible(true)} 
                            >Yes</Radio.Button>
                            <Radio.Button value="No"
                            onClick={() => setVisible(false)} >No</Radio.Button>
                        </Radio.Group>
                    </div>
                       { visible && <Form>                      
                            <Form.Item>
                               <Input 
                               placeholder="Please input assailants name"
                               onChange={(event) => setValue({ assailant: event.target.value})} />
                            </Form.Item>
                            <div>
                                <Button 
                                    className="button is-link"
                                    onClick={decrementIndex}
                                    >Back
                                </Button>
                                <Button 
                                    className="button is-link"
                                    onClick={(incrementIndex)}
                                    >Next
                                </Button>    
                            </div>
                        </Form> } 
                </div>           
            ) : index === 15 ? ( // Do you know the assailants address?
                    <div>
                        <div>                        
                        <Radio.Group defaultValue="" size="large" onChange={(event) => setValue(event.target.value)}>
                            <Radio.Button value="Yes">Yes</Radio.Button>
                            <Radio.Button value="No">No</Radio.Button>
                        </Radio.Group>
                        <div>      
                            <Form
                                labelCol={{ span: 140, }}
                                wrapperCol={{ span: 140, }}
                                layout="horizontal"
                                style={{ maxWidth: 600, }}
                                >
                            <Form.Item label="Address Line">
                                <Input 
                                    width='100%'
                                    size="large"
                                    className='block w-full text-sm text-slate-500'
                                    type='text'
                                    value={assailant.streetAddress}
                                    onChange={e => setValue({ streetAddress: e.target.value})}
                                    />
                            </Form.Item>
                            <Form.Item label="City">
                                <Input 
                                    id='city'
                                    type='text'
                                    value={assailant.city}
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
                                    value={assailant.postal}
                                    onChange={e => setValue({ ...value, postal: e.target.value})}
                                    />
                            </Form.Item>
                            <Button 
                                className="button is-link"
                                onClick={decrementIndex}
                                >Back
                                </Button>
                                <Button 
                                    className="button is-link"
                                    onClick={incrementIndex}
                                    >Next
                                </Button>
                            </Form>
                        </div>  
                </div> 
                </div>      
            ) : index === 16 ? ( // Do you know the assailants phone number?
                <div>
                    <div>                        
                        <Radio.Group defaultValue="" size="large" onChange={(event) => setValue(event.target.value)}>
                            <Radio.Button value="Yes">Yes</Radio.Button>
                            <Radio.Button value="No">No</Radio.Button>
                        </Radio.Group>
                    </div>
                    <div>
                        <Form>                      
                            <Form.Item>
                                <Input 
                                   placeholder="Please input assailants name"
                                   onChange={(event) => setValue({ assailant: event.target.value})} />
                            </Form.Item>
                                <div>
                                    <Button 
                                        className="button is-link"
                                        onClick={decrementIndex}
                                        >Back
                                    </Button>
                                    <Button 
                                        className="button is-link"
                                        onClick={(incrementIndex)}
                                        >Next
                                    </Button>
                                </div>
                        </Form>
                    </div>
                    </div>   
            ) : index === 17 ? ( // Do you know the assailants place of work?
                <div>
                    <div>                        
                        <Radio.Group defaultValue="" size="large" onChange={(event) => setValue(event.target.value)}>
                            <Radio.Button value="Yes">Yes</Radio.Button>
                            <Radio.Button value="No">No</Radio.Button>
                        </Radio.Group>
                    </div>
                    <div>
                        <Form>                      
                            <Form.Item>
                                <Input 
                                   placeholder="Please input assailants work"
                                   onChange={(event) => setValue({ assailantsWorkPlace: event.target.value})} />
                            </Form.Item>
                                <div>
                                    <Button 
                                        className="button is-link"
                                        onClick={decrementIndex}
                                        >Back
                                    </Button>
                                    <Button 
                                        className="button is-link"
                                        onClick={(incrementIndex)}
                                        >Next
                                    </Button>
                                </div>
                        </Form>
                    </div>
                    </div> 
            ) : index === 18 ? ( // Do you know the assailants email?
                <div>
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
                    <div>
                        <Button 
                            className="button is-link"
                            onClick={decrementIndex}
                            >Back
                        </Button>
                        <Button 
                            className="button is-link"
                            onClick={(incrementIndex)}
                            >Next
                        </Button>
                    </div>
                    </Form>
                </div>
            ) : index === 19 ? ( // Assailants Defining Characteristics (i.e. tattoos, scars, physical disabilities, etc.) **
                <div>                        
                    <Form.Item
                        name="Name of Survivor"
                        label="Name of Survivor"
                        >
                        <Input placeholder="Please input your name"
                        onChange={(event) => setValue(event.target.value)} />
                    </Form.Item>
                    <div>
                        <Button 
                            className="button is-link"
                            onClick={decrementIndex}
                            >Back
                        </Button>
                        <Button 
                            className="button is-link"
                            onClick={(incrementIndex)}
                            >Next
                        </Button>
                    </div>
                </div>   
            ) : index === 20 ? ( // Name of Survivor
                <div>                        
                    <Form>                      
                            <Form.Item>
                               <Input 
                               value={survivor.value}
                               placeholder="Name of Survivor"
                               onChange={(event) => setValue({ survivor: event.target.value})} />
                            </Form.Item>
                            <div>
                                <Button 
                                    className="button is-link"
                                    onClick={decrementIndex}
                                    >Back
                                </Button>
                                <Button 
                                    className="button is-link"
                                    onClick={(incrementIndex)}
                                    >Next
                                </Button>    
                            </div>
                        </Form> 
                </div>
            ) : index === 21 ? ( // Email of Survivor 
                <div>
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
                        onChange={(event) => setValue({ survivorEmail: event.target.value})}
                        >
                        <Input />
                    </Form.Item>
                    <div>
                        <Button 
                            className="button is-link"
                            onClick={decrementIndex}
                            >Back
                        </Button>
                        <Button 
                            className="button is-link"
                            onClick={(incrementIndex)}
                            >Next
                        </Button>
                    </div>
                    </Form>
                </div>          
            ) : index === null (
            )
                }
            </div> 
    )
}

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
                        >
                        <Input />
                    </Form.Item>

export default AnswerForm;
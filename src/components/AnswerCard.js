import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer, changeIndex, backIndex, removeAnswer } from '../store';
// import Button from './inputComponents/Button';
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

    const { index, incident, registry } = useSelector((state) => {
        return {
            index: state.index.index,
            registry: state.registry,
            incident: state.registry,
        };
    });

    console.log(registry);


    const incrementIndex = (e) => {
        console.log('default prevented');
        e.preventDefault();

        dispatch(changeIndex(parseInt(index + 1)));
        dispatch(addAnswer(value));
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

    const ethnicity = [
        { label: 'Asian', value: 'asian' },
        { label: 'Black', value: 'black' }
    ];

    const states = [
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
            onChange={e => setValue({ ...value, streetAddress: e.target.value})}
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
            <Radio.Group defaultValue="" size="large" onChange={(event) => setValue(event.target.value)}>
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
            ) : index === 3 ? ( // Were Drugs Involved 
            <div>                        
            <Radio.Group defaultValue="" size="large" onChange={(event) => setValue(event.target.value)}>
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
            ) : index === 4 ? ( // Was Survivor Asleep at time of Incident
                <div>
                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[
                        {
                        required: true,
                        message: 'Please input your phone number!',
                        },
                        ]}
                        >
                      <Input
                        style={{
                        width: '100%',
                        }}
                        onChange={(event) => setValue(event.target.value)}
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
                    </div>
            ) : index === 5 ? ( // Were there verbal threats to the survivor
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
            ) : index === 6 ? ( // Was resistance offered by survivor
                <div>
                    <Form>
                    <Form.Item label="Ethnicity">
                          <Select
                            value={value}
                            onChange={e => setAddress({ state: {value}})}
                            >
                            <Select.Option value="al">Al</Select.Option>
                            <Select.Option value="ak">AK</Select.Option>
                            <Select.Option value="ca">CA</Select.Option>
                          </Select>
                        </Form.Item>
                     {/* <Form.Item>
                        <input
                        name="characteristics"
                        type='text'
                        placeholder='Add Answer..'                          
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        ></input>
                    </Form.Item> */}
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
            ) : index === 7 ? ( // Details of the assault
            <div>                        
            <Radio.Group defaultValue="" size="large" onChange={(event) => setValue(event.target.value)}>
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
            
            // <div>
                    //     <Form.Item
                    //         name="location of incident"
                    //         label="location of incident"
                    //         >
                    //         <Input placeholder="Please input your name" />
                    //     </Form.Item>
                    //     <div>
                    //         <Button 
                    //             className="button is-link"
                    //             onClick={decrementIndex}
                    //             >Back
                    //         </Button>
                    //         <Button 
                    //             className="button is-link"
                    //             onClick={(incrementIndex)}
                    //             >Next
                    //         </Button>
                    //     </div>
                    // </div>
            ) : index === 8 ? ( // Areas of sexual contact
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
                        <Radio.Group defaultValue="" size="large" onChange={(event) => setValue(event.target.value)}>
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
                        <Radio.Group defaultValue="" size="large" onChange={(event) => setValue(event.target.value)}>
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
                        <Radio.Group defaultValue="" size="large" onChange={(event) => setValue(event.target.value)}>
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
                    <Radio.Group defaultValue="" size="large" onChange={(event) => setValue(event.target.value)}>
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
            ) : index === 13 ? ( // Assailants Race/Ethnicity
                <div>                        
                    <Radio.Group defaultValue="" size="large" onChange={(event) => setValue(event.target.value)}>
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
            ) : index === 14 ? ( // Do you know the assailants name?
                <div>                        
                    <Form.Item
                       name="short description"
                       label="In Your own words"
                       >
                       <Input 
                       placeholder="Please input your name"
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
            ) : index === 15 ? ( // Do you know the assailants address?
                <div>                        
                    <Radio.Group defaultValue="" size="large" onChange={(event) => setValue(event.target.value)}>
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
            ) : index === 16 ? ( // Do you know the assailants phone number?
                <div>                        
                    <Radio.Group defaultValue="" size="large" onChange={(event) => setValue(event.target.value)}>
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
            ) : index === 17 ? ( // Do you know the assailants place of work?
                <div>                        
                    <Radio.Group defaultValue="" size="large" onChange={(event) => setValue(event.target.value)}>
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
            ) : index === 18 ? ( // Do you know the assailants email?
                <div>                        
                    <Radio.Group defaultValue="" size="large" onChange={(event) => setValue(event.target.value)}>
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
            ) : index === 19 ? ( // Assailants Defining Characteristics (i.e. tattoos, scars, physical disabilities, etc.) 
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
                        <Input 
                        type="text"
                        onChange={(event) => setValue(event.target.value)}/>
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
            ) : index === 21 ? ( // Email of Survivor 
                <div>
                    An confidential copy of the registry has been sent to your email
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
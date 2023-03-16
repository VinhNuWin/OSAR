import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswers, addAnswer, changeValue, changeValue2, changeIndex, backIndex } from '../store';
// import Button from './inputComponents/Button';
import { 
    Radio,
    Button,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
// import { changeValue } from '../store/slices/formSlice';
// import PropTypes from 'prop-types';

function AnswerForm({ raceEthnicity, socialMedia }) {
    const dispatch = useDispatch();

    const { index, data } = useSelector((state) => {
        return {
            index: state.index.index,
            data: state.index.data,
        }
    })

    const { RangePicker } = DatePicker;
    const { TextArea } = Input;

    const incrementIndex = (e) => {
        console.log('default prevented');
        e.preventDefault();

        dispatch(changeIndex(parseInt(index + 1)));
        dispatch(addAnswers({ assailant: assailant, id: index, address: address }));
    };

    const decrementIndex = (e) => {
        dispatch(backIndex(parseInt(index - 1)));

        if(index <= 0) {
            return (
                dispatch(changeIndex(parseInt(0)))
            )
        };
    };
    const [ assailant, setAssailant ] = useState([
        {fullName: ''},
        {race: ''},
        {gender: ''},
    ]);


    const [ value, setValue ] = useState();

    const [ address, setAddress ] = useState({ 
        streetAddress: '',
        city: '',
        state: '',
        postal: '',
        country: ''
    });

    

    const handleOnSubmit = ({address}) => {
        dispatch(addAnswers({address}));
        console.log({address});
    };

    // const handleAssSubmit = ({ assailant }) => {
    //     dispatch(addAnswers({assailant}));
    //     console.log({assailant});
    // }

    console.log({data});
    // console.log({assailant});

    const options = [
        { label: 'Asian', value: 'asian' },
        { label: 'Black', value: 'black' }
    ];

    const states = [
        { label: 'AL', value: 'Alabama' },
        { label: 'CA', value: 'California' },
        { label: 'DE', value: 'Delaware' },
    ]

    const handleOnChange = (option) => {
        setValue(option);
        console.log(value);
    };

    return (
        <div className="w-full content-center" >
            {index === 0 ? (
                    <Form >
                       <div>
                       <input
                           type='text'
                           placeholder='Add Answer..'                          
                           value={assailant.fullName}
                           onChange={(e) => setAssailant({ fullName: e.target.value})}
                           ></input>
                       </div>
                       <div>
                       <Button 
                       type='ghost'
                       onClick={decrementIndex}
                       >
                           Back
                       </Button>
                       <Button 
                       type='primary'
                       onClick={incrementIndex}
                       >
                           Next
                       </Button>
                       </div>
                   </Form>
            ) : index === 1 ? (
                <div>
                    <Form >
                        <Form.Item label="Ethnicity" name={'Ethnicity'}>
                            <Select options= {options}
                                    value= {value}
                                    onChange={(option) => setAssailant({ ...assailant, race: (option)})}
                                    />
                        </Form.Item>
                        <Button 
                       type='ghost'
                       onClick={decrementIndex}
                       >
                           Back
                       </Button>
                       <Button 
                       type='primary'
                       onClick={incrementIndex}
                       >
                           Next
                       </Button>
                    </Form>
                    </div>
            ) : index === 2 ? (
            <form>
                <div>
                    <Radio.Group onChange={(e) => setAssailant({ ...assailant, gender: e.target.value })} size="large">
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
                            onClick={incrementIndex}
                            >Next
                        </Button>
                    </div>
                </div>
            </form>
            ) : index === 3 ? (
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
                            value={address.streetAddress}
                            onChange={e => setAddress({ ...address, address: e.target.value})}
                            />
                        </Form.Item>
                        <Form.Item label="City">
                          <Input 
                            type='text'
                            value={address.city}
                          onChange={e => setAddress({ ...address, city: e.target.value})}
                          />
                        </Form.Item>
                        <Form.Item label="State">
                          <Select
                            onChange={o => setAddress({ state: {o}})}
                            >
                            <Select.Option options={states} value={value}>Al</Select.Option>
                          </Select>
                        </Form.Item>
                        <Form.Item label="Postal Code">
                          <InputNumber 
                          value={address.postal}
                          onChange={e => setAddress({ ...address, postal: e.target.value})}
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
            ) : index === 4 ? (      
                    <div>       
                        <Form
                            labelCol={{ span: 140, }}
                            wrapperCol={{ span: 140, }}
                            layout="horizontal"
                            style={{ maxWidth: 600, }}
                            onSubmit={handleOnSubmit}
                            >
                        <Form.Item label="Address Line">
                          <Input 
                            type='text' 
                            value={address.address}
                            onChange={e => setAddress({ address: e.target.value})}
                            />
                        </Form.Item>
                        <Form.Item label="City">
                          <Input 
                          value={address.city}
                          onChange={e => setAddress({ city: e.target.value})}
                          />
                        </Form.Item>
                        <Form.Item label="State">
                          <Select
                            value={value}
                            onChange={e => setAddress({ state: {value}})}
                            >
                            <Select.Option value="al">Al</Select.Option>
                            <Select.Option value="ak">AK</Select.Option>
                            <Select.Option value="ca">CA</Select.Option>
                          </Select>
                        </Form.Item>
                        <Form.Item label="Postal Code">
                          <InputNumber 
                          onChange={e => setAddress({ postal: e.target.value})}
                          />
                        </Form.Item>
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
                        </Form>
                    </div>
            ) : index === 5 ? (
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
            ) : index === 6 ? (
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
            ) : index === 7 ? (
                <div>
                    <Form>
                     <Form.Item>
                        <input
                        name="characteristics"
                        type='text'
                        placeholder='Add Answer..'                          
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        ></input>
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
            ) : index === 8 ? (
                    <div>
                        <Form.Item
                            name="location of incident"
                            label="location of incident"
                            >
                            <Input placeholder="Please input your name" />
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
            ) : index === 9 ? (
                    <div>
                        <Form>
                            <Form.Item label="DatePicker">
                              <DatePicker 
                              onChange={(event) => setValue(event.target.value)}
                              />
                            </Form.Item>
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
            ) : index === 10 ? (
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
            ) : index === 11 ? (
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
            ) : index === 12 ? (
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
            ) : index === 13 ? (
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
            ) : index === 14 ? (
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
            ) : index === 15 ? (
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
            ) : index === 16 ? (
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
            ) : index === 17 ? (
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
            ) : index === 18 ? (
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
            ) : index === 19 ? (
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
            ) : index === 20 ? (
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
            ) : index === 21 ? (
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
            ) : index === 21 ? ( 
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
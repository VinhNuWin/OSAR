import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropdownPage from '../pages/DropdownPage';
import { addAnswer, changeFName, changeLName, changeIndex, backIndex } from '../store';
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
// import PropTypes from 'prop-types';

function AnswerForm({ raceEthnicity, socialMedia }) {
    const dispatch = useDispatch();

    const { fName, lName, index } = useSelector((state) => {
        return {
            fName: state.form.fName,
            lName: state.form.lName,
            index: state.index.index
        }
    })

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 70,
            }}
          >
            {/* <Option value=""></Option>
            <Option value=""></Option> */}
          </Select>
        </Form.Item>
      );

      const [form] = Form.useForm();

      const formItemLayout = {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 8,
        },
      };
      const formTailLayout = {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 8,
          offset: 4,
        },
      };

    const [componentDisabled, setComponentDisabled] = useState(true);

    const { RangePicker } = DatePicker;
    const { TextArea } = Input;
    
    const handleNameChange = (e) => {
        dispatch(changeFName(e.target.value))
    };

    const handleLNameChange = (e) => {
        dispatch(changeLName(e.target.value))
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addAnswer({ fName, lName }));
    };

    const incrementIndex = (e) => {
        dispatch(changeIndex(parseInt(index + 1)));
    };

    const decrementIndex = (e) => {
        dispatch(backIndex(parseInt(index - 1)));

        if(index <= 0) {
            return (
                dispatch(changeIndex(parseInt(0)))
            )
        };
    };

    console.log(index);


    return (
    
        <div class="w-full" >
            {index === 0 ? (
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">First Name</label>
                        <input
                            className="input is-expanded"
                            value={fName}
                            onChange={handleNameChange}
                            />
                    </div>

                    <div className="field">
                        <label className="label">Last Name</label>
                        <input
                            className="input is-expanded"
                            value={lName}
                            onChange={handleLNameChange}
                            />
                    </div>
                </div>
                <div>
                <Form
                form={form}
                name="dynamic_rule"
                style={{
                  maxWidth: 600,
                }}
                >
      <Form.Item
        {...formItemLayout}
        name="username"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your name',
          },
        ]}
      >
        <Input placeholder="Please input your name" />
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        name="nickname"
        label="Nickname"
        rules={[
          {
            message: 'Please input your nickname',
          },
        ]}
      >
        <Input placeholder="Please input your nickname" />
      </Form.Item>
</Form>
                </div>
                <div className="field">
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

            </form>
            ) : index === 1 ? (
                <form onSubmit={handleSubmit}>
                    <div className="field-group">
                        <div className="field">
                            <label className="label">Social Media</label>
                            <input
                                className="input is-expanded"
                                value={fName}
                                onChange={handleNameChange}
                                />
                        </div>
                        <DropdownPage raceEthnicity={raceEthnicity} />
                    </div>
                    <div className="field">
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
                </form>
            ) : index === 2 ? (
            <form>
                <div>
                    <Radio.Group defaultValue="" size="large">
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
            </form>
            ) : index === 3 ? (
                <div>       
                        <Form
                            labelCol={{ span: 4, }}
                            wrapperCol={{ span: 14, }}
                            layout="horizontal"
                            style={{ maxWidth: 600, }}
                            >
                        <Form.Item label="Address Line">
                          <Input />
                        </Form.Item>
                        <Form.Item label="Address Line 2">
                          <Input />
                        </Form.Item>
                        <Form.Item label="City">
                          <Input />
                        </Form.Item>
                        <Form.Item label="State">
                          <Select>
                            <Select.Option value="demo">Demo</Select.Option>
                          </Select>
                        </Form.Item>
                        <Form.Item label="Postal Code">
                          <InputNumber />
                        </Form.Item>
                        <Form.Item label="Country">
                          <Select>
                            <Select.Option value="demo">Demo</Select.Option>
                          </Select>
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
            ) : index === 4 ? (
                 <div>
                    <div>       
                        <Form
                            labelCol={{ span: 4, }}
                            wrapperCol={{ span: 14, }}
                            layout="horizontal"
                            style={{ maxWidth: 600, }}
                            >
                        <Form.Item label="Place of Work">
                          <Input />
                        </Form.Item>
                        <Form.Item label="Address Line">
                          <Input />
                        </Form.Item>
                        <Form.Item label="Address Line 2">
                          <Input />
                        </Form.Item>
                        <Form.Item label="City">
                          <Input />
                        </Form.Item>
                        <Form.Item label="State">
                          <Select>
                            <Select.Option value="demo">State</Select.Option>
                          </Select>
                        </Form.Item>
                        <Form.Item label="Postal Code">
                          <InputNumber />
                        </Form.Item>
                        <Form.Item label="Country">
                          <Select>
                            <Select.Option value="demo">Country</Select.Option>
                          </Select>
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
                        addonBefore={prefixSelector}
                        style={{
                        width: '100%',
                        }}
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
            ) : index === 7 ? (
                <div>
                     <Form.Item
                        name="characteristics"
                        label="characteristics"
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
                              <DatePicker />
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
                        <Radio.Group defaultValue="" size="large">
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
                        <Radio.Group defaultValue="" size="large">
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
                        <Radio.Group defaultValue="" size="large">
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
        <Radio.Group defaultValue="" size="large">
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
            <Radio.Group defaultValue="" size="large">
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
            ) : index === 16 ? (
                <div>                        
                    <Radio.Group defaultValue="" size="large">
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
                        <Radio.Group defaultValue="" size="large">
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
                            <Radio.Group defaultValue="" size="large">
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
                                <Radio.Group defaultValue="" size="large">
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
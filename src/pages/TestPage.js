import { useState } from 'react';
import React from 'react';
import { Button, Input, Form } from 'antd';

function TestPage() {

    const [visible, setVisible] = useState(false);
    const [ value, setValue ] = useState();
    return (
        <div>
            <h1>Test</h1>
            <button 
            onClick={() => setVisible(true)}
            >Click me</button>
            {visible && 
                                    <Form>                      
                                    <Form.Item>
                                       <Input 
                                       placeholder="Please input assailants name"
                                       onChange={(event) => setValue({ assailant: event.target.value})} />
                                    </Form.Item>
                                    </Form>}
                                    
        </div>
    )
};

export default TestPage;

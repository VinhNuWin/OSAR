import { useDispatch, useSelector } from 'react-redux';
import { addAnswer, setAnswer } from '../store';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

function Form () {

    const dispatch = useDispatch();

    // const { fName, lName, index } = useSelector((state) => {
    //     return {
    //         fName: state.form.fName,
    //         lName: state.form.lName,
    //         index: state.index.index, 
    //     }
    // })

    // const handleSubmit = (event) => {
    //     dispatch(addAnswer(event.target.value));
    // };

    // const handleAnswerChange = (event) => {
    //     event.preventDefault();

    //     dispatch(addAnswer({fName, lName}));
    // };


    return 
        // <ContactForm />
    
};
    //     <div>
    //        <form onSubmit={handleSubmit}>
    //             <div className="field-group">
    //                 <div className="field">
    //                      <label className="label">First Name</label>
    //                      <input
    //                          className="input is-expanded"
    //                          value={fName}
    //                          onChange={handleAnswerChange}
    //                      />
    //                  </div>
    //             </div>

    //             <div className="field-group">
    //                 <div className="field">
    //                      <label className="label">Last Name</label>
    //                      <input
    //                          className="input is-expanded"
    //                          value={lName}
    //                          onChange={handleAnswerChange}
    //                      />
    //                  </div>
    //             </div>
    //         </form>
    //     </div>
    // )

export default Form;
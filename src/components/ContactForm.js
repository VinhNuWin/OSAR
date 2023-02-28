// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Field, reduxForm } from 'redux-form';
// import Button from './Button';
// import { addAnswer, backIndex, changeFName, changeLName, changeIndex } from '../store';


// function ContactForm() {
//     const dispatch = useDispatch();

//     const { fName, lName, index } = useSelector((state) => {
//         return {
//             fName: state.form.fName,
//             lName: state.form.lName,
//             index: state.index.index,
//         }
//     });

//     const handlefNameChange = (event) => {
//         event.preventDefault();
//         dispatch(changeFName(event.target.value));

//         console.log('Default Prevented')
//     };

//     const handleAnswerChange = (event) => {
//         event.preventDefault();
//         // dispatch(changeLName(event.target.value));
    
//         console.log('event.target.value');
//     };

//     const incrementIndex = (e) => {
//         dispatch(changeIndex(parseInt(index + 1)));
//     };

//     const decrementIndex = (e) => {
//         dispatch(backIndex(parseInt(index - 1)));

//         if(index === 0) {
//             return (
//                 changeIndex(parseInt(0))
//             )
//         };
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         console.log('preventDefault');

//         dispatch(addAnswer({fName, lName}));
//     };

//         return (
//         <form onSubmit={(event) => handleSubmit}>
//                 <label htmlFor='fName'>First Name</label>
//                 <Field name="fName" component="input" type="text" value={fName} 
//                 onChange={handlefNameChange}/>
//             <div>
//                 <label htmlFor="lName">Last Name</label>
//                 <Field name="lName" component="input" type="text" value={lName} 
//                 onChange={() =>{dispatch(changeLName(lName))
//                 }} />
//             </div>
//             <div>
//                 <Button primary 
//                 onClick={decrementIndex}>Back
//                 </Button>
//             </div>
//             <div>
//                 <Button secondary
//                 onClick={incrementIndex}
//                 type="submit">Submit
//                 </Button>
//             </div>
//         </form>
//     )
// };



// // Decorate the Form Component
// ContactForm = reduxForm({
//     form: 'assailantName',
//     onSubmit: () => {},
// })(ContactForm);

// export default ContactForm;
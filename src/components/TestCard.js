// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addAnswers } from '../store';


// function TestCard() {
//     const [value, setValue] = useState();

//     const dispatch = useDispatch();

//     const handleOnSubmit = (event) => {
//         console.log("default prevented")
//         event.preventDefault();


//         dispatch(addAnswers({
//             title: value,
//         }));

//         console.log(value);
//     };

//     return (
//         <form>
//             <div>
//             <input
//                 type='text'
//                 placeholder='Add Answer..'
//                 value={value}
//                 onChange={(event) => setValue(event.target.value)}
//                 ></input>
//             </div>
//             <button type='submit' onSubmit={handleOnSubmit}>
//                 Submit
//             </button>
//         </form>
//     )
// }
// export default TestCard;
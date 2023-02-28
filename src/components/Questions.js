import { useSelector } from  'react-redux';
// import { useState, useCallback } from "react";
import InputPage from '../pages/InputPage';


function Questions() {
    // const dispatch = useDispatch();

    const { question, index } = useSelector((state) => {
        return {
            index: state.index.index,
            question: state.form.question,
            // fName: state.form.fName,
            // lName: state.form.lName,
        }
    });


    return (
        <div>
            <div>
                <h2>{question[index]}</h2>
            </div>
            <div>      
                {/* <InputPage /> */}
                {/* <AnswerForm /> */}
            </div>

            {/* <div>
                <Button primary 
                onClick={decrementIndex }>Back
                </Button>
            </div>
            <div>
                <Button secondary
                onClick={incrementIndex}>Submit
                </Button>
            </div> */}
        </div>
    )
}

    
//     return (
//         <div className="car-form panel">
//             {/* <h1 className="subtitle is-3">{items.label}</h1> */}
//             <form onSubmit={handleSubmit}>
//                 <div className="field-group">
//                     <div className="field">
//                         <label className="label">Name</label>
//                         <input
//                             className="input is-expanded"
//                             value={name}
//                             onChange={handleAnswerChange}
//                         />
//                     </div>

//                     <div className="field">
//                         <label className="label">Cost</label>
//                         <input
//                         className="input is-expanded"
//                         value={cost || ''}
//                         onChange={handleCostChange}
//                         type="number"
//                         />
//                     </div>
//                 </div>
//                 <div className="field">
//                     <button className="button is-link">Submit</button>
//                 </div>
//             </form>
//             <div>
//             <AnswersList />
//         </div>
//         </div>

//     );
// };


// const [index, setIndex] = useState(0);

    // const mod = (n,m) => ((n % m) + m) % m;

    // // const forwards = useCallback(() => 
    // //     setIndex(state => mod(state + 1, items.length))
    // //     , [setIndex, items]);

    // const backAnswer = useCallback(() => 
    //     setIndex(state => mod(state - 1, items.length))
    //     , [setIndex, items]);



    // const handleDataCapture = (event) => {
    //     dispatch();
    // };


export default Questions;


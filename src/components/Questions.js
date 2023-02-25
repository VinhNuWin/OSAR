import { useDispatch, useSelector } from  'react-redux';
// import { useState, useCallback } from "react";
import { backIndex, changeIndex } from '../store';
import Button from './Button';
import { items } from '../pages/QuestionPage';

function Questions() {
    const dispatch = useDispatch();

    const { index } = useSelector((state) => {
        return {
            index: state.index.index,
        }
    });
    console.log(index);
    console.log(items);

    const increment = (event) => {
        dispatch(changeIndex(parseInt(index + 1)));
    };

    const decrement = () => {
        dispatch(backIndex(parseInt(index - 1)))

        console.log(index);
    };

    return (
        <div>
            <h2>{items[index]}</h2>
            <Button 
            onClick={decrement}>Back
            </Button>
            <Button 
            onClick={increment}>Submit
            </Button>
        </div>
    )
}
    // const {name, cost} = useSelector((state) => {
    //     return {
    //         name: state.form.name,
    //         cost: state.form.cost,
    //     }
    // });

    // const handleAnswerChange = (event) => {
    //     dispatch(changeName(event.target.value));
    // };
    // const handleCostChange = (event) => {
    //     const carCost = parseInt(event.target.value) || 0;
    //     dispatch(changeCost(carCost));
    //   };
    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     dispatch(addAnswer({name, cost}));
    // };

    
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


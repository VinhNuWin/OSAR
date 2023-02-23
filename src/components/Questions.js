import { useDispatch, useSelector } from  'react-redux';
import { useState, useCallback, useReducer } from "react";
// import InputsPage from "../pages/InputsPage";

const mod = (n,m) => ((n % m) + m) % m;

function Questions({ items }) {
    const dispatch = useDispatch();
    const [index, setIndex] = useState(0);
    // const [state, dispatch] = useReducer(reducer, {
    //     count: initialIndex,
    //     inputToAdd: 0
    // })
    const questionList = useSelector((state) => {
        return state.questions;
    })

    const forwards = () => {
        dispatch();
    // setIndex(state => mod(state + 1, items.length))
    // , [setIndex, items]);
    };
    // const forwards = useCallback(() => 
    //     const action = nextQuestion(1);
    //     // setIndex(state => mod(state + 1, items.length))
    //     // , [setIndex, items]);
    //     console.log(action);

    const backwards = useCallback(() => 
        setIndex(state => mod(state - 1, items.length))
        , [setIndex, items]);


    return (
        <div >
            <h1>{items[index].label}</h1>
            <div>

            </div>
            <div>
                <button onClick={backwards}>Back</button>
            </div>
            <div>
                <button onClick={forwards}>Next</button>
            </div>
        </div>
    );
}

export default Questions;

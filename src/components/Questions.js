import { useSelector } from  'react-redux';
// import { useState, useCallback } from "react";
import AnswerCard from './AnswerCard';


function Questions() {
    // const dispatch = useDispatch();

    const { question, index } = useSelector((state) => {
        return {
            index: state.index.index,
            question: state.form.question,
        }
    });


    return (
        <div className='text-5xl py-48 justify-center text-center h-96 border border-green-400'>
            <h1 className=''>{question[index]}</h1>
        </div>
    )
}

export default Questions;


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
        <div class='subpixel-antialiased text-5xl'>
            <h1>{question[index]}</h1>
        </div>
    )
}

export default Questions;


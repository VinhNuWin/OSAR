import { useSelector } from  'react-redux';
// import { useState, useCallback } from "react";
import AnswerCard from './AnswerCard';


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
        <div class='content-center'>
            <h2>{question[index]}</h2>
        </div>
    )
}

export default Questions;


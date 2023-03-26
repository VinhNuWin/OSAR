import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswers } from '../store';
import RadioButton from './inputComponents/RadioButton';


function TestCard() {
    const [value, setValue] = useState();

    const dispatch = useDispatch();

    const handleOnSubmit = (event) => {
        console.log("default prevented")
        event.preventDefault();


        dispatch(addAnswers({
            title: value,
        }));

        console.log(value);
    };

    return (
        <form>
            <div>
            {/* <input
                type='text'
                placeholder='Add Answer..'
                value={value}
                onChange={(event) => setValue(event.target.value)}
                ></input> */}
            </div>
            <RadioButton className='btn-radio' onSubmit={handleOnSubmit}>
                Submit
            </RadioButton>
        </form>
    )
}
export default TestCard;
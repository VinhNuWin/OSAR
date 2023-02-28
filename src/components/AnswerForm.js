import { useDispatch, useSelector } from 'react-redux';
import { addAnswer, changeFName, changeLName, changeIndex, backIndex } from '../store';
import Button from './Button';

function AnswerForm() {
    const dispatch = useDispatch();

    const { fName, lName, index } = useSelector((state) => {
        return {
            fName: state.form.fName,
            lName: state.form.lName,
            index: state.index.index
        }
    })
    
    const handleNameChange = (e) => {
        dispatch(changeFName(e.target.value))
    };

    const handleLNameChange = (e) => {
        dispatch(changeLName(e.target.value))
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addAnswer({ fName, lName }));
    };

    const incrementIndex = (e) => {
        dispatch(changeIndex(parseInt(index + 1)));
    };

    const decrementIndex = (e) => {
        dispatch(backIndex(parseInt(index - 1)));

        if(index === 0) {
            return (
                changeIndex(parseInt(0))
            )
        };
    };

    return <div className="car-form panel">
        <h4 className="subtitle is-3">Add Name</h4>
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                    <label className="label">Name</label>
                    <input
                        className="input is-expanded"
                        value={fName}
                        onChange={handleNameChange}
                        />
                </div>

                <div className="field">
                    <label className="label">Cost</label>
                    <input
                        className="input is-expanded"
                        value={lName}
                        onChange={handleLNameChange}
                        />
                </div>
            </div>
            <div className="field">
            <Button 
                    className="button is-link"
                    onClick={decrementIndex}
                    >Back
                </Button>
                <Button 
                    className="button is-link"
                    onClick={incrementIndex}
                    >Next
                </Button>
            </div>
        </form>
    </div>;
}

export default AnswerForm;
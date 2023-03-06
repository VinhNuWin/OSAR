import { useDispatch, useSelector } from 'react-redux';
import DropdownPage from '../pages/DropdownPage';
import { addAnswer, changeFName, changeLName, changeIndex, backIndex } from '../store';
import Button from './inputComponents/Button';
import PropTypes from 'prop-types';

function AnswerForm({ raceEthnicity, socialMedia }) {
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

        if(index <= 0) {
            return (
                dispatch(changeIndex(parseInt(0)))
            )
        };
    };

    console.log(index);


    return (
    
        <div className="car-form panel">
            {index === 0 ? (
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">First Name</label>
                        <input
                            className="input is-expanded"
                            value={fName}
                            onChange={handleNameChange}
                            />
                    </div>

                    <div className="field">
                        <label className="label">Last Name</label>
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
                        onClick={(incrementIndex)}
                        >Next
                    </Button>
                </div>
            </form>
             ) : index === 1 ? (
                <form onSubmit={handleSubmit}>
                    <div className="field-group">
                        <div className="field">
                            <label className="label">Social Media</label>
                            <input
                                className="input is-expanded"
                                value={fName}
                                onChange={handleNameChange}
                                />
                        </div>
                        <DropdownPage socialMedia={socialMedia} />
                    </div>
                    <div className="field">
                    <Button 
                            className="button is-link"
                            onClick={decrementIndex}
                            >Back
                        </Button>
                        <Button 
                            className="button is-link"
                            onClick={(incrementIndex)}
                            >Next
                        </Button>
                    </div>
                </form>
            ) : index === 2 ? (
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <DropdownPage raceEthnicity={raceEthnicity} />
                </div>
                <div className="field">
                <Button 
                        className="button is-link"
                        onClick={decrementIndex}
                        >Back
                    </Button>
                    <Button 
                        className="button is-link"
                        onClick={(incrementIndex)}
                        >Next
                    </Button>
                </div>
            </form>
            ) : index === 3 ? (
            <form>
                <div>
                    <DropdownPage socialMedia={socialMedia} />
                    <div>
                        <Button 
                            className="button is-link"
                            onClick={decrementIndex}
                            >Back
                        </Button>
                        <Button 
                            className="button is-link"
                            onClick={(incrementIndex)}
                            >Next
                        </Button>
                    </div>
                </div>
            </form>
            ) : index === 4 ? (
            <div></div>
                )(
            
            
            ) : null
}
    </div>
    )
}



export default AnswerForm;
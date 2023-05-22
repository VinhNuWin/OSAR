import { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex, backIndex, addIncidentId, addAssailantId } from '../store';

function ButtonCard( ) {
    const { survivor, index, _id, email, incident, assailant, userId } = useSelector((state) => {
        return {
            survivor: state.index.registry,
            index: state.index.index,
            _id: state.index.registry.incident._id,
            email: state.index.email,
            incident: state.index.registry.incident,
            assailant: state.index.registry.assailant,
        };
    });

    const dispatch = useDispatch();
    const [ visible, setVisible ] = useState(false);
    const [ value, setValue ] = useState();
    
    let newIndex = (index + 1);

    const incrementIndex = (e) => {
        console.log('default prevented');
        e.preventDefault();

        dispatch(changeIndex(parseInt(newIndex)));
        setVisible(false);
        setValue('');
    };


    const skipIndex = (e) => {
        dispatch(changeIndex(parseInt(index + 1)));
        setVisible(false);
    }

    const decrementIndex = (e) => {
        dispatch(backIndex(parseInt(index - 1)));

        if(index <= 0) {
            return (
                dispatch(changeIndex(parseInt(0)))
            )
        };
    };

    const handleRegistryInputs = async () => {
        if( index === 1 ) {
            const response = await axios.post(`https://osar-api.onrender.com/incidents`, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Method': 'GET,PUT,POST,DELETE',
                },
                incident: incident,
            });
            console.log(response);
            const incidentId = response.data.data._id;
            dispatch(addIncidentId(incidentId)); 
            dispatch(changeIndex(parseInt(index + 1)));

        } else if ( index === 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10 || 11 || 12 ) {
            const response = await axios.patch(`https://osar-api.onrender.com/incidents/${_id}`, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Method': 'GET,PUT,POST,DELETE',
                },
                incident: incident,
                _id: _id
            });
            dispatch(changeIndex(parseInt(newIndex)));
            console.log('index was changed'); 
            console.log(response);
        } else if ( index === 13 ) {
            const response = await axios.post(`https://osar-api.onrender.com/assailants`, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Method': 'GET,PUT,POST,DELETE',
                },
                assailant: assailant
            });
            console.log(response); 
            const assailantId = response.data.data._id;
            dispatch(addAssailantId(assailantId)); 
            dispatch(changeIndex(parseInt(index + 1)));
        } else if ( index === 14 || 15 || 16 || 17 || 18 || 19 || 20 ) {
            const response = await axios.patch(`https://osar-api.onrender.com/assailants/${_id}`, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Method': 'GET,PUT,POST,DELETE',
                },
                assailant: assailant,
                _id: _id
            });
            console.log(response); 
            dispatch(changeIndex(parseInt(index + 1)));
        } else if ( index === 21 ) {
            const response = await axios.patch(`https://osar-api.onrender.com/users/${_id}`, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Method': 'GET,PUT,POST,DELETE',
                },
                survivor: survivor,
                _id: _id
            });
            console.log(response); 
            dispatch(changeIndex(parseInt(index + 1)));
        };
    }


    const containerVariants = {
        //initial
        hidden: {
            opacity: 0,
            y: 50
        },
        //animate
        visible: {
            opacity: 1,
            y: 0,
            duration: .1,
            transition: { ease: 'easeInOut' }
        },
        exitAnimation: {
            opacity: 0,
            y: -50,
            transition: { ease: 'easeInOut' }
        }
        };

    return (
        <AnimatePresence>
        <motion.div 
            className='container'
            >
            <ButtonGroup
            className=''>
                <div className='flex-box'>
                    <div className='w-40'>
                <Button 
                    variant='backButton'
                    onClick={decrementIndex}
                    width={{ base: '50%', md: '50%', xl: '100%'}}
                    >Back
                </Button>
                </div>
                <div className=''>
                <Button 
                    variant='skipButton'
                    onClick={skipIndex}
                    >SKIP
                </Button>
                </div>
                <div className='w-40'>
                <Button 
                    variant='nextButton'
                    onClick={handleRegistryInputs}
                    width={{ base: '50%', md: '50%', xl: '100%'}}
                    >Next
                </Button>
                </div>
                </div>
            </ButtonGroup>

        </motion.div>

        </AnimatePresence>
        
    )
}

export default ButtonCard;
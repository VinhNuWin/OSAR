import { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex, backIndex } from '../store';

function ButtonCard( ) {
    const { store, index, _id, email, incident, assailant } = useSelector((state) => {
        return {
            store: state,
            index: state.index.index,
            _id: state.form.user._id,
            email: state.index.email,
            incident: state.index.registry.incident,
            assailant: state.index.registry.assailant,

        };
    });

    const dispatch = useDispatch();
    const [ visible, setVisible ] = useState(false);
    const [ value, setValue ] = useState();
    

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
            dispatch(changeIndex(parseInt(index + 1)));
        };
        if( index === 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10 || 11 || 12 ) {
            const response = await axios.put(`https://osar-api.onrender.com/incidents/:id`, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Method': 'GET,PUT,POST,DELETE',
                },
                incident: incident
            });
            dispatch(changeIndex(parseInt(index + 1)));
            console.log('index was changed'); 
        };
        if( index === 13 ) {
            const response = await axios.post(`https://osar-api.onrender.com/assailants`, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Method': 'GET,PUT,POST,DELETE',
                },
                assailant: assailant
            });
            console.log(response); 
            dispatch(changeIndex(parseInt(index + 1)));
        };
        if( index === 14 || 15 || 16 || 17 || 18 || 19 || 20 || 21 ) {
            const response = await axios.put(`https://osar-api.onrender.com/assailants/:id`, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Method': 'GET,PUT,POST,DELETE',
                },
                assailant: assailant
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
            className='button'
            >
            <ButtonGroup
            className=''
            colorScheme='green'
            size='lg'>
                <Button 
                    variant='backButton'
                    onClick={decrementIndex}
                    >Back
                </Button>
                <Button 
                    variant='nextButton'
                    onClick={handleRegistryInputs}
                    >Next
                </Button>
            </ButtonGroup>
            <Button 
            className='ml-96 pt-5'
                variant='skipButton'
                onClick={skipIndex}
                >SKIP
                </Button>
        </motion.div>

        </AnimatePresence>
        
    )
}

export default ButtonCard;
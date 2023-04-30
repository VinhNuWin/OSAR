import { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { changeIndex, backIndex } from '../store';

function ButtonCard() {
    const { store, index, _id, } = useSelector((state) => {
        return {
            store: state,
            index: state.index.index,
            _id: state.form.user._id
        };
    });

    const dispatch = useDispatch();
    const [ visible, setVisible ] = useState(false);
    const [ value, setValue ] = useState()
    const [ incident, setIncident ] = useState({
        userId: _id,
        date: '',
        location: '',
        streetAddress: '',
        city: '',
        state: '',
        postal: 0,
        wasAlcoholInvolved: false,
        wereDrugsInvolved: false,
        wasSurvivorAsleepTimeOfIncident: false,
        verbalThreatsToSurvivor: false,
        resistanceOfferedBySurvivor: false,
        detailsOfTheAssault: '',
        areasOfSexualContact: '',
        useOfWeaponsFromAssailant: false,
        useOfRestraintFromAssailant: false,
    });
    const [ assailant, setAssailant ] = useState({
        userId: _id,
        gender: '',
        raceEthnicity: '',
        fullName: '',
        streetAddress: '',
        work: '',
        city: '',
        state: '',
        zipcode: 0,
        phone: 0,
        email: '',
        definingCharacteristics: '',
    });

    const incrementIndex = (e) => {
        console.log('default prevented');
        e.preventDefault();

        dispatch(changeIndex(parseInt(index + 1)));
        setVisible(false);
        setValue('');
    };

    const decrementIndex = (e) => {
        dispatch(backIndex(parseInt(index - 1)));

        if(index <= 0) {
            return (
                dispatch(changeIndex(parseInt(0)))
            )
        };
    };

    const addIncident = async () => {
        const response = await axios.post(`http://localhost:3001/incidents`, {
            headers: {
                'Content-Type': 'application/json'
            },
            incident: incident
        });
        console.log(response); 
        dispatch(changeIndex(parseInt(index + 1)));
    };

    const addAssailant = async () => {
        const response = await axios.post('http://localhost:3001/assailants', {
            headers: {
                'Content-Type': 'application/json'
            },
            assailant: assailant
        });
        console.log(response);
        dispatch(changeIndex(parseInt(index + 1)));
    };

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0.5, type: 'spring', stiffness: 2 }
        },
        exit: {
            x: '-100vw',
            transition: { ease: 'easeInOut' }
        }
        };



    return (
        <motion.div className=''
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={index}
            exit="exit"
            >
            <ButtonGroup
            className=''
            colorScheme='blue'
            size='lg'>
                <Button 
                    onClick={decrementIndex}
                    >Back
                </Button>
                <Button 
                    onClick={incrementIndex}
                    >Next
                </Button>
            </ButtonGroup>
        </motion.div>
    )
}

export default ButtonCard;
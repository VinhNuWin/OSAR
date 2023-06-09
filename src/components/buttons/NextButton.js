import {Button} from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { changeIndex, addIncidentId, addAssailantId } from "../../store";
import MobileView from '../../views/MobileView';

export default function NextButton() {
    const dispatch = useDispatch();
    const { survivor, index, _id, incident, assailant, registry } = useSelector((state) => {
        return {
            survivor: state.index.registry,
            index: state.index.index,
            _id: state.index.registry.incident._id,
            email: state.index.email,
            incident: state.index.registry.incident,
            assailant: state.index.registry.assailant,
            registry: state.index.registry,
        };
    });
    const newIndex = (index + 1);
    

    const handleRegistryInputs = async () => {
        console.log('nextbuttonclicked');
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
            dispatch(changeIndex(parseInt(newIndex)));

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
            dispatch(changeIndex(parseInt((newIndex))));
            console.log('index was changed'); 
            console.log(response);
        } else if ( index === 12 ) {
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
            dispatch(changeIndex(newIndex));
        } else if ( index === 13 || 14 ) {
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
            dispatch(changeIndex(index + 1));
        } else if ( index === 15 ) {
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
            dispatch(changeIndex(index + 1));
        } else {
            const response = await axios.post('info@documentedvoices.com/api/sendemail', {
                headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Method': 'GET,PUT,POST,DELETE',
                },
                registry: registry,
            });
            console.log(response);
        };
    }

    
    return (
        <Button 
        variant={ !MobileView ? 'nextButton' : 'backButton' }
        onClick={handleRegistryInputs}
        >Next
        </Button> 
    )
}
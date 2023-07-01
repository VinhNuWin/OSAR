import {Button} from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { changeIndex } from "../../store";
import MobileView from '../../views/MobileView';

export default function FinalSubmit() {
    const dispatch = useDispatch();
    const { index, _id, registry, email } = useSelector((state) => {
        return {
            index: state.index.index,
            _id: state.index.registry._id,
            registry: state.index.registry,
            email: state.index.registry.email
        };
    });
    const newIndex = (index + 1);
    

    const handleRegistryInputs = async () => {
        console.log('nextbuttonclicked');
            
        const response = await axios.post(`https://dvaa-smtp.onrender.com/api/sendemail`, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Method': 'GET,PATCH,POST,DELETE',
                },
                registry: registry,
                email: email,
            });
            dispatch(changeIndex(parseInt((newIndex))));
            console.log('index was changed'); 
            console.log(response);
    }

    
    return (
        <Button 
        variant={ !MobileView ? 'nextButton' : 'backButton' }
        onClick={handleRegistryInputs}
        >Submit
        </Button> 
    )
}
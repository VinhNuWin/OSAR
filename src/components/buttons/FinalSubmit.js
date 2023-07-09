import {Button} from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { changeIndex } from "../../store";

export default function FinalSubmit() {
    const dispatch = useDispatch();
    const { index, _id, registryType, email, registryReport } = useSelector((state) => {
        return {
            index: state.index.index,
            _id: state.index.registry._id,
            registry: state.index.registry,
            email: state.index.registry.email,
            registryType: state.index.registry.registryType,
            registryReport: state.index.registry.registryReport
        };
    });

    const newIndex = (index + 1);
    

    const handleEmployeeRegistry = async () => {
        console.log('nextbuttonclicked');
            
        const response = await axios.post(`http://dvaa-smtp.onrender.com/api/sendemail`, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Method': 'GET,PATCH,POST,DELETE',
                },
                registryReport: registryReport,
                email: email,
            });
            console.log('index was changed'); 
            console.log(response);

            const registryResponse = await axios.post(`https://osar-api.onrender.com/${registryType}`, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Method': 'POST',
                },
                registryType: registryType,
                registryReport: registryReport,
            });
            console.log(registryResponse);
    
            dispatch(changeIndex(parseInt(index + 1)));
        };
    

    

    
    return (
        <Button 
        variant='backButton'
        onClick={handleEmployeeRegistry}
        >Submit
        </Button> 
    )
}
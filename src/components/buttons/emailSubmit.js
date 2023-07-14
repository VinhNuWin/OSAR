import {Button} from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { changeIndex } from "../../store";

export default function EmailSubmit() {
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
    

    const handleEmailSubmit = async () => {
            
        const response = await axios.post(`http://dvaa-smtp.onrender.com/api/sendemail`, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Method': 'POST',
                },
                registryReport: registryReport,
                email: email,
                
            });




        };
    
    const handleOnSubmit = async () => {
        console.log('email sent'); 
        dispatch(changeIndex(parseInt(index + 1)));
    }
    

    
    return (
        <Button 
        variant='backButton'
        onClick={handleEmailSubmit}
        onSubmit={handleOnSubmit}
        >Submit
        </Button> 
    )
}
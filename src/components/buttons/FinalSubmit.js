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
    

    const handleFinalSubmit = async () => {

            const registryResponse = await axios.post(`https://osar-api.onrender.com/${registryType}`, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Method': 'POST',
                },
                registryType: registryType,
                registryReport: registryReport,
            });
            console.log( registryType + ' has been submitted');
    
            dispatch(changeIndex(parseInt(index + 1)));
        };
    

    

    
    return (
        <Button 
        variant='backButton'
        onClick={handleFinalSubmit}
        >Next
        </Button> 
    )
}
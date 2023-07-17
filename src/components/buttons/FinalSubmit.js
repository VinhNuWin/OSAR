import {Button} from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { changeIndex, addResponseSummary, addSummaryKeys } from "../../store";

export default function FinalSubmit(props) {
    const dispatch = useDispatch();
    const { index, _id, registryType, email, registryReport, reportSummary, summaryKeys } = useSelector((state) => {
        return {
            index: state.index.index,
            _id: state.index.registry._id,
            registry: state.index.registry,
            email: state.index.registry.email,
            registryType: state.index.registry.registryType,
            registryReport: state.index.registry.registryReport,
            reportSummary: state.index.registry.reportSummary,
            summaryKeys: state.index.registry.summaryKeys
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
            console.log(registryResponse.data.data.registryReport);
            
            var data = registryResponse.data.data.registryReport;

            const newResponseSummary = Object.keys(data).map(key => {
                return data[key];
            });

            // const newSummaryKeys = Object.keys(data);

            // dispatch(addResponseSummary(data));
            dispatch(changeIndex(parseInt(index + 1)));
            console.log(newResponseSummary);
            // console.log(reportSummary);
        };
    

    

    
    return (
        <Button 
        variant='backButton'
        onClick={handleFinalSubmit}
        >Next
        </Button> 
    )
}

//https://osar-api.onrender.com/${registryType}
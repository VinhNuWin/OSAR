import {Button} from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { changeIndex } from "../../store";
import React from 'react';

export default function EmailSubmit() {
    const dispatch = useDispatch();
    const { index, _id, registryType, email, registryReport, reportSummary } = useSelector((state) => {
        return {
            index: state.index.index,
            _id: state.index.registry._id,
            registry: state.index.registry,
            email: state.index.registry.email,
            registryType: state.index.registry.registryType,
            registryReport: state.index.registry.registryReport,
            reportSummary: state.index.registry.reportSummary
        };
    });
    

    const handleEmailSubmit = async () => {
   
        const response = await axios.post(`https://dvaa-smtp.onrender.com`, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Method': 'POST',
                },
                registryReport: registryReport,
                email: email,
                reportSummary: reportSummary,
                
            });
            console.log('Report has been submitted');
            console.log(reportSummary);

            dispatch(changeIndex(parseInt(index + 1)));

        };
    
    const handleOnSubmit = async () => {
        console.log('email sent'); 
        dispatch(changeIndex(parseInt(index + 1)));
    };
    
    return (
        <Button 
        variant='backButton'
        onClick={handleEmailSubmit}
  
        >Submit
        </Button> 
    )
}
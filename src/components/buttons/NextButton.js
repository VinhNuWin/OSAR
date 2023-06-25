import {Button} from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { changeIndex } from "../../store";
import MobileView from '../../views/MobileView';

export default function NextButton() {
    const dispatch = useDispatch();
    const { index, _id, registry, registryType, location, date, streetAddress, city, state, zipcode, fullName, title, detailsOfIncident, peopleInvolved, witnesses, incidentOutcome, abilitiesAffected, seekedMedicalAttention, reportedToHigherPersonel, personalAffect, actionsTakenSinceIncident, additionalComments } = useSelector((state) => {
        return {
            index: state.index.index,
            _id: state.index.registry._id,
            registry: state.index.registry,
            registryType: state.index.registry.registryType,
            location: state.index.registry.location,
            date: state.index.registry.date,
            streetAddress: state.index.registry.address.streetAddress,
            fullName: state.index.registry.fullName,
            title: state.index.registry.title,
            city: state.index.registry.address.city,
            state: state.index.registry.address.state,
            zipcode: state.index.registry.address.zipcode,
            detailsOfIncident: state.index.registry.detailsOfIncident,
            peopleInvolved: state.index.registry.peopleInvolved,
            witnesses: state.index.registry.witnesses,
            incidentOutcome: state.index.registry.incidentOutcome,
            abilitiesAffected: state.index.registry.abilitiesAffected,
            seekedMedicalAttention: state.index.registry.seekedMedicalAttention,
            reportedToHigherPersonel: state.index.registry.reportedToHigherPersonel,
            personalAffect: state.index.registry.personalAffect,
            actionsTakenSinceIncident: state.index.registry.actionsTakenSinceIncident,
            additionalComments: state.index.registry.additionalComments
        };
    });
    const newIndex = (index + 1);
    

    const handleRegistryInputs = async () => {
        console.log('nextbuttonclicked');
            
        const response = await axios.patch(`https://osar-api.onrender.com/registry/${_id}`, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Method': 'GET,PATCH,POST,DELETE',
                },
                _id: _id,
                registry: registry,
                // registryType: registryType,
                // location: location,
                // date: date,
                // streetAddress: streetAddress,
                fullName: fullName,
                title: title,
                // city: city,
                // state: state,
                // zipcode: zipcode,
                // detailsOfIncident: detailsOfIncident,
                // peopleInvolved: peopleInvolved,
                // witnesses: witnesses,
                // incidentOutcome: incidentOutcome,
                // abilitiesAffected: abilitiesAffected,
                // seekedMedicalAttention: seekedMedicalAttention,
                // reportedToHigherPersonel: reportedToHigherPersonel,
                // personalAffect: personalAffect,
                // actionsTakenSinceIncident: actionsTakenSinceIncident,
                // additionalComments: additionalComments,
            });
            dispatch(changeIndex(parseInt((newIndex))));
            console.log('index was changed'); 
            console.log(response);
    }

    
    return (
        <Button 
        variant={ !MobileView ? 'nextButton' : 'backButton' }
        onClick={handleRegistryInputs}
        >Next
        </Button> 
    )
}
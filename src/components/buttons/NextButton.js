import {Button} from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import { changeIndex } from "../../store";

export default function NextButton() {
    const dispatch = useDispatch();
    const { index, _id, registry } = useSelector((state) => {
        return {
            index: state.index.index,
            _id: state.index.registry._id,
            registry: state.index.registry,
        };
    });
    const newIndex = (index + 1);
    

    const handleRegistryInputs = async () => {
        console.log('nextbuttonclicked');
            
        // const response = await axios.patch(`https://osar-api.onrender.com/registry/${_id}`, {
        //         headers: {
        //             'Content-Type' : 'application/json',
        //             'Access-Control-Allow-Origin': '*',
        //             'Access-Control-Allow-Method': 'GET,PATCH,POST,DELETE',
        //         },
        //         _id: _id,
        //         registry: registry,
        //         // registryType: registryType,
        //         // location: location,
        //         // date: date,
        //         // streetAddress: streetAddress,
        //         // city: city,
        //         // state: state,
        //         // zipcode: zipcode,
        //         // detailsOfIncident: detailsOfIncident,
        //         // peopleInvolved: peopleInvolved,
        //         // witnesses: witnesses,
        //         // incidentOutcome: incidentOutcome,
        //         // abilitiesAffected: abilitiesAffected,
        //         // seekedMedicalAttention: seekedMedicalAttention,
        //         // reportedToHigherPersonel: reportedToHigherPersonel,
        //         // personalAffect: personalAffect,
        //         // actionsTakenSinceIncident: actionsTakenSinceIncident,
        //         // additionalComments: additionalComments,
        //     });
            dispatch(changeIndex(parseInt((newIndex))));
            console.log('index was changed'); 
    }

    
    return (
        <Button 
        variant='backButton'
        onClick={handleRegistryInputs}
        >Next
        </Button> 
    )
}
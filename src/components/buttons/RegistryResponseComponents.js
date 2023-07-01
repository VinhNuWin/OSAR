import { motion } from "framer-motion";
import { useState } from 'react';
import { Button, Flex, Input, Select, FormControl, FormLabel } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { updateRegistry, addEmployeeAnswer, updateAddress } from "../../store/slices/indexSlice";
import FullNameAndTitleModal from "../modals/FullNameAndTitleModal";
import NextButton from "./NextButton";
import BackButton from "./BackButton";


export const BooleanYesNo = (props) =>  {
    const dispatch = useDispatch();

    const { registry, employeeRegistry } = useSelector((state)=> {
        return {
            registry: state.index.registry,
            employeeRegistry: state.index.registry.employeeRegistry
        }
    })

    return (
        <div>
            <NextButton />
            <BackButton />
            {/* <Button variant='backButton' onClick={(e) => dispatch(updateRegistry({...registry, [props.name]: false}))}>
                <CloseIcon w={8} boxSize={4} color='red.500' m='1%' />
                    No
            </Button>
            <Button variant='booleanButton' onClick={(e) => dispatch(updateRegistry({...registry, [props.name]: true}))}>
                <CheckIcon w={8} boxSize={5} color='green.500' m='1%' />
                    Yes
            </Button> */}
        </div>
    )
}

export const DateAndTime = () => {
    const dispatch = useDispatch();

    const { employeeRegistry } = useSelector((state)=> {
        return {
            employeeRegistry: state.index.employeeRegistry
        }
    })

    return (
        <div>    
            <Input
                 placeholder="Select Date and Time"
                 variant='flushed'
                 size="md"
                 type="datetime-local"
                 onChange={(datetime) => dispatch(updateRegistry({...employeeRegistry, date: datetime.target.value}))}
                />
        </div>
    )
}

export const Address = () => {
    const dispatch = useDispatch();

    const { address, state, zipcode, city } = useSelector((state)=> {
        return {
            address: state.index.employeeRegistry.address,
            streetAddress: state.index.employeeRegistry.address.streetAddress,
            state: state.index.employeeRegistry.address.state,
            zipcode: state.index.employeeRegistry.address.zipcode,
            city: state.index.employeeRegistry.address.city
        }
    })

    return (
        <Flex flexWrap='wrap' >
            <FormControl>
            <Input size='md' variant='flushed' placeholder='Address Line' name='streetAddress'  onChange={(e)=>dispatch(updateAddress({...address, [e.target.name]: e.target.value}))} />
        </FormControl>

            <FormControl mt={2}>
                <Input size='md' variant='flushed'   placeholder='City' name='city' onChange={(e) => dispatch(updateAddress({...address, [e.target.name]: e.target.value}))} />
            </FormControl>
            <Flex flexWrap='nowrap'>
            <FormControl mt={2}>
                <Select size='md' variant='flushed' w={24} placeholder='Select state' name='state' onChange={(e) => dispatch(updateAddress({...address, [e.target.name]: e.target.value}))}>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska">Nebraska</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New Hampshire">New Hampshire</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="New York">New York</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="North Dakota">North Dakota</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Oklahoma">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Rhose Island">Rhose Island</option>
                    <option value="South Carolina">South Carolina</option>
                    <option value="South Dakota">South Dakota</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Washington">Washington</option>
                    <option value="West Virginia">West Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
                </Select>
            </FormControl>
            <FormControl mt={2} pl={0}>

            <Input size='md' variant='flushed' w={24} placeholder='Zipcode' name='zipcode' onChange={(e) => dispatch(updateAddress({...address, [e.target.name]: e.target.value}))} />
        </FormControl>
        </Flex>



         </Flex>
    )
}

export const FullNameAndTitle = () => {
    const dispatch = useDispatch();

    const { employeeRegistry } = useSelector((state)=> {
        return {
            employeeRegistry: state.index.employeeRegistry
        }
    })

    return (
        <div>
        <FormControl>
                <Input variant='flushed' name='fullName' placeholder="Full Name" width={{ base: '12em', md: '14em', lg: '20em' }}  onChange={(e)=> dispatch(updateRegistry({ ...employeeRegistry, [e.target.name]: e.target.value}))} />
              </FormControl>
  
              <FormControl mt={3}>
                <Input variant='flushed'  name='title' placeholder='Job Title' onChange={(e) => dispatch(updateRegistry({ ...employeeRegistry, [e.target.name]: e.target.value}))} />

        </FormControl>
        </div>
    )
}

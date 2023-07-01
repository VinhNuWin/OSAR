import React from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Select,
    Icon
  } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { employeeRegistry } from '../../store';
import { AiOutlineCheck } from 'react-icons/ai';

export default function AddressModal() {
    const dispatch = useDispatch();
    const { employeeRegistry } = useSelector((state) => {
        return {
          employeeRegistry : state.index.employeeRegistry
        }
    })
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button variant='booleanButton' onClick={onOpen}>
          <Icon as={AiOutlineCheck} w={8} boxSize={6} color='green.500' m='1%' />
          Yes
        </Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Location</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Address Line</FormLabel>
                    <Input ref={initialRef} name='streetAddress' placeholder='Street Address' onChange={(e)=>dispatch(employeeRegistry(...employeeRegistry, {[e.target.name]: e.target.value}))} />
                </FormControl>
  
                <FormControl mt={4}>
                    <FormLabel>City</FormLabel>
                    <Input placeholder='City' name='city' onChange={(e) => dispatch(employeeRegistry({...employeeRegistry, [e.target.name]: e.target.value}))} />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Zipcode</FormLabel>
                    <Input placeholder='Zipcode' name='zipcode' onChange={(e) => dispatch(employeeRegistry({...employeeRegistry, [e.target.name]: e.target.value}))} />
                </FormControl>

                <FormLabel mt={4}>State</FormLabel>
                    <Select placeholder='Select state' name='state' onChange={(e) => dispatch(employeeRegistry({...employeeRegistry, [e.target.name]: e.target.value}))}>
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


            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
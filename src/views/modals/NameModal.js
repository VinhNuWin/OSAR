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
    useDisclosure
  } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAssailant } from '../../store';

export default function NameModal() {
    const dispatch = useDispatch();
    const { assailant } = useSelector((state) => {
        return {
            assailant : state.index.registry.assailant
        }
    })
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button variant='booleanButton' onClick={onOpen}>Yes</Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Assailants Full Name</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} name='firstName' placeholder='First name' onChange={(e)=>dispatch(updateAssailant(...assailant, {[e.target.name]: e.target.value}))} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder='Last name' name='lastName' onChange={(e) => dispatch(updateAssailant({...assailant, [e.target.name]: e.target.value}))} />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
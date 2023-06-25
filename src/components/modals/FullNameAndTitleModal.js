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
import { CheckIcon } from '@chakra-ui/icons';
import { updateRegistry } from '../../store';

export default function FullNameAndTitleModal() {
    const dispatch = useDispatch();
    const { registry } = useSelector((state) => {
        return {
          registry : state.index.registry
        }
    })
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
       <Button variant='booleanButton' onClick={onOpen} >
          <CheckIcon color='green.500' w={8} boxSize={6} m='1%'/>
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
            <ModalHeader>Full Name</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Full name</FormLabel>
                <Input ref={initialRef} name='fullName' placeholder='Full name' onChange={(e)=>dispatch(updateRegistry({...registry, [e.target.name]: e.target.value}))} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Title</FormLabel>
                <Input placeholder='Title' name='title' onChange={(e) => dispatch(updateRegistry({...registry, [e.target.name]: e.target.value}))} />
              </FormControl>
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
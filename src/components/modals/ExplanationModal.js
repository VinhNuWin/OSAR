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
import { CheckIcon } from '@chakra-ui/icons';
import { updateAnswerInput } from '../../store/slices/indexSlice';

export default function FullNameAndTitleModal() {
    const dispatch = useDispatch();
    const { answerInputs } = useSelector((state) => {
        return {
            answerInputs : state.index.registry.answerInputs
        }
    })
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>

        <Button variant='booleanButton' onClick={onOpen}>
          <CheckIcon w={8} boxSize={5} color='green.500' m='1%' />
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
            <Form>
                                <div>
                                <Form.Item>
                                <TextArea
                                    showCount
                                    maxLength={100}
                                    style={{
                                      height: 120,
                                      marginBottom: 24,
                                      width: 300,
                                    }}
                                    type='text'
                                    name='abilitiesAffected'
                                    onChange={e => dispatch(updateAnswerInput({...answerInputs, [e.target.name]: e.target.value}))}
                                    placeholder="Person1, Person2, etc..."
                                    />
                                </Form.Item>
                                </div>
                            </Form>
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
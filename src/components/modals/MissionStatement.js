import {
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Text,
    Button,
    Drawer, 
    DrawerBody, 
    DrawerFooter, 
    DrawerHeader, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerCloseButton
  } from '@chakra-ui/react';
import { useState, useRef } from 'react';
import logo from '../../images/logo.png';

  export default function MissionStatement() {
  
    const OverlayTwo = () => (
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        // backdropBlur='2px'
      />
    )
  
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const [overlay, setOverlay] = useState(<OverlayTwo />);

  
    return (
      <Flex className='header'>
        {/* <Button ref={btnRef} onClick={onOpen} width='100%'>
          Abous Us
        </Button> */}
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize='2xl'>Our Mission</DrawerHeader>

          <DrawerBody>
            <Text fontSize='lg'>We exist to empower and provide a voice for survivors of assault. Documented Voices Against Assault is a nonprofit organization dedicated to advocating for victims, promoting healing, and raising awareness about the prevalence and impact of assault. We are committed to collecting and sharing anonymized reports to enlighten the public, influence policy makers, and foster a safer society. We believe in the power of individual stories, documented and preserved, to inspire change and combat the stigma often associated with victims of assault. We strive to create a supportive community where every voice is heard, every experience is validated, and every survivor is acknowledged.</Text>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Done
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </Flex>
    )
  }
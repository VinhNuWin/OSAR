import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Text,
    Button
  } from '@chakra-ui/react';
import { useState } from 'react';

  export default function MissionStatement() {
  
    const OverlayTwo = () => (
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        // backdropBlur='2px'
      />
    )
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayTwo />)
  
    return (
      <>
        <Button
          ml=''
          onClick={() => {
            setOverlay(<OverlayTwo />)
            onOpen()
          }}
        >
          Our Mission Statement
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>DVAA Mission Statement</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>We exist to empower and provide a voice for survivors of assault. Documented Voices Against Assault is a nonprofit organization dedicated to advocating for victims, promoting healing, and raising awareness about the prevalence and impact of assault. We are committed to collecting and sharing anonymized reports to enlighten the public, influence policy makers, and foster a safer society. We believe in the power of individual stories, documented and preserved, to inspire change and combat the stigma often associated with victims of assault. We strive to create a supportive community where every voice is heard, every experience is validated, and every survivor is acknowledged</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
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
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

export default function MissionStatement() {
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [overlay, setOverlay] = useState(<OverlayTwo />);

  return (
    <Flex className="">
      <InfoOutlineIcon
        ref={btnRef}
        onClick={onOpen}
        width="100%"
        className="mission-statement"
      >
        Abous Us
      </InfoOutlineIcon>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize="2xl">Our Mission</DrawerHeader>

          <DrawerBody>
            <Text fontSize="sm" color="black">
              Welcome to Documented Voices. This space is designed for you and
              you alone. Here, you can confidentially record your story,
              securing a written testimony of events experienced. Upon
              submission, a copy is automatically sent to your email, serving as
              a time-stamped record, providing tangible proof if ever needed in
              the future. But this platform isn’t just for documenting—it’s also
              a safe space for you to unburden your heart. It’s a place to voice
              your story, even when it feels too immense to tell. Remember, your
              experience matters, your voice matters. Documented Voices exists
              for two crucial purposes: to chronicle your experience and amplify
              your voice.
            </Text>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Done
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

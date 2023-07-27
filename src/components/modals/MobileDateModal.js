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
import React from "react";
import DatePicker from "react-mobile-datepicker";
import MobileDatePicker from "../MobileDatePicker";

export default function MobileDateModal() {
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
      <Button ref={btnRef} onClick={onOpen} width="100%" className="btn">
        Abous Us
      </Button>
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
            <MobileDatePicker />
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

import {
    Drawer,
    DrawerBody,
    Flex,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    IconButton
  } from '@chakra-ui/react';
import { HiOutlineDocumentReport } from 'react-icons/hi';

export default function ReportSummary() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <Flex>
        <IconButton 
        aria-label='Report Summary' 
        size='lg'
        variant='outline'
        colorScheme='whiteAlpha'
        icon={<HiOutlineDocumentReport />} 
        onClick={onOpen}>
          Open
        </IconButton>
        <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Report Summary</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    )
  }
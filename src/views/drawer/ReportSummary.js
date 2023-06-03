import {
    Drawer,
    DrawerBody,
    Flex,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    IconButton,
  } from '@chakra-ui/react';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import TabComponent from '../tabs/TabComponent';

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};



export default function ReportSummary() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Flex>
  
        <IconButton 
        aria-label='Report Summary' 
        size='lg'
        variant='outline'
        colorScheme='rgb(73, 79, 86)'
        icon={<HiOutlineDocumentReport />} 
        onClick={onOpen}
        animate={isOpen ? "open" : "closed"}
        >
          Open
        </IconButton>
        <Drawer placement='left' onClose={onClose} isOpen={isOpen} >
          <DrawerOverlay />
          <DrawerContent >
            <DrawerHeader borderBottomWidth='1px' className='drawer-container'>Report Summary</DrawerHeader>
            <DrawerBody className='drawer-container' >
              <TabComponent />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    )
  }
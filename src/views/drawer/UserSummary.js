import { useSelector } from 'react-redux';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Stack,
    Heading,
    Card,
    Avatar,
    Text,
    CircularProgress, 
    CircularProgressLabel,
    Center,
    AbsoluteCenter,
    Divider,
    Drawer,
    DrawerBody,
    Flex,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    IconButton,
    List,
    ListItem,
    ListIcon,
    CardBody
  } from '@chakra-ui/react';
import RegistryStepper from '../../components/RegistryStepper';
import RegistryProgressCircle from '../../components/RegistryProgressCircle';

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};



export default function UserSummary({activeTab}) {
  const [isOpen, setIsOpen] = useState(false);
  const { email, _id, index } = useSelector((state) => {
    return {
        email: state.index.registry.email,
        _id: state.index.registry._id,
        index: state.index.index
    }
  });

  const userEmail = email;
  const progressIndex = index * 6.25;
  
console.log(_id);

  return (
    <Stack >

  <motion.div
      initial="closed"
      animate={!activeTab ? "open" : "closed"}
    >
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: activeTab ? "auto" : "none" }}
      >
        <div >
        <Card maxW='md'
        variant='filled'>
          <CardBody>
            <center>
          <Avatar src='https://bit.ly/broken-link' />
            <Flex className='profile-card'>
              <Text>Email: {userEmail}</Text>
            </Flex>
            <Flex className='profile-card'>
            <Text>RegistryId: {_id}</Text>
            </Flex>
          </center>
       
          </CardBody>
        </Card>
        </div>

        <RegistryStepper />
        <RegistryProgressCircle />
        
      </motion.ul>
    </motion.div>
  
</Stack>
  )
}
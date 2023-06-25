import { useSelector } from 'react-redux';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Stack,
    Heading,
    Text,
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
    ListIcon
  } from '@chakra-ui/react';
import { HiOutlineDocumentReport } from 'react-icons/hi';

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};



export default function AssailantSummary({activeTab}) {
  const [isOpen, setIsOpen] = useState(false);
  const { assailant } = useSelector((state) => {
    return {
        assailant: state.index.registry.assailant
    }
  });

  const assailantArrayList = Object.values(assailant);
console.log(assailantArrayList[0]);

  return (
    <Stack>

  <motion.div
    initial="closed"
    animate={!activeTab ? "open" : "closed"}
    className="menu"
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
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <Stack>
        <motion.li variants={itemVariants}>First Name</motion.li>
        <Heading size='md'>{assailantArrayList[4]}</Heading>
        </Stack>

        <Stack>
        <motion.li variants={itemVariants}>Last Name</motion.li>
        <Heading size='md'>{assailantArrayList[5]}</Heading>
        </Stack>
        <Divider/>

        <Stack>
        <motion.li variants={itemVariants}>Ethnicity</motion.li>
        <Heading size='md'>{assailantArrayList[3]}</Heading>
        </Stack>
        <Divider/>

        <Stack>
        <motion.li variants={itemVariants}>Gender</motion.li>
        <Heading size='md'>{assailantArrayList[2]}</Heading>
        </Stack>
        <Divider/>

        
      </motion.ul>
    </motion.div>
  
</Stack>
  )
}
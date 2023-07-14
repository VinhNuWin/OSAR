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


const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};



export default function GeneralSummary() {
  const { registryReport } = useSelector((state) => {
    return {
        registryReport: state.index.registry.registryReport
    }
  });

//   console.log(registryReport.map()) 
    // console.log(item.keyID);


  return (

    <Stack>

  <motion.div
    initial="closed"
    animate="open"
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
        // style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <Stack>
        <motion.li variants={itemVariants}>First Name</motion.li>
        <Divider/>
        <motion.li></motion.li>

        </Stack>

        {/* <Stack>
        <motion.li variants={itemVariants}>Last Name</motion.li>
        <Heading size='md'>{registryReport.immediateDanger}</Heading>
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
        </Stack> */}


        
      </motion.ul>
    </motion.div>
  
</Stack>
  );
}
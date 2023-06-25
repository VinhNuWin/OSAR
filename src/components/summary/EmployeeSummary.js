import { useSelector } from 'react-redux';
// import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Stack,
    Heading,
    Divider
  } from '@chakra-ui/react';

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24, scale: 1.03 }
    },
    closed: { opacity: 1, scale: 1, transition: { duration: 0.2 } }
  };

export const  EmployeeSummary = () =>{

    const { registry, index } = useSelector((state) => {
        return {
            registry: state.index.registry,
            index: state.index.index
        }
      });



    return (
      <Stack>
       <motion.div
           initial="closed"
           animate="open"
           className='one-summary'
       >
        <motion.ul>

          <Stack>
          <Heading size='xs' color='rgb(157, 150, 139)'>Full Name</Heading>
          </Stack>

          <Stack>
            <motion.li>{registry.fullName + registry.title}</motion.li>
          <Divider />
            <Heading size='xs' color='rgb(157, 150, 139)'>Date & Time</Heading>
          </Stack>

          <Stack>
            <motion.li>{registry.date}</motion.li>
          <Divider />
            <Heading size='xs' color='rgb(157, 150, 139)'>Location</Heading>
          </Stack>

          {/* <Stack>
            <motion.li>{registry.address}</motion.li>
          <Divider />
            <Heading size='sm'>Involved Persons</Heading>
          </Stack> */}

          <Stack>
            <motion.li>{registry.peopleInvolved}</motion.li>
          <Divider />
            <Heading size='xs' color='rgb(157, 150, 139)'>Incident Details</Heading>
          </Stack>

          <Stack>
            <motion.li>{registry.detailsOfIncident}</motion.li>
          <Divider />
            <Heading size='xs' color='rgb(157, 150, 139)'>Witnesses</Heading>
          </Stack>

          <Stack>
            <motion.li>{registry.witnesses}</motion.li>
          <Divider />
            <Heading size='xs' color='rgb(157, 150, 139)'>Incident Outcome</Heading>
          </Stack>

          <Stack>
            <motion.li>{registry.incidentOutcome}</motion.li>
          <Divider />
            <Heading size='xs' color='rgb(157, 150, 139)'>Affect on job performance</Heading>
          </Stack>

          <Stack>
            <motion.li>{registry.abilitiesAffected}</motion.li>
          <Divider />
            <Heading size='xs' color='rgb(157, 150, 139)'>Required Medical Attention</Heading>
          </Stack>
          
          <Stack>
            <motion.li>{registry.seekedMedicalAttention}</motion.li>
          <Divider />
            <Heading size='xs' color='rgb(157, 150, 139)'>Reported to supervisor/manager</Heading>
          </Stack>

          <Stack>
            <motion.li>{registry.reportedToHigherPersonel}</motion.li>
          <Divider />
            <Heading size='xs' color='rgb(157, 150, 139)'>Action's taken since incident</Heading>
          </Stack>

          <Stack>
            <motion.li>{registry.actionsTakenSinceIncident}</motion.li>
          <Divider />
            <Heading size='xs' color='rgb(157, 150, 139)'>Personal Impact</Heading>
          </Stack>

          <Stack>
            <motion.li>{registry.personalAffect}</motion.li>
          <Divider />
            <Heading size='xs' color='rgb(157, 150, 139)'>Additional information</Heading>
          </Stack>

          <Stack>
            <motion.li>{registry.additionalComments}</motion.li>
          </Stack>

        </motion.ul>
       </motion.div>
       </Stack>
    )
}
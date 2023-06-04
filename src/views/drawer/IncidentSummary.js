import { useSelector } from 'react-redux';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Stack,
    Heading,
    Divider,
    Card,
    CardHeader,
    CardBody,
    CardFooter
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



export default function IncidentSummary({ activeTab }) {
  const [isOpen, setIsOpen] = useState(false);
  const { incident } = useSelector((state) => {
    return {
        incident: state.index.registry.incident
    }
  });

  const incidentArrayList = Object.values(incident);
console.log(incidentArrayList[0]);

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

          <motion.li variants={itemVariants}>Date</motion.li> 
        </Stack>

        <Stack>
        <Heading size='md'>{incidentArrayList[3]}</Heading>
        <Divider/>
        <motion.li variants={itemVariants}>Location</motion.li>
        </Stack>
  

        <Stack>
        <Heading size='md'>{incidentArrayList[2]}</Heading>
        <Divider/>
        <motion.li variants={itemVariants}>Alcohol Involved</motion.li>
        </Stack>


        <Stack>
        <Heading size='md'>{incidentArrayList[4] === true ? "Yes" : "No"}</Heading>
        <Divider/>
        <motion.li variants={itemVariants}>Drugs Involved</motion.li>
        </Stack>
    

        <Stack>
        <Heading size='md'>{incidentArrayList[9] === true ? "Yes" : "No"}</Heading>
        <Divider/>
        <motion.li variants={itemVariants}>Asleep</motion.li>
      
        </Stack>


        <Stack>
        <Heading size='md'>{incidentArrayList[10] === true ? "Yes" : "No"}</Heading>
        <Divider/>
        <motion.li variants={itemVariants}>Threatened</motion.li>
        </Stack>


        <Stack>
        <Heading size='md'>{incidentArrayList[11] === true ? "Yes" : "No"}</Heading>
        <Divider/>
        <motion.li variants={itemVariants}>Resistance</motion.li>
        </Stack>


        <Stack>
        <Heading size='md'>{incidentArrayList[12] === true ? "Yes" : "No"}</Heading>
        <Divider/>
        <motion.li variants={itemVariants}>Details of Assault</motion.li>
        </Stack>


        <Stack>
        <Heading size='md'>{incidentArrayList[13]}</Heading>
        <Divider/>
        <motion.li variants={itemVariants}>Areas Assaulted</motion.li>
        </Stack>


        <Stack>
        <Heading size='md'>{incidentArrayList[14]}</Heading>
        <Divider/>
        <motion.li variants={itemVariants}>Weapons</motion.li>
        </Stack>


        <Stack>
        <Heading size='md'>{incidentArrayList[15] === true ? "Yes" : "No"}</Heading>
        <Divider/>
        <motion.li variants={itemVariants}>Restraints</motion.li>
        </Stack>

        <Stack>
        <Heading size='md'>{incidentArrayList[16] === true ? "Yes" : "No"}</Heading>
        </Stack>

      </motion.ul>
    </motion.div>
  
</Stack>
  )
}
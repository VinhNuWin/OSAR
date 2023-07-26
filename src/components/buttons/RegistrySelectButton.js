// import * as React from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   listVariants,
//   itemVariants,
//   container,
//   item,
//   test,
// } from "../../data/containerVariants";
// import { Button } from "@chakra-ui/react";

// const variants = {
//   open: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       y: { stiffness: 1000, velocity: -100 },
//     },
//   },
//   closed: {
//     y: 50,
//     opacity: 0,
//     transition: {
//       y: { stiffness: 1000 },
//     },
//   },
// };

// const componentButtonArray = [
//   <Button name="general" key="general" className="btn2">
//     General
//   </Button>,
//   <Button name="employee" key="employee" className="btn2">
//     Employee
//   </Button>,
//   <Button name="spouse" key="spouse" className="btn2">
//     Spouse
//   </Button>,
//   <Button name="elderly" key="elderly" className="btn2">
//     Elderly
//   </Button>,
//   <Button name="assault" key="assault" className="btn2">
//     Assault
//   </Button>,
//   <Button name="children" key="children" className="btn2">
//     Children
//   </Button>,
// ];

// export const RegistrySelectButton = () => (
//   <motion.ul variants={listVariants} initial="hidden" animate="visible">
//     <AnimatePresence>
//       {componentButtonArray.map((i) => (
//         <motion.li
//           i={i}
//           key={i}
//           variants={itemVariants}
//           exit={{
//             y: -20,
//             opacity: 0,
//             transition: { duration: 0.2, ease: "easeInOut", delay: i * 0.1 },
//           }}
//         >
//           {i}
//         </motion.li>
//       ))}
//     </AnimatePresence>
//   </motion.ul>
// );

import React from "react";
import "../../styles.css";
import { useState } from "react";
import {
  motion,
  isValidMotionProp,
  Variants,
  AnimatePresence,
} from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { changeIndex, addEmployeeId, registrySelect } from "../../store";
import axios from "axios";
import { FormErrorMessage, Flex, Button } from "@chakra-ui/react";
import {
  listVariants,
  itemVariants,
  container,
  item,
  test,
} from "../../data/containerVariants";
import general from "../../images/general.png";

export const RegistrySelectButton = () => {
  const dispatch = useDispatch();

  const componentButtonArray = [
    <Button
      name="general"
      key="general"
      className="btn2"
      onClick={(e) => dispatch(registrySelect(e.target.name))}
    >
      General
    </Button>,
    <Button
      name="employee"
      key="employee"
      className="btn2"
      onClick={(e) => dispatch(registrySelect(e.target.name))}
    >
      Employee
    </Button>,
    <Button
      name="spouse"
      key="spouse"
      className="btn2"
      onClick={(e) => dispatch(registrySelect(e.target.name))}
    >
      Spouse
    </Button>,
    <Button
      name="elderly"
      key="elderly"
      className="btn2"
      onClick={(e) => dispatch(registrySelect(e.target.name))}
    >
      Elderly
    </Button>,
    <Button
      name="assault"
      key="assault"
      className="btn2"
      onClick={(e) => dispatch(registrySelect(e.target.name))}
    >
      Assault
    </Button>,
    <Button
      name="children"
      key="children"
      className="btn2"
      onClick={(e) => dispatch(registrySelect(e.target.name))}
    >
      Children
    </Button>,
  ];

  return (
    // <motion.ul
    //   variants={listVariants}
    //   initial="hidden"
    //   animate="visible"
    //   className="selectButtons"
    // >
    //   <AnimatePresence>
    //     {componentButtonArray.map((i) => (
    //       <motion.li
    //         i={i}
    //         key={i}
    //         variants={itemVariants}
    //         exit={{
    //           y: -20,
    //           opacity: 0,
    //           transition: { duration: 0.2, ease: "easeInOut", delay: i * 0.1 },
    //         }}
    //       >
    //         {i}
    //       </motion.li>
    //     ))}
    //   </AnimatePresence>
    // </motion.ul>
    <div>
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="selectButtons"
      >
        <AnimatePresence mode="wait">
          {componentButtonArray.map((i) => (
            <motion.li
              i={i}
              key={i}
              variants={itemVariants}
              exit={{
                y: -20,
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: "easeInOut",
                },
              }}
              // exit="close"
            >
              {i}
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
};

// export const RegistrySelectButton = () => {
//   const dispatch = useDispatch();
//   const { registryType } = useSelector((state) => {
//     return {
//       registryType: state.index.registryType,
//     };
//   });

//   const componentButtonArray = [
//     <Button
//       name="general"
//       key="general"
//       className="btn2"
//       onClick={(e) => dispatch(registrySelect(e.target.name))}
//     >
//       General
//     </Button>,
//     <Button
//       name="employee"
//       key="employee"
//       className="btn2"
//       onClick={(e) => dispatch(registrySelect(e.target.name))}
//     >
//       Employee
//     </Button>,
//     <Button
//       name="spouse"
//       key="spouse"
//       className="btn2"
//       onClick={(e) => dispatch(registrySelect(e.target.name))}
//     >
//       Spouse
//     </Button>,
//     <Button
//       name="elderly"
//       key="elderly"
//       className="btn2"
//       onClick={(e) => dispatch(registrySelect(e.target.name))}
//     >
//       Elderly
//     </Button>,
//     <Button
//       name="assault"
//       key="assault"
//       className="btn2"
//       onClick={(e) => dispatch(registrySelect(e.target.name))}
//     >
//       Assault
//     </Button>,
//     <Button
//       name="children"
//       key="children"
//       className="btn2"
//       onClick={(e) => dispatch(registrySelect(e.target.name))}
//     >
//       Children
//     </Button>,
//   ];
//   return (
//     <div>
//       <AnimatePresence mode="wait">
//         <motion.ul
//           variants={test}
//           initial="hidden"
//           animate="visible"
//           className="selectButtons"
//         >
//           {componentButtonArray.map((i) => (
//             <motion.li
//               i={i}
//               key={i}
//               variants={itemVariants}
//               initial="hidden"
//               animate="visible"
//               exit="close"
//             ></motion.li>
//           ))}
//         </motion.ul>
//       </AnimatePresence>
//     </div>
//   );
// };

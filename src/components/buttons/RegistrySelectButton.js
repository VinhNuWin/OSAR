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
  const { index, _id, registryType, registryId } = useSelector((state) => {
    return {
      index: state.index.index,
      _id: state.index.registry._id,
      registryId: state.index.registry.registryId,
      registryType: state.index.registry.registryType,
    };
  });

  const componentButtonArray = [
    <Button
      name="general"
      className="btn2"
      id="1"
      onClick={(e) => dispatch(registrySelect(e.target.name))}
    >
      General
    </Button>,
    <Button
      name="employee"
      className="btn2"
      id="2"
      onClick={(e) => dispatch(registrySelect(e.target.name))}
    >
      Employee
    </Button>,
    <Button
      name="spouse"
      className="btn2"
      id="6"
      onClick={(e) => dispatch(registrySelect(e.target.name))}
    >
      Spouse
    </Button>,
    <Button
      name="elderly"
      className="btn2"
      id="3"
      onClick={(e) => dispatch(registrySelect(e.target.name))}
    >
      Elderly
    </Button>,
    <Button
      name="assault"
      className="btn2"
      id="4"
      onClick={(e) => dispatch(registrySelect(e.target.name))}
    >
      Assault
    </Button>,
    <Button
      name="children"
      className="btn2"
      id="5"
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
    //   exit="hidden"
    //   className="selectButtons"
    // >
    //   <AnimatePresence mode="wait">
    //     {componentButtonArray.map((i) => (
    //       <motion.li
    //         i={i}
    //         key={i}
    //         variants={itemVariants}
    //         exit="close"
    //         // exit={{
    //         //   y: -20,
    //         //   opacity: 0,
    //         //   transition: {
    //         //     duration: 0.2,
    //         //     ease: "easeInOut",
    //         //     delay: i * 0.1,
    //         //   },
    //         // }}
    //       >
    //         {i}
    //       </motion.li>
    //     ))}
    //   </AnimatePresence>
    // </motion.ul>

    //
    <motion.div key="0">
      <motion.ul
        variants={listVariants}
        key="9"
        initial="hidden"
        animate="visible"
        className="selectButtons"
      >
        <AnimatePresence mode="wait">
          {componentButtonArray.map((i) => (
            <motion.li
              i={i}
              key={i.id}
              variants={itemVariants}
              // exit="close"
            >
              {i}
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </motion.div>
  );
};

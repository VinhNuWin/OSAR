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
import { useMediaQuery } from "@uidotdev/usehooks";

export const RegistrySelectButton = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );

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
    <div>
      <Button
        name="general"
        className="btn-registry-select"
        id="1"
        onClick={(e) => dispatch(registrySelect(e.currentTarget.name))}
      >
        <div className="btn-select-text">
          <h2>General</h2>
          <h4>Anyone who needs a voice</h4>
        </div>
      </Button>
    </div>,
    <Button
      name="employee"
      className="btn-registry-select"
      id="2"
      onClick={(e) => dispatch(registrySelect(e.currentTarget.name))}
    >
      <div className="btn-select-text">
        <h2>Employee</h2>
        <h4>Workplace misconduct or harassment</h4>
      </div>
    </Button>,
    <Button
      name="spouse"
      className="btn-registry-select"
      id="6"
      onClick={(e) => dispatch(registrySelect(e.currentTarget.name))}
    >
      <div className="btn-select-text">
        <h2>Spouse</h2>
        <h4 className="">Intimate relationships experiencing domestic abuse</h4>
      </div>
    </Button>,
    <Button
      name="elderly"
      className="btn-registry-select"
      id="3"
      onClick={(e) => dispatch(registrySelect(e.currentTarget.name))}
    >
      <div className="btn-select-text">
        <h2>Elderly</h2>
        <h4>Seniors facing abuse and neglect</h4>
      </div>
    </Button>,
    <Button
      name="assault"
      className="btn-registry-select"
      id="4"
      onClick={(e) => dispatch(registrySelect(e.currentTarget.name))}
    >
      <div className="btn-select-text">
        <h2>Assault</h2>
        <h4>Survivors of physical, emotional, or sexual assault</h4>
      </div>
    </Button>,
    <Button
      name="children"
      className="btn-registry-select"
      id="5"
      onClick={(e) => dispatch(registrySelect(e.currentTarget.name))}
    >
      <div className="btn-select-text">
        <h2>Children</h2>
        <h4>Young individuals facing mistreatment or bullying</h4>
      </div>
    </Button>,
  ];

  console.log(registryType);

  return (
    <motion.div key="0" className={isSmallDevice ? "active" : ""}>
      <motion.ul
        variants={listVariants}
        key="ul"
        initial="hidden"
        animate="visible"
        className="selectButtons"
      >
        <AnimatePresence>
          {componentButtonArray.map((i, index) => (
            <motion.li
              i={i}
              key={index}
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

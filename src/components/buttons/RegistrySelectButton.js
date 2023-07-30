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
import {
  FormErrorMessage,
  Flex,
  Button,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import {
  listVariants,
  itemVariants,
  container,
  item,
  test,
} from "../../data/containerVariants";
import general from "../../images/general.png";
import { useMediaQuery } from "@uidotdev/usehooks";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

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

  const newIndex = index + 1;

  const handleRegistryInputs = async (event) => {
    console.log("patch request made");
    dispatch(registrySelect(event.currentTarget.name));
    const response = await axios.patch(
      `https://osar-api.onrender.com/registry/${_id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Method": "GET,PATCH,POST,DELETE",
        },
        registryId: registryId,
        registryType: registryType,
        _id: _id,
      }
    );
    dispatch(changeIndex(parseInt(newIndex)));
    console.log(response);
  };

  const registryTypeSelect = [
    {
      id: "id-1",
      name: "general",
      type: "General",
      description: "Anyone who needs a voice",
    },
    {
      id: "id-2",
      name: "employee",
      type: "Employee",
      description: "Workplace misconduct or harassment",
    },
    {
      id: 3,
      name: "elderly",
      type: "Elderly",
      description: "Seniors facing abuse and neglect",
    },
    {
      id: 4,
      name: "children",
      type: "Adolesence",
      description: "Young individuals facing mistreatment or bullying",
    },
    {
      id: 5,
      name: "spouse",
      type: "Spouse",
      description: "Intimate relationships experiencing domestic abuse",
    },
    {
      id: 6,
      name: "assault",
      type: "Assault",
      description: "Survivors of physical, emotional, or sexual assault",
    },
  ];

  // console.log(registryType);
  // console.log(item.id);

  return (
    <motion.div className={isSmallDevice ? "active" : ""}>
      <AnimatePresence>
        {registryTypeSelect.map((item, i) => (
          <ChakraBox
            className="selectButtons-container"
            key={item.id}
            id={item.id}
            layout
            initial={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
            animate={{
              opacity: 1,
              y: 0,
              // transition: { type: "spring", stiffness: 300, damping: 24 },
            }}
            transition={{ duration: 0.3, delay: i * 0.3 }}
          >
            <Button
              className="btn-registry-select"
              name={item.name}
              onClick={handleRegistryInputs}
            >
              <motion.div className="btn-select-text">
                <motion.h2 key={item.type}>{item.type}</motion.h2>
                <motion.h5 key={item.description}>{item.description}</motion.h5>
              </motion.div>
            </Button>
          </ChakraBox>
        ))}
      </AnimatePresence>
      {/* </motion.ul> */}
    </motion.div>
  );
};

// const registryTypeSelect = [
//   <div>
//     <Button
//       name="general"
//       className="btn-registry-select"
//       id="1"
//       onClick={handleRegistryInputs}
//     >
//       <div className="btn-select-text">
//         <h2>General</h2>
//         <h5>Anyone who needs a voice</h5>
//       </div>
//     </Button>
//   </div>,
//   <Button
//     name="employee"
//     className="btn-registry-select"
//     id="2"
//     onClick={handleRegistryInputs}
//   >
//     <div className="btn-select-text">
//       <h2>Employee</h2>
//       <h5>Workplace misconduct or harassment</h5>
//     </div>
//   </Button>,
//   <Button
//     name="spouse"
//     className="btn-registry-select"
//     id="6"
//     onClick={handleRegistryInputs}
//   >
//     <div className="btn-select-text">
//       <h2>Spouse</h2>
//       <h5 className="">Intimate relationships experiencing domestic abuse</h5>
//     </div>
//   </Button>,
//   <Button
//     name="elderly"
//     className="btn-registry-select"
//     id="3"
//     onClick={handleRegistryInputs}
//   >
//     <div className="btn-select-text">
//       <h2>Elderly</h2>
//       <h5>Seniors facing abuse and neglect</h5>
//     </div>
//   </Button>,
//   <Button
//     name="assault"
//     className="btn-registry-select"
//     id="4"
//     onClick={handleRegistryInputs}
//   >
//     <div className="btn-select-text">
//       <h2>Assault</h2>
//       <h5>Survivors of physical, emotional, or sexual assault</h5>
//     </div>
//   </Button>,
//   <Button
//     name="children"
//     className="btn-registry-select"
//     id="5"
//     onClick={handleRegistryInputs}
//   >
//     <div className="btn-select-text">
//       <h2>Children</h2>
//       <h5>Young individuals facing mistreatment or bullying</h5>
//     </div>
//   </Button>,
// ];

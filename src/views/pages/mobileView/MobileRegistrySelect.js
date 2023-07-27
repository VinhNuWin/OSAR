import React from "react";
import "../../../styles.css";
import { useState } from "react";
import { motion, isValidMotionProp } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { changeIndex, addEmployeeId, registrySelect } from "../../../store";
import axios from "axios";
import {
  Flex,
  Button,
  HStack,
  Stack,
  Heading,
  Grid,
  GridItem,
  FormLabel,
  FormHelperText,
  Input,
  Spinner,
  Text,
  chakra,
  shouldForwardProp,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { RegistrySelectButton } from "../../../components/buttons/RegistrySelectButton";

export default function MobileRegistrySelect() {
  const dispatch = useDispatch();
  const { index, _id, employeeRegistry, registryType, registryId } =
    useSelector((state) => {
      return {
        index: state.index.index,
        _id: state.index.registry._id,
        registryId: state.index.registry.registryId,
        registryType: state.index.registry.registryType,
      };
    });

  const newIndex = index + 1;

  const handleRegistryInputs = async () => {
    console.log("patch request made");
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
    console.log("index was changed");
    console.log(response);
  };

  return (
    <Flex className="panel-one-mobile" direction="column">
      <Heading className="selectRegistry-header" color="black" marginTop={10}>
        Select a Registry
      </Heading>
      <div>
        <Flex direction="column" className="selectRegistry-buttons-wrapper ">
          <RegistrySelectButton />
          <Flex className="answer-element-continue">
            <Button className="btn" onClick={handleRegistryInputs}>
              Continue
            </Button>
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
}
